"use client";

import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, Pin, Check, MessageSquare } from "lucide-react";

interface CommentItem {
  author: string;
  avatar: string;
  handle: string;
  timeAgo: string;
  text: string;
  likes: number;
  pinned?: boolean;
  authorBadge?: string;
}

interface CommentsSectionProps {
  initialComments: CommentItem[];
  projectTitle: string;
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({
  initialComments,
  projectTitle,
}) => {
  const [comments, setComments] = useState<CommentItem[]>(initialComments);
  const [newCommentText, setNewCommentText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: CommentItem = {
      author: "Portfolio Visitor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      handle: "@visitor",
      timeAgo: "Just now",
      text: newCommentText.trim(),
      likes: 1,
    };

    setComments([newComment, ...comments]);
    setNewCommentText("");
    setIsFocused(false);
  };

  const toggleLike = (index: number) => {
    setLikedMap((prev) => {
      const isCurrentlyLiked = !!prev[index];
      const updated = { ...prev, [index]: !isCurrentlyLiked };

      setComments((prevComments) =>
        prevComments.map((c, i) => {
          if (i === index) {
            return {
              ...c,
              likes: isCurrentlyLiked ? c.likes - 1 : c.likes + 1,
            };
          }
          return c;
        })
      );

      return updated;
    });
  };

  return (
    <div className="w-full pt-6 select-none">
      {/* Comments Header */}
      <div className="flex items-center gap-6 mb-6">
        <h3 className="text-xl font-bold text-white">
          {comments.length} Comments
        </h3>
        <button className="flex items-center gap-2 text-xs font-semibold text-yt-muted hover:text-white">
          <MessageSquare className="w-4 h-4" />
          <span>Sort by: Top comments</span>
        </button>
      </div>

      {/* Add a Comment Input Box */}
      <form onSubmit={handleAddComment} className="flex gap-4 mb-8 items-start">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-yt-border bg-yt-surface shrink-0">
          <img src="/avatar.svg" alt="Visitor" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <input
            type="text"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Add a comment or ask a question about this project..."
            className="w-full bg-transparent border-b border-yt-border focus:border-white text-sm text-white placeholder-yt-muted pb-1.5 focus:outline-none transition-colors"
          />
          {isFocused && (
            <div className="flex justify-end gap-2 mt-3">
              <button
                type="button"
                onClick={() => {
                  setNewCommentText("");
                  setIsFocused(false);
                }}
                className="px-4 py-2 text-xs font-semibold text-yt-muted hover:text-white rounded-full transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!newCommentText.trim()}
                className="px-4 py-2 text-xs font-semibold bg-yt-blue text-black rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-400 transition-colors"
              >
                Comment
              </button>
            </div>
          )}
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment, idx) => (
          <div key={idx} className="flex gap-4 items-start group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-yt-border bg-yt-surface shrink-0">
              <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 space-y-1">
              {/* Pinned by Creator Notice */}
              {comment.pinned && (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-yt-muted mb-1">
                  <Pin className="w-3 h-3 text-yt-muted fill-yt-muted" />
                  <span>Pinned by Aarya Khabale</span>
                </div>
              )}

              {/* Author & Timestamp */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">{comment.author}</span>
                {comment.authorBadge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-yt-surface2 text-yt-red border border-yt-red/40">
                    {comment.authorBadge}
                  </span>
                )}
                <span className="text-xs text-yt-muted">{comment.handle}</span>
                <span className="text-xs text-yt-muted">• {comment.timeAgo}</span>
              </div>

              {/* Comment Text */}
              <p className="text-sm text-yt-text/90 leading-relaxed pt-0.5">
                {comment.text}
              </p>

              {/* Like / Dislike / Reply Row */}
              <div className="flex items-center gap-4 pt-1 text-xs text-yt-muted">
                <button
                  onClick={() => toggleLike(idx)}
                  className={`flex items-center gap-1.5 hover:text-white transition-colors ${
                    likedMap[idx] ? "text-yt-blue font-bold" : ""
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${likedMap[idx] ? "fill-yt-blue" : ""}`} />
                  <span>{comment.likes}</span>
                </button>
                <button className="hover:text-white transition-colors">
                  <ThumbsDown className="w-3.5 h-3.5" />
                </button>
                <button className="font-semibold hover:text-white transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

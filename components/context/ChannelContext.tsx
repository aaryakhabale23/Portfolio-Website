"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface ChannelContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  isSubscribed: boolean;
  toggleSubscribe: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
  isTrailerModalOpen: boolean;
  openTrailerModal: () => void;
  closeTrailerModal: () => void;
  subscriberCount: string;
}

const ChannelContext = createContext<ChannelContextType | undefined>(undefined);

export const ChannelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState("1.08K");

  // Load subscription state from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aarya_channel_subscribed");
      if (saved === "true") {
        setIsSubscribed(true);
        setSubscriberCount("1.081K");
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const toggleSubscribe = () => {
    setIsSubscribed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("aarya_channel_subscribed", String(next));
      } catch {
        // ignore
      }
      if (next) {
        setSubscriberCount("1.081K");
        // Trigger celebratory confetti like YouTube celebration
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF0033", "#3EA6FF", "#FFFFFF", "#FFD700"],
        });
      } else {
        setSubscriberCount("1.08K");
      }
      return next;
    });
  };

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openTrailerModal = () => setIsTrailerModalOpen(true);
  const closeTrailerModal = () => setIsTrailerModalOpen(false);

  return (
    <ChannelContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        isSubscribed,
        toggleSubscribe,
        searchQuery,
        setSearchQuery,
        isContactModalOpen,
        openContactModal,
        closeContactModal,
        isTrailerModalOpen,
        openTrailerModal,
        closeTrailerModal,
        subscriberCount,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannel = () => {
  const context = useContext(ChannelContext);
  if (!context) {
    throw new Error("useChannel must be used within a ChannelProvider");
  }
  return context;
};

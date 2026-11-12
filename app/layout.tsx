import type { Metadata } from "next";
import "./globals.css";
import { ChannelProvider } from "@/components/context/ChannelContext";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { ChannelTrailerModal } from "@/components/youtube/ChannelTrailerModal";
import { ContactModal } from "@/components/shared/ContactModal";

export const metadata: Metadata = {
  title: "Aarya Khabale — Official Channel (Portfolio)",
  description:
    "Interactive YouTube-inspired professional portfolio of Aarya Khabale. Product-minded technologist: Product Management, Artificial Intelligence, Software Engineering, and Community Leadership.",
  keywords: [
    "Aarya Khabale",
    "Portfolio",
    "Product Management",
    "Artificial Intelligence",
    "Machine Learning",
    "BioLens",
    "EcoControl",
    "Livix",
    "React Native",
    "FastAPI",
    "PRD",
    "NMIMS",
  ],
  authors: [{ name: "Aarya Khabale" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-yt-bg text-yt-text font-sans antialiased overflow-x-hidden">
        <ChannelProvider>
          {/* Top Sticky YouTube Navigation Bar */}
          <Navbar />

          <div className="flex w-full min-h-[calc(100vh-56px)]">
            {/* YouTube Collapsible Desktop Sidebar */}
            <Sidebar />

            {/* Main Application Area */}
            <main className="flex-1 min-w-0 pb-16 md:pb-8">
              {children}
            </main>
          </div>

          {/* YouTube Mobile Bottom Navigation Bar */}
          <MobileNav />

          {/* Global YouTube Modals */}
          <ChannelTrailerModal />
          <ContactModal />
        </ChannelProvider>
      </body>
    </html>
  );
}

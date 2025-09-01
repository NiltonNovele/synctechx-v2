import type React from "react";
import type { Metadata } from "next";
import { AIBackgroundAnimation } from "@/src/components/ui/ai-background-animation";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyncTechX",
  description: "Mozambican Tech Startup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="font-satoshi bg-black" suppressHydrationWarning={true}>
        {/* Global AI Background Animation */}
        <AIBackgroundAnimation />
        <div className="relative z-20">{children}</div>
      </body>
    </html>
  );
}

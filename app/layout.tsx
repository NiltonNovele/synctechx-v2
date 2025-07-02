import type React from "react";
import "@/app/globals.css";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Providers } from "@/components/providers";
import { AnimatedBackground } from "@/components/animated-background";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
// import { Toaster } from "@/components/ui/toaster" - Remove this line
import { SkipToContent } from "@/components/skip-to-content";
import { FloatingButtons } from "@/components/floating-buttons";
import { ToastProvider } from "@/components/toast-provider";
import { cn } from "@/lib/utils";
import { HelpModal } from "@/components/help-modal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "SyncTechX",
  description: "Innovative tech solutions by a youth-led Mozambican startup.",
  generator: "SyncTechX",
  themeColor: "#e15e66", // Rose gold theme color
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#e15e66" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <KeyboardShortcuts />
          <ToastProvider />
          <Providers>
            <SkipToContent />
            <AnimatedBackground />
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-grow" id="main-content" tabIndex={-1}>
                {children}
              </div>
              <Footer />
            </div>
            <FloatingButtons />
            <HelpModal />
            {/* <Toaster /> */}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";

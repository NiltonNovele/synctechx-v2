import type React from "react";
import type { Metadata, Viewport } from "next";
import { AIBackgroundAnimation } from "@/src/components/ui/ai-background-animation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://synctechx.com"),
  title: {
    default: "SyncTechX | Startup Moçambicana de Tecnologia",
    template: "%s | SyncTechX",
  },
  description:
    "A SyncTechX é uma startup moçambicana de tecnologia que desenvolve websites, sistemas, automações, agentes de IA e soluções digitais modernas para ajudar empresas a crescer, inovar e escalar.",
  keywords: [
    "SyncTechX",
    "startup moçambicana",
    "tecnologia em Moçambique",
    "desenvolvimento web",
    "inteligência artificial",
    "automação",
    "websites",
    "sistemas digitais",
    "Maputo",
  ],
  authors: [{ name: "SyncTechX" }],
  creator: "SyncTechX",
  publisher: "SyncTechX",
  applicationName: "SyncTechX",

  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo.png",
  },

  openGraph: {
    title: "SyncTechX | Startup Moçambicana de Tecnologia",
    description:
      "Desenvolvemos soluções digitais modernas que ajudam empresas a crescer, inovar e escalar em Moçambique e além.",
    url: "https://synctechx.com",
    siteName: "SyncTechX",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Logótipo da SyncTechX",
      },
    ],
    type: "website",
    locale: "pt_PT",
  },

  twitter: {
    card: "summary_large_image",
    title: "SyncTechX | Startup Moçambicana de Tecnologia",
    description:
      "Soluções digitais, websites, sistemas e automações com IA para empresas modernas.",
    images: ["/logo.png"],
    creator: "@synctechx",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="SyncTechX" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body
        className="min-h-screen overflow-x-hidden bg-black font-satoshi text-white antialiased selection:bg-blue-500 selection:text-black"
        suppressHydrationWarning
      >
        <AIBackgroundAnimation />

        <div className="relative z-20 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
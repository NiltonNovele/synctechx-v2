import type React from "react";
import type { Metadata } from "next";
import { AIBackgroundAnimation } from "@/src/components/ui/ai-background-animation";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyncTechX",
  description:
    "A SyncTechX é uma startup moçambicana de tecnologia que desenvolve soluções digitais modernas para ajudar empresas a crescer, inovar e escalar em Moçambique e além.",

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },

  openGraph: {
    title: "SyncTechX | Startup Moçambicana de Tecnologia",
    description:
      "Desenvolvemos soluções digitais que ajudam empresas a crescer, inovar e escalar em Moçambique e além.",
    url: "https://syndtechx.com",
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
      "Soluções digitais que ajudam empresas a crescer e inovar em Moçambique e além.",
    images: ["/logo.png"],
    creator: "@syndtechx",
  },

  metadataBase: new URL("https://syndtechx.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <head>
        {/* Fonte */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />

        {/* Ícone do site (browser) */}
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />

        {/* Apple / iOS */}
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* PWA / ecrã inicial móvel */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="SyncTechX" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>

      <body className="font-satoshi bg-black" suppressHydrationWarning={true}>
        {/* Animação global de fundo */}
        <AIBackgroundAnimation />

        {/* Conteúdo da aplicação */}
        <div className="relative z-20">{children}</div>
      </body>
    </html>
  );
}
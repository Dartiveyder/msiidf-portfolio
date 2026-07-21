import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Michroma,
  Audiowide,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import { SprayOverlay } from "@/components/SprayOverlay";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MSIIDF — Mateus Silva, Product Designer",
  description: "Transformando ideias em experiências digitais memoráveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${michroma.variable} ${audiowide.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-body">
        <LanguageProvider>
          <PageTransitionProvider>
            <CustomCursor />
            <SprayOverlay />
            <SiteChrome>{children}</SiteChrome>
          </PageTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

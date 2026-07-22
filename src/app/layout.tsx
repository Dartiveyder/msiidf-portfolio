import type { Metadata } from "next";
import Script from "next/script";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Michroma,
  Audiowide,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import { SprayOverlay } from "@/components/SprayOverlay";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xqlxd3g7xs");
          `}
        </Script>
        <LanguageProvider>
          <PageTransitionProvider>
            <CustomCursor />
            <SprayOverlay />
            <SiteChrome>{children}</SiteChrome>
            <ScrollToTopButton />
            <Analytics />
          </PageTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

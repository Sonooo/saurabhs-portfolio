import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Saurabh Sanap — Full Stack & AI Engineer",
    template: "%s | Saurabh Sanap",
  },
  description:
    "Full Stack Developer & AI Engineer with 4+ years building scalable web products. Available for senior roles and freelance projects in React, Next.js, Node.js, LangChain, and AWS.",
  keywords: [
    "Full Stack Developer Pune",
    "AI Engineer India",
    "React Developer",
    "Next.js",
    "LangChain developer",
    "NestJS",
    "freelance developer India",
    "Full Stack AI Engineer Pune",
  ],
  openGraph: {
    title: "Saurabh Sanap — Full Stack & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer with 4+ years building scalable web products.",
    url: "https://mydigitalgarage.online",
    siteName: "Saurabh Sanap Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Sanap — Full Stack & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer with 4+ years building scalable web products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://mydigitalgarage.online"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-text-primary antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Saurabh Sanap Portfolio",
              url: "https://mydigitalgarage.online",
              author: {
                "@type": "Person",
                name: "Saurabh Sanap",
                jobTitle: "Full Stack Developer & AI Engineer",
                worksFor: {
                  "@type": "Organization",
                  name: "Leading Tech Firm",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

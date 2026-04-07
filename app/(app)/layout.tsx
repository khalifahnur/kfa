import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable:"--font-roboto-condensed",
  subsets:["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kitsforafrica.org"),
  title: {
    default: "Kits For Africa | Empowering Youth Through Football",
    template: "%s | Kits For Africa",
  },
  description:
  "Join Kits For Africa in leveling the playing field. We collect, recycle, and distribute football kits and sports equipment to grassroots teams and underprivileged youth across Africa.",
  authors: [{ name: "Kit's For Africa" }],
  creator: "KFA",
  publisher: "kfa",
  alternates: {
    canonical: "https://www.kitsforafrica.org",
  },
  openGraph: {
    siteName: "Kits For Africa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "kfa donation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "4N23B2vJLWgghT58N--SKXx4prS_VUG0M_MpvH4v7ts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

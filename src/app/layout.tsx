import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Anabat — Video Editor", template: "%s | Anabat" },
  description:
    "Video editing by Anabat. Thoughtful cuts, color, and sound for YouTube, short-form, brands, and podcasts.",
  openGraph: {
    type: "website",
    siteName: "Anabat",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} min-h-screen bg-[#fafafa] antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

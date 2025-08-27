import type { Metadata } from "next";
import "./globals.css";
import { TransitionProvider } from "@/components/TransitionProvider";
import SiteNavbar from "@/components/SiteNavbar";

import { Montserrat, Jost } from 'next/font/google';
import './globals.css'; // your global styles
import FooterSection from "@/components/FooterSection";

// Load Montserrat with chosen weights
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  variable: '--font-montserrat', // optional CSS variable
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});


export const metadata: Metadata = {
  title: "PT Biro Klasifikasi Indonesia (BKI) - Leading Maritime Classification Agency",
  description: "BKI is Indonesia's premier maritime classification agency, providing vessel classification, statutory certification, and maritime consultancy services since 1964.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${jost.variable} antialiased`}
      >
        <TransitionProvider>
          <SiteNavbar />
          {children}
          <FooterSection/>
        </TransitionProvider>
      </body>
    </html>
  );
}

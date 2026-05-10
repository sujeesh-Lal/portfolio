import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sujeesh Lal — Technical Architect",
  description:
    "Technical Architect with 17+ years of experience in React, Angular, Next.js, TypeScript, Azure, and AI-assisted development.",
  keywords: [
    "Technical Architect",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Azure",
    "Frontend",
    "Full Stack",
  ],
  authors: [{ name: "Sujeesh Lal" }],
  openGraph: {
    title: "Sujeesh Lal — Technical Architect",
    description:
      "Technical Architect with 17+ years crafting enterprise-grade digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

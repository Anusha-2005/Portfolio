import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anusha Palaparthi | AI & Data Engineer Portfolio",
  description: "Personal portfolio of Anusha Palaparthi - AI Engineer, specializing in Data Engineering for AI and Machine Learning systems. Explore recent algorithmic projects, technical certifications, and engineering journey.",
  keywords: [
    "AI Engineer",
    "Data Engineering",
    "Machine Learning",
    "Anusha Palaparthi",
    "Next.js Portfolio",
    "Framer Motion",
    "TypeScript Developer",
  ],
  authors: [{ name: "Anusha Palaparthi" }],
  creator: "Anusha Palaparthi",
  openGraph: {
    title: "Anusha Palaparthi | AI & Data Engineer Portfolio",
    description: "Explore the personal portfolio of Anusha Palaparthi, featuring AI/ML virtual internships, competitive programming achievements, and full-stack AI dashboards.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anusha Palaparthi | AI & Data Engineer Portfolio",
    description: "Explore the personal portfolio of Anusha Palaparthi, featuring AI/ML virtual internships, competitive programming achievements, and full-stack AI dashboards.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900">
        {children}
      </body>
    </html>
  );
}

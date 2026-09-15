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
  title: "Palaparthi Anusha | Computer Science Student | Software Engineer",
  description: "Personal portfolio of Palaparthi Anusha - Computer Science undergraduate at K L University specializing in Software & Application Engineering, Python, C++, React, Flask, Docker, and GitHub Actions.",
  keywords: [
    "Palaparthi Anusha",
    "Computer Science Student",
    "Software Engineer",
    "Application Engineering",
    "Python",
    "C++",
    "Flask",
    "React",
    "Docker",
    "GitHub Actions",
    "REST APIs",
    "Machine Learning",
    "K L University",
  ],
  authors: [{ name: "Palaparthi Anusha" }],
  creator: "Palaparthi Anusha",
  openGraph: {
    title: "Palaparthi Anusha | Computer Science Student | Software Engineer",
    description: "Personal portfolio of Palaparthi Anusha - Computer Science undergraduate at K L University specializing in Software & Application Engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palaparthi Anusha | Computer Science Student | Software Engineer",
    description: "Personal portfolio of Palaparthi Anusha - Computer Science undergraduate at K L University specializing in Software & Application Engineering.",
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

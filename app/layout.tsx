import type { Metadata  } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import ContactForm from "@/components/main/ContactForm";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NavigationProvider } from '@/components/sub/NavigationProvider';

const inter = Inter({ subsets: ["latin"] });

// Add this constant for your production URL
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nexzgen.com' || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "NexzGen | Your Gateway to Cutting-Edge Solutions",
  description: "NexzGen Studio is an innovative Malaysian-based startup, established on February 24, 2024, dedicated to empowering individuals, communities & businesses through AI-driven EdTech solutions and advanced SaaS platforms.",
  icons: 'nexzgen.png',
  
  // Open Graph metadata
  openGraph: {
    title: "NexzGen | Your Gateway to Cutting-Edge Solutions",
    description: "NexzGen Studio is an innovative Malaysian-based startup, established on February 24, 2024, dedicated to empowering individuals, communities & businesses through AI-driven EdTech solutions and advanced SaaS platforms.",
    url: 'https://nexzgen.com',
    siteName: 'NexzGen',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'NexzGen Landing Page Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: "NexzGen | Your Gateway to Cutting-Edge Solutions",
    description: "NexzGen Studio is an innovative Malaysian-based startup, established on February 24, 2024, dedicated to empowering individuals, communities & businesses through AI-driven EdTech solutions and advanced SaaS platforms.",
    images: ['/preview.png'],
    creator: '@nexzgenstudio',
  },
  
  // Additional metadata
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <NavigationProvider/>
        {children}
        <Analytics/>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
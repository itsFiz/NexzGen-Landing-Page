import type { Metadata } from "next";
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


export const metadata: Metadata = {
  title: "NexzGen | Your Gateway to Cutting-Edge Solutions",
  description: "NexzGen Studio is a dynamic hub of innovation, specializing in animation, augmented reality (AR), game development, and full-stack development. We blend cutting-edge technology with artistic expression to create immersive experiences that transcend boundaries.",
  icons: 'nexzgen.png'
  
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
        <Navbar />
        <NavigationProvider/>
        {children}
        <Analytics/>
        <SpeedInsights />
        <Footer />
        
      </body>
    </html>
  );
}

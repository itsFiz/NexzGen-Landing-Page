// app/page.tsx
'use client';
import { motion } from 'framer-motion';
import About from "@/components/main/About";
import Clients from "@/components/main/Clients";
import Hero from "@/components/main/Hero";
import Jobs from "@/components/main/Jobs";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full"
    >
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <div className='relative z-10'><Clients /></div>
        
        <Skills />
        <Encryption />
        <Jobs />
      </div>
    </motion.main>
  );
}

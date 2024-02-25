import About from "@/components/main/About";
import Clients from "@/components/main/Clients";
import ContactForm from "@/components/main/ContactForm";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Jobs from "@/components/main/Jobs";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About/>
        <Services/>
        <Clients/>
        <Skills />
        <Encryption />
        <Projects />
        <Jobs/>
        
      </div>
    </main>
  );
}

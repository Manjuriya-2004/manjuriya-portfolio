import Background from "@/components/Backgroud";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import MyWorkflow from "@/components/MyWorkflow";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Services/>
      <MyWorkflow/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </main>
  );
}

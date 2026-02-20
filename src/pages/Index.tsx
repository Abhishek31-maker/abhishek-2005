import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
// import Resume from "@/components/Resume"

const Index = () => {
  return (
    
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        {/* <Resume /> */}
     
        
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>2025 QA + Product Professional. Built with passion and attention to detail.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

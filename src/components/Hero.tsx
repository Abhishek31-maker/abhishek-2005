import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">QA + Product + Game Testing Professional</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              QA Engineer turned Product Manager with expertise in mobile app testing, game testing, and full-cycle app releases
            </p>
          </div>

          {/* About section */}
          <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate QA Engineer turned Product Manager with over a year of experience in testing apps, websites, and mobile games. 
              I specialize in discovering rare edge case bugs, improving user experience, and managing releases from development to store deployment. 
              I've successfully <span className="text-primary font-semibold">released 6 Android and 6 iOS apps</span>, ensuring top-notch performance, usability, and design consistency.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full group"
            >
              Explore My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

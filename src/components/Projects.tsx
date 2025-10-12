import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Smartphone, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mobile Game Testing",
      icon: Gamepad2,
      description: "Comprehensive testing for mobile games across Android and iOS platforms.",
      stats: "2 games • 100+ bugs found",
      highlights: ["Performance optimization.", "Logic testing.", "UI/UX validation.", "Edge case Testing."],
      gradient: "from-primary to-primary/60",
    },
    {
      title: "App Release Projects",
      icon: Smartphone,
      description: "Full-cycle app releases from Product Requrements to production deployment.",
      stats: "12 apps released (6 Android + 6 iOS)",
      highlights: ["Play Store deployment.", "App Store submission.", "Version management."],
      gradient: "from-secondary to-secondary/60",
    },
    {
      title: "Website QA",
      icon: Globe,
      description: "Responsive and cross-browser testing with accessibility checks",
      stats: "Multiple projects",
      highlights: ["Cross-browser testing.", "Responsive design validation.", "Accessibility compliance."],
      gradient: "from-accent to-accent/60",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project Showcase
          </h2>
          <p className="text-muted-foreground text-lg">
            Delivering quality across games, apps, and websites
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title}
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <Badge variant="secondary" className="mb-6 bg-muted">
                    {project.stats}
                  </Badge>
                  
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li 
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

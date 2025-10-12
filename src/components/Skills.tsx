import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, Bug, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Briefcase,
      color: "from-primary to-primary/80",
      skills: [
        "Agile Planning",
        "Roadmap Ownership",
        "Feature Prioritization",
        "Sprint Grooming",
        "Requirement Gathering",
        "UAT",
        "Release Coordination",
        "Stakeholder Collaboration",
      ],
    },
    {
      title: "Quality Assurance",
      icon: Bug,
      color: "from-secondary to-secondary/80",
      skills: [
        "Manual Testing",
        "Game Testing",
        "Mobile App Testing",
        "Website QA",
        "Regression Testing",
        "Functional Testing",
        "Exploratory Testing",
        "Bug Reporting",
        "Edge Case Discovery",
        "API Testing (Postman)",
      ],
    },
    {
      title: "Tools & Tech",
      icon: Wrench,
      color: "from-accent to-accent/80",
      skills: [
        "Jira",
        "Confluence",
        "Figma",
        "Postman",
        "Google Play Console",
        "iOS Developer Account",
        "TestFlight",
        "Android Studio",
        "Git",
        "Excel",
        "SQL (Basic)",
        "Selenium (Beginner)",
        "Agile Boards",
        "Miro",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for quality assurance and product management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted hover:bg-muted-foreground/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

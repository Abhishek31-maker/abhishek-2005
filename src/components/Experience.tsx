import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "XYZ Pvt Ltd",
      period: "Apr 2024 – Present",
      responsibilities: [
        "Owned product roadmap, prioritized sprints, and aligned features with business goals",
        "Conducted UAT, coordinated app/game releases, and optimized feedback cycles",
        "Bridged QA insights with product strategy, improving user satisfaction and app ratings",
      ],
      current: true,
    },
    {
      title: "QA Engineer",
      company: "XYZ Pvt Ltd",
      period: "Aug 2023 – Mar 2024",
      responsibilities: [
        "Led game and mobile app testing for Android and iOS",
        "Released 12 total apps (6 Android + 6 iOS)",
        "Identified major edge case bugs that prevented production incidents",
        "Ensured compatibility across devices and operating systems",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey in QA and Product Management
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={exp.title}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-background"></div>

                {/* Content */}
                <Card className="flex-1 p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    {exp.current && (
                      <Badge className="bg-gradient-to-r from-primary to-secondary">
                        Current
                      </Badge>
                    )}
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

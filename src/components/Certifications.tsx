import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    "Game Testing Fundamentals",
    "API Testing with Postman",
    "Product Management Crash Course",
    "Manual Testing / QA Foundations",
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <Card 
              key={cert}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{cert}</h3>
                  <Badge variant="secondary" className="mt-2 bg-muted/50">
                    Certified
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonial section */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/30">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <blockquote className="text-xl italic text-foreground/90 mb-4">
              "Known as the 'Bug Detective' for catching rare edge cases."
            </blockquote>
            <p className="text-muted-foreground">— Peer Feedback</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;

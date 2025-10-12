import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-primary to-primary/80",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      href: "https://github.com/yourprofile",
      color: "from-accent to-accent/80",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-2xl text-muted-foreground mb-2">
            Let's build and break great products — together.
          </p>
          <p className="text-lg text-muted-foreground">
            Open to opportunities in QA Engineering and Product Management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card 
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group text-center"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{method.label}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Download Resume Button */}
        <div className="text-center space-y-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-8 py-6 rounded-full group"
          >
            <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
          
          {/* Floating chat button concept */}
          <p className="text-sm text-muted-foreground">
            or reach out directly through any platform above
          </p>
        </div>
      </div>

      {/* Floating connect button (fixed position) */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg hover:shadow-primary/50 group"
          title="Let's Connect"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Contact;

import { GraduationCap, Code, Database, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Passionate about both frontend and backend technologies'
    },
    {
      icon: Database,
      title: 'Problem Solving',
      description: 'Strong foundation in data structures and algorithms'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Focus on building applications that grow with business needs'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am Harsha T G, a Computer Science student with strong skills in Java, Web Development, 
              and Problem-Solving. I am passionate about building scalable applications, exploring new 
              technologies, and applying data structures and algorithms to solve real-world challenges.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My drive comes from a curiosity to learn, create impactful solutions, and grow as a 
              Full-Stack Engineer and Software Developer. I believe in writing clean, efficient code 
              and staying up-to-date with the latest industry trends and best practices.
            </p>

            {/* Education */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Bachelor of Engineering in Computer Science
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      Dr Ambedkar Institute of Technology, Bangalore
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Expected Graduation: 2026
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
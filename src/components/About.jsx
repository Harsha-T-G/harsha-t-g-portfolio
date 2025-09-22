import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Proficient in Java, JavaScript, React, and modern web technologies with a focus on clean, efficient code.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Strong analytical mindset with experience in data structures, algorithms, and solving complex challenges.',
      color: 'bg-hero-accent/10 text-hero-accent'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Excellent team player with strong communication skills and experience in collaborative development.',
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Passionate about staying updated with latest technologies and best practices in software development.',
      color: 'bg-secondary text-secondary-foreground'
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
            Learn more about my background, education, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Passionate Computer Science Student
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated Computer Science student with a strong foundation in software development 
                  and a passion for creating innovative solutions. My journey in technology has been driven 
                  by curiosity and a desire to solve real-world problems through code.
                </p>
                <p>
                  With hands-on experience in full-stack development, I've worked on various projects 
                  that showcase my ability to design, develop, and deploy modern web applications. 
                  I believe in writing clean, maintainable code and following best practices.
                </p>
                <p>
                  Beyond coding, I'm actively involved in the tech community, always eager to learn 
                  new technologies and collaborate with fellow developers to build amazing products.
                </p>
              </div>
            </div>

            {/* Education */}
            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-hero p-6 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-display font-semibold text-white">Education</h4>
                  </div>
                  <p className="text-white/90 text-sm">Academic background and achievements</p>
                </div>
                <div className="px-6 pb-6 space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="absolute left-1.5 top-4 w-0.5 h-16 bg-primary/20"></div>
                    <div>
                      <h5 className="font-display font-semibold text-foreground mb-1">Bachelor of Engineering in Computer Science</h5>
                      <p className="text-primary font-medium mb-1">KLE Institute of Technology, Hubballi</p>
                      <p className="text-sm text-muted-foreground">2022 - 2026 • CGPA: 8.24/10</p>
                    </div>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1 w-3 h-3 bg-hero-accent rounded-full"></div>
                    <div>
                      <h5 className="font-display font-semibold text-foreground mb-1">Pre-University (Science)</h5>
                      <p className="text-hero-accent font-medium mb-1">Morarji Desai Residential PU College, Hubballi</p>
                      <p className="text-sm text-muted-foreground">2020 - 2022 • Percentage: 96.83%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${highlight.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <highlight.icon size={24} />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
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
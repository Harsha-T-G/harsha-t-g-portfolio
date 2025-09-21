import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Proficient in Java, JavaScript, React, and modern web technologies with a focus on clean, efficient code.'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Strong analytical mindset with experience in data structures, algorithms, and solving complex challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Excellent team player with strong communication skills and experience in collaborative development.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Passionate about staying updated with latest technologies and best practices in software development.'
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
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <h4 className="text-xl font-display font-semibold text-foreground">Education</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-foreground">Bachelor of Engineering in Computer Science</h5>
                    <p className="text-muted-foreground">KLE Institute of Technology, Hubballi</p>
                    <p className="text-sm text-muted-foreground">2022 - 2026 | CGPA: 8.24</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">12th Grade (Science)</h5>
                    <p className="text-muted-foreground">Morarji Desai Residential PU College, Hubballi</p>
                    <p className="text-sm text-muted-foreground">2020 - 2022 | Percentage: 96.83%</p>
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
                className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
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
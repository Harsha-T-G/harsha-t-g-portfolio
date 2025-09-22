import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Database, Globe, Smartphone, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design', 'React Router'],
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication (JWT)', 'Socket.io', 'Server-side Rendering'],
      color: 'bg-hero-accent/10 text-hero-accent'
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Cloudinary', 'API Integration', 'Data Modeling'],
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTTP/HTTPS', 'Web Security', 'Performance Optimization', 'SEO Basics', 'Progressive Web Apps', 'Version Control (Git)'],
      color: 'bg-secondary text-secondary-foreground'
    },
    {
      icon: Smartphone,
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python', 'C Programming', 'Object-Oriented Programming', 'Functional Programming'],
      color: 'bg-primary/20 text-primary'
    },
    {
      icon: Cpu,
      title: 'Tools & Technologies',
      skills: ['VS Code', 'Git & GitHub', 'npm/yarn', 'Postman', 'Chrome DevTools', 'Responsive Testing'],
      color: 'bg-muted text-muted-foreground'
    }
  ];

  const fundamentals = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems',
    'Operating Systems Concepts',
    'Computer Networks',
    'Software Engineering Principles',
    'Web Development Fundamentals',
    'Problem Solving & Debugging'
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-hero-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-hero-accent/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-hero-accent rounded-full animate-pulse"></div>
            <span className="text-hero-accent font-medium text-sm">Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-text mb-6">
            My <span className="text-hero-accent">Expertise</span> &<br/>
            Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-500 animate-fade-in group border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon size={22} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-display font-bold text-hero-text group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                      <div className="w-2 h-2 bg-gradient-hero rounded-full"></div>
                      <span className="text-muted-foreground font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Computer Science Fundamentals */}
        <Card className="bg-gradient-card shadow-hero max-w-6xl mx-auto animate-fade-in border-0 overflow-hidden">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-hero">
              <Cpu className="text-white" size={32} />
            </div>
            <CardTitle className="text-3xl font-display font-bold text-hero-text mb-4">
              Computer Science Fundamentals
            </CardTitle>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong foundation in core computer science concepts and principles
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fundamentals.map((fundamental, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-secondary/50 to-secondary/30 hover:from-primary/10 hover:to-hero-accent/10 transition-all duration-300 border border-border/50 hover:border-primary/20"
                >
                  <div className="w-3 h-3 bg-gradient-hero rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-hero-text font-medium text-sm group-hover:text-primary transition-colors duration-300">{fundamental}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
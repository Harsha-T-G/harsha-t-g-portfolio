import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Database, Globe, Smartphone, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design', 'React Router'],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication (JWT)', 'Socket.io', 'Server-side Rendering'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Cloudinary', 'API Integration', 'Data Modeling'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTTP/HTTPS', 'Web Security', 'Performance Optimization', 'SEO Basics', 'Progressive Web Apps', 'Version Control (Git)'],
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Smartphone,
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python', 'C Programming', 'Object-Oriented Programming', 'Functional Programming'],
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Cpu,
      title: 'Tools & Technologies',
      skills: ['VS Code', 'Git & GitHub', 'npm/yarn', 'Postman', 'Chrome DevTools', 'Responsive Testing'],
      color: 'bg-teal-50 text-teal-600'
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
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={20} />
                  </div>
                  <CardTitle className="text-lg font-display font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Computer Science Fundamentals */}
        <Card className="bg-gradient-card shadow-card max-w-4xl mx-auto animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-display font-semibold text-foreground text-center flex items-center justify-center gap-3">
              <Cpu className="text-primary" size={28} />
              Computer Science Fundamentals
            </CardTitle>
            <p className="text-muted-foreground text-center">
              Strong foundation in core computer science concepts and principles
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fundamentals.map((fundamental, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground text-sm font-medium">{fundamental}</span>
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
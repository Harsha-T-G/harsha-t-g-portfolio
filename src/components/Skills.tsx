import { Code, Database, Globe, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'C'],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Bootstrap', 'Tailwind CSS'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Database,
      title: 'Databases & Backend',
      skills: ['MySQL', 'MongoDB', 'API Integration', 'JWT Authentication'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Git', 'Postman', 'Cloudinary', 'Redux Toolkit', 'React Router'],
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const fundamentals = [
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Data Structures & Algorithms',
    'Software Engineering Principles'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                  <category.icon size={32} />
                </div>
                <CardTitle className="text-lg font-display font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1.5 bg-muted rounded-full text-sm text-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Computer Science Fundamentals */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-display font-semibold text-foreground mb-2">
                Computer Science Fundamentals
              </CardTitle>
              <p className="text-muted-foreground">
                Strong foundation in core computer science concepts
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fundamentals.map((fundamental, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{fundamental}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
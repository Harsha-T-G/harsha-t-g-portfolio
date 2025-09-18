import { ExternalLink, Github, Globe, MessageSquare, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Web-Chat',
      description: 'A comprehensive real-time chat application featuring user authentication, image sharing capabilities, secure backend implementation with JWT & bcrypt, and MongoDB for data storage. Built with modern web technologies for seamless communication.',
      image: MessageSquare,
      techStack: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary', 'Socket.io'],
      features: [
        'Real-time messaging',
        'User authentication & security',
        'Image sharing with Cloudinary',
        'Secure backend with JWT & bcrypt',
        'MongoDB database integration'
      ],
      github: 'https://github.com/Harsha-T-G',
      demo: '#',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'WorldWise (Track Your Adventures)',
      description: 'An interactive mapping application that allows users to track their visited cities and adventures. Features comprehensive navigation with React Router, efficient state management using Context API and Reducer, plus async state handling for optimal performance.',
      image: Map,
      techStack: ['React.js', 'LeafLet API', 'React Router', 'Context API', 'CSS Modules'],
      features: [
        'Interactive world map with LeafLet',
        'City tracking and management',
        'React Router for navigation',
        'Context API for state management',
        'Async state handling'
      ],
      github: 'https://github.com/Harsha-T-G',
      demo: '#',
      color: 'bg-green-50 text-green-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating full-stack development skills and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-lg ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.image size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-display font-semibold text-foreground">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Explore More Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions to open-source development
              </p>
              <Button
                size="lg"
                onClick={() => window.open('https://github.com/Harsha-T-G', '_blank')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                <Github size={20} className="mr-2" />
                Visit GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
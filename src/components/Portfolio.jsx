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
      github: 'https://github.com/Harsha-T-G/web-chat',
      demo: 'https://web-chat-1-g3na.onrender.com/',
      color: 'bg-primary/10 text-primary'
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
      github: 'https://github.com/Harsha-T-G/World-wise-React',
      demo: '#',
      color: 'bg-hero-accent/10 text-hero-accent'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-hero-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-medium text-sm">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-text mb-6">
            My <span className="text-primary">Projects</span> &<br/>
            Recent Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work demonstrating full-stack development skills and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-500 animate-fade-in group border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 rounded-2xl ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <project.image size={36} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-display font-bold text-hero-text mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-display font-semibold text-hero-text mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-hero rounded-full"></div>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-secondary/50 text-hero-text rounded-xl text-sm font-medium hover:bg-gradient-hero hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-display font-semibold text-hero-text mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-hero rounded-full"></div>
                    Key Features:
                  </h4>
                  <div className="grid gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                        <div className="w-2 h-2 bg-gradient-hero rounded-full"></div>
                        <span className="text-muted-foreground font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-hero text-white hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-hero shadow-hero max-w-4xl mx-auto border-0 overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-hero-accent/10"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-6">
                  Explore More Projects
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  Check out my GitHub profile for more projects and contributions to open-source development
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open('https://github.com/Harsha-T-G', '_blank')}
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 font-bold text-lg px-8 py-4 shadow-lg"
                >
                  <Github size={20} className="mr-2" />
                  Visit GitHub Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
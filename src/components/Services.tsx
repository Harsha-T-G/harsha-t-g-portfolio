import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks like React.js, ensuring excellent user experience across all devices.',
      features: ['React.js Applications', 'Responsive Design', 'Modern UI/UX', 'Performance Optimization']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, implementing secure authentication and efficient data management solutions.',
      features: ['RESTful APIs', 'Database Design', 'Authentication Systems', 'Server Architecture']
    },
    {
      icon: Globe,
      title: 'Full-Stack Applications',
      description: 'End-to-end web application development, from concept to deployment, ensuring seamless integration between frontend and backend.',
      features: ['Complete Web Apps', 'Database Integration', 'Real-time Features', 'Cloud Deployment']
    },
    {
      icon: Smartphone,
      title: 'API Integration',
      description: 'Seamlessly connecting applications with third-party services and APIs, enabling enhanced functionality and data exchange.',
      features: ['Third-party APIs', 'Data Processing', 'Service Integration', 'API Documentation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Services I Provide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl font-display font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Let's collaborate to build something amazing together. I'm always excited to work on innovative projects.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-background text-primary px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors duration-300"
              >
                Get In Touch
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
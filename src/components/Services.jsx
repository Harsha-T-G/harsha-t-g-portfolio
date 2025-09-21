import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Globe, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces using modern React.js, with a focus on performance and user experience.',
      features: [
        'React.js Application Development',
        'Responsive Web Design',
        'Component-Based Architecture',
        'State Management',
        'Performance Optimization'
      ],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js and Express, implementing secure APIs and database integration.',
      features: [
        'RESTful API Development',
        'Database Design & Integration',
        'User Authentication & Security',
        'Server-Side Logic',
        'Third-Party API Integration'
      ],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development, from conception to deployment, ensuring seamless integration between frontend and backend.',
      features: [
        'Complete Web Applications',
        'Database Architecture',
        'User Authentication Systems',
        'Real-Time Features',
        'Deployment & Hosting'
      ],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Seamless integration of third-party services and APIs to enhance application functionality and user experience.',
      features: [
        'Third-Party API Integration',
        'Payment Gateway Integration',
        'Social Media APIs',
        'Cloud Services Integration',
        'Custom API Development'
      ],
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Services Offered
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life with modern technologies and best practices
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-display font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-hero shadow-card max-w-4xl mx-auto animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Let's collaborate to build something amazing together. I'm here to help transform your ideas 
              into fully functional, modern web applications.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-background text-primary px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 group"
            >
              Get In Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
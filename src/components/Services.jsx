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
      color: 'bg-primary/10 text-primary'
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
      color: 'bg-hero-accent/10 text-hero-accent'
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
      color: 'bg-accent/10 text-accent'
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
      color: 'bg-secondary text-secondary-foreground'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-medium text-sm">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-text mb-6">
            What I <span className="text-accent">Offer</span> &<br/>
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services to bring your ideas to life with modern technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-500 animate-fade-in group border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-display font-bold text-hero-text mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-hero-text mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-hero rounded-full"></div>
                    What's Included:
                  </h4>
                  <div className="grid gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                        <div className="w-2 h-2 bg-gradient-hero rounded-full"></div>
                        <span className="text-muted-foreground font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-hero shadow-hero max-w-4xl mx-auto animate-fade-in border-0 overflow-hidden">
          <CardContent className="p-12 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-hero-accent/10"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's collaborate to build something amazing together. I'm here to help transform your ideas 
                into fully functional, modern web applications.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group"
              >
                Get In Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
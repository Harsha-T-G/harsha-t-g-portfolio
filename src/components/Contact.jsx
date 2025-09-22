import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Send, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  emailjs.init('7yJ5Kv0Bn09C2D-gN');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_g3bvbgp', // Service ID
        'template_50liy2v', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Harsha',
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshatg2004@gmail.com',
      link: 'mailto:harshatg2004@gmail.com',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9113950727',
      link: 'tel:+919113950727',
      color: 'bg-hero-accent/10 text-hero-accent'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'harsha-t-g-07117525b',
      link: 'https://linkedin.com/in/harsha-t-g-07117525b',
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Harsha-T-G',
      link: 'https://github.com/Harsha-T-G',
      color: 'bg-secondary text-secondary-foreground'
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: 'harsha__01',
      link: 'https://leetcode.com/u/harsha__01/',
      color: 'bg-muted text-muted-foreground'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-text mb-6">
            Let's Work <span className="text-accent">Together</span> &<br/>
            Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Get in touch and let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in border-0 overflow-hidden">
            <CardHeader className="pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-lg">
                  <Send className="text-white" size={24} />
                </div>
                <div>
                  <CardTitle className="text-3xl font-display font-bold text-hero-text">
                    Send a Message
                  </CardTitle>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-hero-text mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full h-12 px-4 border-2 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-hero-text mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full h-12 px-4 border-2 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-hero-text mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or how I can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full min-h-[150px] p-4 border-2 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full h-14 bg-gradient-hero text-white font-bold text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={24} className="mr-3 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={24} className="mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="bg-gradient-card shadow-card border-0 overflow-hidden">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-display font-bold text-hero-text">
                  Contact Information
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Feel free to reach out through any of these channels
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-secondary/30 to-secondary/20 hover:from-primary/10 hover:to-hero-accent/10 transition-all duration-300 hover:shadow-card group border border-border/30 hover:border-primary/20"
                    >
                      <div className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <method.icon size={20} />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-hero-text text-lg group-hover:text-primary transition-colors duration-300">{method.label}</p>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action Card */}
            <Card className="bg-gradient-hero shadow-hero border-0 overflow-hidden">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-hero-accent/10"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-white/90 mb-4 text-lg">
                    I'm always excited to work on innovative projects and collaborate with like-minded individuals.
                  </p>
                  <p className="text-white/80">
                    Let's build something amazing together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
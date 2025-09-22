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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-display font-semibold text-foreground flex items-center gap-2">
                <Send className="text-primary" size={24} />
                Send a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
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
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
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
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-semibold text-foreground">
                  Contact Information
                </CardTitle>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:shadow-card group"
                    >
                      <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{method.label}</p>
                        <p className="text-muted-foreground text-sm">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action Card */}
            <Card className="bg-gradient-hero shadow-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">
                  Ready to Start?
                </h3>
                <p className="text-primary-foreground/90 mb-4">
                  I'm always excited to work on innovative projects and collaborate with like-minded individuals.
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/harsha-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume-Harsha-T-G.pdf';
    link.download = 'Harsha-T-G-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-bg via-background to-secondary"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-hero-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-medium tracking-wide uppercase text-sm">Welcome to my Portfolio</p>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-hero-text leading-tight">
                  Harsha T G
                </h1>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-hero-accent font-semibold">
                  Aspiring Full-Stack Engineer
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Computer Science student passionate about building scalable applications, 
                  exploring new technologies, and solving real-world challenges through innovative solutions.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-hero text-white shadow-hero hover:shadow-hover transition-all duration-300 border-0 px-8 py-4 text-lg font-semibold"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={downloadCV}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { href: "https://github.com/Harsha-T-G", icon: Github },
                { href: "https://linkedin.com/in/harsha-t-g-07117525b", icon: Linkedin },
                { href: "mailto:harshatg2004@gmail.com", icon: Mail }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-hero-text hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-hero opacity-30 animate-pulse delay-500"></div>
                <div className="absolute inset-4 rounded-full bg-white shadow-hero">
                  <img
                    src={profileImage}
                    alt="Harsha T G - Full Stack Developer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-hero-accent/30 rounded-full animate-float delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-hero-text hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
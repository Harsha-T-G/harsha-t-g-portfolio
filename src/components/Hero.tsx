import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/harsha-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
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
    <section id="home" className="min-h-screen flex items-center bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-muted-foreground font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-hero-text mb-4">
                Harsha T G
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                Aspiring Full-Stack Engineer | Java & Web Development Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                Computer Science student passionate about building scalable applications, 
                exploring new technologies, and solving real-world challenges through innovative solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-card"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={downloadCV}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Harsha-T-G"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/harsha-t-g-07117525b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:harshatg2004@gmail.com"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-hero p-1 shadow-hero animate-float">
                <img
                  src={profileImage}
                  alt="Harsha T G - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover border-4 border-background"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-hero-accent/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
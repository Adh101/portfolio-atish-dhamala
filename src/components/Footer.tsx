import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowUp, Heart, Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Blog', href: '#blogs' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/atishdhamala/', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/Adh101/', label: 'GitHub' },,
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:atish.dhamala@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Data & Analytics Engineer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Transforming complex data into actionable insights and building scalable analytics solutions. 
                Let's turn your data challenges into opportunities.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <p>atish.dhamala@gmail.com</p>
              </div>
              <Button 
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('#contact')}
              >
                Start a Project
              </Button>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© 2025 Atish Dhamala Portfolio.</span>
              <span> Made with lots of coffee</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
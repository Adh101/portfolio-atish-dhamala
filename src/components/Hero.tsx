import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-neutral-custom-light overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-4 animate-fade-in">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
                  Atish Dhamala
                </h1>
                <p className="text-xl text-primary font-medium">
                  Senior Data & Analytics Engineer
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                I specialize in building scalable data pipelines, creating actionable analytics, 
                and driving data-driven decision making across organizations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-muted-foreground hover:text-primary px-8 py-6 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </div>
            </div>
            
            {/* Profile Picture Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-neutral-custom-light shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Professional headshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-neutral-custom-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            MARGARET WAMBUI
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8 font-light">
            Data Science & Software Development Student
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate about creating innovative solutions through data analysis and software development. 
            Currently pursuing Information Technology while building real-world applications that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in px-4">
          <Button 
            asChild
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg shadow-lg"
          >
            <a href="https://github.com/margaretnduta" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              GitHub
            </a>
          </Button>
          
          <Button 
            asChild
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg shadow-lg"
          >
            <a href="https://www.linkedin.com/in/margaretwambui12" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
          </Button>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg shadow-lg"
          >
            <Mail className="mr-2" size={20} />
            Contact Me
          </Button>
        </div>

        <Button 
          asChild
          variant="ghost" 
          className="text-slate-400 hover:text-cyan-400 mb-8"
        >
          <a href="#" download>
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
        </Button>

        <div className="animate-bounce">
          <button onClick={() => scrollToSection('about')}>
            <ChevronDown className="mx-auto text-slate-400 hover:text-cyan-400 transition-colors" size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

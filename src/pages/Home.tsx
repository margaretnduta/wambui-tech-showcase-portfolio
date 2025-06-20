
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
              MARGARET WAMBUI
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
              IT Student & A Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and building the future through 
              code. Currently pursuing Information Technology while developing real-world 
              applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <Button 
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
            >
              <a href="https://github.com/margaretnduta" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                GitHub
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg"
            >
              <a href="https://www.linkedin.com/in/margaretwambui12" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </Button>

            <Button 
              asChild
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 text-lg"
            >
              <Link to="/contact">
                <Mail className="mr-2" size={20} />
                Contact Me
              </Link>
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
            <ChevronDown className="mx-auto text-slate-400" size={32} />
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Education</h3>
              <p className="text-slate-300">Technical University of Kenya</p>
              <p className="text-slate-400">Information Technology</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Specialization</h3>
              <p className="text-slate-300">Database Development</p>
              <p className="text-slate-400">Full-Stack Development</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Focus</h3>
              <p className="text-slate-300">Innovative Solutions</p>
              <p className="text-slate-400">Real-World Applications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

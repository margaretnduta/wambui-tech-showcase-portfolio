
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Margaret Wambui</h3>
            <p className="text-slate-400 mb-4">
              Data Science & Software Development Student passionate about creating innovative solutions.
            </p>
            <p className="text-slate-400">
              Technical University of Kenya
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/margaretnduta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2 bg-white/10 rounded-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/margaretwambui12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2 bg-white/10 rounded-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:margaret@example.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2 bg-white/10 rounded-lg"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Margaret Wambui. All rights reserved. Built with passion and dedication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

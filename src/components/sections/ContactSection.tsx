
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Get In Touch</h3>
            <p className="text-slate-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd 
              love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Mail className="text-cyan-400 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-300 text-sm sm:text-base">margaretwambui294@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Phone className="text-cyan-400 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-slate-300 text-sm sm:text-base">+254 757536392</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <MapPin className="text-cyan-400 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-300 text-sm sm:text-base">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-bold text-white">Find me online</h4>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <a href="https://github.com/margaretnduta" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={20} />
                    GitHub
                  </a>
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <a href="https://www.linkedin.com/in/margaretwambui12" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={20} />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Direct Contact Actions */}
          <div className="order-1 lg:order-2 bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Get in touch directly</h3>
            <p className="text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
              Ready to discuss your project? Contact me directly through WhatsApp or email for a quick response.
            </p>
            
            <div className="space-y-4">
              <Button 
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                <a href="https://wa.me/254757536392" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Message on WhatsApp
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
              >
                <a href="mailto:margaretwambui294@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

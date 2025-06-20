
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd 
              love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Mail className="text-cyan-400 mr-4" size={24} />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-400">margaret@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Phone className="text-cyan-400 mr-4" size={24} />
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-slate-400">+254 757536392</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <MapPin className="text-cyan-400 mr-4" size={24} />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-400">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Find me online</h4>
              <div className="flex space-x-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <a href="https://github.com/margaretnduta" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={20} />
                    GitHub
                  </a>
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                >
                  <a href="https://www.linkedin.com/in/margaretwambui12" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={20} />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-slate-400 focus:border-cyan-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-slate-400 focus:border-cyan-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-slate-400 focus:border-cyan-400"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-slate-400 focus:border-cyan-400"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

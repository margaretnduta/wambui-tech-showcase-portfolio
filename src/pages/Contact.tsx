
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
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
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or simply chat about technology. Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Mail className="text-cyan-400 mr-4" size={24} />
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-slate-400">margaret@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-cyan-400 mr-4" size={24} />
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-slate-400">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-cyan-400 mr-4" size={24} />
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-slate-400">Available upon request</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Find me online</h3>
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
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
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
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
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
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                  placeholder="your.email@example.com"
                />
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
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
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
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                  placeholder="Tell me about your project or idea..."
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
    </div>
  );
};

export default Contact;

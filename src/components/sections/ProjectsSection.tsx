
import React from 'react';
import { Github, ExternalLink, Database, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard for complete business management.",
      category: "Software Development",
      technologies: ["Python", "HTML/CSS", "JavaScript", "PostgreSQL", "Bootstrap"],
      icon: <ShoppingCart className="text-cyan-600" size={32} />,
      githubUrl: "https://github.com/margaretnduta",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
        "Payment gateway integration"
      ]
    },
    {
      title: "SQL Retail Database",
      description: "Advanced retail database system designed for comprehensive data management and analytics. Built with PostgreSQL featuring optimized queries, data integrity, and powerful reporting capabilities for business intelligence.",
      category: "Database Development",
      technologies: ["PostgreSQL", "SQL", "Database Design", "Data Analysis"],
      icon: <Database className="text-cyan-600" size={32} />,
      githubUrl: "https://github.com/margaretnduta",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      features: [
        "Complex relational database design",
        "Optimized SQL queries for performance",
        "Data analytics and business intelligence",
        "Inventory management system",
        "Customer relationship management",
        "Sales reporting and forecasting"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing my work in software development and database design
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-cyan-300 transition-all shadow-lg">
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                      <span className="text-cyan-600 text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-slate-800 font-bold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm border border-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        View Code
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 shadow-lg"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div className="bg-slate-50 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-600 flex items-start">
                          <span className="text-cyan-500 mr-3 mt-1 text-lg">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-cyan-50 p-8 rounded-xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-cyan-600 mb-4">Want to see more?</h3>
            <p className="text-slate-600 mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg"
            >
              <a href="https://github.com/margaretnduta" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                Visit My GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

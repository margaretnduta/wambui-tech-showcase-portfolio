
import React from 'react';
import { Github, ExternalLink, Database, ShoppingCart, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, and payment integration.",
      category: "Web Development",
      technologies: ["Python", "HTML/CSS", "JavaScript", "PostgreSQL"],
      icon: <ShoppingCart className="text-cyan-400" size={32} />,
      githubUrl: "https://github.com/margaretnduta",
      liveUrl: "#",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Admin dashboard for inventory management",
        "Responsive design for all devices"
      ]
    },
    {
      title: "SQL Retail Database",
      description: "Comprehensive retail database system designed to manage inventory, sales, customers, and analytics. Built with PostgreSQL with optimized queries and data integrity.",
      category: "Database Development",
      technologies: ["PostgreSQL", "SQL", "Database Design"],
      icon: <Database className="text-cyan-400" size={32} />,
      githubUrl: "https://github.com/margaretnduta",
      liveUrl: "#",
      features: [
        "Complex relational database design",
        "Optimized SQL queries for performance",
        "Data analytics and reporting",
        "Inventory management system",
        "Customer relationship management"
      ]
    },
    {
      title: "Graphic Design Portfolio",
      description: "Collection of graphic design work including posters, logos, and branding materials. Showcases creativity and design thinking across various projects.",
      category: "Graphic Design",
      technologies: ["Adobe Creative Suite", "Design Principles", "Branding"],
      icon: <Palette className="text-cyan-400" size={32} />,
      githubUrl: "https://github.com/margaretnduta",
      liveUrl: "#",
      features: [
        "Logo design and branding",
        "Event and promotional posters",
        "Digital marketing materials",
        "Corporate identity design",
        "Print and web design assets"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">My Projects</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing my work in web development, database design, and graphic design
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <div className="ml-4">
                      <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                      <span className="text-cyan-400 text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-white font-bold mb-3">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        View Code
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline" 
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
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
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-8 rounded-xl border border-slate-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Want to see more?</h2>
            <p className="text-slate-300 mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              <a href="https://github.com/margaretnduta" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                Visit My GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

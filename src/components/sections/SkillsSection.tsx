
import React from 'react';
import { Database, Code, Palette, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-cyan-500" size={32} />,
      skills: [
        { name: "Python", level: 60 },
        { name: "Java", level: 50 },
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 50 }
      ]
    },
    {
      title: "Databases & Data",
      icon: <Database className="text-cyan-500" size={32} />,
      skills: [
        { name: "SQL", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "Data Analysis", level: 75 },
        { name: "Database Management", level: 72 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <GitBranch className="text-cyan-500" size={32} />,
      skills: [
        { name: "Git & GitHub", level: 70 },
        { name: "Bootstrap", level: 60 },
        { name: "VS Code", level: 80 },
        { name: "GitBash", level: 65 }
      ]
    },
    {
      title: "Design & Creative",
      icon: <Palette className="text-cyan-500" size={32} />,
      skills: [
        { name: "Graphic Design", level: 75 },
        { name: "Logo Design", level: 70 },
        { name: "Poster Design", level: 80 },
        { name: "UI/UX Principles", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200 hover:border-cyan-300 transition-all shadow-lg"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-slate-800 ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600 font-medium">{skill.name}</span>
                      <span className="text-cyan-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200 shadow-lg">
          <h3 className="text-2xl font-bold text-cyan-600 mb-6 text-center">Currently Learning</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-slate-200">
              <h4 className="text-lg font-bold text-slate-800 mb-2">React.js</h4>
              <p className="text-slate-600">Modern web development</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-slate-200">
              <h4 className="text-lg font-bold text-slate-800 mb-2">Node.js</h4>
              <p className="text-slate-600">Backend development</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-slate-200">
              <h4 className="text-lg font-bold text-slate-800 mb-2">MongoDB</h4>
              <p className="text-slate-600">NoSQL databases</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-slate-200">
              <h4 className="text-lg font-bold text-slate-800 mb-2">Python Libraries</h4>
              <p className="text-slate-600">Data analysis & ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

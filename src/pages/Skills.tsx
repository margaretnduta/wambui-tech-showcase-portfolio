
import React from 'react';
import { Database, Code, Palette, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-cyan-400" size={32} />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="text-cyan-400" size={32} />,
      skills: [
        { name: "SQL", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Database Design", level: 82 },
        { name: "Data Analysis", level: 78 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <GitBranch className="text-cyan-400" size={32} />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "GitBash", level: 80 },
        { name: "Bootstrap", level: 88 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      title: "Design & Creative",
      icon: <Palette className="text-cyan-400" size={32} />,
      skills: [
        { name: "Graphic Design", level: 85 },
        { name: "Logo Design", level: 82 },
        { name: "Poster Design", level: 88 },
        { name: "UI/UX Principles", level: 75 }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">My Skills</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold text-white ml-4">{category.title}</h2>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
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

        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-8 rounded-xl border border-slate-700/50">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Currently Learning</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">React.js</h3>
              <p className="text-slate-300">Modern web development</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">Node.js</h3>
              <p className="text-slate-300">Backend development</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">MongoDB</h3>
              <p className="text-slate-300">NoSQL databases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

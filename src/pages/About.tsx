
import React from 'react';
import { GraduationCap, Code, Database, Palette } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">About Me</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate IT student with a drive for innovation and a commitment to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm Margaret Wambui, an Information Technology student at the Technical University of Kenya. 
              My passion lies in creating innovative solutions through code and building applications that 
              make a real difference in people's lives.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Currently pursuing my degree in Information Technology, I've developed a strong foundation 
              in database management, programming, and graphic design. I believe in the power of technology 
              to transform industries and improve lives.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, working on personal projects, 
              or contributing to open-source initiatives. I'm always eager to learn and take on new challenges.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <p className="text-slate-300">Bachelor of Science in Information Technology</p>
              <p className="text-slate-400">Technical University of Kenya</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <Code className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Programming</h3>
              </div>
              <p className="text-slate-300">Python, Java, HTML/CSS, Bootstrap</p>
              <p className="text-slate-400">Git, GitHub, GitBash</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <Database className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Databases</h3>
              </div>
              <p className="text-slate-300">SQL, PostgreSQL</p>
              <p className="text-slate-400">Database Design & Management</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <Palette className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Design</h3>
              </div>
              <p className="text-slate-300">Graphic Design</p>
              <p className="text-slate-400">Posters, Logos, UI/UX</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-8 rounded-xl border border-slate-700/50">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">What Drives Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-slate-300">
                I'm passionate about finding creative solutions to complex problems and 
                building applications that push the boundaries of what's possible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Impact</h3>
              <p className="text-slate-300">
                Every project I work on is driven by the desire to create meaningful 
                impact and contribute to a better technological future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

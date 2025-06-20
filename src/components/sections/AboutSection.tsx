
import React from 'react';
import { GraduationCap, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A dedicated IT student with a passion for data science and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">My Journey</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm Margaret Wambui, an Information Technology student at the Technical University of Kenya. 
              My passion lies in the intersection of data science and software development, where I create 
              innovative solutions that transform raw data into meaningful insights.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Currently pursuing my degree in Information Technology, I've developed expertise in data analysis, 
              database management, and full-stack development. I believe in the power of data-driven decisions 
              and creating software that makes a real impact.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When I'm not coding or analyzing data, you'll find me exploring new technologies, working on 
              personal projects, or contributing to the tech community. I'm always eager to learn and take 
              on new challenges in the ever-evolving world of technology.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-cyan-300 transition-all shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-cyan-500 mr-3" size={28} />
                <h4 className="text-xl font-bold text-slate-800">Education</h4>
              </div>
              <p className="text-slate-600">Bachelor of Science in Information Technology</p>
              <p className="text-slate-500">Technical University of Kenya</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-cyan-300 transition-all shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="text-cyan-500 mr-3" size={28} />
                <h4 className="text-xl font-bold text-slate-800">Specialization</h4>
              </div>
              <p className="text-slate-600">Data Science & Software Development</p>
              <p className="text-slate-500">Full-Stack Development & Analytics</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-cyan-300 transition-all shadow-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-cyan-500 mr-3" size={28} />
                <h4 className="text-xl font-bold text-slate-800">Focus</h4>
              </div>
              <p className="text-slate-600">Innovative Solutions & Data Analysis</p>
              <p className="text-slate-500">Real-World Applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

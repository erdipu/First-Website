import React from 'react';
import { Mail, MapPin, Linkedin, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600 blur-3xl"></div>
         <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-600 blur-3xl"></div>
      </div>

      <div className="max-w-6xl w-full px-6 md:px-12 lg:px-24 z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold tracking-wide mb-2 border border-blue-500/30">
            Information Technology Senior Associate
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-blue-500">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light">
            {PERSONAL_INFO.title} specializing in <span className="text-white font-medium">BMC TrueSight, Helix, & OpsRamp</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 text-slate-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              {PERSONAL_INFO.location}
            </div>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-blue-400" />
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="pt-8 flex gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/25"
            >
              Contact Me
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile Image / Abstract Representation */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl rotate-6 opacity-50 blur-sm"></div>
          <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden shadow-2xl">
             <img 
               src="https://picsum.photos/400/400?grayscale" 
               alt="Deepak Kumar" 
               className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
             />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
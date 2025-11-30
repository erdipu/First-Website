import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO } from '../constants';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-slate-600 mb-6">
            {PERSONAL_INFO.summary}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
               <h3 className="font-semibold text-slate-800 mb-1">Experience</h3>
               <p className="text-slate-600">3+ Years in IT Operations & Monitoring</p>
             </div>
             <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
               <h3 className="font-semibold text-slate-800 mb-1">Education</h3>
               <p className="text-slate-600">B.Tech in Computer Science Engineering</p>
             </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
           <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
             <User className="w-5 h-5 text-blue-600" />
             Quick Facts
           </h3>
           <ul className="space-y-3 text-slate-600">
             <li className="flex justify-between border-b border-slate-200 pb-2">
               <span>Role:</span>
               <span className="font-medium text-slate-800 text-right">Monitoring Administrator</span>
             </li>
             <li className="flex justify-between border-b border-slate-200 pb-2">
               <span>Degree:</span>
               <span className="font-medium text-slate-800 text-right">B.Tech (CSE)</span>
             </li>
             <li className="flex justify-between border-b border-slate-200 pb-2">
               <span>Focus:</span>
               <span className="font-medium text-slate-800 text-right">BMC TrueSight, Helix</span>
             </li>
             <li className="flex justify-between pt-1">
               <span>Location:</span>
               <span className="font-medium text-slate-800 text-right">Noida, India</span>
             </li>
           </ul>
        </div>
      </div>
    </Section>
  );
};
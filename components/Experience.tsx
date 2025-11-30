import React from 'react';
import { Section } from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="space-y-12 relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-9 top-2 bottom-2 w-0.5 bg-slate-200"></div>

        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative md:pl-24">
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-0 top-0 w-18 h-18 items-center justify-center">
              <div className="w-18 h-full flex flex-col items-center">
                 <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm z-10"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-0 md:p-1 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                  <div className="text-blue-600 font-medium flex items-center gap-2 mt-1">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                </div>
                <div className="text-slate-500 text-sm flex flex-col sm:items-end gap-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              {exp.description && (
                <p className="text-slate-600 mb-4">{exp.description}</p>
              )}

              {exp.highlights && (
                <ul className="grid grid-cols-1 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 text-sm md:text-base">
                       <span className="text-blue-500 mt-1.5">•</span>
                       <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Mobile Divider */}
            {index !== EXPERIENCE.length - 1 && (
               <div className="block md:hidden h-px bg-slate-100 my-8"></div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
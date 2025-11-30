import React from 'react';
import { Section } from './Section';
import { SKILL_CATEGORIES, ICONS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Expertise" className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, index) => {
          let Icon = ICONS.Code;
          if (category.title.includes("Monitoring")) Icon = ICONS.Server;
          if (category.title.includes("Cloud")) Icon = ICONS.Cloud;
          
          return (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
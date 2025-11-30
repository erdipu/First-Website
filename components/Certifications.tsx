import React from 'react';
import { Section } from './Section';
import { CERTIFICATIONS, EDUCATION } from '../constants';
import { Award, GraduationCap } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <Section id="education-certs" title="Education & Certifications" className="bg-slate-50">
      
      {/* Education */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          Education
        </h3>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-3xl">
          {EDUCATION.map((edu, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold text-slate-800">{edu.institution}</h4>
              <p className="text-blue-600 font-medium mt-1">{edu.degree}</p>
              <p className="text-slate-500 text-sm mt-2">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-600" />
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 mb-2">{cert.name}</h4>
                {cert.issuer && (
                  <p className="text-sm text-slate-500">Issued by {cert.issuer}</p>
                )}
              </div>
              {cert.year && (
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
                  {cert.year}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
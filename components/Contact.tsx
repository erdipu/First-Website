import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" dark>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
           <p className="text-xl text-slate-300 mb-8">
             I am currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
           </p>
           
           <div className="space-y-6">
             <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
               <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                 <Mail className="w-6 h-6 text-white" />
               </div>
               <div>
                 <p className="text-sm text-slate-400">Email</p>
                 <p className="text-white font-medium">{PERSONAL_INFO.email}</p>
               </div>
             </a>
             
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
               <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                 <Linkedin className="w-6 h-6 text-white" />
               </div>
               <div>
                 <p className="text-sm text-slate-400">LinkedIn</p>
                 <p className="text-white font-medium">Connect on LinkedIn</p>
               </div>
             </a>

             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                 <MapPin className="w-6 h-6 text-white" />
               </div>
               <div>
                 <p className="text-sm text-slate-400">Location</p>
                 <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
             <div>
               <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
               <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" />
             </div>
             <div>
               <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
               <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
             </div>
             <div>
               <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
               <textarea id="message" rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Hello Deepak..."></textarea>
             </div>
             <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors">
               Send Message
             </button>
           </form>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Deepak Kumar. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <span className="text-red-500">♥</span> in React & Tailwind
        </p>
      </div>
    </Section>
  );
};
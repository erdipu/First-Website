import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 relative inline-block ${dark ? 'text-white' : 'text-slate-800'}`}>
            {title}
            <span className={`absolute -bottom-3 left-0 w-1/3 h-1.5 rounded-full ${dark ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

import React from 'react';

export const ScrollStackItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="sticky top-24 min-h-[500px] w-full mb-12 flex items-center justify-center">
      <div className="w-full h-full glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row">
        {children}
      </div>
    </div>
  );
};

const ScrollStack: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-20">
      {children}
    </div>
  );
};

export default ScrollStack;

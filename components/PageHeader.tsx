
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-navy/60 z-10" />
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gold text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;

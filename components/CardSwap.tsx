
import React, { useState } from 'react';
import { Quote } from 'lucide-react';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full h-full bg-royal border border-gold/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
    {children}
  </div>
);

const CardSwap: React.FC<{ children: React.ReactElement[] }> = ({ children }) => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % children.length);
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center cursor-pointer" onClick={nextCard}>
      {children.map((child, i) => {
        const offset = (i - index + children.length) % children.length;
        const isCurrent = offset === 0;
        
        return (
          <div
            key={i}
            className="absolute transition-all duration-700 ease-in-out w-full max-w-lg"
            style={{
              transform: `translateY(${offset * 10}px) scale(${1 - offset * 0.05})`,
              zIndex: children.length - offset,
              opacity: isCurrent ? 1 : 0.4,
              pointerEvents: isCurrent ? 'auto' : 'none',
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default CardSwap;

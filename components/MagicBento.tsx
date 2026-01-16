
import React from 'react';
import { ShieldCheck, Car, Globe, Users, Award, Star } from 'lucide-react';

interface MagicBentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
}

const MagicBento: React.FC<MagicBentoProps> = ({ enableStars = true }) => {
  const items = [
    {
      title: 'DTCM-Approved',
      desc: 'Multilingual Licensed Guides',
      icon: <ShieldCheck className="text-gold" size={28} />,
      size: 'col-span-2 row-span-1',
      bg: 'bg-royal/30'
    },
    {
      title: 'Own Luxury Fleet',
      desc: 'From SUVs to 55-Seater Coaches',
      icon: <Car className="text-gold" size={28} />,
      size: 'col-span-1 row-span-2',
      bg: 'glass-gold'
    },
    {
      title: 'Global Presence',
      desc: 'Dubai & India (Chennai, Trivandrum)',
      icon: <Globe className="text-gold" size={28} />,
      size: 'col-span-1 row-span-1',
      bg: 'bg-royal/40'
    },
    {
      title: 'Dubai\'s Trusted Partner',
      desc: 'Decade of excellence and elite hospitality.',
      icon: <Award className="text-gold" size={28} />,
      size: 'col-span-2 row-span-1',
      bg: 'bg-navy border-gold/10'
    },
    {
      title: 'Customized Packages',
      desc: 'Seamless Experiences Tailored for You',
      icon: <Users className="text-gold" size={28} />,
      size: 'col-span-1 row-span-1',
      bg: 'bg-royal/50'
    }
  ];

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-full max-w-7xl mx-auto px-4 group">
      {enableStars && <div className="star-field animate-star-movement pointer-events-none"></div>}
      
      {items.map((item, i) => (
        <div 
          key={i} 
          className={`${item.size} ${item.bg} glass border rounded-[2.5rem] p-10 flex flex-col justify-end group/item bento-glow transition-all duration-700 cursor-pointer overflow-hidden relative shadow-2xl`}
        >
          {/* Spotlight Effect Simulation */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="absolute top-8 right-8 transform group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-700 ease-out">
            {item.icon}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-white font-serif text-2xl mb-2 tracking-wide font-bold">{item.title}</h3>
            <p className="text-white/40 text-sm font-medium tracking-widest uppercase">{item.desc}</p>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-[80px] group-hover/item:bg-gold/20 transition-all duration-1000"></div>
        </div>
      ))}
    </div>
  );
};

export default MagicBento;

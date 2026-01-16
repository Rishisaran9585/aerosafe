
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';

const CardScroll: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Explore Our Services</h2>
          <div className="w-20 h-1.5 bg-gold rounded-full" />
        </div>
        <p className="text-navy/60 hidden md:block max-w-md text-right">
          Discover a range of premium services tailored for your ultimate Dubai vacation.
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto no-scrollbar pb-8 px-4 sm:px-6 lg:px-24 space-x-8 snap-x">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="group flex-shrink-0 w-80 md:w-96 h-[500px] relative rounded-lg overflow-hidden snap-center shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-white text-2xl font-bold mb-2 font-serif">{service.title}</h3>
                <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>
                <div className="flex items-center text-gold font-bold uppercase text-xs tracking-widest">
                  View Details <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
          {/* Spacer for end of scroll */}
          <div className="flex-shrink-0 w-8 md:w-24" />
        </div>
      </div>
    </section>
  );
};

export default CardScroll;

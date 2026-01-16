
import React from 'react';
import PageHeader from '../components/PageHeader';
import { HOLIDAY_PACKAGES } from '../constants';
import { Clock, Tag, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages: React.FC = () => {
  return (
    <div className="flex flex-col bg-navy min-h-screen">
      <PageHeader 
        title="Extraordinary Journeys" 
        subtitle="Curated Itineraries for the Discerning Traveler"
        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600"
      />

      {/* Category Bento Preview */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Collections</h2>
            <h3 className="text-4xl font-serif text-white">Find Your Ideal Escape</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative h-80 rounded-3xl overflow-hidden group border border-white/10">
              <img src="https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Family" />
              <div className="absolute inset-0 bg-navy/40 flex flex-col justify-end p-10">
                 <h4 className="text-white text-3xl font-serif mb-2">The Family Collection</h4>
                 <p className="text-white/60 text-sm">Adventure-filled trips for all ages.</p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden group border border-white/10">
              <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Honeymoon" />
              <div className="absolute inset-0 bg-navy/60 flex flex-col justify-end p-10">
                 <h4 className="text-white text-3xl font-serif mb-2">Romantic Escapes</h4>
                 <p className="text-white/60 text-sm">Intimate moments in luxury.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#08182D]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {HOLIDAY_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="group relative glass border border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-gold text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {pkg.category}
                  </div>
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 font-serif">{pkg.title}</h3>
                    <div className="flex flex-col gap-3 mb-6">
                      <div className="flex items-center text-white/60 text-sm">
                        <Clock size={16} className="mr-3 text-gold" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <Tag size={16} className="mr-3 text-gold" />
                        <span>From <span className="text-gold font-bold text-2xl ml-2">{pkg.price}</span></span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                       {['VIP Airport Meet & Greet', 'Luxury Private Transfers', 'Daily Gourmet Breakfast'].map((item, i) => (
                         <li key={i} className="flex items-center text-white/40 text-xs">
                           <Check size={12} className="text-gold mr-2" /> {item}
                         </li>
                       ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="w-full bg-gold text-white text-center py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-navy transition-all flex items-center justify-center rounded-full">
                    Reserve This Journey <ChevronRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Bespoke Itineraries</h2>
          <p className="text-white/40 text-lg mb-10 font-light leading-relaxed">
            Our travel consultants are masters of fine-tuning details. From private jet charters to exclusive villa bookings, we design journeys that reflect your personal legacy.
          </p>
          <Link to="/contact" className="inline-block border border-gold text-gold px-12 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold hover:text-white transition-all">
            Consult An Expert
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Packages;

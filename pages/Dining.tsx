
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Utensils, Waves, Music, GlassWater } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dining: React.FC = () => {
  return (
    <div className="flex flex-col bg-navy">
      <PageHeader 
        title="Culinary Excellence" 
        subtitle="Curated Gastronomy in the Heart of Dubai"
        image="https://images.unsplash.com/photo-1581009146145-b5ef03a94e78?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
            <div className="order-2 lg:order-1">
              <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1544161515-4af6b1d8c159?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Dhow Cruise" />
                <div className="absolute inset-0 bg-navy/20"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Marine Gastronomy</h2>
              <h3 className="text-4xl md:text-7xl font-serif text-white mb-10 leading-tight">Dhow <br/> <span className="italic text-gold">Cruise Dinner</span></h3>
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">
                Witness the Dubai Marina skyline illuminate as you sail on a traditional wooden dhow. A 5-star international buffet paired with live Tanura dance.
              </p>
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold"><Waves size={18}/></div>
                  <span className="text-white font-bold tracking-widest text-[10px] uppercase">Marina Canal Navigation</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold"><Utensils size={18}/></div>
                  <span className="text-white font-bold tracking-widest text-[10px] uppercase">International 5-Star Buffet</span>
                </div>
              </div>
              <Link to="/contact" className="bg-gold text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:bg-white hover:text-navy transition-all">
                Reserve A Table
              </Link>
            </div>
          </div>

          <div className="text-center mb-24">
             <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Fine Dining</h2>
             <h3 className="text-4xl md:text-6xl font-serif text-white">Elite Reservations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Atmosphere', area: 'Burj Khalifa', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800' },
              { name: 'Ossiano', area: 'Atlantis Palm', img: 'https://images.unsplash.com/photo-1550966841-3ee5ad601001?auto=format&fit=crop&q=80&w=800' },
              { name: 'Zuma Dubai', area: 'DIFC', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800' },
            ].map((rest, i) => (
              <div key={i} className="group relative h-[500px] overflow-hidden rounded-[3rem]">
                <img src={rest.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-12">
                   <h4 className="text-white text-3xl font-serif mb-2 tracking-wide">{rest.name}</h4>
                   <p className="text-gold font-bold text-[9px] uppercase tracking-[0.4em]">{rest.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;

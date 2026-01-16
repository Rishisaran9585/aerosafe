
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Check, Shield, Users, Wifi, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fleet: React.FC = () => {
  const fleetCategories = [
    {
      title: 'Luxury 7-Seater',
      desc: 'Perfect for VIP Families and Small Private Groups.',
      img: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&q=80&w=800',
      specs: ['Recliner Seats', 'Dual AC', 'Bottled Water', 'Premium Sound']
    },
    {
      title: '12-Seater Mini Coach',
      desc: 'Boutique group travel with ample luggage space.',
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
      specs: ['WiFi Onboard', 'Charging Ports', 'Expert Chauffeur', 'Professional Audio']
    },
    {
      title: '35-Seater Tourist Bus',
      desc: 'The gold standard for mid-sized corporate delegations.',
      img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
      specs: ['Panoramic Windows', 'Microphone System', 'High-Roof Comfort', 'Punctual Service']
    },
    {
      title: '55-Seater Grand Coach',
      desc: 'Maximum luxury for large tours and international events.',
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
      specs: ['Lavatory Onboard', 'Entertainment Screen', 'Climate Control', 'Massive Storage']
    }
  ];

  return (
    <div className="flex flex-col bg-navy">
      <PageHeader 
        title="The Elite Fleet" 
        subtitle="Unmatched Precision in Transportation"
        image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">World-Class Fleet</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-10">Maintained to <span className="italic text-gold">Perfection</span></h3>
            <p className="text-white/40 max-w-2xl mx-auto text-xl font-light">Every vehicle in our collection undergoes rigorous safety checks and is sanitized daily for your total peace of mind.</p>
          </div>

          <div className="space-y-32">
            {fleetCategories.map((cat, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                <div className="lg:w-1/2 group relative">
                  <div className="absolute inset-0 bg-gold/10 rounded-[3rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={cat.img} className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt={cat.title} />
                </div>
                <div className="lg:w-1/2">
                  <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Fleet Tier {i + 1}</h4>
                  <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">{cat.title}</h2>
                  <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">{cat.desc}</p>
                  <ul className="grid grid-cols-2 gap-6 mb-12">
                    {cat.specs.map((spec, j) => (
                      <li key={j} className="flex items-center text-white/50 text-sm">
                        <Check className="text-gold mr-3" size={16} /> {spec}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="bg-gold text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-navy transition-all shadow-2xl">
                    Book This Vehicle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="py-32 bg-[#050D1D] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div className="glass p-12 rounded-[2.5rem] border-white/5">
            <Shield className="text-gold mx-auto mb-6" size={40} />
            <h5 className="text-white font-serif text-xl mb-4">Punctual & Safe</h5>
            <p className="text-white/30 text-xs leading-relaxed uppercase tracking-widest">Rigorous Scheduling</p>
          </div>
          <div className="glass p-12 rounded-[2.5rem] border-white/5">
            <Users className="text-gold mx-auto mb-6" size={40} />
            <h5 className="text-white font-serif text-xl mb-4">Pro Chauffeurs</h5>
            <p className="text-white/30 text-xs leading-relaxed uppercase tracking-widest">Uniformed Experts</p>
          </div>
          <div className="glass p-12 rounded-[2.5rem] border-white/5">
            <Wifi className="text-gold mx-auto mb-6" size={40} />
            <h5 className="text-white font-serif text-xl mb-4">Modern Tech</h5>
            <p className="text-white/30 text-xs leading-relaxed uppercase tracking-widest">WiFi & Entertainment</p>
          </div>
          <div className="glass p-12 rounded-[2.5rem] border-white/5">
            <Zap className="text-gold mx-auto mb-6" size={40} />
            <h5 className="text-white font-serif text-xl mb-4">Daily Service</h5>
            <p className="text-white/30 text-xs leading-relaxed uppercase tracking-widest">Sparkling Clean</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;

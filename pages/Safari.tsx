
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Compass, Zap, Moon, Sun, Camera, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Safari: React.FC = () => {
  return (
    <div className="flex flex-col bg-navy">
      <PageHeader 
        title="The Golden Dunes" 
        subtitle="Unforgettable Desert Adventures"
        image="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Arabian Safaris</h2>
            <h3 className="text-5xl md:text-8xl font-serif text-white">Desert <span className="italic text-gold">Mystique</span></h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { title: 'Morning Safari', icon: <Sun />, time: '8:00 AM', desc: 'Pure adrenaline and sandboarding.' },
              { title: 'Evening Safari', icon: <Zap />, time: '3:00 PM', desc: 'Sunset dunes and BBQ feast.' },
              { title: 'Overnight Safari', icon: <Moon />, time: '3:00 PM+', desc: 'Camping under the star-lit sky.' },
            ].map((safari, i) => (
              <div key={i} className="glass p-16 rounded-[3rem] border-white/5 text-center group hover:border-gold/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-24 h-24 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform">
                    {React.cloneElement(safari.icon as React.ReactElement, { size: 40 })}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-6 font-bold">{safari.title}</h3>
                  <p className="text-gold font-bold mb-8 text-[10px] tracking-[0.4em] uppercase">{safari.time} Launch</p>
                  <p className="text-white/40 text-sm leading-relaxed mb-12">{safari.desc}</p>
                </div>
                <Link to="/contact" className="block bg-navy border border-white/10 text-white py-5 rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-gold hover:border-gold transition-all">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure grid */}
      <section className="py-32 bg-[#050D1D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <h4 className="text-white font-serif text-4xl mb-6">Beyond The Dunes</h4>
              <p className="text-white/30 tracking-[0.3em] uppercase text-xs">Adventure Assistance</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Quad Biking', img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=400' },
                { title: 'Dune Buggy', img: 'https://images.unsplash.com/photo-1549416563-3832c3f15c72?auto=format&fit=crop&q=80&w=400' },
                { title: 'Hot Air Balloon', img: 'https://images.unsplash.com/photo-1520110120835-c96a9ef95690?auto=format&fit=crop&q=80&w=400' },
                { title: 'Skydiving Help', img: 'https://images.unsplash.com/photo-1521652352484-3b66453075b8?auto=format&fit=crop&q=80&w=400' },
              ].map((adv, i) => (
                <div key={i} className="group relative h-96 rounded-[2.5rem] overflow-hidden">
                   <img src={adv.img} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" />
                   <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                      <h5 className="text-white font-serif text-2xl tracking-wide">{adv.title}</h5>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Safari;

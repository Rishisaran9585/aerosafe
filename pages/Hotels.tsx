
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Star, MapPin, Coffee, Wifi, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hotels: React.FC = () => {
  const hotelCategories = [
    { title: 'Budget Excellence', desc: 'Premium comfort without the ultra-luxury price tag.', icon: <CheckCircle className="text-gold" /> },
    { title: 'Premium Stays', desc: 'High-end properties in the heart of Downtown or Marina.', icon: <CheckCircle className="text-gold" /> },
    { title: 'Luxury 5-Star Resorts', desc: 'World-renowned icons like Atlantis and Burj Al Arab.', icon: <CheckCircle className="text-gold" /> },
  ];

  return (
    <div className="flex flex-col bg-navy">
      <PageHeader 
        title="Hospitality Elite" 
        subtitle="The World's Finest Properties at Exclusive Rates"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
             {hotelCategories.map((cat, i) => (
               <div key={i} className="glass p-12 rounded-[3rem] border-white/5 text-center group">
                  <div className="mb-8 flex justify-center">{cat.icon}</div>
                  <h4 className="text-white font-serif text-2xl mb-4">{cat.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{cat.desc}</p>
               </div>
             ))}
          </div>

          <div className="text-center mb-24">
            <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Partner Collections</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-white">Our Selection</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Atlantis The Royal', area: 'Palm Jumeirah', img: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800' },
              { name: 'Burj Al Arab', area: 'Jumeirah', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
              { name: 'Address Downtown', area: 'Downtown Dubai', img: 'https://images.unsplash.com/photo-1578683010236-d716f9759678?auto=format&fit=crop&q=80&w=800' },
              { name: 'JW Marriott Marquis', area: 'Business Bay', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800' },
              { name: 'Zabeel Saray', area: 'Palm West', img: 'https://images.unsplash.com/photo-1571011270518-2c6c10500bb8?auto=format&fit=crop&q=80&w=800' },
              { name: 'Rixos Premium', area: 'JBR', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
            ].map((hotel, i) => (
              <div key={i} className="group overflow-hidden rounded-[3rem] shadow-2xl bg-royal/40 border border-white/5">
                <div className="h-80 overflow-hidden relative">
                  <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-8 left-8 flex text-gold drop-shadow-lg">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <div className="p-12">
                  <h3 className="text-3xl font-bold text-white mb-4 font-serif">{hotel.name}</h3>
                  <p className="text-white/40 text-sm flex items-center mb-10 tracking-widest uppercase">
                    <MapPin size={16} className="mr-3 text-gold" /> {hotel.area}
                  </p>
                  <div className="flex space-x-6 mb-12 border-t border-white/5 pt-8">
                    <Coffee size={24} className="text-white/20" />
                    <Wifi size={24} className="text-white/20" />
                  </div>
                  <Link to="/contact" className="block text-center bg-gold text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-navy transition-all">
                    Enquire Rates
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why book */}
      <section className="py-32 bg-[#050D1D] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h4 className="text-white font-serif text-4xl mb-12">Why Book With Us?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-white/40 tracking-[0.2em] uppercase">
               <div>Best Negotiated Rates</div>
               <div>Flexible Payment Plans</div>
               <div>VIP Room Upgrades</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Hotels;

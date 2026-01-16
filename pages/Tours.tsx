
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Ticket, MapPin, Camera, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tours: React.FC = () => {
  const attractions = [
    { title: 'Burj Khalifa', desc: 'World\'s tallest tower.', area: 'Downtown', img: 'https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&q=80&w=800' },
    { title: 'Museum of the Future', desc: 'Gateway to tomorrow.', area: 'SZR', img: 'https://images.unsplash.com/photo-1647427017067-8f33ccbc9953?auto=format&fit=crop&q=80&w=800' },
    { title: 'Theme Parks', desc: 'IMG Worlds & Parks & Resorts.', area: 'Jebel Ali', img: 'https://images.unsplash.com/photo-1583000292278-59b219356024?auto=format&fit=crop&q=80&w=800' },
    { title: 'Dubai City Tour', desc: 'Old vs New Discovery.', area: 'City Wide', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Aquaventure', desc: 'World\'s largest waterpark.', area: 'Palm Jumeirah', img: 'https://images.unsplash.com/photo-1526495124232-a02e18491881?auto=format&fit=crop&q=80&w=800' },
    { title: 'Indoor Skiing', desc: 'Ski Dubai in MOE.', area: 'Al Barsha', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="flex flex-col bg-navy">
      <PageHeader 
        title="Wonders of Dubai" 
        subtitle="Exclusive Access to Iconic Landmarks"
        image="https://images.unsplash.com/photo-1523496922380-91d5afcf98ba?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Popular Attractions</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white">Experience the <span className="italic text-gold">Magnificent</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {attractions.map((att, i) => (
              <div key={i} className="group relative h-[600px] overflow-hidden rounded-[3rem] shadow-2xl border border-white/5">
                <img src={att.img} alt={att.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-16 w-full">
                  <h3 className="text-4xl font-serif text-white mb-4">{att.title}</h3>
                  <p className="text-white/60 text-lg mb-8 font-light">{att.desc}</p>
                  <div className="flex items-center text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                     <MapPin size={14} className="mr-2" /> {att.area}
                  </div>
                  <Link to="/contact" className="inline-flex items-center text-white font-bold uppercase text-[10px] tracking-[0.3em] border-b border-gold/40 pb-3 hover:border-gold transition-all">
                    Instant Enquiry <Ticket size={16} className="ml-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket note */}
      <section className="py-32 bg-[#050D1D] border-y border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <Info className="text-gold mx-auto mb-10 opacity-60" size={40} />
            <p className="text-white/40 text-xl font-light italic leading-relaxed">
              "We provide skip-the-line access and pre-booked tickets for all major attractions in the UAE, ensuring you spend your holiday exploring, not waiting in queues."
            </p>
         </div>
      </section>
    </div>
  );
};

export default Tours;

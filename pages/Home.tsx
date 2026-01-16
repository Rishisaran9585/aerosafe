
import React from 'react';
import Hero from '../components/Hero';
import MagicBento from '../components/MagicBento';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import CardSwap, { Card } from '../components/CardSwap';
// Fix: Added MapPin to the imported icons from lucide-react
import { ChevronRight, ArrowRight, Star, Play, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const experiences = [
    { title: 'Desert Safari', img: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=400', path: '/safari' },
    { title: 'City Tours', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400', path: '/tours' },
    { title: 'Adventure', img: 'https://images.unsplash.com/photo-1526495124232-a02e18491881?auto=format&fit=crop&q=80&w=400', path: '/safari' },
    { title: 'Luxury Dining', img: 'https://images.unsplash.com/photo-1581009146145-b5ef03a94e78?auto=format&fit=crop&q=80&w=400', path: '/dining' },
    { title: 'Attractions', img: 'https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&q=80&w=400', path: '/tours' },
  ];

  return (
    <div className="bg-navy overflow-x-hidden">
      <Hero />

      {/* Signature Experiences - Circular Gallery */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">The Curated Collection</h2>
          <h3 className="text-5xl md:text-8xl font-serif text-white italic">Signature Experiences</h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto px-6">
          {experiences.map((exp, i) => (
            <Link key={i} to={exp.path} className="group relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 group-hover:border-gold transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
                <img src={exp.img} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 group-hover:rotate-6" alt={exp.title} />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-[10px] uppercase tracking-[0.4em]">Explore More</span>
                </div>
              </div>
              <h4 className="text-white text-center mt-8 font-serif text-2xl tracking-wide group-hover:text-gold transition-all duration-500">{exp.title}</h4>
            </Link>
          ))}
        </div>
      </section>

      {/* Scroll Stack Showcase */}
      <section className="py-32 bg-navy relative">
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Extraordinary Detail</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white">Curated Luxury Safaris</h3>
        </div>
        
        <ScrollStack>
          <ScrollStackItem>
            <div className="md:w-1/2 overflow-hidden h-[500px] md:h-auto">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Safari" />
            </div>
            <div className="md:w-1/2 p-16 md:p-24 flex flex-col justify-center bg-royal/40 backdrop-blur-xl">
              <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Experience No. 01</h4>
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">Platinum <br/> Desert Safari</h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed font-light">
                Escape the city pulse for the timeless silence of the dunes. Private 4x4 convoys, artisan-crafted BBQ, and VIP heritage camp access.
              </p>
              <Link to="/safari" className="group flex items-center text-white font-bold uppercase tracking-[0.3em] text-[10px] border-b border-gold/40 pb-3 w-fit hover:border-gold transition-all">
                The Journey Awaits <ChevronRight size={18} className="ml-3 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="md:w-1/2 p-16 md:p-24 flex flex-col justify-center order-2 md:order-1 bg-royal/60 backdrop-blur-xl">
              <h4 className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Experience No. 02</h4>
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">Elite City <br/> Discoveries</h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed font-light">
                Dubai from a different perspective. Private chauffeurs and expert guides taking you beyond the Burj to the heart of old and new Dubai.
              </p>
              <Link to="/tours" className="group flex items-center text-white font-bold uppercase tracking-[0.3em] text-[10px] border-b border-gold/40 pb-3 w-fit hover:border-gold transition-all">
                Urban Exploration <ChevronRight size={18} className="ml-3 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </div>
            <div className="md:w-1/2 overflow-hidden h-[500px] md:h-auto order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="City" />
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </section>

      {/* Why Choose Us - Bento */}
      <section className="py-32 bg-[#050D1D] relative">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">The Aerosafe Advantage</h2>
          <h3 className="text-4xl md:text-7xl font-serif text-white mb-6">Dubai's Premier Partner</h3>
          <p className="text-white/40 max-w-2xl text-xl font-light">Excellence in every mile, safety in every seat. We bring corporate-grade reliability to the world of bespoke leisure.</p>
        </div>
        <MagicBento enableStars={true} />
      </section>

      {/* Fleet Showcase */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">The Elite Fleet</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white italic">Unmatched Presence</h3>
          </div>
          <Link to="/fleet" className="text-gold flex items-center uppercase tracking-[0.3em] text-[10px] font-bold group border border-gold/30 px-10 py-5 rounded-full hover:bg-gold hover:text-white transition-all">
            Full Fleet Catalog <ArrowRight size={18} className="ml-3 group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
        
        <div className="flex overflow-x-auto no-scrollbar gap-10 px-6 md:px-24 snap-x">
          {[
            { name: '7-Seater Luxury Van', desc: 'Private VIP Travel', img: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&q=80&w=800' },
            { name: '12-Seater Mini Coach', desc: 'Boutique Small Groups', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800' },
            { name: '35-Seater Tourist Bus', desc: 'Corporate Delegations', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800' },
            { name: '55-Seater Luxury Coach', desc: 'Grand Group Tours', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800' },
          ].map((car, i) => (
            <div key={i} className="min-w-[320px] md:min-w-[500px] snap-center">
              <div className="aspect-[16/10] glass rounded-[3rem] overflow-hidden mb-10 relative group border-white/5 shadow-2xl">
                <img src={car.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={car.name} />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h4 className="text-white text-3xl font-serif tracking-wide">{car.name}</h4>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-4 font-bold">{car.desc} • WiFi • Recliner Seats</p>
            </div>
          ))}
          <div className="min-w-[100px]"></div>
        </div>
      </section>

      {/* Presence Map Section */}
      <section className="py-32 bg-[#050D1D] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Our Global Network</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-white mb-10">Dubai & India</h3>
            <p className="text-white/60 mb-12 leading-relaxed text-xl font-light">
              We bridge the world between Aerosafe Tours (Dubai) and First Dream Destination (India). Providing exclusive support across Chennai and Trivandrum for personalized travel services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="glass p-10 rounded-[2.5rem] border-gold/10 hover:border-gold/30 transition-all">
                <MapPin className="text-gold mb-4" size={28} />
                <h4 className="text-white font-bold mb-3 tracking-wide">Dubai Headquarters</h4>
                <p className="text-white/40 text-sm leading-relaxed">Fleet management and destination ops.</p>
              </div>
              <div className="glass p-10 rounded-[2.5rem] border-gold/10 hover:border-gold/30 transition-all">
                <MapPin className="text-gold mb-4" size={28} />
                <h4 className="text-white font-bold mb-3 tracking-wide">India Strategic Hubs</h4>
                <p className="text-white/40 text-sm leading-relaxed">Chennai & Trivandrum outbound support.</p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
             <div className="aspect-square glass rounded-full flex items-center justify-center p-10 animate-pulse-slow border-gold/20 relative shadow-[0_0_100px_rgba(197,160,89,0.1)]">
                <div className="absolute inset-0 bg-gold/5 rounded-full blur-[120px]"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5">
                  <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover mix-blend-luminosity opacity-20" alt="World Map" />
                </div>
                <div className="absolute flex flex-col items-center">
                  <div className="w-4 h-4 bg-gold rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-gold rounded-full relative"></div>
                  <span className="font-bold tracking-[0.5em] text-2xl text-white mt-4 bg-navy/80 px-10 py-3 rounded-full border border-gold/30 backdrop-blur-xl shadow-2xl">DUBAI</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Guest Stories</h2>
          <h3 className="text-5xl md:text-8xl font-serif text-white">Trust In Excellence</h3>
        </div>
        <CardSwap>
          <Card>
            <div className="flex justify-center text-gold mb-8"><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/></div>
            <p className="text-white text-2xl md:text-4xl font-serif italic mb-10 leading-snug">"Aerosafe redefined our expectations. From the Rolls Royce transfer to the private desert camp, every moment was sheer perfection."</p>
            <p className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Sarah L. • CEO & Founder</p>
          </Card>
          <Card>
            <div className="flex justify-center text-gold mb-8"><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/></div>
            <p className="text-white text-2xl md:text-4xl font-serif italic mb-10 leading-snug">"The most professional travel partner we've used in Dubai. Their fleet is spotless and the drivers are true professionals."</p>
            <p className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">David M. • London</p>
          </Card>
        </CardSwap>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')] opacity-10 z-[1]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-navy text-6xl md:text-8xl font-serif font-bold mb-10 leading-tight">Plan Your Dubai Experience <br className="hidden md:block" /> With Aerosafe Today</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
            <Link to="/contact" className="w-full sm:w-auto bg-navy text-white px-20 py-7 rounded-full font-bold uppercase tracking-[0.3em] text-xs shadow-2xl hover:scale-105 transition-all active:scale-95">
              Enquire Now
            </Link>
            <a href="https://wa.me/971000000000" className="w-full sm:w-auto bg-white text-navy px-20 py-7 rounded-full font-bold uppercase tracking-[0.3em] text-xs shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

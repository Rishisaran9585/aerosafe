
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Target, Users, Award, Shield, Globe, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-navy">
      <PageHeader 
        title="Our Heritage" 
        subtitle="Excellence in Motion Since 2010"
        image="https://images.unsplash.com/photo-1546412414-e188526159bc?auto=format&fit=crop&q=80&w=1600"
      />
      
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Who We Are</h2>
              <h3 className="text-4xl md:text-7xl font-serif text-white mb-10 leading-tight">Aerosafe <span className="italic text-gold">Tours</span></h3>
              <p className="text-white/60 text-xl mb-8 leading-relaxed font-light">
                Aerosafe Tours is a Dubai-based premium travel company offering unforgettable experiences across the UAE. We aren't just a travel agency; we are your local concierge in the heart of the desert.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="glass p-8 rounded-[2rem] border-white/5">
                   <Award className="text-gold mb-4" size={32} />
                   <h4 className="text-white font-bold mb-2">Licensed & Approved</h4>
                   <p className="text-white/40 text-sm">DTCM approved guides ensuring safe and professional tours.</p>
                </div>
                <div className="glass p-8 rounded-[2rem] border-white/5">
                   <Shield className="text-gold mb-4" size={32} />
                   <h4 className="text-white font-bold mb-2">Years of Expertise</h4>
                   <p className="text-white/40 text-sm">A decade of providing elite destination management services.</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/10 rounded-[3rem] blur-[100px] pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200" 
                alt="Dubai Headquarters" 
                className="rounded-[3rem] shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-12 -right-12 glass p-10 rounded-[2.5rem] shadow-2xl z-20 border-gold/20 hidden md:block">
                 <p className="text-6xl font-serif text-gold font-bold mb-2">10+</p>
                 <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sister Brand Section */}
      <section className="py-32 bg-royal/20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Global Synergy</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">First Dream <span className="italic">Destination</span></h3>
            <p className="max-w-2xl mx-auto text-white/40 mt-8 text-lg font-light leading-relaxed">
              Our specialized India presence enables a unique bridge for seamless inbound & outbound travel between the GCC and South Asia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-12 rounded-[3rem] border-gold/10 hover:border-gold/30 transition-all">
              <div className="flex justify-between items-start mb-10">
                 <h4 className="text-white text-4xl font-serif">Chennai Office</h4>
                 <MapPin className="text-gold" size={32} />
              </div>
              <p className="text-white/60 mb-10 font-light leading-relaxed">
                Strategic operations center in Tamil Nadu, serving the outbound luxury market for Dubai and European tours.
              </p>
              <div className="flex items-center space-x-2 text-gold font-bold text-xs uppercase tracking-widest">
                 <span>Strategic Outbound Hub</span>
              </div>
            </div>
            
            <div className="glass p-12 rounded-[3rem] border-gold/10 hover:border-gold/30 transition-all">
              <div className="flex justify-between items-start mb-10">
                 <h4 className="text-white text-4xl font-serif">Trivandrum Office</h4>
                 <MapPin className="text-gold" size={32} />
              </div>
              <p className="text-white/60 mb-10 font-light leading-relaxed">
                Serving the heart of Kerala, bringing authentic experiences and seamless visa support to international travelers.
              </p>
              <div className="flex items-center space-x-2 text-gold font-bold text-xs uppercase tracking-widest">
                 <span>Kerala Operations Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <Target className="w-16 h-16 text-gold mx-auto mb-10 opacity-60" />
            <h3 className="text-2xl font-serif text-white mb-6">End-to-End Solutions</h3>
            <p className="text-white/40 text-sm leading-relaxed">From the first enquiry to the final airport drop-off, we manage every detail of your journey with absolute precision.</p>
          </div>
          <div>
            <Users className="w-16 h-16 text-gold mx-auto mb-10 opacity-60" />
            <h3 className="text-2xl font-serif text-white mb-6">Own Transportation</h3>
            <p className="text-white/40 text-sm leading-relaxed">We maintain a private fleet of premium vehicles, ensuring unparalleled safety, punctuality, and luxury for our guests.</p>
          </div>
          <div>
            <Globe className="w-16 h-16 text-gold mx-auto mb-10 opacity-60" />
            <h3 className="text-2xl font-serif text-white mb-6">Bilingual Support</h3>
            <p className="text-white/40 text-sm leading-relaxed">Our multicultural team bridges language gaps, offering localized support in English, Arabic, Hindi, Tamil, and Malayalam.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

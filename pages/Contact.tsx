
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col bg-navy">
      <PageHeader 
        title="Connect" 
        subtitle="Global Assistance • Local Expertise"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Plan Your Trip</h2>
              <h3 className="text-4xl md:text-7xl font-serif text-white mb-10 leading-tight">Start Your <br/> <span className="italic text-gold">Journey</span></h3>
              <p className="text-white/40 text-lg mb-12 font-light">Fill out our elite travel concierge form and we will reach out within 24 hours.</p>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" className="w-full px-8 py-5 glass border-white/10 rounded-full focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/20" placeholder="Full Name" />
                  <input type="email" className="w-full px-8 py-5 glass border-white/10 rounded-full focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/20" placeholder="Email Address" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="tel" className="w-full px-8 py-5 glass border-white/10 rounded-full focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/20" placeholder="Phone Number" />
                  <select className="w-full px-8 py-5 glass border-white/10 rounded-full focus:outline-none focus:border-gold transition-colors text-white/50 bg-navy appearance-none">
                    <option>Requirement: Holiday Package</option>
                    <option>Requirement: Visa Assistance</option>
                    <option>Requirement: Luxury Transport</option>
                    <option>Requirement: Corporate Booking</option>
                  </select>
                </div>
                <textarea rows={5} className="w-full px-8 py-5 glass border-white/10 rounded-[2rem] focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/20" placeholder="Your travel requirement details..."></textarea>
                <button className="w-full bg-gold text-white font-bold py-6 px-12 rounded-full hover:bg-white hover:text-navy transition-all flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-[10px]">
                  <span>Plan My Trip Now</span>
                  <Send size={16} />
                </button>
              </form>
            </div>

            <div className="space-y-20">
              <div className="flex gap-10 group">
                <div className="w-16 h-16 glass rounded-full flex items-center justify-center text-gold border-gold/20 group-hover:scale-110 transition-transform"><Globe size={24}/></div>
                <div>
                  <h4 className="text-white font-serif text-3xl mb-4">Dubai (H.O)</h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">P.O. Box 1234, Business Bay, <br/> Dubai, United Arab Emirates.</p>
                  <p className="text-gold font-bold tracking-widest text-[10px] uppercase">+971 4 000 0000</p>
                </div>
              </div>

              <div className="flex gap-10 group">
                <div className="w-16 h-16 glass rounded-full flex items-center justify-center text-gold border-gold/20 group-hover:scale-110 transition-transform"><MapPin size={24}/></div>
                <div>
                  <h4 className="text-white font-serif text-3xl mb-4">Chennai Office</h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">No. 12, First Dream Destination, Anna Salai, <br/> Chennai, Tamil Nadu, India.</p>
                  <p className="text-gold font-bold tracking-widest text-[10px] uppercase">+91 44 0000 0000</p>
                </div>
              </div>

              <div className="flex gap-10 group">
                <div className="w-16 h-16 glass rounded-full flex items-center justify-center text-gold border-gold/20 group-hover:scale-110 transition-transform"><MapPin size={24}/></div>
                <div>
                  <h4 className="text-white font-serif text-3xl mb-4">Trivandrum Office</h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">Opp. Secretariat, MG Road, <br/> Trivandrum, Kerala, India.</p>
                  <p className="text-gold font-bold tracking-widest text-[10px] uppercase">+91 471 000 0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.236681023253!2d55.333333!3d25.266667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzAwLjAiTiA1NcKwMjAnMDAuMCJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-navy/20 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Contact;

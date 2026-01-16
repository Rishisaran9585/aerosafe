
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Check, Info, FileText, Send, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Visa: React.FC = () => {
  const visaTypes = [
    { title: '14 Days Tourist', desc: 'Short stay for business or layovers.', price: 'Quick Pass' },
    { title: '30 Days Tourist', desc: 'Ideal for standard holidays.', price: 'Popular' },
    { title: '60 Days Tourist', desc: 'Extended family or long discovery trips.', price: 'Extended' },
    { title: 'Multiple Entry', desc: 'Flexible travel in and out of UAE.', price: 'Elite' },
  ];

  return (
    <div className="flex flex-col bg-navy">
      <PageHeader 
        title="Visa Concierge" 
        subtitle="Hassle-Free Gateway to the Emirates"
        image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Expert Processing</h2>
              <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">Fast-Track <br/> <span className="italic text-gold">Approval</span></h3>
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">
                We handle the bureaucracy so you can plan the adventure. Our direct links with UAE immigration authorities ensure a high approval rate and minimal turnaround time.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                   <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                      <FileText size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold mb-2">Simple Documentation</h4>
                      <p className="text-white/40 text-sm">Send us a passport scan and a photograph. We handle the rest.</p>
                   </div>
                </div>
                <div className="flex items-start gap-6">
                   <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                      <Zap size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold mb-2">48-72 Hour Processing</h4>
                      <p className="text-white/40 text-sm">Most applications are approved within 3 business days.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visaTypes.map((v, i) => (
                <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-gold/30 transition-all flex flex-col justify-between group">
                   <div>
                     <span className="text-gold font-bold text-[9px] uppercase tracking-[0.3em] mb-4 block group-hover:translate-x-2 transition-transform">{v.price}</span>
                     <h4 className="text-white text-3xl font-serif mb-4">{v.title}</h4>
                     <p className="text-white/40 text-xs leading-relaxed mb-10">{v.desc}</p>
                   </div>
                   <Link to="/contact" className="text-white font-bold text-[10px] uppercase tracking-widest border-b border-white/10 pb-2 w-fit group-hover:border-gold transition-colors">Apply Now</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-32 bg-[#050D1D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-serif text-white mb-20 italic">Our Three-Step Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="relative">
                <div className="text-gold/20 text-9xl font-serif absolute -top-10 left-1/2 -translate-x-1/2 select-none">01</div>
                <div className="relative z-10">
                   <h5 className="text-white font-serif text-2xl mb-4">Submission</h5>
                   <p className="text-white/30 text-sm">Submit your digital documents via email or WhatsApp.</p>
                </div>
             </div>
             <div className="relative">
                <div className="text-gold/20 text-9xl font-serif absolute -top-10 left-1/2 -translate-x-1/2 select-none">02</div>
                <div className="relative z-10">
                   <h5 className="text-white font-serif text-2xl mb-4">Processing</h5>
                   <p className="text-white/30 text-sm">Our expert team reviews and monitors your application status.</p>
                </div>
             </div>
             <div className="relative">
                <div className="text-gold/20 text-9xl font-serif absolute -top-10 left-1/2 -translate-x-1/2 select-none">03</div>
                <div className="relative z-10">
                   <h5 className="text-white font-serif text-2xl mb-4">Delivery</h5>
                   <p className="text-white/30 text-sm">Receive your electronic visa directly to your device.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visa;

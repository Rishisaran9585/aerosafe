
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-navy">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-dubai-skyline-at-night-4919-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6 animate-pulse-slow">
            <span className="w-12 h-[2px] bg-gold"></span>
            <p className="text-gold font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">
              Luxury • Trust • Cinematic • Global
            </p>
          </div>
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-[1] tracking-tighter text-glow">
            Discover <span className="italic">Dubai</span> <br />
            Like Never Before
          </h1>
          <p className="text-white/70 text-lg md:text-2xl mb-12 max-w-3xl font-light leading-relaxed tracking-wider">
            Luxury Tours • Premium Fleet • Multilingual Guides • Seamless Experiences. <br className="hidden md:block" />
            Your premier gateway to the heart of the Emirates.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link
              to="/packages"
              className="group relative w-full sm:w-auto bg-gold hover:bg-white hover:text-navy text-white px-14 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.4em] transition-all shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10">Explore Packages</span>
              <ChevronRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
            
            <Link
              to="/contact"
              className="group relative w-full sm:w-auto border border-white/30 hover:border-gold px-14 py-6 rounded-full font-bold text-[10px] text-white uppercase tracking-[0.4em] transition-all flex items-center justify-center overflow-hidden"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end opacity-20 select-none">
         <span className="text-white text-[180px] font-serif leading-none tracking-tighter">DXB</span>
         <span className="text-gold tracking-[1.5em] text-xs uppercase font-bold mr-4">The Golden Horizon</span>
      </div>
    </section>
  );
};

export default Hero;

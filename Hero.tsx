
import React from 'react';
import { Target, Trophy, Crosshair, MapPin, ArrowRight } from 'lucide-react';
import { MOTTO, SCHOOL_NAME, SCHOOL_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative z-10 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-8xl max-h-8xl mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="image/background pic.png" 
          alt="Defence Training" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative text-white">
        <div className="max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 backdrop-blur-md px-4 py-1.5 rounded-lg text-orange-400 font-black text-[10px] tracking-wider uppercase border border-orange-500/30 shadow-xl">
            <Trophy size={14} /> 10 Years of Successful Services
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
            {SCHOOL_NAME} <br />
            <span className="text-orange-500 italic text-xl md:text-2xl font-bold tracking-normal block mt-1 normal-case">
              {MOTTO}
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-slate-300 max-w-lg font-medium leading-relaxed">
            Rayalaseema's premier Junior & Degree College + Defence Academy. 
            <strong> 1046+ Defence Placements </strong> and 100% Job Guarantee Programme.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <a href="#admissions" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition transform hover:-translate-y-1 shadow-lg shadow-orange-600/30">
              <Crosshair size={18} />
              Enroll Now
            </a>
            <a href="#admissions" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-3 rounded-xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition transform hover:-translate-y-1">
              Apply Now
              <ArrowRight size={16} />
            </a>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl">
              <MapPin className="text-orange-500" size={18} />
              <div className="flex flex-col">
                <span className="font-bold text-[10px] uppercase">5 Campuses in Tirupati</span>
                <span className="text-[9px] text-slate-400">Upparapalli Checkpost</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 mt-8">
            <div>
              <p className="text-2xl md:text-3xl font-black text-orange-500">1046+</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1">Placements</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-white">5</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1">Campuses</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-orange-500">100%</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1">Job Guarantee</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-white">B&G</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1">Boys & Girls</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Badge */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block animate-pulse-slow">
        <div className="bg-orange-600 w-32 h-32 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-xl transform rotate-12">
          <span className="text-white font-black text-2xl leading-none">1046+</span>
          <span className="text-white font-bold text-[9px] uppercase tracking-tighter mt-1">Placements</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

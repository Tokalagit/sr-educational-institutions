import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for the button
import { 
  ArrowLeft, MapPin, CheckCircle2, Users, Home, 
  Coffee, BookOpen, ShieldCheck, Target, Eye, 
  Building2, Camera, Phone, Mail, Award, TrendingUp,
  Zap, Microscope, GraduationCap, FlaskConical, Beaker
} from 'lucide-react';

const JuniorBoys: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* --- HERO HEADER --- */}
      <div className="bg-[#0d1b2a] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-500 font-bold mb-8 hover:translate-x-[-5px] transition-transform uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> Institutions Overview
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
              S.R. Junior College <br />
              <span className="text-orange-500">Boys Campus (Residential)</span>
            </h1>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MapPin size={18} className="text-orange-500" />
                <span className="font-bold uppercase tracking-widest text-[10px]">Upparappalli Checkpost, Avilali, Tirupati</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <ShieldCheck size={18} className="text-orange-500" />
                <span className="font-bold uppercase tracking-widest text-[10px]">Integrated NEET/JEE Tracking</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
          <Zap size={400} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-2 space-y-20">
            
            {/* 1. ACHIEVEMENT STATS BAR */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { label: "Academic Success", value: "99%", sub: "Top Performance" },
                 { label: "Competitive", value: "High", sub: "Success Rate" },
                 { label: "Curriculum", value: "Dual", sub: "Integrated" },
                 { label: "JEE/NEET/EAPCET", value: "Top", sub: "Rankers" }
               ].map((stat, i) => (
                 <div key={i} className="bg-white p-6 rounded-[30px] shadow-sm border border-slate-100 text-center">
                   <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
                   <p className="text-[10px] font-black uppercase text-orange-600 tracking-widest mt-1">{stat.label}</p>
                   <p className="text-slate-400 text-[10px] uppercase font-bold">{stat.sub}</p>
                 </div>
               ))}
            </section>

            {/* 2. SCIENCE & TECHNICAL LABS */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-3">
                <Microscope className="text-orange-500" size={32} /> Advanced Technical Labs
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                  {/* UPDATE THIS PATH WITH YOUR ACTUAL LAB PHOTO */}
                  <img 
                    src="image/inter boy pic 3 .jpeg" 
                    alt="Boys Campus Science Laboratory" 
                    className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-4">
                  <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Practical Excellence
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase leading-tight">State-of-the-Art Laboratory</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Theory meets practical application in our high-precision labs. Specifically designed for **MPC and BiPC** streams.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <FlaskConical size={16} className="text-orange-500" />
                      <span className="text-[10px] font-black uppercase text-slate-700">Physics Lab</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Beaker size={16} className="text-orange-500" />
                      <span className="text-[10px] font-black uppercase text-slate-700">Chemistry Lab</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. CORE INFRASTRUCTURE - WITH YOUR IMAGES */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-3">
                <Building2 className="text-orange-500" size={32} /> Campus Facilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <div className="rounded-[30px] overflow-hidden mb-4 h-56 shadow-lg border-4 border-white">
                    <img src="image/inter boy pic 1.jpeg" alt="Classroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-black uppercase text-slate-800">Spacious Classrooms</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Well-ventilated learning spaces designed for maximum focus.</p>
                </div>
                <div className="group">
                  <div className="rounded-[30px] overflow-hidden mb-4 h-56 shadow-lg border-4 border-white">
                    <img src="image/inter boy pic 2.jpeg" alt="Hostel Mess" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-black uppercase text-slate-800">Nutritious Dining</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Secure residential facility providing quality food for growing students.</p>
                </div>
              </div>
            </section>

            {/* 4. ENHANCED PHOTO GALLERY */}
            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black uppercase flex items-center gap-2"><Camera size={24} className="text-orange-500"/> Media Gallery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* LARGE FEATURE IMAGE */}
                <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-md">
                   <img src="image/inter boy pic 1.jpeg" alt="Lab Activity" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
                {/* SMALLER GALLERY IMAGES - Replace these src with actual images */}
                <div className="h-40 bg-slate-100 rounded-3xl overflow-hidden">
                   <img src="image/inter boy pic 2.jpeg" alt="Campus Life" className="w-full h-full object-cover" />
                </div>
                <div className="h-40 bg-slate-100 rounded-3xl overflow-hidden">
                   <img src="image/inter boy pic 3 .jpeg" alt="Campus Life" className="w-full h-full object-cover" />
                </div>
                <div className="h-40 bg-slate-100 rounded-3xl overflow-hidden">
                   <img src="image/inter boy pic 4.jpeg" alt="Campus Life" className="w-full h-full object-cover" />
                </div>
                {/* TEXT BOX */}
                <div className="bg-slate-900 rounded-3xl flex items-center justify-center text-white p-4 text-center">
                   <p className="text-[10px] font-black uppercase leading-tight tracking-widest">
                     Excellence in <br/><span className="text-orange-500">Integrated Coaching</span>
                   </p>
                </div>
              </div>
            </section>
          </div>

          {/* --- ADMISSION SIDEBAR --- */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 sticky top-28 border-t-[12px] border-orange-600">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-black text-slate-900 uppercase leading-none">Admission</h3>
                <p className="text-orange-600 font-bold text-[10px] tracking-[0.2em] uppercase mt-2">Academic Session 2024-25</p>
              </div>

              <div className="space-y-6 mb-10 text-xs font-bold text-slate-600 uppercase">
                {/* ... (Steps 1, 2, 3) */}
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center shrink-0 font-black">1</div>
                  <p>Consultation on Integrated Coaching (JEE/NEET).</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center shrink-0 font-black">2</div>
                  <p>Baseline academic and technical assessment.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center shrink-0 font-black">3</div>
                  <p>Final stream selection and seat confirmation.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 space-y-6">
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-orange-500" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">Direct Hotline</p>
                    <p className="font-black text-slate-900">9603623494 | 9000852892
</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={20} className="text-orange-500" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">Campus Location</p>
                    <p className="font-bold text-slate-700 text-[10px] leading-relaxed uppercase">
                      Upparappalli Checkpost, opposite to Delhi's hotel, Avilali, AP 517508
                    </p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/enrolment')}
                className="w-full mt-8 bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-xl"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuniorBoys;
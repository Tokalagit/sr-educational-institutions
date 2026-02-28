import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  CheckCircle2, 
  Settings, 
  Wrench, 
  Briefcase, 
  Building2,
  Cpu,
  Target,
  Eye,
  BookOpen,
  Phone,
  Mail,
  Camera
} from 'lucide-react';

const VocationalCollege: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#f8fafc]">
      {/* --- HERO HEADER --- */}
      <div className="bg-[#1e293b] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-500 font-bold mb-8 hover:translate-x-[-5px] transition-transform uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> All Institutions
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                Skill-Based Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
              S.R. Vocational <br />
              <span className="text-orange-500">College</span>
            </h1>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={20} className="text-orange-500" />
              <span className="font-bold uppercase tracking-widest text-xs">Tirupati, AP 517508</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Settings size={400} className="animate-spin-slow" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 1. CAMPUS PHOTO */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="image/vocational college.jpeg" 
                alt="Vocational College Campus" 
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* 2. VISION & MISSION */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                  <Eye size={28} />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-slate-900">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  To become a center of excellence in vocational training, empowering students with industry-relevant skills that lead to immediate employment and self-reliance.
                </p>
              </div>
              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-slate-900">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  To provide hands-on technical education through modern workshops and industry partnerships, ensuring every student is "Job-Ready" upon graduation.
                </p>
              </div>
            </section>

            {/* 3. VOCATIONAL COURSES (Placeholders) */}
            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <h2 className="text-3xl font-black text-slate-900 uppercase mb-8 flex items-center gap-3">
                <BookOpen className="text-orange-600" size={32} /> 
                Professional Trades
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Classroom", detail: "Spacious and well-ventilated classrooms that provide a comfortable and effective learning atmosphere for students." },
                  { title: "labs", detail: "Well-maintained computer labs that provide students with practical exposure to modern technology." }

                ].map((course, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-transparent hover:border-orange-500 transition-colors">
                    <h4 className="font-black uppercase text-sm mb-2 text-slate-800">{course.title}</h4>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">{course.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. INFRASTRUCTURE & LABS */}
            <section className="space-y-8">

              <div className="bg-slate-900 text-white p-8 rounded-[40px]">
                 <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <p className="text-orange-500 font-black text-2xl">100%</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Practical Focus</p>
                    </div>
                    <div>
                      <p className="text-orange-500 font-black text-2xl">Modern</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Equipment</p>
                    </div>
                    <div>
                      <p className="text-orange-500 font-black text-2xl">Expert</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Trainers</p>
                    </div>
                 </div>
              </div>
            </section>
          </div>

          {/* --- ADMISSION SIDEBAR --- */}
                      <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 sticky top-28 border-t-8 border-orange-600 text-center">
                          <h3 className="text-2xl font-black text-slate-900 uppercase mb-8">Admission 2024</h3>
                          <div className="flex justify-center mb-8">
                             <Phone size={48} className="text-orange-500 animate-pulse" />
                          </div>
                          <div className="space-y-6 text-left">
                            <div>
                              <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">Call Admissions</p>
                              <p className="font-black text-slate-900 text-xl tracking-tighter">9603623494 | 9000852892</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">Campus Address</p>
                              <p className="font-bold text-slate-700 text-xs leading-relaxed">
                                Tirupati - 517501, Andhra Pradesh
                              </p>
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

export default VocationalCollege;
import React, { useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { 
  ArrowLeft, MapPin, CheckCircle2, GraduationCap, 
  Briefcase, Laptop, Award, BookOpen, Target, 
  Eye, Phone, Mail, Building2, Camera, Coffee, 
  Library, TrendingUp, Search
} from 'lucide-react';

const DegreeCollege: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* --- HERO HEADER --- */}
      <div className="bg-[#0a1128] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-500 font-bold mb-8 hover:translate-x-[-5px] transition-transform uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> Institutions Overview
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
              S.R. Srinivasa <br />
              <span className="text-orange-500">Degree College</span>
            </h1>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={20} className="text-orange-500" />
              <span className="font-bold uppercase tracking-widest text-xs">Tirupati, Andhra Pradesh</span>
            </div>
          </div>
        </div>
        {/* Absolute positioned icon for branding */}
        <TrendingUp size={200} className="absolute right-[-20px] bottom-[-20px] text-white/10" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-2 space-y-20">
            
            {/* 1. VISION & MISSION (Fixed Redlines) */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-600 p-8 rounded-[40px] text-white shadow-xl">
                <Eye size={32} className="mb-4 text-orange-200" />
                <h3 className="text-xl font-black uppercase mb-4">Our Vision</h3>
                <p className="text-orange-50 text-sm leading-relaxed">
                  To provide a safe and empowering residential ecosystem where young women achieve academic excellence and secure high-ranking professional careers.
                </p>
              </div>
              <div className="bg-slate-900 p-8 rounded-[40px] text-white shadow-xl">
                <Target size={32} className="mb-4 text-orange-500" />
                <h3 className="text-xl font-black uppercase mb-4 text-orange-500">Our Mission</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Integrating board education with top-tier coaching for NEET and JEE, supported by disciplined residential care.
                </p>
              </div>
            </section>

            {/* 2. COURSES (Integrating Course Photo) */}
            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <h2 className="text-3xl font-black text-slate-900 uppercase mb-8 flex items-center gap-3">
                <GraduationCap className="text-orange-600" size={32} /> 
                Academic Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="rounded-3xl overflow-hidden border-4 border-slate-50 shadow-lg">
                  {/* Integrating your provided course image */}
                  <img src="image/degree.jpg" alt="Degree Courses List" className="w-full object-cover" />
                </div>
                <div className="space-y-4">
                   <p className="text-slate-600 font-medium">We offer diverse undergraduate streams specializing in technology and business management:</p>
                   <ul className="space-y-3">
                     {["B.Sc Computers", "B.Com Computers", "BCA", "BBA"].map((course, i) => (
                       <li key={i} className="flex items-center gap-2 font-black uppercase text-xs text-slate-700">
                         <CheckCircle2 size={16} className="text-orange-500" /> {course}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </section>

            {/* 3. DIGITAL INFRASTRUCTURE (Integrating Digital Classroom Photo) */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-3">
                <Building2 className="text-orange-600" size={32} /> 
                Digital Campus
              </h2>
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group relative">
                {/* Integrating your provided Digital Classroom image */}
                <img 
                  src="image/degree college image.jpeg" 
                  alt="Digital Classroom and Tech Labs" 
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                   <p className="text-white font-black uppercase tracking-widest text-sm">Smart Classrooms & Tech Ecosystems</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600"><Laptop size={24} /></div>
                  <div>
                    <h4 className="font-black uppercase text-sm mb-1 text-slate-900">Classroom</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Spacious and well-ventilated classrooms that provide a comfortable and effective learning atmosphere for students.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-2xl text-orange-600"><Coffee size={24} /></div>
                  <div>
                    <h4 className="font-black uppercase text-sm mb-1 text-slate-900">labs</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Well-maintained computer labs that provide students with practical exposure to modern technology.</p>
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
                    AIR By-pass Road, Tirupati - 517501, Andhra Pradesh
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

export default DegreeCollege;
import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, CheckCircle2, ShieldCheck, 
  Home, BookOpen, Heart, Star, Zap, Microscope, 
  Trophy, GraduationCap, Video, Camera, FlaskConical,
  Activity, Award, Building2,TrendingUp, 
  Coffee, 
  Phone, 
  Eye, 
  Target,
} from 'lucide-react';

const JuniorGirls: React.FC = () => {
  const navigate = useNavigate();
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#fffafa]">
      {/* --- HERO HEADER --- */}
      <div className="bg-[#1a2a3a] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-400 font-bold mb-8 hover:translate-x-[-5px] transition-transform uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> All Institutions
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-10 bg-orange-500"></div>
              <span className="text-orange-400 font-black uppercase text-[10px] tracking-widest">Safe & Secure Residential Campus</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
              S.R. Junior College <br />
              <span className="text-orange-400">(Girls Campus)</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin size={20} className="text-orange-500 shrink-0" />
                <span className="font-bold text-xs leading-relaxed uppercase">
                  Upparappalli Checkpost, opposite to Delhi's hotel, <br />
                  Avilali, Andhra Pradesh 517508
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-5 translate-x-1/4 translate-y-1/4">
          <Heart size={400} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 1. MAIN VISUAL & ACHIEVEMENT STATS */}
            <div className="space-y-8">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="image/girls campuse .jpeg" 
                  alt="S.R. Girls Campus Exterior" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-orange-500 p-6 rounded-3xl text-white text-center shadow-lg shadow-orange-100">
                  <Trophy className="mx-auto mb-2" size={24} />
                  <p className="text-2xl font-black">99%</p>
                  <p className="text-[10px] uppercase font-bold tracking-tighter">Academic Perf.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-3xl text-white text-center shadow-lg shadow-slate-100">
                  <Star className="mx-auto mb-2 text-orange-400" size={24} />
                  <p className="text-2xl font-black">Top</p>
                  <p className="text-[10px] uppercase font-bold tracking-tighter">Rankers</p>
                </div>
                <div className="bg-white p-6 rounded-3xl text-slate-900 text-center border border-slate-100 shadow-sm">
                  <Zap className="mx-auto mb-2 text-orange-500" size={24} />
                  <p className="text-lg font-black uppercase">NEET</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Success</p>
                </div>
                <div className="bg-white p-6 rounded-3xl text-slate-900 text-center border border-slate-100 shadow-sm">
                  <Activity className="mx-auto mb-2 text-orange-500" size={24} />
                  <p className="text-lg font-black uppercase">JEE</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Main/EAPCET</p>
                </div>
              </div>
            </div>

            {/* 2. VISION & MISSION */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-600 p-8 rounded-[40px] text-white shadow-xl shadow-orange-100">
                <Eye size={32} className="mb-4 text-orange-200" />
                <h3 className="text-xl font-black uppercase mb-4">Our Vision</h3>
                <p className="text-orange-50 text-sm leading-relaxed">
                  To provide a safe and empowering residential ecosystem where young women achieve academic excellence and secure high-ranking professional careers.
                </p>
              </div>
              <div className="bg-slate-900 p-8 rounded-[40px] text-white shadow-xl shadow-slate-200">
                <Target size={32} className="mb-4 text-orange-500" />
                <h3 className="text-xl font-black uppercase mb-4 text-orange-500">Our Mission</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Integrating board education with top-tier coaching for NEET and JEE, supported by disciplined residential care and technical learning.
                </p>
              </div>
            </section>

            {/* 3. COURSES & INTEGRATED COACHING */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-3">
                <GraduationCap className="text-orange-500" size={32} /> Academic & Competitive Programs
              </h2>
              <div className="bg-white p-8 rounded-[40px] border border-pink-50 shadow-sm">
                <p className="text-slate-600 leading-relaxed font-medium mb-8">
                  Our campus is dedicated to producing top rankers. Colleges focusing on integrated coaching at S.R. have reported exceptionally high success rates in **IIT-JEE, NEET, and EAMCET**.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "INTER: MPC / BIPC", desc: "Board excellence in Science streams." },
                    { title: "INTER: CEC / MBIPC", desc: "Commerce and Multi-Biology options." },
                    { title: "OPEN INTER", desc: "Flexible tracks with competitive focus." },
                    { title: "NEET + EAPCET + JEE", desc: "High-intensity integrated coaching." }
                  ].map((course, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-orange-400 transition-all">
                      <div className="bg-orange-100 p-2 rounded-lg text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Zap size={18} />
                      </div>
                      <div>
                        <h4 className="font-black uppercase text-xs text-slate-800">{course.title}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">{course.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. LABORATORY & PRACTICAL LEARNING */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-3">
                <Microscope className="text-orange-500" size={32} /> Technical Learning Labs
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                  <img 
                    src="image/girls lab.jpeg" 
                    alt="Advanced Science Laboratory" 
                    className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="bg-white p-8 rounded-[40px] border border-pink-50 shadow-sm space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 uppercase">State-of-the-Art Facilities</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Theory meets visual application in our specialized labs. We offer hands-on academic and technical learning using digital aids and high-precision scientific equipment.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[11px] font-bold text-slate-700 uppercase">
                      <CheckCircle2 size={16} className="text-green-500" /> Advanced Physics & Chemistry Kits
                    </li>
                    <li className="flex items-center gap-2 text-[11px] font-bold text-slate-700 uppercase">
                      <CheckCircle2 size={16} className="text-green-500" />  Library & Research Resources
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. INFRASTRUCTURE: HOSTEL & DINING */}
            <section className="grid md:grid-cols-2 gap-8">
                              <div className="group">
                  <div className="rounded-[30px] overflow-hidden mb-4 h-56 shadow-lg border-4 border-white">
                    <img src="image/inter girls 1.jpeg" alt="Classroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-black uppercase text-slate-800">Spacious Classrooms</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Well-ventilated learning spaces designed for maximum focus.</p>
                </div>
              <div className="bg-white p-8 rounded-[40px] border border-pink-50 shadow-sm group">
                <div className="rounded-3xl overflow-hidden mb-6 h-48">
                   <img src="image/inter girls hostel .jpeg" alt="Secure Hostel" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="text-xl font-black uppercase text-slate-900 flex items-center gap-2">
                  <Home className="text-orange-600" size={20} /> Secure Hostels
                </h4>
                <p className="text-xs text-slate-500 mt-2 font-medium">Safe residential facility with 24/7 security, warden supervision, and a disciplined study environment.</p>
              </div>
              <div className="bg-white p-8 rounded-[40px] border border-pink-50 shadow-sm group">
                <div className="rounded-3xl overflow-hidden mb-6 h-48">
                   <img src="image/hostel food .jpeg" alt="Dining Hall" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="text-xl font-black uppercase text-slate-900 flex items-center gap-2">
                  <Coffee className="text-orange-600" size={20} /> Nutritious Dining
                </h4>
                <p className="text-xs text-slate-500 mt-2 font-medium">Central mess providing 100% nutritious and quality food prepared in hygienic conditions.</p>
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
                   <img src="image/girls lab.jpeg" alt="Lab Activity" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
                {/* SMALLER GALLERY IMAGES - Replace these src with actual images */}
                <div className="h-40 bg-slate-100 rounded-3xl overflow-hidden">
                   <img src="image/inter girls 1.jpeg" alt="Campus Life" className="w-full h-full object-cover" />
                </div>
                <div className="h-40 bg-slate-100 rounded-3xl overflow-hidden">
                   <img src="image/inter girls hostel .jpeg" alt="Campus Life" className="w-full h-full object-cover" />
                </div>
                <div className="h-40 bg-slate-100 rounded-3xl overflow-hidden">
                   <img src="image/hostel food .jpeg" alt="Campus Life" className="w-full h-full object-cover" />
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

          {/* --- ENQUIRY SIDEBAR --- */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 sticky top-28 border-t-[12px] border-orange-500">
              <h3 className="text-2xl font-black text-slate-900 uppercase mb-2">Girls Admission</h3>
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-8">Session 2024-25 Enrollment</p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0">1</div>
                  <div className="space-y-1">
                    <p className="text-[11px] text-slate-900 font-black uppercase">Initial Enquiry</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase leading-tight">Visit campus or call hotline for counseling.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0">2</div>
                  <div className="space-y-1">
                    <p className="text-[11px] text-slate-900 font-black uppercase">Entrance Screening</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase leading-tight">Assessment for integrated NEET/JEE tracks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0">3</div>
                  <div className="space-y-1">
                    <p className="text-[11px] text-slate-900 font-black uppercase">Hostel Allotment</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase leading-tight">Final verification and residential placement.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 space-y-6">
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-orange-500" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">Call Us</p>
                    <p className="font-black text-slate-900 text-lg">9603623494 | 9000852892</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-orange-500 shrink-0" />
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">Campus Address</p>
                    <p className="font-bold text-slate-700 text-[10px] leading-relaxed uppercase">
                      Upparappalli Checkpost, opposite to Delhi's hotel, Avilali, Tirupati, AP 517508
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

export default JuniorGirls;
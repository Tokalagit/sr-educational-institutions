import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Star, 
  ArrowLeft, 
  Phone,
  Target,
  Zap,
  Building2,
  Trophy,
  Microscope,
  Dumbbell,
  Video,
  Camera,
  GraduationCap,
  TrendingUp,
  Coffee,
  Eye,
  Users
} from 'lucide-react';

const DefenceAcademy: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  // Function to handle the transition to the enrolment page
  const handleRegisterClick = () => {
    navigate('/enrolment', { 
      state: { 
        initialData: { 
          course: 'Inter MPC + Defence/Jobs' // Pre-fills course preference
        } 
      } 
    });
  };


  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* --- HERO BRANDING SECTION --- */}
      <section className="bg-[#0d1b2a] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <ShieldCheck size={450} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-500 font-bold mb-8 hover:translate-x-[-5px] transition-transform uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> Main Institutions
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-600 px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
                  Job Guarantee Coaching
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-tight">
                S.R. Defence Academy
              </h1>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                  <Award size={18} className="text-orange-500" />
                  <span className="font-bold uppercase tracking-widest text-xs">State 3rd Rank</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={18} className="text-orange-500" />
                  <span className="font-bold uppercase tracking-widest text-[10px] italic">
                    Upparappalli Checkpost, Avilali, Tirupati
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE CONTENT SECTION --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-16">
              
              {/* Mission & Course Details */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-3">
                  <Target className="text-orange-600" /> Job Oriented Programs
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-600 p-8 rounded-[40px] text-white shadow-xl">
                    <h3 className="font-black uppercase text-lg mb-4 flex items-center gap-2">
                      <GraduationCap /> Inter + Jobs
                    </h3>
                    <p className="text-orange-100 text-xs font-bold uppercase mb-4">Indian Airforce | Army | Navy</p>
                    <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest">
                      <li>• MPC / BIPC / CEC</li>
                      <li>• MBIPC & Open Inter</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-8 rounded-[40px] text-white shadow-xl">
                    <h3 className="font-black uppercase text-lg mb-4 flex items-center gap-2">
                      <Trophy className="text-orange-500" /> Degree + Jobs
                    </h3>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-4">Specialized Defence Entry</p>
                    <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-orange-500">
                      <li>• NDA / TES / University Entry</li>
                      <li>• State 3rd Rank Performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Infrastructure with Icons */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-3">
                  <Building2 className="text-orange-600" /> Infrastructure
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                    <Coffee size={32} className="text-orange-600 mx-auto mb-2" />
                    <h4 className="font-black uppercase text-[10px]">Nutritious Dining</h4>
                    <p className="text-slate-500 text-[9px] font-bold uppercase mt-1">100% Quality Food</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                    <Microscope size={32} className="text-orange-600 mx-auto mb-2" />
                    <h4 className="font-black uppercase text-[10px]">Research Labs</h4>
                    <p className="text-slate-500 text-[9px] font-bold uppercase mt-1">Simulation Centers</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                    <Dumbbell size={32} className="text-orange-600 mx-auto mb-2" />
                    <h4 className="font-black uppercase text-[10px]">Fitness Centers</h4>
                    <p className="text-slate-500 text-[9px] font-bold uppercase mt-1">Advanced Gym</p>
                  </div>
                </div>
              </div>

              {/* Student Achievement Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 uppercase flex items-center gap-3">
                  <Award className="text-orange-600" /> Student Achievements
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "NCC ‘C’ certificate (Top Level)",
                    "NDA, TES & University Entry Scheme",
                    "Inter-college Defence Winners",
                    "Youth Exchange Defence Programs",
                    "Leadership Awards in Training",
                    "Academic Success: 99% Top Performance"
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="text-green-500" size={18} />
                      <span className="font-black uppercase text-[10px] tracking-wide text-slate-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: Admission & Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 sticky top-28 border-t-[12px] border-orange-600">
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-8">Admission</h3>
                
                <div className="pt-8 space-y-8">
                  <div className="flex items-center gap-4">
                    <Phone size={24} className="text-orange-500" />
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Call Admissions</p>
                      <p className="font-black text-slate-900 text-lg">9603623494 |  9000852892</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-orange-500 shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Campus Address</p>
                      <p className="font-bold text-slate-700 text-[10px] leading-relaxed uppercase">
                        Upparappalli Checkpost, opposite to Delhi's hotel, Avilali, Tirupati 517508
                      </p>
                    </div>
                  </div>
                </div>
               {/* Updated Register Button with handleRegisterClick */}
                <button 
                  onClick={handleRegisterClick}
                  className="w-full mt-10 bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95"
                >
                  Register Now
                </button> 

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHOTO GALLERY SECTION (INTEGRATING YOUR UPLOADED PHOTOS) --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black uppercase text-slate-900 flex items-center gap-3">
                <Camera className="text-orange-600" /> Physical Training Gallery
              </h2>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">Elite Discipline & Tactical Excellence</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Achievement Banner Image */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[40px] shadow-2xl">
              <img src="image/sr defence pic 2.jpeg" alt="SR Defence Achievement Banner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white font-black uppercase text-xl">State 3rd Rank Achievement</h4>
                <p className="text-orange-400 text-xs font-black uppercase tracking-widest">462 / 470 Records</p>
              </div>
            </div>

            {/* Drill Training Image */}
            <div className="relative group overflow-hidden rounded-[30px] shadow-xl h-64 md:h-full">
              <img src="image/defence pic 1.jpeg" alt="Students in physical training" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Users className="text-white" size={32} />
              </div>
            </div>

            {/* Hill/Outdoor Running Image */}
            <div className="relative group overflow-hidden rounded-[30px] shadow-xl h-64 md:h-full">
              <img src="image/sr defence pic 3 .jpeg" alt="Hill running training" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <TrendingUp className="text-white" size={32} />
              </div>
            </div>

            {/* Squad Exercises Image */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-[30px] shadow-xl h-64">
              <img src="image/sr defence pic 4.jpeg" alt="Squad physical exercises" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent p-8 flex flex-col justify-center">
                <h4 className="text-white font-black uppercase text-sm">Tactical Squad Drills</h4>
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest">Daily Physical Excellence Routine</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefenceAcademy;
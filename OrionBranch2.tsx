import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Star, 
  MapPin, 
  ArrowLeft, 
  BookOpen, 
  Users, 
  Sparkles, 
  Cpu,
  CheckCircle2,
  Globe,
  Zap,
  Camera,
  Layout
} from 'lucide-react';

const OrionBranch2: React.FC = () => {
  const navigate = useNavigate();

  // Ensure the user starts at the top of the page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#fcfaff]">
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-b from-blue-50 to-[#fcfaff] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-5px] transition-transform uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> Back to Institutions
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-white border border-blue-100 rounded-full shadow-sm">
                <Sparkles size={16} className="text-blue-500" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-600">Branch 2 - Vidya Nagar</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight uppercase">
                Orion <span className="text-blue-600">IIT Olympiad</span> School
              </h1>
              <p className="text-lg text-slate-600 font-medium italic">
                "Your child, our care."
              </p>
              <div className="flex items-start gap-3 text-slate-500 text-sm bg-white p-5 rounded-3xl shadow-sm border border-blue-50">
                <MapPin size={24} className="text-blue-600 shrink-0" />
                <p className="font-bold">
                  J99G+F57, Vidya Nagar Colony, <br />
                  Peruru, Andhra Pradesh 517505
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-200/30 rounded-[50px] blur-2xl"></div>
                <img 
                  src="image/orion branch 2.jpeg" 
                  alt="Orion School Branch 2" 
                  className="relative rounded-[50px] border-8 border-white shadow-2xl w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COURSE INFORMATION --- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase text-slate-900 tracking-tight">Academic Pathways</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase text-slate-800">Nursery to Tenth</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                A robust foundational curriculum designed to build boldness and academic confidence.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Cpu size={32} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase text-slate-800">IIT Foundation</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Expert faculty delivering high-level IIT Foundation courses to sharpen competitive skills.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase text-slate-800">Digital Ecosystem</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Integrating modern tech tools like Android and YouTube to expand learning horizons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE & STUDENT ACHIEVEMENT --- */}
      <section className="py-20 bg-slate-900 text-white rounded-[60px] mx-4 overflow-hidden shadow-2xl">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase leading-tight">
                Modern <br /> <span className="text-blue-500">Infrastructure</span>
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Our Vidya Nagar campus is equipped with state-of-the-art facilities and digital aids to foster student success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Digital Aids & Smart Classes",
                  "Well-equipped Computer Labs",
                  "Safe Playgrounds",
                  "Yoga & Meditation Halls",
                  "CCTV Monitored Campus",
                  "Expert IIT Faculty"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                    <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                    <span className="font-bold text-xs uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4 relative">
                {/* Integration of image_26fbe1.jpg collage */}
                <img src="image/orion classs.jpeg" className="rounded-3xl h-64 w-full object-cover border-4 border-slate-800 shadow-2xl" alt="Classroom and Activities" />
                {/* Integration of sports.png */}
                <img src="image/sports.png" className="rounded-3xl h-64 w-full object-cover mt-12 border-4 border-slate-800 shadow-2xl" alt="Sports Training" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAMPUS LIFE GALLERY SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black uppercase text-slate-900 flex items-center gap-3">
                <Camera className="text-blue-600" /> Campus Life Gallery
              </h2>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">Nurturing holistic development through academic & physical activities</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Integrated Achievement Image (sr defence pic 2.jpeg) */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[40px] shadow-2xl h-[400px] md:h-auto">
              <img src="image/orion class 2.jpeg" alt="Academic Excellence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white font-black uppercase text-xl">Top Rankers 2024-25</h4>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Building future leaders from early years</p>
              </div>
            </div>

            {/* Drill/Activity (defence pic 1.jpeg) */}
            <div className="relative group overflow-hidden rounded-[30px] shadow-xl h-48 md:h-full">
              <img src="image/orion classs.jpeg" alt="Daily Physical Drills" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Sparkles className="text-white" size={32} />
              </div>
            </div>

            {/* Hill Running/Outdoor (sr defence pic 3 .jpeg) */}
            <div className="relative group overflow-hidden rounded-[30px] shadow-xl h-48 md:h-full">
              <img src="image/orion play ground.jpeg" alt="Outdoor Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Zap className="text-white" size={32} />
              </div>
            </div>

            {/* Squad exercises (sr defence pic 4.jpeg) */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-[30px] shadow-xl h-48 md:h-64">
              <img src="image/orion yoga.jpeg" alt="Physical Fitness & Yoga" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent p-8 flex flex-col justify-center">
                <h4 className="text-white font-black uppercase text-sm">Discipline & Wellness</h4>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Integrated physical training and curriculum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ADMISSION & ENQUIRY --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[50px] shadow-2xl border border-slate-100 flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/2 p-12 md:p-16 space-y-6">
              <h2 className="text-3xl font-black text-slate-900 uppercase">Enrollment Process</h2>
              <p className="text-slate-600 font-medium">
                Join our healthy educational environment designed to build academic boldness.
              </p>
              <div className="space-y-4">
                {[
                  "Initial Counseling",
                  "Aptitude Assessment",
                  "Final Registration"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black group-hover:bg-blue-600 group-hover:text-white transition-all">{i + 1}</div>
                    <p className="font-bold text-slate-800 uppercase text-xs tracking-widest">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-blue-600 p-12 md:p-16 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <Zap fill="currentColor" /> Branch 2 Inquiry
              </h3>
              <p className="text-blue-100 text-sm font-bold uppercase mb-8">Secure your child's future at Orion School</p>
              <button 
                onClick={() => navigate('/enrolment')}
                className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-xl active:scale-95"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrionBranch2;
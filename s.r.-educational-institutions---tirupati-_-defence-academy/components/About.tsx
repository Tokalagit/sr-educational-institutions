
// import React, { useState } from 'react';
// import { ShieldCheck, Target, Award, Users } from 'lucide-react';
// import { ABOUT_TABS, SCHOOL_NAME, CHAIRMAN_IMAGE_URL } from '../constants';

// const About: React.FC = () => {
//   const [activeTab, setActiveTab] = useState(ABOUT_TABS[0].id);

//   return (
//     <section id="about" className="py-16 bg-white scroll-mt-20">
//       <div className="container mx-auto px-4">
//         {/* Chairman Message Anchor */}
//         <div id="chairman-message" className="scroll-mt-32">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             {/* Chairman Image / Hero Image */}
//             <div className="lg:w-1/2 relative">
//               <div className="relative z-10">
//                 <img 
//                   src={CHAIRMAN_IMAGE_URL} 
//                   alt="Chairman C. Sankar Reddy" 
//                   className="rounded-3xl shadow-xl border-4 border-white w-full object-cover aspect-[4/5] max-h-[500px]" 
//                   onError={(e) => {
//                     // Fallback to a placeholder if the specific image fails
//                     e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
//                   }}
//                 />
//                 <div className="absolute -bottom-6 -right-6 bg-orange-600 p-6 rounded-2xl shadow-xl text-white max-w-xs transform rotate-2">
//                   <h4 className="text-lg font-black mb-0.5">C. SANKAR REDDY</h4>
//                   <p className="font-bold text-orange-200 uppercase text-[10px] tracking-widest">Chairman</p>
//                   <p className="mt-2 text-xs font-medium leading-relaxed italic">
//                     "Our journey is towards your success. We prepare future heroes."
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute -top-8 -left-8 w-48 h-48 bg-orange-50 rounded-full -z-0 opacity-40 blur-2xl"></div>
//             </div>

//             <div className="lg:w-1/2 space-y-6">
//               <div className="space-y-3">
//                 <h2 className="text-orange-600 font-black tracking-widest uppercase text-[10px]">Our Academy</h2>
//                 <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
//                   Rayalaseema's Most Trusted <br /> <span className="text-orange-600">Defence Academy</span>
//                 </h3>
//                 <p className="text-slate-600 text-base leading-relaxed">
//                   {SCHOOL_NAME} has been a pioneer in defence coaching for over a decade. We transform students into disciplined professionals for Indian Defence Forces and Government Jobs.
//                 </p>
//               </div>

//               {/* Mission Vision Anchor */}
//               <div id="mission-vision" className="scroll-mt-32 space-y-4">
//                 <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-2">
//                   {ABOUT_TABS.map((tab) => (
//                     <button
//                       key={tab.id}
//                       onClick={() => setActiveTab(tab.id)}
//                       className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all ${
//                         activeTab === tab.id 
//                         ? 'bg-orange-600 text-white shadow-md' 
//                         : 'text-slate-400 hover:text-orange-600 hover:bg-orange-50'
//                       }`}
//                     >
//                       {tab.label}
//                     </button>
//                   ))}
//                 </div>
//                 <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 min-h-[120px]">
//                   <p className="text-slate-800 text-base font-medium leading-relaxed italic">
//                     "{ABOUT_TABS.find(t => t.id === activeTab)?.content}"
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex items-center gap-3 group">
//                   <div className="bg-orange-100 p-3 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shrink-0">
//                     <ShieldCheck size={20} />
//                   </div>
//                   <div>
//                     <h5 className="font-black text-slate-900 text-sm">Discipline</h5>
//                     <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Campus Rules</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3 group">
//                   <div className="bg-orange-100 p-3 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shrink-0">
//                     <Award size={20} />
//                   </div>
//                   <div>
//                     <h5 className="font-black text-slate-900 text-sm">Track Record</h5>
//                     <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">1046 Placements</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React, { useState } from 'react';
import { 
  ABOUT_TABS, 
  SCHOOL_NAME, 
  CHAIRMAN_IMAGE_URL, 
  DIRECTOR_IMAGE_URL, 
  DIRECTOR_INFO 
} from '../constants';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    // Clicking "About Us" lands here
    <section id="about" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 space-y-20">
        
        {/* SECTION HEADER: This is what users see first when clicking 'About Us' */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-orange-600 font-black tracking-widest uppercase text-[10px]">About Our Institution</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Tirupati Most Trusted <br /> <span className="text-orange-600">Defence Academy</span>
          </h3>
          <p className="text-slate-600 text-base leading-relaxed">
            {SCHOOL_NAME} has been a pioneer in defence coaching for over a decade. We transform students into disciplined professionals for Indian Defence Forces and Government Jobs.
          </p>
        </div>

        {/* --- CHAIRMAN SECTION --- */}
        <div id="chairman-message" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src={CHAIRMAN_IMAGE_URL} 
                  alt="Chairman C. Sankar Reddy" 
                  className="rounded-3xl shadow-xl border-4 border-white w-full object-cover aspect-[4/5] max-h-[500px]" 
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-600 p-6 rounded-2xl shadow-xl text-white max-w-xs transform rotate-2">
                  <h4 className="text-lg font-black mb-0.5 uppercase">C. SANKAR REDDY</h4>
                  <p className="font-bold text-orange-200 uppercase text-[10px] tracking-widest">Chairman</p>
                  <p className="mt-2 text-xs font-medium leading-relaxed italic">
                    "MSC CHEMISTRY & MSC MATHEMATICS"
                  </p>
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-orange-50 rounded-full -z-0 opacity-40 blur-2xl"></div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-3">
                <h2 className="text-orange-600 font-black tracking-widest uppercase text-[10px]">Leadership</h2>
                <h3 className="text-3xl font-black text-slate-900">Chairman's Message</h3>
                <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 italic">
                  <p className="text-slate-800 text-base font-medium leading-relaxed">
                    "{ABOUT_TABS.find(t => t.id === 'chairman')?.content}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- DIRECTOR SECTION (V. PRAVEENA) --- */}
        <div id="director-message" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src={DIRECTOR_IMAGE_URL} 
                  alt={DIRECTOR_INFO.name} 
                  className="rounded-3xl shadow-xl border-4 border-white w-full object-cover aspect-[4/5] max-h-[500px]" 
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-600 p-6 rounded-2xl shadow-xl text-white max-w-xs transform -rotate-2">
                  <h4 className="text-lg font-black mb-0.5 uppercase">{DIRECTOR_INFO.name}</h4>
                  <p className="font-bold text-orange-200 uppercase text-[10px] tracking-widest">{DIRECTOR_INFO.position}</p>
                  <p className="mt-2 text-xs font-medium leading-relaxed italic uppercase">
                    {DIRECTOR_INFO.experience}
                  </p>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-orange-50 rounded-full -z-0 opacity-40 blur-2xl"></div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-3">
                <h2 className="text-orange-600 font-black tracking-widest uppercase text-[10px]">Administration</h2>
                <h3 className="text-3xl font-black text-slate-900">Director's Message</h3>
                <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 italic">
                  <p className="text-slate-800 text-base font-medium leading-relaxed">
                    "{DIRECTOR_INFO.message}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MISSION & VISION --- */}
        <div id="mission-vision" className="scroll-mt-32 pt-10 border-t border-slate-100">
           <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex justify-center gap-4">
                {['mission', 'vision'].map((tabId) => (
                  <button
                    key={tabId}
                    onClick={() => setActiveTab(tabId)}
                    className={`px-8 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                      activeTab === tabId ? 'bg-orange-600 text-white shadow-md' : 'text-slate-400 hover:bg-orange-50'
                    }`}
                  >
                    Our {tabId}
                  </button>
                ))}
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                <p className="text-slate-700 text-lg font-medium italic leading-relaxed">
                  "{ABOUT_TABS.find(t => t.id === activeTab)?.content}"
                </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;
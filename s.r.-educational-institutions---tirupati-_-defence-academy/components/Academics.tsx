
// import React from 'react';
// import { CURRICULUM, DEFENCE_JOBS } from '../constants';
// import { BookOpen, Crosshair, Sparkles, CheckCircle, Shield } from 'lucide-react';

// const Academics: React.FC = () => {
//   return (
//     <section id="academics" className="py-16 bg-slate-50 scroll-mt-20 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
//           <h2 className="text-orange-600 font-black tracking-widest uppercase text-[10px]">Professional Courses</h2>
//           <h3 className="text-3xl md:text-4xl font-black text-slate-900">Jobs Integrated Coaching</h3>
//           <p className="text-slate-600 text-base">
//             Formal Intermediate and Degree education combined with rigorous coaching for Defence and Government jobs.
//           </p>
//         </div>

//         {/* ZigZag Layout */}
//         <div className="space-y-20 mb-20">
//           {CURRICULUM.map((stage, idx) => (
//             <div 
//               key={idx} 
//               className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16 group`}
//             >
//               {/* Image Column */}
//               <div className="w-full lg:w-1/2 relative">
//                 <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg z-10 border-4 border-white">
//                   <img 
//                     src={stage.image} 
//                     alt={stage.title} 
//                     className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
//                   />
//                   <div className="absolute bottom-4 right-4 bg-orange-600 text-white px-5 py-2 rounded-xl font-black text-xs shadow-xl z-20 uppercase tracking-widest">
//                     {stage.title}
//                   </div>
//                 </div>
//               </div>

//               {/* Text Column */}
//               <div className="w-full lg:w-1/2 space-y-4">
//                 <div className="inline-flex items-center gap-2 text-orange-600">
//                   <div className="bg-orange-600 text-white p-2.5 rounded-xl shadow-md">
//                     <Crosshair size={18} />
//                   </div>
//                   <span className="font-black uppercase tracking-widest text-[10px]">Job Stream</span>
//                 </div>

//                 <div className="space-y-2">
//                   <h4 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
//                     {stage.title}
//                   </h4>
//                   <p className="text-slate-600 text-base font-medium leading-relaxed">
//                     {stage.details}
//                   </p>
//                 </div>

//                 {/* Feature List */}
//                 <div className="grid sm:grid-cols-2 gap-3">
//                   {stage.features.map((feature, fIdx) => (
//                     <div key={fIdx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 hover:shadow-sm transition-all">
//                       <CheckCircle className="text-orange-600 shrink-0" size={16} />
//                       <span className="text-slate-800 font-bold text-xs">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Defence Jobs Grid */}
//         <div id="placements" className="bg-slate-900 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden shadow-xl">
//           <div className="absolute top-0 right-0 p-4 opacity-5 scale-110">
//             <Shield size={180} />
//           </div>
//           <div className="relative z-10">
//             <div className="text-center max-w-xl mx-auto mb-10">
//               <h4 className="text-2xl md:text-3xl font-black">Defence Career Paths</h4>
//               <p className="text-slate-400 text-sm mt-2">100% placement focus for these elite sectors.</p>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//               {DEFENCE_JOBS.map((job, jIdx) => (
//                 <div key={jIdx} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center group hover:bg-orange-600 transition-all duration-300">
//                   <h5 className="font-black text-[10px] tracking-wider uppercase text-white">{job.name}</h5>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 p-8 rounded-2xl border border-white/5">
//                <div className="text-center">
//                   <p className="text-orange-500 font-black text-4xl">467/470</p>
//                   <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Placements</p>
//                </div>
//                <div className="h-px md:h-12 w-full md:w-px bg-white/10"></div>
//                <div className="text-center">
//                   <p className="text-white font-black text-3xl">State 2nd</p>
//                   <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Academy Rank</p>
//                </div>
//                <div className="h-px md:h-12 w-full md:w-px bg-white/10"></div>
//                <div className="text-center">
//                   <a href="#admissions" className="bg-orange-600 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg hover:bg-orange-700 transition">Get Started</a>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Academics;


import React from 'react';
import { CURRICULUM, DEFENCE_JOBS } from '../constants';
import { BookOpen, Crosshair, Sparkles, CheckCircle, Shield } from 'lucide-react';

const Academics: React.FC = () => {
  // Helper to map index to specific IDs used in your NAV_LINKS
  const getSectionId = (idx: number) => {
    if (idx === 0) return "intermediate-jobs";
    if (idx === 1) return "degree-jobs";
    if (idx === 2) return "defence-courses";
    return undefined;
  };

  return (
    <section id="academics" className="py-16 bg-slate-50 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-orange-600 font-black tracking-widest uppercase text-[10px]">Professional Courses</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900">Jobs Integrated Coaching</h3>
          <p className="text-slate-600 text-base">
            Formal Intermediate and Degree education combined with rigorous coaching for Defence and Government jobs.
          </p>
        </div>

        {/* ZigZag Layout */}
        <div className="space-y-20 mb-20">
          {CURRICULUM.map((stage, idx) => (
            <div 
              key={idx} 
              // ADDED DYNAMIC ID HERE
              id={getSectionId(idx)}
              // ADDED scroll-mt to prevent header overlap
              className={`flex flex-col scroll-mt-32 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16 group`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg z-10 border-4 border-white">
                  <img 
                    src={stage.image} 
                    alt={stage.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute bottom-4 right-4 bg-orange-600 text-white px-5 py-2 rounded-xl font-black text-xs shadow-xl z-20 uppercase tracking-widest">
                    {stage.title}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-2 text-orange-600">
                  <div className="bg-orange-600 text-white p-2.5 rounded-xl shadow-md">
                    <Crosshair size={18} />
                  </div>
                  <span className="font-black uppercase tracking-widest text-[10px]">Job Stream</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                    {stage.title}
                  </h4>
                  <p className="text-slate-600 text-base font-medium leading-relaxed">
                    {stage.details}
                  </p>
                </div>

                {/* Feature List */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {stage.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 hover:shadow-sm transition-all">
                      <CheckCircle className="text-orange-600 shrink-0" size={16} />
                      <span className="text-slate-800 font-bold text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Defence Jobs Grid */}
        <div id="placements" className="bg-slate-900 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden shadow-xl scroll-mt-32">
          <div className="absolute top-0 right-0 p-4 opacity-5 scale-110">
            <Shield size={180} />
          </div>
          <div className="relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h4 className="text-2xl md:text-3xl font-black">Defence Career Paths</h4>
              <p className="text-slate-400 text-sm mt-2">100% placement focus for these elite sectors.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {DEFENCE_JOBS.map((job, jIdx) => (
                <div key={jIdx} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center group hover:bg-orange-600 transition-all duration-300">
                  <h5 className="font-black text-[10px] tracking-wider uppercase text-white">{job.name}</h5>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 p-8 rounded-2xl border border-white/5">
               <div className="text-center">
                  <p className="text-orange-500 font-black text-4xl">467/470</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">marks</p>
               </div>
               <div className="h-px md:h-12 w-full md:w-px bg-white/10"></div>
               <div className="text-center">
                  <p className="text-white font-black text-3xl">State 2nd</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Academy Rank</p>
               </div>
               <div className="h-px md:h-12 w-full md:w-px bg-white/10"></div>
               <div className="text-center">
                  <a href="#admissions" className="bg-orange-600 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg hover:bg-orange-700 transition">Get Started</a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;

// import React from 'react';
// import { FACILITIES } from '../constants';

// const Facilities: React.FC = () => {
//   return (
//     <section id="facilities" className="py-24 bg-slate-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm">Infrastructure</h2>
//           <h3 className="text-4xl font-bold text-slate-900">World-Class Facilities</h3>
//           <p className="text-slate-600 text-lg">
//             We provide an environment that inspires students to learn, explore, and grow with modern infrastructure and cutting-edge technology.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {FACILITIES.map((facility, index) => (
//             <div 
//               key={index} 
//               className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-100 transform hover:-translate-y-2"
//             >
//               <div className="bg-orange-50 text-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
//                 {facility.icon}
//               </div>
//               <h4 className="text-xl font-bold text-slate-900 mb-3">{facility.title}</h4>
//               <p className="text-slate-600 leading-relaxed">
//                 {facility.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Facilities;


import React from 'react';
import { FACILITIES, CAMPUS_DETAILS } from '../constants';
import { MapPin, CheckCircle2 } from 'lucide-react';

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* --- GENERAL FACILITIES SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm">Infrastructure</h2>
          <h3 className="text-4xl font-black text-slate-900 uppercase">World-Class Facilities</h3>
          <p className="text-slate-600 text-lg">
            We provide an environment that inspires students to learn, explore, and grow with modern infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {FACILITIES.map((facility, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-100 transform hover:-translate-y-2"
            >
              <div className="bg-orange-50 text-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {facility.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{facility.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium text-sm">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- DYNAMIC CAMPUS DETAILS SECTION --- */}
        <div className="space-y-20">
          <div className="text-center">
            <h3 className="text-3xl font-black text-slate-900 uppercase mb-4">Explore Our 3 Specialized Campuses</h3>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          {CAMPUS_DETAILS.map((campus) => (
            <div 
              key={campus.id} 
              id={`campus-${campus.id}`} // This matches the href in your NAV_LINKS (#campus-main, etc)
              className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row scroll-mt-32"
            >
              {/* Image Gallery Side */}
              <div className="lg:w-1/2 p-6 grid grid-cols-2 gap-3 bg-slate-100">
                <div className="col-span-2 h-full rounded-3xl overflow-hidden">
                  <img src={campus.photos[0]} alt={campus.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                {/* <div className="h-40 rounded-3xl overflow-hidden">
                  <img src={campus.photos[1]} alt="Campus detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-40 rounded-3xl overflow-hidden">
                  <img src={campus.photos[2]} alt="Campus detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div> */}
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <MapPin size={20} />
                  <span className="font-bold uppercase tracking-widest text-sm">{campus.location}</span>
                </div>
                <h2 className="text-3xl font-black text-[#0d1b2a] uppercase mb-6">{campus.name}</h2>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  {campus.description}
                </p>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Campus Highlights</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {campus.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-800 font-bold text-sm">
                        <CheckCircle2 size={18} className="text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <a 
                    href="#contact-section" 
                    className="inline-block bg-[#0d1b2a] text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-slate-200"
                  >
                    Visit This Campus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
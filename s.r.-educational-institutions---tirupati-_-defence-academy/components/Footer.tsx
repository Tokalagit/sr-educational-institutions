
// import React from 'react';
// import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
// import { NAV_LINKS, SCHOOL_NAME, LOGO_URL } from '../constants';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-800">
//           {/* Brand Col */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 shrink-0">
//                 <img 
//                   src={LOGO_URL} 
//                   alt={`${SCHOOL_NAME} Logo`} 
//                   className="w-full h-full object-contain filter brightness-110"
//                 />
//               </div>
//               <h4 className="text-base font-black text-white leading-tight uppercase">{SCHOOL_NAME}</h4>
//             </div>
//             <p className="text-xs leading-relaxed font-medium">
//               S.R. Educational Institutions focuses on discipline and academic excellence for a career in service.
//             </p>
//             <div className="flex gap-3">
//               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition text-white"><Facebook size={16} /></a>
//               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-400 transition text-white"><Twitter size={16} /></a>
//               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition text-white"><Instagram size={16} /></a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h5 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h5>
//             <ul className="space-y-2">
//               {NAV_LINKS.slice(0, 5).map(link => (
//                 <li key={link.label}>
//                   <a href={link.href} className="hover:text-white transition text-xs font-semibold">{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h5 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Contact</h5>
//             <ul className="space-y-3">
//               <li className="flex gap-2 text-[11px]">
//                 <MapPin className="text-orange-500 shrink-0" size={14} />
//                 <span>Opp. Old Dilli’s Hotel, National Highway, Tirupati, AP</span>
//               </li>
//               <li className="flex gap-2 text-[11px]">
//                 <Phone className="text-orange-500 shrink-0" size={14} />
//                 <span>+91 95815 40540</span>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h5 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Our Location</h5>
//             <div className="rounded-lg overflow-hidden h-32 bg-slate-800">
//                <div className="flex items-center justify-center h-full text-[10px] text-slate-500 uppercase tracking-widest bg-slate-800 font-bold italic">
//                  Map View Available
//                </div>
//             </div>
//           </div>
//         </div>

//         <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
//           <p>© {new Date().getFullYear()} {SCHOOL_NAME}</p>
//           <p className="mt-2 md:mt-0 opacity-60">Professional Excellence</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, SCHOOL_NAME, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Adjusted grid to 3 columns since map is removed */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 shrink-0">
                <img 
                  src={LOGO_URL} 
                  alt={`${SCHOOL_NAME} Logo`} 
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
              <h4 className="text-base font-black text-white leading-tight uppercase">{SCHOOL_NAME}</h4>
            </div>
            <p className="text-xs leading-relaxed font-medium max-w-xs">
              S.R. Educational Institutions focuses on discipline and academic excellence for a career in service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition text-white">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-400 transition text-white">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition text-white">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h5 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h5>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 6).map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition text-xs font-semibold block py-0.5">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Contact Details</h5>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[11px] items-start">
                <MapPin className="text-orange-500 shrink-0 mt-0.5" size={16} />
                <span className="leading-relaxed">
                  Upparappalli Checkpost,  <br />
                  opposite to Delhi's hotel, Avilali, <br />
                  Andhra Pradesh - 517508
                </span>
              </li>
              <li className="flex gap-3 text-[11px] items-center">
                <Phone className="text-orange-500 shrink-0" size={16} />
                <span className="font-bold">+91 96036 23494 | +91 90008 52892</span>
              </li>
              <li className="flex gap-3 text-[11px] items-center">
                <Mail className="text-orange-500 shrink-0" size={16} />
                <span className="font-bold uppercase">srjuniorcollegetpt@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} {SCHOOL_NAME}</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <p className="opacity-60">Privacy Policy</p>
            <p className="opacity-60">Professional Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

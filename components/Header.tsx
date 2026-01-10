
// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown, Search, User, Bell, Download, Star } from 'lucide-react';
// import { NAV_LINKS, SCHOOL_NAME, SCHOOL_SUBTITLE, LOGO_URL, NEWS_TICKER } from '../constants';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <>
//       {/* News Ticker Bar */}
//       <div className="fixed top-0 left-0 right-0 z-[60] bg-orange-700 text-white h-8 overflow-hidden flex items-center shadow-inner">
//         <div className="container mx-auto px-4 flex items-center whitespace-nowrap overflow-hidden">
//           <div className="bg-orange-900 px-2 py-0.5 rounded text-[10px] font-black uppercase flex items-center gap-1 mr-4 shrink-0">
//             <Bell size={10} className="animate-pulse" />
//             Latest News
//           </div>
//           <div className="animate-marquee flex gap-12 text-[10px] font-bold uppercase tracking-widest">
//             {NEWS_TICKER.map((news, i) => (
//               <span key={i} className="flex items-center gap-2">
//                 <Star size={8} className="text-orange-300" /> {news}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <header className={`fixed ${isScrolled ? 'top-8 shadow-md' : 'top-8'} left-0 right-0 z-50 bg-white border-b border-slate-100 transition-all duration-300`}>
//         <nav className="container mx-auto px-4 lg:py-0">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo Section */}
//             <a href="#home" className="flex items-center gap-3 group transition-transform hover:scale-105">
//               <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
//                 <img 
//                   src={LOGO_URL} 
//                   alt={`${SCHOOL_NAME} Logo`} 
//                   className="w-full h-full object-contain drop-shadow-sm group-hover:rotate-6 transition-transform"
//                 />
//               </div>
//               <div className="hidden sm:block">
//                 <h1 className="text-lg md:text-xl font-black text-slate-900 leading-none tracking-tight uppercase">{SCHOOL_NAME}</h1>
//                 <p className="text-[8px] md:text-[10px] font-bold text-orange-600 tracking-wider uppercase mt-0.5">{SCHOOL_SUBTITLE}</p>
//               </div>
//             </a>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-0">
//               {NAV_LINKS.map((link) => (
//                 <div 
//                   key={link.label}
//                   className="relative group h-20 flex items-center"
//                   onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <a 
//                     href={link.href}
//                     className={`px-3 py-2 text-[12px] font-black transition-colors flex items-center gap-1 uppercase tracking-tight ${link.label === 'Home' ? 'text-orange-600' : 'text-slate-800 hover:text-orange-600'}`}
//                   >
//                     {link.label}
//                     {link.subLinks && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
//                   </a>

//                   {/* Dropdown Menu */}
//                   {link.subLinks && activeDropdown === link.label && (
//                     <div className="absolute top-full left-0 w-60 bg-white border border-slate-100 shadow-2xl rounded-b-xl py-3 animate-in fade-in slide-in-from-top-2 duration-200">
//                       {link.subLinks.map((sub) => (
//                         <a 
//                           key={sub.label}
//                           href={sub.href}
//                           className="block px-6 py-3 text-[11px] font-black text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all border-l-4 border-transparent hover:border-orange-600 uppercase"
//                         >
//                           {sub.label}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               <div className="flex items-center gap-4 ml-6 h-20">
//                 {/* Search Icon */}
//                 <button 
//                   onClick={() => setShowSearch(!showSearch)}
//                   className="p-2 text-slate-800 hover:text-orange-600 transition-colors"
//                   aria-label="Search"
//                 >
//                   <Search size={22} strokeWidth={2.5} />
//                 </button>

//                 {/* Separator */}
//                 <div className="h-10 w-px bg-slate-200 mx-1"></div>

//                 {/* Portal Button */}
//                 <a 
//                   href="#admissions"
//                   className="flex items-center gap-2 p-2 text-slate-800 hover:text-orange-600 transition-colors group"
//                 >
//                   <User size={22} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
//                   <span className="text-[13px] font-black uppercase tracking-wider">Portal</span>
//                 </a>

//                 {/* Enroll Now Button - Image Style Match */}
//                 <a 
//                   href="#admissions" 
//                   className="bg-orange-600 text-white px-7 py-3 rounded-xl font-black text-[13px] uppercase tracking-widest hover:bg-orange-700 transition transform hover:scale-105 shadow-xl shadow-orange-200/50 flex items-center justify-center min-w-[140px]"
//                 >
//                   Enroll Now
//                 </a>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex lg:hidden items-center gap-4">
//               <button className="p-2 text-slate-800" onClick={() => setShowSearch(!showSearch)}>
//                 <Search size={24} />
//               </button>
//               <button className="p-2 text-slate-900" onClick={toggleMenu}>
//                 {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Search Bar Overlay */}
//         {showSearch && (
//           <div className="absolute top-full left-0 right-0 bg-white border-b shadow-2xl p-6 animate-in slide-in-from-top duration-300">
//             <div className="container mx-auto px-4 relative max-w-4xl">
//               <input 
//                 autoFocus
//                 type="text" 
//                 placeholder="Search for courses, placements, or facilities..." 
//                 className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-14 py-4 outline-none focus:border-orange-600 text-base font-bold transition-all shadow-inner"
//               />
//               <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
//               <button onClick={() => setShowSearch(false)} className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-600 bg-white p-1 rounded-full shadow-sm">
//                 <X size={20} />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Mobile Sidebar */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-2xl p-6 flex flex-col gap-2 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-300 z-[100]">
//             {NAV_LINKS.map((link) => (
//               <div key={link.label} className="border-b border-slate-50 last:border-0">
//                 <div className="flex items-center justify-between py-3">
//                   <a 
//                     href={link.href} 
//                     className={`text-lg font-black uppercase tracking-tight ${link.label === 'Home' ? 'text-orange-600' : 'text-slate-900'}`}
//                     onClick={() => !link.subLinks && setIsMenuOpen(false)}
//                   >
//                     {link.label}
//                   </a>
//                   {link.subLinks && <ChevronDown size={20} className="text-slate-400" />}
//                 </div>
//                 {link.subLinks && (
//                   <div className="pl-6 pb-3 flex flex-col gap-2">
//                     {link.subLinks.map((sub) => (
//                       <a 
//                         key={sub.label}
//                         href={sub.href}
//                         className="text-slate-500 text-sm font-bold py-2 uppercase tracking-tight hover:text-orange-600 transition-colors"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {sub.label}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <div className="mt-6 flex flex-col gap-4">
//               <a 
//                 href="#admissions" 
//                 className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-black shadow-xl uppercase text-sm tracking-widest"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <User size={20} strokeWidth={2.5} /> Student Portal
//               </a>
//               <a 
//                 href="#admissions" 
//                 className="block text-center bg-orange-600 text-white py-4 rounded-2xl font-black shadow-xl uppercase text-sm tracking-widest"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Start Enrollment
//               </a>
//             </div>
//           </div>
//         )}
//       </header>
      
//       {/* Spacer for sticky headers (News Bar + Header) */}
//       <div className="h-28"></div>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, User, Bell } from 'lucide-react';
import { NAV_LINKS, LOGO_URL, NEWS_TICKER } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. TOP NEWS BAR */}
      <div className="fixed top-0 left-0 right-0 z-[70] bg-[#bf360c] text-white h-9 flex items-center shadow-md">
        <div className="w-full px-4 flex items-center overflow-hidden">
          <div className="bg-white/20 px-2 py-0.5 rounded flex items-center gap-1 shrink-0 border border-white/30 mr-4">
            <Bell size={12} />
            <span className="text-[10px] font-black uppercase">LATEST NEWS</span>
          </div>
          <div className="animate-marquee whitespace-nowrap text-[10px] font-bold uppercase tracking-wide">
             {NEWS_TICKER.join(" • ")}
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className={`fixed left-0 right-0 z-[60] transition-all duration-300 bg-white ${isScrolled ? 'top-0 shadow-lg' : 'top-9'}`}>
        <nav className="w-full px-4 lg:px-8"> 
          <div className="flex items-center justify-between h-24 w-full max-w-[1600px] mx-auto gap-2">
            
            {/* LEFT: Logo Section */}
            <div className="flex items-center gap-3 shrink-0">
              <img src={LOGO_URL} alt="Logo" className="h-14 w-14 object-contain" />
              <div className="flex flex-col">
                <h1 className="text-[16px] xl:text-[18px] font-[900] text-[#0d1b2a] leading-[1.1] uppercase">
                  S.R. EDUCATIONAL<br/>INSTITUTIONS
                </h1>
                <p className="text-[9px] font-extrabold text-[#d84315] tracking-tighter uppercase">
                  Junior & Degree College – Tirupati
                </p>
              </div>
            </div>

            {/* MIDDLE: Navigation Links */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-0.5 xl:gap-1">
                {NAV_LINKS.map((link) => (
                  <div 
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a 
                      href={link.href}
                      className={`px-2 xl:px-3 py-2 text-[11px] xl:text-[13px] font-black transition-colors flex items-center gap-0.5 uppercase whitespace-nowrap ${link.label === 'Home' || activeDropdown === link.label ? 'text-[#d84315]' : 'text-[#0d1b2a] hover:text-[#d84315]'}`}
                    >
                      {link.label}
                      {link.subLinks && <ChevronDown size={12} strokeWidth={3} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                    </a>

                    {/* DROPDOWN MENU */}
                    {link.subLinks && activeDropdown === link.label && (
                      <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white shadow-2xl rounded-xl border border-slate-100 overflow-hidden py-2">
                          {link.subLinks.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block px-6 py-3 text-[11px] font-black uppercase tracking-widest text-slate-700 hover:bg-orange-50 hover:text-[#d84315] border-b border-slate-50 last:border-0 transition-all"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Action Buttons */}
            <div className="flex items-center gap-2 xl:gap-4 shrink-0">
              <button className="p-1 text-[#0d1b2a] hover:text-[#d84315] hidden xl:block">
                <Search size={22} strokeWidth={2.5} />
              </button>

              <a href="#contact-section" className="hidden xl:flex items-center gap-1 px-2 text-[#0d1b2a] font-black uppercase text-[13px] whitespace-nowrap hover:text-[#d84315]">
                <User size={22} strokeWidth={2.5} />
                Portal
              </a>

              <a 
                href="#admissions" 
                className="bg-[#f44336] text-white px-5 py-3 rounded-lg font-black text-[13px] uppercase tracking-widest shadow-md hover:bg-[#d32f2f] transition-all whitespace-nowrap shrink-0"
              >
                Enroll Now
              </a>

              <button className="lg:hidden p-2 text-[#0d1b2a]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className={`${isScrolled ? 'h-[96px]' : 'h-[132px]'} transition-all duration-300`}></div>
    </>
  );
};

export default Header;
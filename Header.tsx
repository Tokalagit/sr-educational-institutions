// import React, { useState, useEffect } from "react";
// import { Menu, X, ChevronDown, Bell } from "lucide-react";
// import {
//   NAV_LINKS,
//   LOGO_URL,
//   SCHOOL_NAME,
//   SCHOOL_SUBTITLE,
//   NEWS_TICKER,
// } from "../constants";

// const Header: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdown, setDropdown] = useState<string | null>(null);
//   const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
//   const [activeMobile, setActiveMobile] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {};
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

// useEffect(() => {
//   if (menuOpen) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }

//   return () => {
//     document.body.style.overflow = "auto";
//   };
// }, [menuOpen]);
// const handleMobileNavClick = (href: string) => {
//   setMenuOpen(false);
//   setMobileDropdown(null);

//   // wait for menu to close
//   setTimeout(() => {
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   }, 300);
// };

//   return (
//     <>
//       {/* TOP NEWS BAR */}
//       <div className="sticky top-0 h-10 bg-[#b33a0e] text-white z-[70] flex items-center">
//         <div className="w-full px-4 flex items-center overflow-hidden">
//           <Bell size={16} className="mr-3" />
//           <div className="animate-marquee whitespace-nowrap text-[12px] font-bold uppercase">
//             {NEWS_TICKER.join(" • ")}
//           </div>
//         </div>
//       </div>

//       {/* HEADER */}
//       {/* <header className="sticky top-10 h-24 bg-white z-[60] shadow-md"> */}
//       <header className="sticky top-10 h-14 bg-white z-[60] shadow-md">

//         <div className="px-4 sm:px-6 md:px-10 lg:px-40 h-full flex items-center justify-between">

      

//             <a href="/" className="flex items-center gap-4">
//             <img src={LOGO_URL} className="h-10 w-10 object-contain" />
//             <div>
//               <h1 className="text-[16px] font-black leading-tight uppercase">
//                 {SCHOOL_NAME}
//               </h1>
//               <p className="text-[10px] font-bold leading-none uppercase">
//                 {SCHOOL_SUBTITLE}
//               </p>
//             </div>
//           </a>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex gap-4">
//             {NAV_LINKS.map((link) => (
//               <div
//                 key={link.label}
//                 className="relative py-2"
//                 onMouseEnter={() => setDropdown(link.label)}
//                 onMouseLeave={() => setDropdown(null)}
//               >
//                 <a
//                   href={link.href}
//                   onClick={() => {
//                  setMenuOpen(false);
//                  setMobileDropdown(null);
//                  }}
//                   className="flex items-center gap-1 font-black uppercase text-[#0d1b2a] hover:text-[#d84315]"
//                  >
//                   {link.label}
//                   {link.subLinks && (
//                     <ChevronDown
//                       size={16}
//                       className={`transition ${
//                         dropdown === link.label ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}
//                 </a>

//                 {link.subLinks && dropdown === link.label && (
//                   <div className="absolute top-full bg-white shadow-xl w-64 border-t-4 border-[#d84315]">
//                     {link.subLinks.map((sub) => (
//                       <a
//                         key={sub.label}
//                         href={sub.href}
//                         className="block px-6 py-3 text-sm font-bold hover:bg-orange-50 hover:text-[#d84315]"
//                       >
//                         {sub.label}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* MOBILE TOGGLE */}
//           <button
//             className="lg:hidden"
//             onClick={() => setMenuOpen(true)}
//           >
//             <Menu size={32} />
//           </button>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-[100] lg:hidden">
//           <div
//             className="absolute inset-0 bg-black/50"
//             onClick={() => setMenuOpen(false)}
//           />
//           <div className="absolute right-0 w-[300px] h-full bg-white shadow-xl">
//             <div className="p-6 flex justify-between border-b">
//               <span className="font-black uppercase">Navigation</span>
//               <button onClick={() => setMenuOpen(false)}>
//                 <X size={28} />
//               </button>
//             </div>

//             {NAV_LINKS.map((link) => (
//               <div key={link.label} className="border-b">
//                 {/* <button
//                   className={`w-full flex justify-between items-center px-8 py-5 font-black uppercase transition
//                     ${
//                       activeMobile === link.label
//                         ? "text-[#d84315] bg-orange-50"
//                         : "text-[#0d1b2a]"
//                     }
//                     active:bg-orange-100
//                   `}
//                   onClick={() => {
//                     setActiveMobile(link.label);
//                     link.subLinks
//                       ? setMobileDropdown(
//                           mobileDropdown === link.label ? null : link.label
//                         )
//                       : setMenuOpen(false);
//                   }}
//                 > */}

//                 <button
//   className={`w-full flex justify-between items-center px-8 py-5 font-black uppercase transition
//     ${activeMobile === link.label
//       ? "text-[#d84315] bg-orange-50"
//       : "text-[#0d1b2a]"}
//   `}
//   onClick={() => {
//     setActiveMobile(link.label);

//     if (link.subLinks) {
//       setMobileDropdown(
//         mobileDropdown === link.label ? null : link.label
//       );
//     } else {
//       handleMobileNavClick(link.href);
//     }
//   }}
// >

//                   {link.label}
//                   {link.subLinks && (
//                     <ChevronDown
//                       className={`transition ${
//                         mobileDropdown === link.label ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}
//                 </button>

//                 {link.subLinks && mobileDropdown === link.label && (
//                   <div className="bg-orange-50">
//                     {link.subLinks.map((sub) => (
//                       // <a
//                       //   key={sub.label}
//                       //   href={sub.href}
//                       //   className="block px-12 py-4 text-sm font-bold uppercase text-[#d84315]"
//                       //   onClick={() => setMenuOpen(false)}
//                       // >
//                       <a
//   href={sub.href}
//   onClick={(e) => {
//     e.preventDefault();
//     handleMobileNavClick(sub.href);
//   }}
//   className="block px-12 py-4 text-sm font-bold uppercase text-[#d84315]"
// >

//                         {sub.label}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Bell } from "lucide-react";
import {
  NAV_LINKS,
  LOGO_URL,
  SCHOOL_NAME,
  SCHOOL_SUBTITLE,
  NEWS_TICKER,
} from "../constants";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  const handleMobileNavClick = (href: string) => {
    setMenuOpen(false);
    setMobileDropdown(null);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* 1. TOP NEWS TICKER */}
      <div className="sticky top-0 h-10 bg-[#b33a0e] text-white z-[70] flex items-center shadow-sm">
        <div className="w-full px-4 flex items-center overflow-hidden">
          <Bell size={16} className="mr-3 flex-shrink-0" />
          <div className="animate-marquee whitespace-nowrap text-[11px] md:text-[12px] font-bold uppercase tracking-wider">
            {NEWS_TICKER.join(" • ")}
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-10 h-20 bg-white z-[60] shadow-md border-b border-gray-100">
        <div className="px-4 md:px-10 lg:px-16 h-full flex items-center justify-between max-w-[1920px] mx-auto">
          
          {/* BRANDING SECTION (Logo + Title) */}
          <a href="/" className="flex items-center gap-3 md:gap-4 flex-shrink-0 group">
            <img 
              src={LOGO_URL} 
              className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-105" 
              alt="SR Logo" 
            />
            <div className="flex flex-col">
              <h1 className="text-[14px] md:text-[18px] font-black leading-tight uppercase text-[#0d1b2a] tracking-tighter">
                {SCHOOL_NAME}
              </h1>
              <p className="text-[8px] md:text-[10px] font-extrabold leading-none uppercase text-[#d84315]">
                {SCHOOL_SUBTITLE}
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-x-5 xl:gap-x-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative group py-2"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 font-black text-[13px] xl:text-[14px] uppercase text-[#0d1b2a] hover:text-[#d84315] transition-colors relative"
                >
                  {link.label}

                  {link.subLinks && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        dropdown === link.label ? "rotate-180 text-[#d84315]" : ""
                      }`}
                    />
                  )}

                  {/* THE ANIMATED UNDERLINE (Fixed overlap issue) */}
                  <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-[#d84315] transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* DROPDOWN MENU PANEL */}
                {link.subLinks && dropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl w-60 border-t-4 border-[#d84315] py-2 z-[80] animate-in fade-in slide-in-from-top-2">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-6 py-3 text-[12px] font-bold text-[#0d1b2a] hover:bg-orange-50 hover:text-[#d84315] transition-all"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden p-2 text-[#0d1b2a] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* 3. MOBILE SIDEBAR NAVIGATION */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          
          {/* Side Panel */}
          <div className="absolute right-0 w-[280px] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right">
            <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-gray-50">
              <span className="font-black uppercase text-[#0d1b2a] text-sm">Navigation</span>
              <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-black transition-colors">
                <X size={26} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-white">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="border-b border-gray-50">
                  <button
                    className={`w-full flex justify-between items-center px-6 py-5 font-black uppercase text-xs transition-all
                      ${activeMobile === link.label ? "text-[#d84315] bg-orange-50" : "text-[#0d1b2a]"}`}
                    onClick={() => {
                      setActiveMobile(link.label);
                      if (link.subLinks) {
                        setMobileDropdown(mobileDropdown === link.label ? null : link.label);
                      } else {
                        handleMobileNavClick(link.href);
                      }
                    }}
                  >
                    {link.label}
                    {link.subLinks && (
                      <ChevronDown size={16} className={`transition-transform ${mobileDropdown === link.label ? "rotate-180" : ""}`} />
                    )}
                  </button>

                  {/* MOBILE SUB-LINKS DRAWER */}
                  {link.subLinks && mobileDropdown === link.label && (
                    <div className="bg-gray-50 py-2 border-l-4 border-[#d84315]">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => { e.preventDefault(); handleMobileNavClick(sub.href); }}
                          className="block px-10 py-3 text-[11px] font-bold uppercase text-gray-600 hover:text-[#d84315]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gray-50 border-t">
               <p className="text-[10px] font-bold text-center text-gray-400 uppercase tracking-widest">SR Institutions Tirupati</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
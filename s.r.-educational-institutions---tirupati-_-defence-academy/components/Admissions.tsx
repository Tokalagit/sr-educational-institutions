// import React, { useState } from 'react';
// import { ArrowRight, FileText, CalendarCheck, PhoneCall, CheckCircle, Smartphone, Download, QrCode } from 'lucide-react';

// const Admissions: React.FC = () => {
//   const [formData, setFormData] = useState({
//     studentName: '',
//     phoneNumber: '',
//     course: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Thank you ${formData.studentName}! Your enrollment enquiry for ${formData.course} has been submitted.`);
//     setFormData({ studentName: '', phoneNumber: '', course: '' });
//   };

//   // REMOVED: handleDownloadProspectus alert function

//   return (
//     <section id="admissions" className="py-16 bg-orange-900 text-white scroll-mt-20">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           <div className="lg:w-1/2 space-y-6">
//             <div className="space-y-3">
//               <h2 className="text-orange-400 font-bold tracking-widest uppercase text-[10px]">Admission Open 2024-25</h2>
//               <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Secure Your Future Today</h3>
//               <p className="text-orange-100 text-base leading-relaxed">
//                 Join our 100% Job Guarantee Programme. We offer courses for both <strong>Boys & Girls</strong> with dedicated physical and academic training.
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-3">
//               {[
//                 { title: 'Inter + Jobs', desc: 'MPC, BiPC, CEC, MEC.', icon: <FileText className="w-5 h-5" /> },
//                 { title: 'Degree + Jobs', desc: 'B.Sc, B.Com, BCA, BBA.', icon: <CalendarCheck className="w-5 h-5" /> },
//                 { title: 'Defence Coaching', desc: 'All wings training.', icon: <CheckCircle className="w-5 h-5" /> },
//                 { title: 'Registration', desc: 'Scan to apply.', icon: <QrCode className="w-5 h-5" /> }
//               ].map((item, idx) => (
//                 <div key={idx} className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition">
//                   <div className="bg-orange-600 p-2 rounded-lg h-fit text-white shrink-0">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-bold uppercase tracking-wide">{item.title}</h4>
//                     <p className="text-orange-100/70 text-[9px] uppercase font-bold tracking-widest">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 items-center">
//               <div className="bg-white p-4 rounded-2xl shadow-xl shrink-0 group">
//                 <div className="w-24 h-24 bg-slate-100 flex items-center justify-center text-slate-400 relative overflow-hidden">
//                   <QrCode size={48} className="group-hover:scale-110 transition-transform" />
//                   <div className="absolute inset-0 border-2 border-orange-600/20 m-1 rounded animate-pulse"></div>
//                 </div>
//                 <p className="text-[8px] font-black text-slate-800 text-center mt-2 uppercase">Scan to Register</p>
//               </div>
//               <div className="space-y-3 text-center sm:text-left">
//                 <h5 className="font-black text-sm uppercase tracking-widest flex items-center gap-2 justify-center sm:justify-start">
//                   <Download size={16} className="text-orange-400" />
//                   Prospectus & Guide
//                 </h5>
//                 <p className="text-[10px] text-orange-200 uppercase font-bold tracking-widest leading-relaxed">
//                   Get full details on course syllabus, placement history, and campus facilities.
//                 </p>
                
//                 {/* UPDATED: Button is now an anchor link pointing to your public folder */}
//                 <a 
//                   href="folder/sr school.pdf" 
//                   download="sr school"
//                   className="inline-block bg-white text-orange-900 px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-orange-100 transition shadow-lg text-center"
//                 >
//                   Download 
//                 </a>
//               </div>
//             </div>

//             <div className="bg-white/5 p-4 rounded-xl border border-dashed border-white/20 flex items-center justify-between">
//               <div className="space-y-1">
//                 <h5 className="font-bold text-xs flex items-center gap-2 uppercase tracking-wide">
//                   <Smartphone size={16} className="text-orange-400" />
//                   Admission Helpline:
//                 </h5>
//                 <p className="text-sm font-black text-orange-200">95815 40540 | 96428 32832</p>
//               </div>
//               <div className="hidden sm:block">
//                  <p className="text-[10px] text-orange-300 font-bold uppercase tracking-widest">Tirupati Campus</p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-1/2 w-full bg-white text-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border-t-4 border-orange-600">
//             <div className="mb-6 text-center">
//               <h4 className="text-xl font-black mb-1 uppercase tracking-wider">Online Enrolment</h4>
//               <p className="text-slate-500 text-xs font-bold uppercase tracking-widest opacity-60">Step 1: Express Interest</p>
//             </div>
            
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Full Student Name</label>
//                 <input 
//                   required 
//                   type="text" 
//                   value={formData.studentName}
//                   onChange={(e) => setFormData({...formData, studentName: e.target.value})}
//                   className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-600 outline-none text-sm transition font-bold" 
//                   placeholder="Student Name" 
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Parent's Mobile Number</label>
//                 <input 
//                   required 
//                   type="tel" 
//                   value={formData.phoneNumber}
//                   onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
//                   className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-600 outline-none text-sm transition font-bold" 
//                   placeholder="+91 00000 00000" 
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Select Course Stream</label>
//                 <select 
//                   required 
//                   value={formData.course}
//                   onChange={(e) => setFormData({...formData, course: e.target.value})}
//                   className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-600 outline-none text-sm transition font-bold appearance-none"
//                 >
//                   <option value="">Choose Course</option>
//                   <optgroup label="Intermediate">
//                     <option>Inter MPC + Defence/Jobs</option>
//                     <option>Inter BiPC + Defence/Jobs</option>
//                     <option>Inter CEC + Defence/Jobs</option>
//                     <option>Inter MEC + Defence/Jobs</option>
//                   </optgroup>
//                   <optgroup label="Degree">
//                     <option>Degree B.Sc + Jobs</option>
//                     <option>Degree B.Com + Jobs</option>
//                     <option>Degree BCA + Jobs</option>
//                     <option>Degree BBA + Jobs</option>
//                   </optgroup>
//                   <optgroup label="Coaching Only">
//                     <option>Defence Special Training Only</option>
//                     <option>SSC / RRB / Banking Exams</option>
//                   </optgroup>
//                 </select>
//               </div>
//               <div className="pt-2">
//                 <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-xl font-black text-xs hover:bg-orange-700 transition shadow-lg shadow-orange-100 uppercase tracking-[0.2em]">
//                   Proceed to Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Admissions;


import React, { useState } from 'react';
import { ArrowRight, FileText, CalendarCheck, PhoneCall, CheckCircle, Smartphone, Download, QrCode } from 'lucide-react';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    course: ''
  });

 


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault(); // 🚀 IMPORTANT

  try {
    // const response = await fetch("http://54.85.8.235:5000/send-email", {
    const response = await fetch("https://sreducationalinstitutions.com/send-email", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      alert("Query Sent Successfully!");
      setFormData({
        name: "",
        mobile: "",
        course: ""
      });
    } else {
      alert("Failed to send Query");
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    alert("Server not reachable");
  }
};





  // REMOVED: handleDownloadProspectus alert function

  return (
    <section id="admissions" className="py-16 bg-orange-900 text-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-3">
              <h2 className="text-orange-400 font-bold tracking-widest uppercase text-[10px]">Admission Open 2024-25</h2>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Secure Your Future Today</h3>
              <p className="text-orange-100 text-base leading-relaxed">
                Join our 100% Job Guarantee Programme. We offer courses for both <strong>Boys & Girls</strong> with dedicated physical and academic training.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Inter + Jobs', desc: 'MPC, BiPC, CEC, MEC.', icon: <FileText className="w-5 h-5" /> },
                { title: 'Degree + Jobs', desc: 'B.Sc, B.Com, BCA, BBA.', icon: <CalendarCheck className="w-5 h-5" /> },
                { title: 'Defence Coaching', desc: 'All wings training.', icon: <CheckCircle className="w-5 h-5" /> },
                { title: 'Registration', desc: 'Scan to apply.', icon: <QrCode className="w-5 h-5" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition">
                  <div className="bg-orange-600 p-2 rounded-lg h-fit text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide">{item.title}</h4>
                    <p className="text-orange-100/70 text-[9px] uppercase font-bold tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 items-center">
              <div className="bg-white p-4 rounded-2xl shadow-xl shrink-0 group">
                <div className="w-24 h-24 bg-slate-100 flex items-center justify-center text-slate-400 relative overflow-hidden">
                  <QrCode size={48} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 border-2 border-orange-600/20 m-1 rounded animate-pulse"></div>
                </div>
                <p className="text-[8px] font-black text-slate-800 text-center mt-2 uppercase">Scan to Register</p>
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <h5 className="font-black text-sm uppercase tracking-widest flex items-center gap-2 justify-center sm:justify-start">
                  <Download size={16} className="text-orange-400" />
                  Prospectus & Guide
                </h5>
                <p className="text-[10px] text-orange-200 uppercase font-bold tracking-widest leading-relaxed">
                  Get full details on course syllabus, placement history, and campus facilities.
                </p>
                
                {/* UPDATED: Button is now an anchor link pointing to your public folder */}
                <a 
                  href="folder/sr school.pdf" 
                  download="sr school"
                  className="inline-block bg-white text-orange-900 px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-orange-100 transition shadow-lg text-center"
                >
                  Download 
                </a>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-dashed border-white/20 flex items-center justify-between">
              <div className="space-y-1">
                <h5 className="font-bold text-xs flex items-center gap-2 uppercase tracking-wide">
                  <Smartphone size={16} className="text-orange-400" />
                  Admission Helpline:
                </h5>
                <p className="text-sm font-black text-orange-200">95815 40540 | 96428 32832</p>
              </div>
              <div className="hidden sm:block">
                 <p className="text-[10px] text-orange-300 font-bold uppercase tracking-widest">Tirupati Campus</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-white text-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border-t-4 border-orange-600">
            <div className="mb-6 text-center">
              <h4 className="text-xl font-black mb-1 uppercase tracking-wider">Online Enrolment</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest opacity-60">Step 1: Express Interest</p>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Full Student Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-600 outline-none text-sm transition font-bold" 
                  placeholder="Student Name" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Parent's Mobile Number</label>
                <input 
                  required 
                  type="tel" 
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-600 outline-none text-sm transition font-bold" 
                  placeholder="+91 00000 00000" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Select Course Stream</label>
                <select 
                  required 
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-orange-600 outline-none text-sm transition font-bold appearance-none"
                >
                  <option value="">Choose Course</option>
                  <optgroup label="Intermediate">
                    <option>Inter MPC + Defence/Jobs</option>
                    <option>Inter BiPC + Defence/Jobs</option>
                    <option>Inter CEC + Defence/Jobs</option>
                    <option>Inter MEC + Defence/Jobs</option>
                  </optgroup>
                  <optgroup label="Degree">
                    <option>Degree B.Sc + Jobs</option>
                    <option>Degree B.Com + Jobs</option>
                    <option>Degree BCA + Jobs</option>
                    <option>Degree BBA + Jobs</option>
                  </optgroup>
                  <optgroup label="Coaching Only">
                    <option>Defence Special Training Only</option>
                    <option>SSC / RRB / Banking Exams</option>
                  </optgroup>
                </select>
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-xl font-black text-xs hover:bg-orange-700 transition shadow-lg shadow-orange-100 uppercase tracking-[0.2em]">
                  Proceed to Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;


// import React from 'react';
// import { Mail, Phone, MapPin, Clock, Send, Smartphone, Globe } from 'lucide-react';

// const Contact: React.FC = () => {
//   return (
//     <section id="contact-section" className="py-16 bg-white scroll-mt-20">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Details */}
//           <div className="space-y-8">
//             <div className="space-y-3">
//               <h2 className="text-orange-600 font-black tracking-widest uppercase text-[10px]">Reach Us</h2>
//               <h3 className="text-3xl font-black text-slate-900 uppercase">Visit Our Campus</h3>
//               <p className="text-slate-600 text-base leading-relaxed font-medium">
//                 Our main administrative office is in Tirupati. We are available for campus tours from Campus-1 to Campus-3.
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
//                 <div className="bg-orange-600 text-white p-2.5 rounded-xl h-fit shadow shadow-orange-100">
//                   <Smartphone size={18} />
//                 </div>
//                 <div>
//                   <h5 className="font-black text-slate-900 text-xs mb-1">Direct Helpline</h5>
//                   <p className="text-slate-700 font-bold text-xs">95815 40540</p>
//                   <p className="text-slate-700 font-bold text-xs">96428 32832</p>
//                 </div>
//               </div>
//               <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
//                 <div className="bg-orange-600 text-white p-2.5 rounded-xl h-fit shadow shadow-orange-100">
//                   <MapPin size={18} />
//                 </div>
//                 <div>
//                   <h5 className="font-black text-slate-900 text-xs mb-1">Address</h5>
//                   <p className="text-slate-600 font-medium text-[10px] leading-tight uppercase font-bold tracking-tight">
//                     Opp. Old Dilli’s Hotel (Nandhini), National Highway, Upparapalli Checkpost, Tirupati.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
//                 <div className="bg-orange-600 text-white p-2.5 rounded-xl h-fit shadow shadow-orange-100">
//                   <Globe size={18} />
//                 </div>
//                 <div>
//                   <h5 className="font-black text-slate-900 text-xs mb-1">Digital</h5>
//                   <p className="text-slate-700 font-bold text-xs">srjuniorcollegetpt@gmail.com</p>
//                   <p className="text-slate-700 font-bold text-xs text-orange-600">@srdefenceacademytirupati</p>
//                 </div>
//               </div>
//               <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
//                 <div className="bg-orange-600 text-white p-2.5 rounded-xl h-fit shadow shadow-orange-100">
//                   <Clock size={18} />
//                 </div>
//                 <div>
//                   <h5 className="font-black text-slate-900 text-xs mb-1">Office Hours</h5>
//                   <p className="text-slate-700 font-bold text-xs uppercase">8 AM - 6 PM</p>
//                   <p className="text-slate-700 font-bold text-xs uppercase text-orange-600">Open Sundays</p>
//                 </div>
//               </div>
//             </div>

//             {/* Map Placeholder */}
//             <div className="w-full h-64 rounded-3xl overflow-hidden border-4 border-slate-100 shadow-inner bg-slate-100 relative group">
//                 <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
//                     <div className="text-center p-6">
//                         <MapPin size={48} className="text-orange-600 mx-auto mb-2 animate-bounce" />
//                         <p className="text-slate-500 font-black text-xs uppercase tracking-widest">Tirupati Campus Location Map</p>
//                         <p className="text-slate-400 text-[10px] font-bold mt-1">Nandhini Hotel, Upparapalli Checkpost</p>
//                     </div>
//                 </div>
//                 {/* Simulated Google Map Link */}
//                 <a 
//                   href="https://www.google.com/maps/search/S.R.+Educational+Institutions+Tirupati" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="absolute inset-0 bg-orange-600/0 hover:bg-orange-600/10 transition-colors flex items-center justify-center"
//                 >
//                     <div className="bg-white text-orange-600 px-4 py-2 rounded-full font-black text-[10px] uppercase shadow-xl opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
//                         View on Google Maps
//                     </div>
//                 </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg h-fit lg:sticky lg:top-32">
//             <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-wider">Send Quick Enquiry</h4>
//             <form className="space-y-4" onSubmit={e => {
//                 e.preventDefault();
//                 alert("Enquiry Sent Successfully!");
//             }}>
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Name</label>
//                   <input required type="text" className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold" placeholder="Your Name" />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Mobile</label>
//                   <input required type="tel" className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold" placeholder="Your Mobile" />
//                 </div>
//               </div>
//               <div className="space-y-1">
//                 <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Course Interested</label>
//                 <select required className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold appearance-none">
//                     <option value="">Choose Course</option>
//                     <option>Inter MPC + Defence</option>
//                     <option>Inter BiPC + Defence</option>
//                     <option>Degree + Job Training</option>
//                     <option>Other Enquiry</option>
//                 </select>
//               </div>
//               <div className="space-y-1">
//                 <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Message</label>
//                 <textarea required className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold h-24" placeholder="How can we help you?"></textarea>
//               </div>
//               <button className="w-full bg-orange-600 text-white font-black py-4 rounded-xl shadow shadow-orange-100 hover:bg-orange-700 transition uppercase tracking-[0.2em] text-xs mt-2">
//                 <Send size={16} className="inline mr-2" /> Submit Now
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React,{useState} from 'react';
import { Mail, Phone, MapPin, Clock, Send, Smartphone, Globe } from 'lucide-react';




const Contact: React.FC = () => {
const [name, setName] = useState("");
const [mobile, setMobile] = useState("");
const [course, setCourse] = useState("");
const [message, setMessage] = useState("");


  const handleSubmit = async () => {
  try {
    const data = { name, mobile, course, message };

    // const response = await fetch("http://54.85.8.235:5000/send-email", {
    const response = await fetch("/send-email", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      alert("Query Sent Successfully!");
      setName("");
      setMobile("");
      setCourse("");
      setMessage("");
    } else {
      alert("Failed to send email");
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    alert("Server not reachable");
  }
};

  return (
    <section id="contact-section" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-orange-600 font-black tracking-widest uppercase text-[10px]">Reach Us</h2>
              <h3 className="text-3xl font-black text-slate-900 uppercase">Visit Our Campus</h3>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                Our main administrative office is in Tirupati. We are available for campus tours from Campus-1 to Campus-3.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-orange-600 text-white p-2.5 rounded-xl h-fit shadow shadow-orange-100">
                  <Smartphone size={18} />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-xs mb-1">Direct Helpline</h5>
                  <p className="text-slate-700 font-bold text-xs">95815 40540</p>
                  <p className="text-slate-700 font-bold text-xs">96428 32832</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-orange-600 text-white p-2.5 rounded-xl h-fit shadow shadow-orange-100">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-xs mb-1">Address</h5>
                  <p className="text-slate-600 font-medium text-[10px] leading-tight uppercase font-bold tracking-tight">
                    Opp. Old Dilli’s Hotel (Nandhini), National Highway, Upparapalli Checkpost, Tirupati.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-orange-600 text-white p-2.5 rounded-xl h-fit shadow shadow-orange-100">
                  <Globe size={18} />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-xs mb-1">Digital</h5>
                  <p className="text-slate-700 font-bold text-xs">srjuniorcollegetpt@gmail.com</p>
                  <p className="text-slate-700 font-bold text-xs text-orange-600">@srdefenceacademytirupati</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-orange-600 text-white p-2.5 rounded-xl h-fit shadow shadow-orange-100">
                  <Clock size={18} />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-xs mb-1">Office Hours</h5>
                  <p className="text-slate-700 font-bold text-xs uppercase">8 AM - 6 PM</p>
                  <p className="text-slate-700 font-bold text-xs uppercase text-orange-600">Open Sundays</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 rounded-3xl overflow-hidden border-4 border-slate-100 shadow-inner bg-slate-100 relative group">
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                    <div className="text-center p-6">
                        <MapPin size={48} className="text-orange-600 mx-auto mb-2 animate-bounce" />
                        <p className="text-slate-500 font-black text-xs uppercase tracking-widest">Tirupati Campus Location Map</p>
                        <p className="text-slate-400 text-[10px] font-bold mt-1">Nandhini Hotel, Upparapalli Checkpost</p>
                    </div>
                </div>
                {/* Simulated Google Map Link */}
                <a 
                  href="https://www.google.com/maps/search/S.R.+Educational+Institutions+Tirupati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-orange-600/0 hover:bg-orange-600/10 transition-colors flex items-center justify-center"
                >
                    <div className="bg-white text-orange-600 px-4 py-2 rounded-full font-black text-[10px] uppercase shadow-xl opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                        View on Google Maps
                    </div>
                </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg h-fit lg:sticky lg:top-32">
            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-wider">Send Quick Enquiry</h4>
            <form className="space-y-4" onSubmit={e => {
                e.preventDefault();
                // alert("Enquiry Sent Successfully!");
            }}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  {/* <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Name</label>
                  <input required type="text" className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold" placeholder="Your Name" />
                </div> */}

                <input
  required
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold"
  placeholder="Your Name"
/>
</div>
                <div className="space-y-1">
                  {/* <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Mobile</label>
                  <input required type="tel" className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold" placeholder="Your Mobile" /> */}
                  <input
  required
  type="tel"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold"
  placeholder="Your Mobile"
/>

                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Course Interested</label>
                {/* <select required className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold appearance-none">
                    <option value="">Choose Course</option>
                    <option>Inter MPC + Defence</option>
                    <option>Inter BiPC + Defence</option>
                    <option>Degree + Job Training</option>
                    <option>Other Enquiry</option>
                </select> */}
                <select
  required
  value={course}
  onChange={(e) => setCourse(e.target.value)}
  className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold appearance-none"
>
  {/* <option value="">Choose Course</option>
  <option value="Inter MPC + Defence">Inter MPC + Defence</option>
  <option value="Inter BiPC + Defence">Inter BiPC + Defence</option>
  <option value="Degree + Job Training">Degree + Job Training</option>
  <option value="Other Enquiry">Other Enquiry</option> */}


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
              <div className="space-y-1">
                {/* <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Message</label>
                <textarea required className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold h-24" placeholder="How can we help you?"></textarea> */}
             <textarea
  required
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full bg-white border-slate-200 rounded-lg px-4 py-2.5 focus:border-orange-600 outline-none text-sm font-bold h-24"
  placeholder="How can we help you?"
></textarea>

              </div>
              <button onClick={handleSubmit} className="w-full bg-orange-600 text-white font-black py-4 rounded-xl shadow shadow-orange-100 hover:bg-orange-700 transition uppercase tracking-[0.2em] text-xs mt-2">
                <Send size={16} className="inline mr-2" /> Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

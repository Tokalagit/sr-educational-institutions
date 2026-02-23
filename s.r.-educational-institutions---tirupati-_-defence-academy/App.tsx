
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare, Phone, ChevronUp, HelpCircle, Send, Check, Quote, Star, User, Lock, X,Megaphone } from 'lucide-react';
import { FAQS, SCHOOL_NAME, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [showPortal, setShowPortal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-900 bg-white">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        
        {/* About Section */}
        <About />

        {/* Academics / Courses Section */}
        <Academics />

        {/* Testimonials */}
        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
           
            
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all duration-500">
                  <Quote className="absolute top-6 right-6 text-slate-100 group-hover:text-orange-50 transition-colors" size={48} />
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-100" />
                    <div>
                      <h4 className="font-black text-slate-900 text-sm uppercase">{t.name}</h4>
                      <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{t.rank}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={12} className="fill-orange-400 text-orange-400" />)}
                  </div>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions Section */}
        <Admissions />

        {/* Facilities / Campus Life Section */}
        <Facilities />

        {/* FAQ Section */}
        <section className="py-20 bg-white" id="faq">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-orange-600 font-black tracking-[0.2em] uppercase text-[10px]">Information</h2>
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Frequently Asked Questions</h3>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Get answers to common queries from parents & students</p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <button 
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-sm text-slate-800 uppercase tracking-wide">{faq.question}</span>
                    <HelpCircle size={18} className={`text-orange-600 transition-transform duration-300 ${faqOpen === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {faqOpen === idx && (
                    <div className="px-5 pb-5 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-slate-600 text-sm font-medium leading-relaxed border-t border-slate-50 pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Newsletter */}
        <section className="py-16 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left space-y-2">
                <h4 className="text-white text-xl font-black uppercase tracking-widest">Career Updates</h4>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Get recruitment notices directly in your inbox</p>
              </div>
              <form 
                className="w-full md:w-auto flex flex-col sm:flex-row gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                  setTimeout(() => setSubscribed(false), 5000);
                }}
              >
                <div className="relative">
                  <input 
                    required
                    type="email" 
                    placeholder="Enter Email Address"
                    className="bg-white/10 border border-white/20 text-white rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-widest outline-none focus:border-orange-600 transition-all min-w-[280px]"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={subscribed}
                  className={`bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition flex items-center justify-center gap-2 ${subscribed ? 'bg-green-600' : ''}`}
                >
                  {subscribed ? <><Check size={16}/> Joined</> : <><Send size={16}/> Subscribe</>}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* Final CTA */}
        <section className="bg-white pb-20 pt-10">
          <div className="container mx-auto px-4">
            <div className="bg-orange-600 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-orange-400/20 transform hover:scale-[1.01] transition-transform">
              <div className="text-center md:text-left text-white max-w-lg">
                <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight uppercase">Shape Your Future with S.R.</h3>
                <p className="text-orange-100 text-[11px] font-bold uppercase tracking-widest">Visit our campus in Tirupati today for a free career counseling session.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="#admissions" className="bg-white text-orange-700 px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-50 transition shadow transform hover:-translate-y-1">
                  Download Guide
                </a>
                <a href="tel:+9196036 23494" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:bg-black transition shadow transform hover:-translate-y-1">
                  <Phone size={14} /> Visit Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Buttons */}
      {/* <div className="fixed bottom-24 lg:bottom-10 right-6 z-40 flex flex-col gap-3">
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl hover:bg-orange-600 transition-all transform hover:scale-110 animate-in fade-in zoom-in"
            aria-label="Back to Top"
          >
            <ChevronUp size={24} />
          </button>
        )}
        <a 
          href="https://wa.me/919581540540" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-2xl shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={24} />
        </a>
      </div> */}
      

      {/* Floating Buttons */}
<div className="fixed bottom-24 lg:bottom-10 right-2 z-40 flex flex-col gap-2">

  {/* JOIN US FLOATING BUTTON */}
  <a
    href="#admissions"
    // className="bg-[#e65100] text-white px-0 py-3 rounded-2xl font-light text-xs uppercase tracking-widest shadow-2xl shadow-orange-600/30
    //            hover:bg-[#bf360c] transition-all transform hover:scale-110 active:scale-95 text-center"
     className="bg-[#e65100] text-white px-3 py-3 rounded-2xl font-light  tracking-widest shadow-2xl shadow-orange-600/30
               hover:bg-[#bf360c] transition-all transform hover:scale-110 active:scale-95 text-center"
  >
    <Megaphone size={28} />
  </a>
{/* 
  {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="bg-slate-900 text-white p-2 rounded-2xl shadow-2xl hover:bg-orange-600 transition-all transform hover:scale-110 animate-in fade-in zoom-in"
            aria-label="Back to Top"
          >
            <ChevronUp size={24} />
          </button>
        )} */}
        <a 
          href="https://wa.me/919581540540" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-2xl shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={24} />
        </a>



         {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="bg-slate-900 text-white px-4 py-1 rounded-2xl shadow-2xl hover:bg-orange-600 transition-all transform hover:scale-110 animate-in fade-in zoom-in"
            aria-label="Back to Top"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div> 

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-2 shadow-2xl">
          <a href="tel:+919581540540" className="bg-slate-900 text-white py-5 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 active:bg-black">
            <Phone size={18} /> Call Us
          </a>
          <a href="#admissions" className="bg-orange-600 text-white py-5 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 active:bg-orange-700">
            <Check size={18} /> Enroll Now
          </a>
      </div>

      {/* Student Portal Modal - Advanced Feature */}
      {showPortal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
                <button onClick={() => setShowPortal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-2">
                    <X size={24} />
                </button>
                <div className="bg-orange-600 p-10 text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <User size={32} />
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight">Student Portal</h4>
                    <p className="text-orange-100 text-xs font-bold uppercase tracking-widest mt-2">Access your results and training schedules</p>
                </div>
                <div className="p-8 space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Admission Number</label>
                        <div className="relative">
                            <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-12 py-3 outline-none focus:border-orange-600 text-sm font-bold" placeholder="e.g. SR2024001" />
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Password</label>
                        <div className="relative">
                            <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-12 py-3 outline-none focus:border-orange-600 text-sm font-bold" />
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        </div>
                    </div>
                    <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-orange-700 transition transform active:scale-95">
                        Log In Now
                    </button>
                    <div className="text-center pt-2">
                        <a href="#" className="text-[10px] font-black text-slate-400 hover:text-orange-600 uppercase tracking-widest transition">Forgot Credentials?</a>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Users, GraduationCap, ClipboardList, Info, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const EnrolmentPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData = location.state?.initialData;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // State management for form fields
  const [formData, setFormData] = useState({
    studentName: initialData?.studentName || '',
    dob: '',
    gender: '',
    motherTongue: '',
    nationality: 'Indian',
    studentAadhar: '',
    mobileNumber: initialData?.phoneNumber || '',
    email: '',
    fatherName: initialData?.parentName || '',
    fatherAadhar: '',
    fatherOccupation: '',
    motherName: '',
    motherAadhar: '',
    motherOccupation: '',
    course: initialData?.course || '',
    advancedCourse: '',
    medium: 'English', // Assuming English medium with Lang options
    secondLanguage: '',
    type: 'Day Scholar',
    sscHallTicket: '',
    sscGpa: '',
    lastStudied: ''
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-8 hover:text-orange-600 transition">
            <ArrowLeft size={16} /> Return to Home
          </button>

          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            {/* Header Section */}
            <div className="bg-orange-900 p-10 text-white flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-black uppercase tracking-tighter">S.R. JUNIOR COLLEGE</h1>
                <p className="text-orange-400 font-bold text-xs uppercase tracking-[0.2em] mt-1">Recognised by Govt. of A.P.</p>
                <p className="text-orange-100/60 text-[10px] uppercase mt-2">AIR By-pass Road, Tirupati - 517501</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                <span className="block text-[10px] font-black text-orange-400 uppercase tracking-widest">Digital Application</span>
                <span className="text-xl font-mono font-bold italic">SR24/ONLINE</span>
              </div>
            </div>

            <form
              className="p-8 md:p-12 space-y-16"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitError(null);
                try {
                  const res = await fetch('/send-enrolment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                  });
                  if (!res.ok) throw new Error('Server error');
                  setSubmitSuccess(true);
                } catch (err) {
                  setSubmitError('Something went wrong. Please try again or call us on 96036 23494.');
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >

              {/* 1. STUDENT DETAILS */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b-2 border-orange-600/10 pb-4">
                  <User className="text-orange-600" size={24} />
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Student Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name (Block Letters)</label>
                    <input required name="studentName" value={formData.studentName} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-orange-600 outline-none font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date of Birth</label>
                    <input required name="dob" value={formData.dob} onChange={handleChange} type="date" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm outline-none focus:border-orange-600">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mother Tongue</label>
                    <input name="motherTongue" value={formData.motherTongue} onChange={handleChange} type="text" placeholder="e.g. Telugu" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Student Aadhar No</label>
                    <input required name="studentAadhar" value={formData.studentAadhar} onChange={handleChange} type="text" placeholder="XXXX XXXX XXXX" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
                    <input required name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-orange-600 outline-none font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="parent@email.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-orange-600 outline-none font-bold text-sm" />
                  </div>
                </div>
              </div>

              {/* 2. PARENT/GUARDIAN DETAILS */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b-2 border-orange-600/10 pb-4">
                  <Users className="text-orange-600" size={24} />
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Parent Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-6 rounded-3xl space-y-4 border border-slate-100">
                    <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em]">Father's Details</h3>
                    <input required name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father Name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm" />
                    <input name="fatherAadhar" value={formData.fatherAadhar} onChange={handleChange} placeholder="Aadhar Number" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm" />
                    <input name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} placeholder="Occupation" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm" />
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl space-y-4 border border-slate-100">
                    <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em]">Mother's Details</h3>
                    <input required name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother Name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm" />
                    <input name="motherAadhar" value={formData.motherAadhar} onChange={handleChange} placeholder="Aadhar Number" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm" />
                    <input name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} placeholder="Occupation" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm" />
                  </div>
                </div>
              </div>

              {/* 3. ACADEMIC DETAILS */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b-2 border-orange-600/10 pb-4">
                  <GraduationCap className="text-orange-600" size={24} />
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Academic Selection</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Course Stream</label>
                    <select name="course" value={formData.course} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm outline-none focus:border-orange-600 appearance-none">
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
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Advanced Coaching</label>
                    <select name="advancedCourse" value={formData.advancedCourse} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm">
                      <option value="">Select Coaching</option>
                      <option>EAMCET</option>
                      <option>NEET</option>
                      <option>CA-CPT</option>
                      <option>OTHER</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Medium</label>
                    <select name="medium" value={formData.medium} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm">
                      <option>English</option>
                      <option>Telugu</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Second Language</label>
                    <select name="secondLanguage" value={formData.secondLanguage} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm">
                      <option value="">Select Language</option>
                      <option>Sanskrit</option>
                      <option>Telugu</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Student Type</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm">
                      <option>Day Scholar</option>
                      <option>Hostler</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SSC Hall Ticket No</label>
                    <input required name="sscHallTicket" value={formData.sscHallTicket} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SSC GPA / Grade</label>
                    <input name="sscGpa" value={formData.sscGpa} onChange={handleChange} type="text" placeholder="e.g. 10.0" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Institution Last Studied</label>
                    <input name="lastStudied" value={formData.lastStudied} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-sm" />
                  </div>
                </div>
              </div>

              {/* 4. DOCUMENTS CHECKLIST */}
              <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <ClipboardList className="text-orange-500" size={24} />
                  <h2 className="text-xl font-black uppercase tracking-tight">Documents Checklist</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold uppercase tracking-wide">
                  {[
                    "SSC Original Marks List", "Transfer Certificate (TC)", "4 Recent Passport size Photos",
                    "Xerox of Caste Certificate", "Aadhar Cards (Student & Parents)",
                    "Ration Card Xerox", "Student Bank Passbook"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-2 h-2 bg-orange-600 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6 flex gap-4">
                  <Info className="text-orange-400 shrink-0" />
                  <div className="text-[10px] uppercase font-bold leading-relaxed text-slate-300">
                    Mobile phones strictly prohibited. Fee once paid is non-refundable. Punctuality is mandatory.
                  </div>
                </div>
              </div>

              {/* 5. DECLARATION & SUBMIT */}
              <div className="space-y-8">
                <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-100 space-y-4">
                  <div className="flex items-start gap-4">
                    <input required type="checkbox" className="mt-1.5 w-5 h-5 accent-orange-600 rounded cursor-pointer" id="agree" />
                    <label htmlFor="agree" className="text-[11px] font-bold text-slateate-700 leading-relaxed uppercase tracking-tight">
                      I declare that the particulars stated above are correct. I solemnly affirm to abide by the rules and regulations of the college.
                    </label>
                  </div>
                </div>

                {/* Error message */}
                {submitError && (
                  <div className="flex items-start gap-3 bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-2xl">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <p className="text-xs font-bold uppercase tracking-wide">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white py-6 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.4em] shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3
                  ${isSubmitting ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'}`}
                >
                  {isSubmitting ? (
                    <><Loader2 size={20} className="animate-spin" /> Submitting...</>
                  ) : (
                    'Submit Official Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {
        submitSuccess && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-md w-full p-10 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-center">
                <div className="bg-green-100 rounded-full p-5">
                  <CheckCircle size={56} className="text-green-500" strokeWidth={1.5} />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Application Submitted!</h2>
                <p className="text-slate-500 text-sm font-medium">
                  Your application has been received. Our admissions team will contact you shortly.
                </p>
                <p className="text-orange-600 font-black text-xs uppercase tracking-widest pt-1">srjuniorcollegetpt@gmail.com</p>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => navigate('/')}
                  className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-700 transition"
                >
                  Return to Home
                </button>
                <button
                  onClick={() => { setSubmitSuccess(false); window.scrollTo(0, 0); }}
                  className="w-full bg-slate-100 text-slate-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default EnrolmentPage;
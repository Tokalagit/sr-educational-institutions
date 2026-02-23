// import React from 'react';
// import { 
//   BookOpen, Trophy, ShieldCheck, Bus, Laptop, Users, 
//   Target, Eye, Award, Star, HardHat, Crosshair, 
//   GraduationCap, HelpCircle 
// } from 'lucide-react';

// export const SCHOOL_NAME = "S.R. EDUCATIONAL INSTITUTIONS";
// export const SCHOOL_SUBTITLE = "Junior & Degree College – Tirupati";
// export const MOTTO = "OUR JOURNEY TOWARDS SUCCESS";

// // Branding Images
// export const LOGO_URL = "image/logo.jpeg"; 
// export const CHAIRMAN_IMAGE_URL = "image/chairman.jpeg"; 
// export const DIRECTOR_IMAGE_URL = "image/director .jpeg"; // Fixed: removed extra space

// // Director Details
// export const DIRECTOR_INFO = {
//   name: "V. PRAVEENA",
//   position: "Director",
//   experience: " B.Tech  ",
//   message: "Our institution stands as a beacon for those who dream of serving the nation. By integrating academic rigor with physical discipline, we ensure our students are not just degree holders, but career-ready professionals for the Defence and Government sectors.",
// };

// export const NEWS_TICKER = [
//   "Admissions open for Academic Year 2024-25. Limited seats available!",
//   "1046+ Placements achieved in Indian Defence Forces this year.",
//   "New Degree Courses: BCA and BBA now available with Job Guarantee.",
//   "Special scholarship for students with 90% and above in 10th class."
// ];

// export const NAV_LINKS = [
//   { label: 'Home', href: '#home' },
//   { 
//     label: 'About Us', 
//     href: '#about', // Main link scrolls to About Us intro
//     subLinks: [
//       { label: 'Chairman\'s Message', href: '#chairman-message' },
//       { label: 'Director\'s Message', href: '#director-message' },
//       { label: 'Mission & Vision', href: '#mission-vision' }
//     ]
//   },
//   { 
//     label: 'Courses', 
//     href: '#academics',
//     subLinks: [
//       { label: 'Jobs', href: '#academics' },
//       { label: 'Defence Training', href: '#placements' }
//     ]
//   },
//   { label: 'Admissions', href: '#admissions' },
//   { 
//     label: 'Campus Life', 
//     href: '#facilities',
//     subLinks: [
//       { label: 'Main Campus', href: '#campus-main' },
//       { label: 'City Campus', href: '#campus-city' },
//       { label: 'Defence Campus', href: '#campus-defence' }
//     ]
//   },
//   { label: 'Placements', href: '#placements' },
//   { label: 'Gallery', href: '#gallery' },
//   { label: 'Contact', href: '#contact-section' },
// ];

// export const TESTIMONIALS = [];

// export const ABOUT_TABS = [
//   {
//     id: 'chairman',
//     label: 'Chairman',
//     icon: <Users size={16} />,
//     content: 'C. Sankar Reddy leads SR Educational Institutions with a vision to prepare students academically, physically, and mentally for Defence, Government, and Professional Careers.'
//   },
//   {
//     id: 'mission',
//     label: 'Our Mission',
//     icon: <Target size={16} />,
//     content: 'To provide quality education, strict discipline, and 100% job-oriented coaching for 10th and Inter students to secure elite careers.'
//   },
//   {
//     id: 'vision',
//     label: 'Our Vision',
//     icon: <Eye size={16} />,
//     content: 'To remain Rayalaseema’s leading institution for Defence and Government job placements with 10 years of successful service.'
//   }
// ];

// export const FAQS = [
//   {
//     question: "Does the academy provide separate hostel facilities for girls?",
//     answer: "Yes, we have safe, secure, and separate residential campuses for both boys and girls with 24/7 supervision and disciplined environment."
//   },
//   {
//     question: "What is the qualification required for Intermediate + Jobs?",
//     answer: "Students must have completed their 10th class/SSC. Admission is based on academic performance and a basic physical fitness check for the defence stream."
//   },
//   {
//     question: "Do you guarantee a job after graduation?",
//     answer: "We offer 100% Job-Oriented coaching. Our track record of 1046+ placements speaks for itself. We provide training until the student secures a placement."
//   },
//   {
//     question: "Is physical training mandatory for all students?",
//     answer: "While physical fitness is encouraged for all, rigorous defence-standard training is mandatory specifically for students enrolled in the Defence Excellence stream."
//   }
// ];

// export const CURRICULUM = [
//   {
//     title: 'Intermediate + Jobs',
//     focus: 'MPC, BiPC, CEC, MEC',
//     details: 'Integrated coaching for Defence & Govt. jobs alongside Intermediate studies (100% Job Guarantee).',
//     image: 'image/degree.jpg',
//     features: ['Maths, Physics, Chem (MPC)', 'Biology, Physics, Chem (BiPC)', 'Commerce & Economics (CEC/MEC)', 'Defence Entrance Exam Prep']
//   },
//   {
//     title: 'Degree + Jobs',
//     focus: 'B.Sc, B.Com, BCA, BBA',
//     details: 'Graduation courses integrated with competitive coaching for Banking, SSC, RRB, and Central Govt. jobs.',
//     image: 'image/job inter.webp',
//     features: ['B.Sc / B.Com Computers', 'BCA / BBA Streams', 'Banking & SSC Coaching', 'Interview Preparation']
//   },
//   {
//     title: 'Defence Excellence',
//     focus: 'NDA, Army, Navy, Air Force',
//     details: 'Rigorous physical training and written exam coaching for all wings of the Armed Forces.',
//     image: 'image/responsibilities-and-challenges-indian-defence.jpg',
//     features: ['NDA / CDS Foundation', 'Physical Training Ground', 'Disciplined Hostel Life', 'Weekly Mock Tests']
//   }
// ];

// export const DEFENCE_JOBS = [
//   { name: 'ARMY', icon: <Star className="w-4 h-4" /> },
//   { name: 'NAVY', icon: <Star className="w-4 h-4" /> },
//   { name: 'AIR FORCE', icon: <Star className="w-4 h-4" /> },
//   { name: 'NDA', icon: <Star className="w-4 h-4" /> },
//   { name: 'BSF / CRPF / CISF', icon: <Star className="w-4 h-4" /> },
//   { name: 'ITBP / SSB / AR', icon: <Star className="w-4 h-4" /> },
//   { name: 'POLICE & SI', icon: <Star className="w-4 h-4" /> },
//   { name: 'COAST GUARD', icon: <Star className="w-4 h-4" /> },
//   { name: 'BANKING & SSC', icon: <Star className="w-4 h-4" /> },
//   { name: 'RRB JOBS', icon: <Star className="w-4 h-4" /> }
// ];

// export const FACILITIES = [
//   {
//     title: '3 Distinct Campuses',
//     description: 'Modern infrastructure across three strategic campus locations in Tirupati.',
//     icon: <GraduationCap className="w-6 h-6" />
//   },
//   {
//     title: 'Physical Training',
//     description: 'Dedicated grounds for endurance, strength, and defence recruitment drills.',
//     icon: <Trophy className="w-6 h-6" />
//   },
//   {
//     title: 'Modern Gym',
//     description: 'Fully equipped fitness center to ensure students meet defence physical standards.',
//     icon: <HardHat className="w-6 h-6" />
//   },
//   {
//     title: 'NSS Activities',
//     description: 'Developing social responsibility and leadership through active NSS programs.',
//     icon: <Users className="w-6 h-6" />
//   },
//   {
//     title: 'Digital Classrooms',
//     description: 'Smart classrooms for conceptual learning and competitive exam strategies.',
//     icon: <Laptop className="w-6 h-6" />
//   },
//   {
//     title: 'Secure Campus',
//     description: 'Disciplined and monitored residential facilities for boys and girls.',
//     icon: <ShieldCheck className="w-6 h-6" />
//   }
// ];

// export const GALLERY_CATEGORIES = ['All', 'Physical Training', 'Defence Practice', 'Sports Events', 'NSS Activities', 'College Fests', 'Infrastructure'];

// export const GALLERY_IMAGES = [
//   { url: 'image/phy.png', category: 'Physical Training' },
//   { url: 'image/sports.png', category: 'Sports Events' },
//   { url: 'image/Gemini_Generated_Image_9pvrx9pvrx9pvrx9.png', category: 'Infrastructure' },
//   { url: 'image/fest.png', category: 'College Fests' },
//   { url: 'image/phy.png', category: 'Defence Practice' },
//   { url: 'image/nss.png', category: 'NSS Activities' },
//   { url: 'image/sports event.jpg', category: 'Sports Events' },
// ];

// // --- NEW SECTION: CAMPUS SPECIFIC DETAILS ---
// export const CAMPUS_DETAILS = [
//   {
//     id: 'main',
//     name: 'Main Campus (Tirupati)',
//     location: 'Near Alipiri, Tirupati',
//     description: 'Our primary residential campus specializing in Intermediate MPC/BiPC with rigorous Defence training.',
//     photos: [
//       'image/main-campus-1.jpg', // Ensure these filenames exist in your public/image folder
//       'image/main-campus-2.jpg',
//       'image/main-campus-3.jpg'
//     ],
//     highlights: ['Central Mess', 'Primary Drill Ground', 'Digital Library']
//   },
//   {
//     id: 'city',
//     name: 'City Center Campus',
//     location: 'Town Center, Tirupati',
//     description: 'Focused on Degree courses (BCA, BBA, B.Sc) and professional job-oriented coaching.',
//     photos: [
//       'image/city-campus-1.jpg',
//       'image/city-campus-2.jpg',
//       'image/city-campus-3.jpg'
//     ],
//     highlights: ['Computer Labs', 'Placement Cell', 'Seminar Hall']
//   },
//   {
//     id: 'defence',
//     name: 'S.R. Defence Academy Campus',
//     location: 'Karakambadi Road, Tirupati',
//     description: 'A specialized training facility for physical endurance and national-level defence exam preparation.',
//     photos: [
//       'image/defence-campus-1.jpg',
//       'image/defence-campus-2.jpg',
//       'image/defence-campus-3.jpg'
//     ],
//     highlights: ['Obstacle Course', 'Modern Gym', 'NSS Training Center']
//   }
// ];



import React from 'react';
import { 
  BookOpen, Trophy, ShieldCheck, Bus, Laptop, Users, 
  Target, Eye, Award, Star, HardHat, Crosshair, 
  GraduationCap, HelpCircle 
} from 'lucide-react';

export const SCHOOL_NAME = "S.R. EDUCATIONAL INSTITUTIONS";
export const SCHOOL_SUBTITLE = "Junior & Degree College – Tirupati";
export const MOTTO = "OUR JOURNEY TOWARDS SUCCESS";

// Branding Images
export const LOGO_URL = "image/logo.jpeg"; 
export const CHAIRMAN_IMAGE_URL = "image/chairman.jpeg"; 
export const DIRECTOR_IMAGE_URL = "image/director .jpeg"; // Fixed: removed extra space

// Director Details
export const DIRECTOR_INFO = {
  name: "V. PRAVEENA",
  position: "Director",
  experience: " B.Tech  ",
  message: "Our institution stands as a beacon for those who dream of serving the nation. By integrating academic rigor with physical discipline, we ensure our students are not just degree holders, but career-ready professionals for the Defence and Government sectors.",
};

export const NEWS_TICKER = [
  "Admissions open for Academic Year 2024-25. Limited seats available!",
  "1046+ Placements achieved in Indian Defence Forces this year.",
  "New Degree Courses: BCA and BBA now available with Job Guarantee.",
  "Special scholarship for students with 90% and above in 10th class."
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { 
    label: 'About Us', 
    href: '#about', // Main link scrolls to About Us intro
    subLinks: [
      { label: 'Chairman\'s Message', href: '#chairman-message' },
      { label: 'Director\'s Message', href: '#director-message' },
      { label: 'Mission & Vision', href: '#mission-vision' }
    ]
  },
  { 
    label: 'Courses', 
    href: '#academics',
    subLinks: [
      { label: 'Jobs', href: '#academics' },
      { label: 'Defence Training', href: '#placements' }
    ]
  },
  { label: 'Admissions', href: '#admissions' },
  { 
    label: 'Our Campus', 
    href: '#facilities',
    subLinks: [
      { label: 'Main Campus', href: '#campus-main' },
      { label: 'Orion school', href: '#campus-city' },
      { label: 'Degree College', href: '#campus-degree' },
      { label: 'Vocational College', href: '#campus-Vocational' },
      { label: 'Defence Campus', href: '#campus-defence' }
    ]
  },
  { label: 'Placements', href: '#placements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact-section' },
];

export const TESTIMONIALS = [];

export const ABOUT_TABS = [
  {
    id: 'chairman',
    label: 'Chairman',
    icon: <Users size={16} />,
    content: 'C. Sankar Reddy leads SR Educational Institutions with a vision to prepare students academically, physically, and mentally for Defence, Government, and Professional Careers.'
  },
  {
    id: 'mission',
    label: 'Our Mission',
    icon: <Target size={16} />,
    content: 'To provide quality education, strict discipline, and 100% job-oriented coaching for 10th and Inter students to secure elite careers.'
  },
  {
    id: 'vision',
    label: 'Our Vision',
    icon: <Eye size={16} />,
    content: 'To remain Rayalaseema’s leading institution for Defence and Government job placements with 10 years of successful service.'
  }
];

export const FAQS = [
  {
    question: "Does the academy provide separate hostel facilities for girls?",
    answer: "Yes, we have safe, secure, and separate residential campuses for both boys and girls with 24/7 supervision and disciplined environment."
  },
  {
    question: "What is the qualification required for Intermediate + Jobs?",
    answer: "Students must have completed their 10th class/SSC. Admission is based on academic performance and a basic physical fitness check for the defence stream."
  },
  {
    question: "Do you guarantee a job after graduation?",
    answer: "We offer 100% Job-Oriented coaching. Our track record of 1046+ placements speaks for itself. We provide training until the student secures a placement."
  },
  {
    question: "Is physical training mandatory for all students?",
    answer: "While physical fitness is encouraged for all, rigorous defence-standard training is mandatory specifically for students enrolled in the Defence Excellence stream."
  }
];

export const CURRICULUM = [
  {
    title: 'Intermediate + Jobs',
    focus: 'MPC, BiPC, CEC, MEC',
    details: 'Integrated coaching for Defence & Govt. jobs alongside Intermediate studies (100% Job Guarantee).',
    image: 'image/degree.jpg',
    features: ['Maths, Physics, Chem (MPC)', 'Biology, Physics, Chem (BiPC)', 'Commerce & Economics (CEC/MEC)', 'Defence Entrance Exam Prep']
  },
  {
    title: 'Degree + Jobs',
    focus: 'B.Sc, B.Com, BCA, BBA',
    details: 'Graduation courses integrated with competitive coaching for Banking, SSC, RRB, and Central Govt. jobs.',
    image: 'image/job inter.webp',
    features: ['B.Sc / B.Com Computers', 'BCA / BBA Streams', 'Banking & SSC Coaching', 'Interview Preparation']
  },
  {
    title: 'Defence Excellence',
    focus: 'NDA, Army, Navy, Air Force',
    details: 'Rigorous physical training and written exam coaching for all wings of the Armed Forces.',
    image: 'image/responsibilities-and-challenges-indian-defence.jpg',
    features: ['NDA / CDS Foundation', 'Physical Training Ground', 'Disciplined Hostel Life', 'Weekly Mock Tests']
  }
];

export const DEFENCE_JOBS = [
  { name: 'ARMY', icon: <Star className="w-4 h-4" /> },
  { name: 'NAVY', icon: <Star className="w-4 h-4" /> },
  { name: 'AIR FORCE', icon: <Star className="w-4 h-4" /> },
  { name: 'NDA', icon: <Star className="w-4 h-4" /> },
  { name: 'BSF / CRPF / CISF', icon: <Star className="w-4 h-4" /> },
  { name: 'ITBP / SSB / AR', icon: <Star className="w-4 h-4" /> },
  { name: 'POLICE & SI', icon: <Star className="w-4 h-4" /> },
  { name: 'COAST GUARD', icon: <Star className="w-4 h-4" /> },
  { name: 'BANKING & SSC', icon: <Star className="w-4 h-4" /> },
  { name: 'RRB JOBS', icon: <Star className="w-4 h-4" /> }
];

export const FACILITIES = [
  {
    title: '3 Distinct Campuses',
    description: 'Modern infrastructure across three strategic campus locations in Tirupati.',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    title: 'Physical Training',
    description: 'Dedicated grounds for endurance, strength, and defence recruitment drills.',
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: 'Modern Gym',
    description: 'Fully equipped fitness center to ensure students meet defence physical standards.',
    icon: <HardHat className="w-6 h-6" />
  },
  {
    title: 'NSS Activities',
    description: 'Developing social responsibility and leadership through active NSS programs.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Digital Classrooms',
    description: 'Smart classrooms for conceptual learning and competitive exam strategies.',
    icon: <Laptop className="w-6 h-6" />
  },
  {
    title: 'Secure Campus',
    description: 'Disciplined and monitored residential facilities for boys and girls.',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const GALLERY_CATEGORIES = ['All', 'Physical Training', 'Defence Practice', 'Sports Events', 'NSS Activities', 'College Fests',  'Infrastructure', 'gym'];

export const GALLERY_IMAGES = [
  { url: 'image/gym 2.jpg', category: 'Physical Training' },
  { url: 'image/sports.png', category: 'Sports Events' },
  { url: 'image/Gemini_Generated_Image_9pvrx9pvrx9pvrx9.png', category: 'Infrastructure' },
  { url: 'image/fest.png', category: 'College Fests' },
  { url: 'image/phy.png', category: 'Defence Practice' },
  { url: 'image/nss.png', category: 'NSS Activities' },
  { url: 'image/sports event.jpg', category: 'Sports Events' },
  { url: 'image/gym.jpeg', category: 'gym' },
  { url: 'image/gym.png', category: 'gym' },
  { url: 'image/gym 4.avif', category: 'gym' },
  { url: 'image/gym 5.jpeg', category: 'gym' },
];

// --- NEW SECTION: CAMPUS SPECIFIC DETAILS ---
export const CAMPUS_DETAILS = [
  {
    id: 'main',
    name: 'SR JUNIOUR COLLEGES (BOYS CAMPUS)',
    location: 'Tirupati',
    description: 'Our primary residential campus specializing in Intermediate MPC/BiPC with rigorous Defence training.',

        photos: [
      'image/sr junior college.jpeg',
      'image/sr junior college.jpeg',
      'image/sr junior college.jpeg'
    ],
    highlights: ['Central Mess', 'Primary Drill Ground', 'Digital Library']
  },
    {
    id: 'main',
    name: 'SR JUNIOUR COLLEGES (GIRLS CAMPUS)',
    location: 'Upparapalli Rd, near 7 Hills Super Market, Upparapalli, Check Pos, Thummala Gunta, Andhra Pradesh 517502',
    description: 'Our primary residential campus specializing in Intermediate MPC/BiPC with rigorous Defence training.',
    photos: [
      'image/girls campuse .jpeg' // Ensure these filenames exist in your public/image folder
      // 'image/main-campus-2.jpg',
      // 'image/main-campus-3.jpg'
    ],
    highlights: ['Central Mess', 'Primary Drill Ground', 'Digital Library']
  },
  {
    id: 'city',
    // name: 'City Center Campus',
    name: 'Orion School (branch 1)',

    location: 'Tummalagunta,Avilali, Tirupati',
    // description: 'Focused on Degree courses (BCA, BBA, B.Sc) and professional job-oriented coaching.',
    description: 'Your child our care.',

    photos: [
      'image/School.jpeg'

      // 'image/city-campus-1.jpg'
      // 'image/city-campus-2.jpg',
      // 'image/city-campus-3.jpg'
    ],
    // highlights: ['Computer Labs', 'Placement Cell', 'Seminar Hall']
    highlights: ['All Round Personality Grooming', 'Holistic Development', 'Quality Based Education']

  },
    {
    id: 'city',
    // name: 'City Center Campus',
    name: 'Orion School (branch 2)',

    location: 'Tirupati',
    // description: 'Focused on Degree courses (BCA, BBA, B.Sc) and professional job-oriented coaching.',
    description: 'Your child our care.',

    photos: [
      'image/orion branch 2.jpeg'

      // 'image/city-campus-1.jpg'
      // 'image/city-campus-2.jpg',
      // 'image/city-campus-3.jpg'
    ],
    // highlights: ['Computer Labs', 'Placement Cell', 'Seminar Hall']
    highlights: ['All Round Personality Grooming', 'Holistic Development', 'Quality Based Education']

  },
    {
    id: 'degree',
    name: 'S.R. SRINIVASA DEGREE  COLLEGE',
    location: 'Tirupati',
    description: 'A Degree College dedicated to providing quality education, skill development, and holistic growth to prepare students for successful careers and higher studies.',
    photos: [
      'image/sr degree college.jpeg',
      'image/sr degree college.jpeg',
      'image/sr degree college.jpeg'
    ],
    highlights: ['Obstacle Course', 'Modern Gym', 'NSS Training Center']
  },
   {
  id: 'Vocational',
  name: 'S.R. Vocational College',
  location: 'Tirupati',
  description: 'S.R. Vocational College is committed to providing industry-oriented education and practical skill training. The college focuses on hands-on learning, career development, and preparing students for immediate employment and professional growth.',
  photos: [
    'image/vocational college.jpeg',
    'image/vocational college.jpeg',
    'image/vocational college.jpeg'
  ],
  highlights: [
    'Industry-Oriented Skill Training',
    'Practical Lab Facilities',
    'Placement Assistance & Career Guidance'
  ]
},

  {
    id: 'defence',
    name: 'S.R. Defence Academy Campus',
    location: 'Karakambadi Road, Tirupati',
    description: 'A specialized training facility for physical endurance and national-level defence exam preparation.',
    photos: [
      'image/sr defence .jpeg',
      'image/sr defence .jpeg',
      'image/sr defence .jpeg'
    ],
   highlights: ['Obstacle Course', 'Modern Gym', 'NSS Training Center']
  }
];
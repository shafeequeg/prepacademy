// app/data/content.ts
export interface Video {
  title: string;
  videoId: string;
}

export interface Offering {
  id: string;
  title: string;
  image: string;
  type: string;
  features: string[];
}

export interface OfferingType {
  id: string;
  label: string;
}

export interface Notification {
  category: string;
  description: string;
}

export interface CourseTab {
  id: string;
  label: string;
}

export interface CourseContent {
  title: string;
  id: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export

interface Course {
  slug: string;
  title: string;
  courseTitle: string;
  description: string;
  points: string[];
  telegramLink: string;
  relatedVideos: Video[];
  offeringTypes: OfferingType[];
  offerings: Offering[];
  demoVideos: Video[];
  notifications: Notification[];
  courseTabs: CourseTab[];
  courseContent: CourseContent[];
  faqs: FAQ[];
}

export const courses: Course[] = [
  {
    slug: "SLAT",
    title: "SLAT",
    courseTitle: "Crack SLAT 2025 with ",
    description:
      "SLAT (Symbiosis Law Admission Test) is the gateway to undergraduate law programs at the prestigious Symbiosis Law Schools in Pune, Noida, Hyderabad, and Nagpur. Conducted by Symbiosis International University, SLAT assesses a student’s aptitude in legal reasoning, reading comprehension, logical thinking, and general awareness.At Prep Academy, we equip students with the skills and strategies needed to crack SLAT with confidence — ensuring their first step into law is the right one.",
    points: [
      "Expert Faculty with Proven Success",
      "Comprehensive Study Materials & Mock Tests",
      "Personalized Mentorship & Doubt-Solving Sessions",
    ],
    telegramLink: "https://t.me/SLATPrepAcademy",
    relatedVideos: [
      { title: "SLAT 2025 Preparation Tips", videoId: "SLAT_VID_001" },
      { title: "Mastering Legal Reasoning for SLAT", videoId: "SLAT_VID_002" },
      { title: "SLAT Mock Test Strategies", videoId: "SLAT_VID_003" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      { id: "test-series", label: "Test Series" },
      { id: "study-material", label: "Study Material" },
    ],
    offerings: [
      {
        id: "SLAT-online-1",
        title: "SLAT Online Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Live interactive sessions",
          "Legal reasoning workshops",
          "Daily practice questions",
          "Personalized feedback",
        ],
      },
      {
        id: "SLAT-classroom-1",
        title: "SLAT Classroom Coaching",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "In-person mentoring",
          "Mock test analysis",
          "Group discussions",
          "Study plan guidance",
        ],
      },
      {
        id: "SLAT-test-series-1",
        title: "SLAT Test Series",
    image: "/catweekendclass.jpeg",
        type: "test-series",
        features: [
          "Full-length mock tests",
          "Detailed performance analysis",
          "Time management strategies",
          "Section-wise practice",
        ],
      },
    ],
    demoVideos: [
      { title: "SLAT Prep Intro", videoId: "SLAT_DEMO_001" },
      { title: "Legal Reasoning Basics", videoId: "SLAT_DEMO_002" },
      { title: "SLAT Mock Test Walkthrough", videoId: "SLAT_DEMO_003" },
    ],
    notifications: [
      {
        category: "Application Start Date:",
        description: " Expected to begin in January 2025 on www.set-test.org",
      },
      {
        category: "Exam Date",
        description:
          "Likely to be conducted in May 2025 (Exact date to be announced)",
      },
      {
        category: "Mode of Exam:",
        description: " Computer-Based Test (CBT) – includes 60 MCQs + Written Ability Test (WAT).",
      },
        {
        category: "Courses Offered:",
        description: " Admission to BA LLB and BBA LLB programs at SLS Pune, Noida, Hyderabad, and Nagpur",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-colleges", label: "Top Colleges" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "SLAT Beginner's Guide", id: 1 },
      { title: "SLAT Study Plan 2025", id: 2 },
      { title: "SLAT Syllabus Overview", id: 3 },
      { title: "Top Law Colleges via SLAT", id: 4 },
      { title: "SLAT Free Resources", id: 5 },
    ],
    faqs: [
      {
        question: "Who can apply for SLAT 2025?",
        answer:
          "Students who have passed or are appearing for Class 12 (any stream) with a minimum of 45% (40% for SC/ST) are eligible.",
      },
      {
        question: "What programs are offered through SLAT?",
        answer:
          "You can apply for BBA LLB at Symbiosis Law Schools in Pune, Noida, Hyderabad, and Nagpur.",
      },
      {
        question: "What is the structure of the SLAT exam?",
        answer:
          "Subjects: Logical Reasoning, Legal Reasoning, Analytical Reasoning, Reading Comprehension, General Knowledge, Duration: 60 minutes for MCQs + 30 minutes for WAT,WAT is a written essay and is separately evaluated.",
      },
     
    ],
  },
  {
    slug: "AILET",
    title: "AILET",
    courseTitle: "Crack AILET 2025 with ",
    description:
      "AILET (All India Law Entrance Test) is a national-level entrance exam conducted by National Law University, Delhi (NLU Delhi) for admission to its exclusive BA LLB (Hons), LLM, and PhD law programs.Highly competitive and designed to test legal aptitude, reasoning, and language skills, AILET is one of India’s top law entrance exams — ideal for students aiming for a prestigious legal career.At Prep Academy, we offer expert coaching to help students ace AILET with the right preparation, strategies, and support.",
    points: [
      "Expert-Led Coaching & Mentorship",
      "In-Depth Study Materials & Practice Tests",
      "Live Interactive Classes with Doubt Resolution",
    ],
    telegramLink: "https://t.me/AILETPrepAcademy",
    relatedVideos: [
      { title: "AILET 2025 Preparation Guide", videoId: "AILET_VID_001" },
      { title: "AILET Legal Reasoning Tips", videoId: "AILET_VID_002" },
      { title: "AILET Mock Test Strategies", videoId: "AILET_VID_003" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      { id: "test-series", label: "Test Series" },
      { id: "study-material", label: "Study Material" },
    ],
    offerings: [
      {
        id: "AILET-online-1",
        title: "AILET Online Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Live interactive sessions",
          "Legal reasoning workshops",
          "Daily practice questions",
          "Personalized feedback",
        ],
      },
      {
        id: "AILET-classroom-1",
        title: "AILET Classroom Coaching",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "In-person mentoring",
          "Mock test analysis",
          "Group discussions",
          "Study plan guidance",
        ],
      },
      {
        id: "AILET-test-series-1",
        title: "AILET Test Series",
    image: "/catweekendclass.jpeg",
        type: "test-series",
        features: [
          "Full-length mock tests",
          "Detailed performance analysis",
          "Time management strategies",
          "Section-wise practice",
        ],
      },
    ],
    demoVideos: [
      { title: "AILET Prep Intro", videoId: "AILET_DEMO_001" },
      { title: "Legal Reasoning Basics", videoId: "AILET_DEMO_002" },
      { title: "AILET Mock Test Walkthrough", videoId: "AILET_DEMO_003" },
    ],
    notifications: [
      {
        category: "Exam Date:",
        description: " AILET 2025 will be held on December 8, 2024 (Sunday) from 11:00 AM to 1:00 PM.",
      },
      {
        category: "Courses Offered:",
        description:
          " Admission to BA LLB (Hons), LLM, and PhD programs at NLU Delhi.",
      },
      {
        category: "Exam Pattern:",
        description: " 150 questions | English, Logical Reasoning & Current Affairs | Negative marking of 0.25 for wrong answers.",
      },

        {
        category: "Application Mode:",
        description: "  Online registration open at nludelhi.ac.in from August 1, 2024 (tentative).",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-colleges", label: "Top Colleges" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "AILET Beginner's Guide", id: 1 },
      { title: "AILET Study Plan 2025", id: 2 },
      { title: "AILET Syllabus Overview", id: 3 },
      { title: "Top Law Colleges via AILET", id: 4 },
      { title: "AILET Free Resources", id: 5 },
    ],
    faqs: [
      {
        question: "Who can apply for AILET 2025?",
        answer:
          "Students who have passed or are appearing for Class 12 with at least 45% marks (40% for SC/ST) are eligible for the BA LLB (Hons) course.  ",
      },
      {
        question: "What subjects are tested in AILET?",
        answer:
          "English Language,Current Affairs & General Knowledge,Logical Reasoning [Note : There is no Legal Aptitude section in AILET for BA LL]",
      },
      {
        question: "How is AILET different from CLAT?",
        answer:
          "Unlike CLAT, which is accepted by 20+ NLUs, AILET is only for NLU Delhi. It has its own pattern, difficulty level, and registration process. ",
      },
      {
        question: "Is there negative marking in AILET?",
        answer:
          "Yes, 0.25 marks are deducted for every wrong answer.",
      },
    ],
  },
  {
    slug: "KLEE",
    title: "KLEE",
    courseTitle: "Crack KLEE 2025 with ",
    description:
      "KLEE (Kerala Law Entrance Examination) is conducted by the Commissioner for Entrance Examinations (CEE), Kerala, for admission into Integrated 5-year BA LLB, 3-year LLB, and LLM courses offered by government law colleges and self-financing institutions across Kerala.At Prep Academy, we prepare aspiring law students with expert guidance, smart strategies, and mock tests tailored to help them succeed in KLEE and secure seats in Kerala's top law colleges.",
    points: [
      "Top Faculty with Personalized Guidance",
      "Extensive Study Materials & Mock Tests",
      "Interactive Classes with Doubt Resolution",
    ],
    telegramLink: "https://t.me/KLEEPrepAcademy",
    relatedVideos: [
      { title: "KLEE 2025 Preparation Tips", videoId: "KLEE_VID_001" },
      { title: "Mastering Legal Aptitude for KLEE", videoId: "KLEE_VID_002" },
      { title: "KLEE Mock Test Strategies", videoId: "KLEE_VID_003" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      { id: "test-series", label: "Test Series" },
      { id: "study-material", label: "Study Material" },
    ],
    offerings: [
      {
        id: "KLEE-online-1",
        title: "KLEE Online Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Live interactive sessions",
          "Legal aptitude workshops",
          "Daily practice questions",
          "Personalized feedback",
        ],
      },
      {
        id: "KLEE-classroom-1",
        title: "KLEE Classroom Coaching",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "In-person mentoring",
          "Mock test analysis",
          "Group discussions",
          "Study plan guidance",
        ],
      },
      {
        id: "KLEE-test-series-1",
        title: "KLEE Test Series",
    image: "/catweekendclass.jpeg",
        type: "test-series",
        features: [
          "Full-length mock tests",
          "Detailed performance analysis",
          "Time management strategies",
          "Section-wise practice",
        ],
      },
    ],
    demoVideos: [
      { title: "KLEE Prep Intro", videoId: "KLEE_DEMO_001" },
      { title: "Legal Aptitude Basics", videoId: "KLEE_DEMO_002" },
      { title: "KLEE Mock Test Walkthrough", videoId: "KLEE_DEMO_003" },
    ],
    notifications: [
      {
        category: "Exam Date:",
        description: " KLEE 2025 is expected to be conducted in July–August 2025 (official dates to be announced on cee.kerala.gov.in)",
      },
      {
        category: "Courses Offered:",
        description:
          " Admission to Integrated 5-year BA LLB, 3-year LLB, and LLM programs in Kerala",
      },
      {
        category: "Exam Pattern:",
        description: " 200 objective-type questions | 3 hours | Subjects include Legal Aptitude, GK, English, and Reasoning",
      },

        {
        category: "Application Mode:",
        description: " Online registration through the official CEE Kerala portal – expected to begin by June 2025",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-colleges", label: "Top Colleges" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "KLEE Beginner's Guide", id: 1 },
      { title: "KLEE Study Plan 2025", id: 2 },
      { title: "KLEE Syllabus Overview", id: 3 },
      { title: "Top Law Colleges via KLEE", id: 4 },
      { title: "KLEE Free Resources", id: 5 },
    ],
    faqs: [
      {
        question: "What is the eligibility for KLEE 5-year LLB?",
        answer:
          "Candidates must have passed 10+2 with at least 45% marks (42% for OBC, 40% for SC/ST).",
      },
      {
        question: " What subjects are included in the KLEE question paper?",
        answer:
          "The exam covers:General English,General Knowledge,Legal Aptitude,Logical Reasoning",
      },
      {
        question: "Is there negative marking in KLEE?",
        answer:
          "Yes. -1 mark is deducted for each incorrect answer; +3 marks are awarded for each correct answer.  ",
      },
      {
        question: "How is KLEE different from CLAT?",
        answer:
          "CLAT is a national-level test accepted by NLUs across India, while KLEE is state-specific, meant for law colleges in Kerala only.",
      },
    ],
  },
  {
    slug: "CULEE",
    title: "CULEE",
    courseTitle: "Crack CULEE 2025 with ",
    description:
      "Christ University Law Entrance Exam (CULEE) is a national-level entrance test conducted by Christ (Deemed to be University), Bengaluru. It serves as the gateway for admission into the university's undergraduate law programs, including BA LLB and BBA LLB. Prep Academy empowers aspiring law students with expert guidance, proven strategies, and customized mock tests designed specifically for the CULEE exam — helping them excel and secure admission to Christ University’s prestigious law programs.",
    points: [
      "Expert Faculty & Personalized Mentorship",
      "Comprehensive Study Materials & Mock Tests",
      "Live Interactive Classes with Doubt Resolution",
    ],
    telegramLink: "https://t.me/CULEEPrepAcademy",
    relatedVideos: [
      { title: "CULEE 2025 Preparation Tips", videoId: "CULEE_VID_001" },
      { title: "Mastering Legal Aptitude for CULEE", videoId: "CULEE_VID_002" },
      { title: "CULEE Mock Test Strategies", videoId: "CULEE_VID_003" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      { id: "test-series", label: "Test Series" },
      { id: "study-material", label: "Study Material" },
    ],
    offerings: [
      {
        id: "CULEE-online-1",
        title: "CULEE Online Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Live interactive sessions",
          "Legal aptitude workshops",
          "Daily practice questions",
          "Personalized feedback",
        ],
      },
      {
        id: "CULEE-classroom-1",
        title: "CULEE Classroom Coaching",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "In-person mentoring",
          "Mock test analysis",
          "Group discussions",
          "Study plan guidance",
        ],
      },
      {
        id: "CULEE-test-series-1",
        title: "CULEE Test Series",
    image: "/catweekendclass.jpeg",
        type: "test-series",
        features: [
          "Full-length mock tests",
          "Detailed performance analysis",
          "Time management strategies",
          "Section-wise practice",
        ],
      },
    ],
    demoVideos: [
      { title: "CULEE Prep Intro", videoId: "CULEE_DEMO_001" },
      { title: "Legal Aptitude Basics", videoId: "CULEE_DEMO_002" },
      { title: "CULEE Mock Test Walkthrough", videoId: "CULEE_DEMO_003" },
    ],
    notifications: [
      {
        category: "Application Deadline:",
        description: " The last date to submit the CULEE 2025 application form was April 29, 2025.",
      },
      {
        category: "Exam Date",
        description:
          " The CULEE 2025 exam is expected to be conducted in July 2025.",
      },
      {
        category: "Selection Process:",
        description: " Candidates will be shortlisted based on their performance in the CULEE entrance exam, followed by a micro presentation and personal interview.",
      },

        {
        category: "Application Fee:",
        description: " The application fee for CULEE 2025 was ₹5,000.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-colleges", label: "Top Colleges" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "CULEE Beginner's Guide", id: 1 },
      { title: "CULEE Study Plan 2025", id: 2 },
      { title: "CULEE Syllabus Overview", id: 3 },
      { title: "Top Law Colleges via CULEE", id: 4 },
      { title: "CULEE Free Resources", id: 5 },
    ],
    faqs: [
      {
        question: "What is the eligibility criterion for CULEE 2025?",
        answer:
          "Candidates must have completed their Class 12 or equivalent examination with a minimum aggregate of 45% from a recognized board",
      },
      {
        question: "How should I prepare for CULEE 2025?",
        answer:
          "Focus on strengthening your fundamentals in English, current affairs, logical reasoning, and data interpretation. Regular practice with mock tests and previous years' question papers can be beneficial.",
      },
      {
        question: "What is the selection process after the CULEE exam?",
        answer:
          " Candidates who qualify in the written exam will be called for a micro presentation and personal interview as part of the final selection process",
      },
    
    ],
  },
];
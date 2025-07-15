// Type definitions
export type DropdownItem = {
    label: string;
    path: string;
  };
  
  export type Tab = {
    id: string;
    label: string;
    path: string;
    dropdownItems?: DropdownItem[];
    course?: {
      label: string;
      description: string;
      price: string;
      duration: string;
      features: string[];
    };
  };



  type CourseData = {
    label?: string;
    title?: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
    image?: string;
  };
  
  export type MainCategory = {
    id: string;
    label: string;
    tabs: Tab[];
  };

  

  type CourseKey = 
  | "JEE" | "KEAM" | "BITSAT" | "VITEEE" | "KCET" 
  | "NEET (UG)" | "PARAMEDICAL ENTRANCE" | "JIPMER"
  | "IPM" | "CHRIST" | "SET" | "NPAT" | "MHCET"
  | "CLAT" | "SLAT" | "AILET" | "KLEE" | "CULEE"
  | "CUET(1year)" | "CUET(2year)"
  | "NDA" | "AFCAT"
  | "PHYSICS" | "CHEMISTRY" | "MATHS" | "BIOLOGY" | "ACCOUNTING" | "ECONOMICS" | "ENGLISH" | "COMMERCE" | "BUSINESS STUDIES"
  | "ASHOKA UNIVERSITY" | "CHRIST UNIVERSITY" | "SYMBIOSIS" | "NMIMS" | "ST. XAVIER'S"
  | "NID" | "NIFT" | "UCEED" | "CEED" | "JEE MAIN" | "NATA"
  | "CAT" | "XAT" | "KMAT" | "CMAT" | "MAT" | "NMAT" | "CUET(PG)" | "MICAT"
  | "UPSC" | "RAILWAY" | "SSC" | "CDS"
  | "NID PG" | "NIFT PG"
  | "SBI" | "IBPS P O" | "RBI GRADE B" | "IBPS RRB" | "SBI CLERK" | "IBPS CLERK" | "NABARD" | "LIC AAO"
  | "IELTS" | "SAT" | "ACT" | "GRE" | "GMAT"
  | "ResumeBuilding" | "InterviewPreparation" | "CareerPlanning" | "SkillDevelopment" | "JobSearchStrategies" | "StreamSelection";
  
  // Main categories data
  export const mainCategories: MainCategory[] = [
    {
      id: "schoolcourse",
      label: "School Course",
      tabs: [
        {
          id: "engineering",
          label: "ENGINEERING",
          path: "/engineering",
          dropdownItems: [
            { label: "JEE", path: "/schoolcourse/engineering/jee" },
            { label: "KEAM", path: "/schoolcourse/engineering/keam" },
            { label: "BITSAT", path: "/schoolcourse/engineering/bitsat" },
            { label: "VITEEE", path: "/schoolcourse/engineering/vitee" },
            { label: "KCET", path: "/schoolcourse/engineering/kcet" },
          ],
        },
        {
          id: "MEDICAL",
          label: "MEDICAL",
          path: "/medical",
          dropdownItems: [
            { label: "NEET (UG)", path: "schoolcourse/medical/neet" },
            {
              label: "PARAMEDICAL ENTRANCE",
              path: "schoolcourse/medical/paramedical",
            },
            { label: "JIPMER", path: "schoolcourse/medical/jipmer" },
          ],
        },
        {
          id: "MANAGEMENT",
          label: "MANAGEMENT",
          path: "/management",
          dropdownItems: [
            { label: "IPM ", path: "/schoolcourse/ipm" },
            { label: "CHRIST", path: "/schoolcourse/christ" },
            { label: "SET", path: "/schoolcourse/set" },
            { label: "NPAT", path: "/schoolcourse/management/npat" },
            { label: "MHCET", path: "/schoolcourse/mhcet" },
          ],
        },
        {
          id: "LAW",
          label: "LAW",
          path: "/law",
          dropdownItems: [
            { label: "CLAT", path: "/schoolcourse-law/clat" },
            { label: "SLAT", path: "/schoolcourse/slat" },
            { label: "AILET", path: "/schoolcourse/ailet" },
            { label: "KLEE", path: "/schoolcourse/klee" },
            { label: "CULEE", path: "/schoolcourse/culee" },
          ],
        },
        {
          id: "CUET",
          label: "CUET(UG)",
          path: "/cuet",
          dropdownItems: [
            { label: "CUET(1year)", path: "/collegecourse/management/cuet" },
            { label: "CUET(2year)", path: "/collegecourse/management/cuet-2" },

          ],
        },
        {
          id: "DEFENCE",
          label: "DEFENCE",
          path: "/defence",
          dropdownItems: [
            { label: "NDA ", path: "/schoolcourse/defence/nda" },
            { label: "AFCAT ", path: "/schoolcourse/afcat" },
          ],
        },
        {
          id: "TUITIONS",
          label: "TUITIONS",
          path: "/tuitions",
          dropdownItems: [
            { label: "PHYSICS ", path: "/schoolcourse/tuitions/physics" },
            { label: "CHEMISTRY", path: "/schoolcourse/tuitions/chemistry" },
            { label: "MATHS", path: "/schoolcourse/tuitions/maths" },
            { label: "BIOLOGY ", path: "/schoolcourse/tuitions/biology" },
            { label: "ACCOUNTING ", path: "/schoolcourse/tuitions/accounting" },
            { label: "ECONOMICS", path: "/schoolcourse/tuitions/economics" },
            { label: "ENGLISH ", path: "/schoolcourse/tuitions/english" },
            { label: "COMMERCE", path: "/schoolcourse/tuitions/commerce" },
            {
              label: "BUSINESS STUDIES",
              path: "/schoolcourse/tuitions/business",
            },
          ],
        },
        {
          id: "OTHERS",
          label: "OTHERS",
          path: "/others",
          dropdownItems: [
            {
              label: "ASHOKA UNIVERSITY ",
              path: "/schoolcourse/others/ashoka",
            },
            {
              label: "CHRIST UNIVERSITY ",
              path: "/schoolcourse/others/christuniversity",
            },
            { label: "SYMBIOSIS ", path: "/schoolcourse/others/symbiosis" },
            { label: "NMIMS ", path: "/schoolcourse/others/nmims" },
            { label: "ST. XAVIER'S ", path: "/schoolcourse/others/xaviers" },
          ],
        },
        {
          id: "DESIGN",
          label: "DESIGN & ARCHITECTURE",
          path: "/design",
          dropdownItems: [
            { label: "NID ", path: "/schoolcourse/designandarchitecture/nid" },
            {
              label: "NIFT ",
              path: "/schoolcourse/designandarchitecture/nift",
            },
            {
              label: "UCEED ",
              path: "/schoolcourse/designandarchitecture/uceed",
            },
            {
              label: "CEED ",
              path: "/schoolcourse/designandarchitecture/ceed",
            },
            {
              label: "JEE MAIN ",
              path: "/schoolcourse/designandarchitecture/jee",
            },
            {
              label: "NATA ",
              path: "/schoolcourse/designandarchitecture/nata",
            },
          ],
        },
      ],
    },
    {
      id: "collegecourse",
      label: "College Course",
      tabs: [
        {
          id: "MANAGEMENT",
          label: "MANAGEMENT",
          path: "/collegecourse",
          dropdownItems: [
            { label: "CAT", path: "/collegecourse/management/cat" },
            { label: "XAT", path: "/collegecourse/bba" },
            { label: "KMAT", path: "/collegecourse/hr" },
            { label: "CMAT", path: "/collegecourse/hr" },
            { label: "MAT", path: "/collegecourse/hr" },
            { label: "NMAT", path: "/collegecourse/hr" },
            { label: "CUET(PG)", path: "/collegecourse/hr" },
            { label: "MICAT", path: "/collegecourse/hr" },
            { label: "MHCET", path: "/collegecourse/hr" },
          ],
        },
        {
          id: "CEVILSERVICE",
          label: "CIVIL SERVICE",
          path: "/slat",
          dropdownItems: [{ label: "UPSC", path: "/slat/ias" }],
        },
        {
          id: "GOVERNMENT",
          label: "GOVERNMENT",
          path: "/ailet",
          dropdownItems: [
            { label: "RAILWAY ", path: "/ailet/state" },
            { label: "SSC", path: "/ailet/central" },
          ],
        },
        {
          id: "DEFENCE",
          label: "DEFENCE",
          path: "/klee",
          dropdownItems: [
            { label: "CDS", path: "/klee/nda" },
            { label: "AFCAT", path: "/klee/cds" },
          ],
        },
        {
          id: "MAT",
          label: "DESIGN & ARCHITECTURE",
          path: "/culee",
          dropdownItems: [
            { label: "NID PG ", path: "/culee/nata" },
            { label: "NIFT PG", path: "/culee/nift" },
          ],
        },
        {
          id: "BANK",
          label: "BANK",
          path: "/culee/bank",
          dropdownItems: [
            { label: "SBI ", path: "/culee/bank/sbi-po" },
            { label: "IBPS P O", path: "/culee/bank/ibps" },
            { label: "RBI GRADE B", path: "/culee/bank/rbi" },
            { label: "IBPS RRB ", path: "/culee/bank/sbi-po" },
            { label: "SBI CLERK ", path: "/culee/bank/sbi-po" },
            { label: "IBPS CLERK ", path: "/culee/bank/sbi-po" },
            { label: "NABARD ", path: "/culee/bank/sbi-po" },
            { label: "LIC AAO ", path: "/culee/bank/sbi-po" },
          ],
        },
      ],
    },
    {
      id: "studyabroad",
      label: "Study Abroad",
      tabs: [
        {
          id: "IELTS",
          label: "IELTS",
          path: "/courses/ielts",
          course: {
            label: "IELTS Preparation Course",
            description: "Comprehensive preparation for IELTS exam",
            price: "₹14,999",
            duration: "3 months",
            features: [
              "Expert instructors with high band scores",
              "Complete coverage of all four sections: Reading, Writing, Listening, Speaking",
              "Regular mock tests with detailed feedback",
              "Small batch sizes for personalized attention",
              "Study material and practice tests included",
              "Visa application guidance",
            ],
          },
        },
        {
          id: "SAT",
          label: "SAT",
          path: "/studyabroad/sat",
          course: {
            label: "SAT Preparation Course",
            description: "Comprehensive preparation for the SAT exam",
            price: "₹16,999",
            duration: "4 months",
            features: [
              "Expert instructors with high SAT scores",
              "Complete coverage of Math and Evidence-Based Reading and Writing",
              "Regular practice tests with personalized feedback",
              "Small batch sizes for personalized attention",
              "Study material and practice tests included",
              "College application guidance",
            ],
          },
        },
        {
          id: "ACT",
          label: "ACT",
          path: "/courses/act",
          course: {
            label: "ACT Preparation Course",
            description: "Comprehensive preparation for the ACT exam",
            price: "₹16,999",
            duration: "4 months",
            features: [
              "Expert instructors with high ACT scores",
              "Complete coverage of all sections: English, Math, Reading, Science, and Writing",
              "Regular practice tests with personalized feedback",
              "Small batch sizes for personalized attention",
              "Study material and practice tests included",
              "College application guidance",
            ],
          },
        },
        {
          id: "GRE",
          label: "GRE",
          path: "/studyabroad/gre",
          course: {
            label: "GRE Preparation Course",
            description: "Comprehensive preparation for the GRE exam",
            price: "₹18,999",
            duration: "3 months",
            features: [
              "Expert instructors with high GRE scores",
              "Complete coverage of Verbal, Quantitative, and Analytical Writing sections",
              "Regular practice tests with personalized feedback",
              "Advanced vocabulary building techniques",
              "Study material and practice tests included",
              "Graduate school application guidance",
            ],
          },
        },
        {
          id: "GMAT",
          label: "GMAT",
          path: "/studyabroad/gmat",
          course: {
            label: "GMAT Preparation Course",
            description: "Comprehensive preparation for the GMAT exam",
            price: "₹19,999",
            duration: "3 months",
            features: [
              "Expert instructors with high GMAT scores",
              "Complete coverage of Verbal, Quantitative, Integrated Reasoning, and Analytical Writing sections",
              "Regular practice tests with personalized feedback",
              "Advanced problem-solving techniques",
              "Study material and practice tests included",
              "Business school application guidance",
            ],
          },
        },
      ],
    },
    {
      id: "careercounseling",
      label: "Career Counseling",
      tabs: [
        {
          id: "ResumeBuilding",
          label: "Resume Building",
          path: "/career-counseling/resume-building",
          course: {
            label: "Professional Resume Building",
            description:
              "Create a standout resume that gets you noticed by employers",
            price: "₹4,999",
            duration: "2 weeks",
            features: [
              "One-on-one sessions with career experts",
              "Industry-specific resume templates",
              "ATS optimization techniques",
              "Cover letter writing assistance",
              "LinkedIn profile optimization",
              "Two rounds of revisions included",
            ],
          },
        },
        {
          id: "InterviewPreparation",
          label: "Interview Preparation",
          path: "/career-counseling/interview-preparation",
          course: {
            label: "Interview Mastery Program",
            description:
              "Ace your job interviews with confidence and strategic preparation",
            price: "₹6,999",
            duration: "3 weeks",
            features: [
              "Mock interviews with industry professionals",
              "Behavioral and technical interview preparation",
              "Salary negotiation techniques",
              "Body language and communication coaching",
              "Company research strategies",
              "Post-interview follow-up guidance",
            ],
          },
        },
        {
          id: "CareerPlanning",
          label: "Career Counseling",
          path: "/career-counseling/career-planning",
          course: {
            label: "Career Roadmap Development",
            description:
              "Create a personalized career plan aligned with your goals and strengths",
            price: "₹8,999",
            duration: "1 month",
            features: [
              "Comprehensive aptitude and interest assessment",
              "One-on-one sessions with career counselors",
              "Industry trends and market analysis",
              "Short-term and long-term goal setting",
              "Skill gap analysis and development plan",
              "Regular progress check-ins and plan adjustments",
            ],
          },
        },
        {
          id: "SkillDevelopment",
          label: "Skill Development",
          path: "/career-counseling/skill-development",
          course: {
            label: "Essential Skills Bootcamp",
            description:
              "Develop the most in-demand professional skills for career advancement",
            price: "₹7,999",
            duration: "6 weeks",
            features: [
              "Communication and presentation skills",
              "Leadership and team management",
              "Problem-solving and critical thinking",
              "Time management and productivity",
              "Emotional intelligence in the workplace",
              "Digital literacy and technical skills",
            ],
          },
        },
        {
          id: "JobSearchStrategies",
          label: "Job Search Strategies",
          path: "/career-counseling/job-search-strategies",
          course: {
            label: "Effective Job Search Campaign",
            description:
              "Learn proven strategies to find and secure your ideal job",
            price: "₹5,999",
            duration: "4 weeks",
            features: [
              "Job search platform optimization",
              "Networking and referral strategies",
              "Company research techniques",
              "Hidden job market access",
              "Application tracking and follow-up systems",
              "Social media job search strategies",
            ],
          },
        },
        {
          id: "StreamSelection",
          label: "Stream Selection",
          path: "/career-counseling/stream-selection-offer",
          course: {
            label: "Academic Stream Selection Guidance",
            description:
              "Make informed decisions about your academic and career path",
            price: "₹3,999",
            duration: "2 weeks",
            features: [
              "Comprehensive aptitude and interest assessment",
              "One-on-one counseling sessions",
              "Information about various streams and career paths",
              "Industry exposure and expert interactions",
              "Parents counseling session",
              "Future planning and roadmap development",
            ],
          },
        },
      ],
    },
  ];
  
  // Mock course data
 // Enhanced course mock data for each course
 export const courseMockData: Record<CourseKey, CourseData> = {
  // School Course - Engineering
  "JEE": {
    title: "JEE Main Preparation",
    description: "Comprehensive preparation for Joint Entrance Examination (Main & Advanced)",
    price: "₹25,999",
    duration: "12 months",
    image: "/images/courses/jee.jpg",
    features: [
      "Live classes with IIT alumni faculty",
      "Complete Physics, Chemistry & Math syllabus coverage",
      "10,000+ practice questions with solutions",
      "40 full-length mock tests with detailed analysis",
      "Personalized doubt clearing sessions",
      "Study material and formula books included"
    ]
  },
  "KEAM": {
    title: "KEAM Preparation",
    description: "Complete course for Kerala Engineering Entrance Examination",
    price: "₹18,999",
    duration: "10 months",
    image: "/images/courses/keam.jpg",
    features: [
      "Special focus on Kerala state syllabus",
      "Chapter-wise test series",
      "Previous year question bank",
      "Physics & Chemistry practical guidance",
      "Rank improvement program"
    ]
  },
  "BITSAT": {
    title: "BITSAT Preparation",
    description: "Targeted course for BITS Pilani Entrance Exam",
    price: "₹20,999",
    duration: "8 months",
    image: "/images/courses/bitsat.jpg",
    features: [
      "Special focus on speed and accuracy",
      "Computer-based test simulation",
      "English proficiency training",
      "Logical reasoning section coverage",
      "Full syllabus revision program"
    ]
  },
  "VITEEE": {
    title: "VITEEE Preparation",
    description: "Comprehensive course for VIT Engineering Entrance Exam",
    price: "₹16,999",
    duration: "9 months",
    image: "/images/courses/viteee.jpg",
    features: [
      "Special focus on NCERT syllabus",
      "Aptitude test preparation",
      "5 full-length simulated tests",
      "Time management strategies",
      "Application filling guidance"
    ]
  },
  "KCET": {
    title: "KCET Preparation",
    description: "Complete preparation for Karnataka Common Entrance Test",
    price: "₹15,999",
    duration: "10 months",
    image: "/images/courses/kcet.jpg",
    features: [
      "Karnataka PUC syllabus alignment",
      "Bilingual instruction (English & Kannada)",
      "Previous 10 years question analysis",
      "Practical exam guidance",
      "College selection counseling"
    ]
  },

  // School Course - Medical
  "NEET (UG)": {
    title: "NEET (UG) Preparation",
    description: "Comprehensive medical entrance exam preparation",
    price: "₹24,999",
    duration: "12 months",
    image: "/images/courses/neet.jpg",
    features: [
      "Live classes with NEET experts",
      "Complete Biology, Physics & Chemistry coverage",
      "15,000+ MCQs with detailed solutions",
      "30 full-length mock tests",
      "Dedicated doubt clearing sessions",
      "NCERT based study material"
    ]
  },
  "PARAMEDICAL ENTRANCE": {
    title: "Paramedical Entrance Preparation",
    description: "Course for various paramedical entrance exams",
    price: "₹14,999",
    duration: "8 months",
    image: "/images/courses/paramedical.jpg",
    features: [
      "Coverage of multiple paramedical exams",
      "Basic medical science foundation",
      "Aptitude test preparation",
      "Career guidance for paramedical fields",
      "Practical knowledge sessions"
    ]
  },
  "JIPMER": {
    title: "JIPMER Preparation",
    description: "Targeted course for JIPMER MBBS entrance exam",
    price: "₹19,999",
    duration: "10 months",
    image: "/images/courses/jipmer.jpg",
    features: [
      "Special focus on JIPMER pattern",
      "Logical reasoning and aptitude training",
      "English comprehension practice",
      "5 full-length JIPMER mock tests",
      "Application process guidance"
    ]
  },

  // School Course - Management
  "IPM": {
    title: "IPM Preparation",
    description: "Integrated Program in Management entrance preparation",
    price: "₹17,999",
    duration: "6 months",
    image: "/images/courses/ipm.jpg",
    features: [
      "Quantitative ability training",
      "Verbal ability enhancement",
      "Logical reasoning mastery",
      "Interview preparation",
      "Past year paper analysis"
    ]
  },
  "CHRIST": {
    title: "Christ University Entrance Preparation",
    description: "Course for Christ University undergraduate programs",
    price: "₹12,999",
    duration: "5 months",
    image: "/images/courses/christ.jpg",
    features: [
      "Micro presentation training",
      "Psychometric test preparation",
      "Interview skills development",
      "Creative writing guidance",
      "Current affairs updates"
    ]
  },
  "SET": {
    title: "SET Preparation",
    description: "Symbiosis Entrance Test preparation course",
    price: "₹15,999",
    duration: "6 months",
    image: "/images/courses/set.jpg",
    features: [
      "General English training",
      "Quantitative skills development",
      "General awareness updates",
      "Analytical reasoning practice",
      "Mock interview sessions"
    ]
  },
  "NPAT": {
    title: "NPAT Preparation",
    description: "NMIMS Programs After Twelfth entrance preparation",
    price: "₹16,999",
    duration: "7 months",
    image: "/images/courses/npat.jpg",
    features: [
      "Proficiency in English training",
      "Quantitative & numerical ability",
      "Reasoning & general intelligence",
      "Mock test series",
      "Application guidance"
    ]
  },
  "MHCET": {
    title: "MHCET Preparation",
    description: "Maharashtra Common Entrance Test for BBA/BBM",
    price: "₹14,999",
    duration: "8 months",
    image: "/images/courses/mhcet.jpg",
    features: [
      "Logical reasoning intensive",
      "Abstract reasoning practice",
      "Current affairs updates",
      "Marathi language basics",
      "Test-taking strategies"
    ]
  },

  // School Course - Law
  "CLAT": {
    title: "CLAT Preparation",
    description: "Comprehensive Common Law Admission Test preparation",
    price: "₹21,999",
    duration: "12 months",
    image: "/images/courses/clat.jpg",
    features: [
      "Legal aptitude training",
      "Logical reasoning mastery",
      "English language enhancement",
      "Current affairs updates",
      "5 full-length mock tests"
    ]
  },
  "SLAT": {
    title: "SLAT Preparation",
    description: "Symbiosis Law Admission Test preparation course",
    price: "₹18,999",
    duration: "10 months",
    image: "/images/courses/slat.jpg",
    features: [
      "Legal reasoning training",
      "Analytical ability development",
      "Reading comprehension practice",
      "General knowledge updates",
      "Interview preparation"
    ]
  },
  "AILET": {
    title: "AILET Preparation",
    description: "All India Law Entrance Test preparation",
    price: "₹19,999",
    duration: "11 months",
    image: "/images/courses/ailet.jpg",
    features: [
      "Focus on NLU Delhi pattern",
      "Elementary mathematics practice",
      "General awareness updates",
      "Legal maxims and terms",
      "Time management strategies"
    ]
  },
  "KLEE": {
    title: "KLEE Preparation",
    description: "Kerala Law Entrance Exam preparation",
    price: "₹15,999",
    duration: "9 months",
    image: "/images/courses/klee.jpg",
    features: [
      "Kerala-specific legal knowledge",
      "Malayalam comprehension",
      "General English training",
      "Previous year paper analysis",
      "Application guidance"
    ]
  },
  "CULEE": {
    title: "CULEE Preparation",
    description: "Christ University Law Entrance Exam preparation",
    price: "₹16,999",
    duration: "8 months",
    image: "/images/courses/culee.jpg",
    features: [
      "Legal aptitude training",
      "Reasoning ability development",
      "Current affairs updates",
      "Interview preparation",
      "Micro presentation training"
    ]
  },

  // School Course - CUET
  "CUET(1year)": {
    title: "CUET (UG) 1 Year Program",
    description: "Course description:The CUET (Common University Entrance Test) Preparation Course is a structured and result-oriented program designed to help students secure admission into top Central and participating universities across India. This course provides in-depth guidance for all three sections of the CUET – Language Test, Domain-Specific Subjects, and the General Test – with a focus on mastering concepts, improving speed and accuracy, and cracking CUET with confidence.",
    price: "₹50,000",
    duration: "12 months",
    image: "/images/courses/cuet.jpg",
    features: [
      "weekend batch, 120+ Hours of Live & Interactive Sessions",
      "	Each Session will be of 240-Minute Duration",
      "	Access to Monthly Current Affairs Compendium",
      "	Topic Tests: 2000+ Practice Questions",
      "	80+ All India Mock Tests Based on the Actual Exam Pattern",
      "	In-Class Doubt-Solving Sessions",
      "	Dedicated Telegram group",
      "	Comprehensive Study Material"
    ]
  },
  "CUET(2year)": {
    title: "CUET (UG) 2 Year Program",
    description: "Course description:The CUET (Common University Entrance Test) Preparation Course is a structured and result-oriented program designed to help students secure admission into top Central and participating universities across India. This course provides in-depth guidance for all three sections of the CUET – Language Test, Domain-Specific Subjects, and the General Test – with a focus on mastering concepts, improving speed and accuracy, and cracking CUET with confidence.",
    price: "₹80,000",
    duration: "24 months",
    image: "/images/courses/cuet2.jpg",
    features: [
      "200+ Hours of Live & Interactive Sessions",
      "	Each Session will be of 240-Minute Duration",
      "	Access to Monthly Current Affairs Compendium",
      "	Topic Tests: 2000+ Practice Questions",
      "	80+ All India Mock Tests Based on the Actual Exam Pattern",
      "	In-Class Doubt-Solving Sessions",
      "	Dedicated Telegram group",
      "	Comprehensive Study Material"
    ]
  },

  // School Course - Defence
  "NDA": {
    title: "NDA Preparation",
    description: "National Defence Academy entrance exam preparation",
    price: "₹22,999",
    duration: "12 months",
    image: "/images/courses/nda.jpg",
    features: [
      "Mathematics intensive training",
      "General ability test preparation",
      "SSB interview guidance",
      "Physical fitness training",
      "Current affairs updates"
    ]
  },
  "AFCAT": {
    title: "AFCAT Preparation",
    description: "Air Force Common Admission Test preparation",
    price: "₹18,999",
    duration: "8 months",
    image: "/images/courses/afcat.jpg",
    features: [
      "Verbal ability training",
      "Numerical ability practice",
      "Reasoning and military aptitude",
      "Interview preparation",
      "Current affairs updates"
    ]
  },

  // School Course - Tuitions
  "PHYSICS": {
    title: "Physics Tuition",
    description: "Comprehensive physics tutoring for all levels",
    price: "₹8,999",
    duration: "Ongoing",
    image: "/images/courses/physics.jpg",
    features: [
      "Class 11-12 CBSE/State boards",
      "JEE/NEET level concepts",
      "Practical application training",
      "Doubt clearing sessions",
      "Regular tests and assessments"
    ]
  },
  "CHEMISTRY": {
    title: "Chemistry Tuition",
    description: "In-depth chemistry tutoring for school students",
    price: "₹8,999",
    duration: "Ongoing",
    image: "/images/courses/chemistry.jpg",
    features: [
      "Physical, Organic & Inorganic Chemistry",
      "NCERT based teaching",
      "Numerical problem solving",
      "Practical lab guidance",
      "Competitive exam preparation"
    ]
  },
  "MATHS": {
    title: "Mathematics Tuition",
    description: "Comprehensive math tutoring for all levels",
    price: "₹9,999",
    duration: "Ongoing",
    image: "/images/courses/maths.jpg",
    features: [
      "Class 9-12 CBSE/State boards",
      "JEE/Competitive exam preparation",
      "Problem solving techniques",
      "Conceptual clarity focus",
      "Regular practice tests"
    ]
  },
  "BIOLOGY": {
    title: "Biology Tuition",
    description: "Detailed biology tutoring for school students",
    price: "₹8,499",
    duration: "Ongoing",
    image: "/images/courses/biology.jpg",
    features: [
      "Botany and Zoology coverage",
      "NEET level preparation",
      "Diagrams and theory emphasis",
      "NCERT based teaching",
      "Practical exam guidance"
    ]
  },
  "ACCOUNTING": {
    title: "Accounting Tuition",
    description: "Professional accounting tutoring",
    price: "₹7,999",
    duration: "Ongoing",
    image: "/images/courses/accounting.jpg",
    features: [
      "Class 11-12 Commerce students",
      "CA Foundation preparation",
      "Practical accounting training",
      "Balance sheet preparation",
      "Taxation basics"
    ]
  },
  "ECONOMICS": {
    title: "Economics Tuition",
    description: "Comprehensive economics tutoring",
    price: "₹7,499",
    duration: "Ongoing",
    image: "/images/courses/economics.jpg",
    features: [
      "Micro and Macro economics",
      "Indian economic development",
      "Graphs and data interpretation",
      "Current economic affairs",
      "Exam preparation"
    ]
  },
  "ENGLISH": {
    title: "English Tuition",
    description: "Language and literature tutoring",
    price: "₹6,999",
    duration: "Ongoing",
    image: "/images/courses/english.jpg",
    features: [
      "Grammar and composition",
      "Literature analysis",
      "Creative writing",
      "Communication skills",
      "Exam preparation"
    ]
  },
  "COMMERCE": {
    title: "Commerce Tuition",
    description: "Comprehensive commerce stream tutoring",
    price: "₹8,499",
    duration: "Ongoing",
    image: "/images/courses/commerce.jpg",
    features: [
      "Accountancy, Business Studies, Economics",
      "CBSE and State boards",
      "Project work guidance",
      "Case study analysis",
      "Exam preparation"
    ]
  },
  "BUSINESS STUDIES": {
    title: "Business Studies Tuition",
    description: "In-depth business studies tutoring",
    price: "₹7,999",
    duration: "Ongoing",
    image: "/images/courses/business.jpg",
    features: [
      "Principles and functions of management",
      "Business environment",
      "Marketing management",
      "Case study approach",
      "Exam oriented teaching"
    ]
  },

  // School Course - Others
  "ASHOKA UNIVERSITY": {
    title: "Ashoka University Preparation",
    description: "Entrance preparation for Ashoka University programs",
    price: "₹14,999",
    duration: "6 months",
    image: "/images/courses/ashoka.jpg",
    features: [
      "Liberal arts test preparation",
      "Writing assessment training",
      "Interview preparation",
      "Critical thinking development",
      "Application guidance"
    ]
  },
  "CHRIST UNIVERSITY": {
    title: "Christ University Preparation",
    description: "Entrance preparation for Christ University programs",
    price: "₹12,999",
    duration: "5 months",
    image: "/images/courses/christuni.jpg",
    features: [
      "General aptitude training",
      "Micro presentation guidance",
      "Psychometric test preparation",
      "Interview skills",
      "Creative writing"
    ]
  },
  "SYMBIOSIS": {
    title: "Symbiosis University Preparation",
    description: "Entrance preparation for Symbiosis University programs",
    price: "₹13,999",
    duration: "6 months",
    image: "/images/courses/symbiosis.jpg",
    features: [
      "SET exam preparation",
      "Personal interview training",
      "Written ability test",
      "Group discussion",
      "Application process"
    ]
  },
  "NMIMS": {
    title: "NMIMS Preparation",
    description: "Entrance preparation for NMIMS programs",
    price: "₹14,999",
    duration: "7 months",
    image: "/images/courses/nmims.jpg",
    features: [
      "NPAT exam preparation",
      "Personal interview training",
      "Written ability test",
      "Profile building",
      "Application guidance"
    ]
  },
  "ST. XAVIER'S": {
    title: "St. Xavier's Preparation",
    description: "Entrance preparation for St. Xavier's College programs",
    price: "₹11,999",
    duration: "5 months",
    image: "/images/courses/xaviers.jpg",
    features: [
      "Xavier's Aptitude Test preparation",
      "Interview preparation",
      "Creative writing",
      "General awareness",
      "Application process"
    ]
  },

  // School Course - Design & Architecture
  "NID": {
    title: "NID Preparation",
    description: "National Institute of Design entrance preparation",
    price: "₹24,999",
    duration: "12 months",
    image: "/images/courses/nid.jpg",
    features: [
      "Design aptitude training",
      "Creative thinking development",
      "Portfolio preparation",
      "Studio test guidance",
      "Interview preparation"
    ]
  },
  "NIFT": {
    title: "NIFT Preparation",
    description: "National Institute of Fashion Technology entrance preparation",
    price: "₹22,999",
    duration: "10 months",
    image: "/images/courses/nift.jpg",
    features: [
      "Creative ability training",
      "General ability test preparation",
      "Situation test guidance",
      "Portfolio development",
      "Group discussion"
    ]
  },
  "UCEED": {
    title: "UCEED Preparation",
    description: "Undergraduate Common Entrance Exam for Design preparation",
    price: "₹21,999",
    duration: "11 months",
    image: "/images/courses/uceed.jpg",
    features: [
      "Visualization and spatial ability",
      "Observation and design sensitivity",
      "Environmental awareness",
      "Analytical and logical reasoning",
      "Mock test series"
    ]
  },
  "CEED": {
    title: "CEED Preparation",
    description: "Common Entrance Exam for Design preparation",
    price: "₹23,999",
    duration: "12 months",
    image: "/images/courses/ceed.jpg",
    features: [
      "Design thinking training",
      "Visual communication",
      "Problem identification",
      "Portfolio building",
      "Mock interview"
    ]
  },
  "JEE MAIN": {
    title: "JEE Main B.Arch Preparation",
    description: "JEE Main Paper 2 for B.Arch/B.Planning preparation",
    price: "₹19,999",
    duration: "10 months",
    image: "/images/courses/jee-arch.jpg",
    features: [
      "Mathematics part A",
      "Aptitude test part B",
      "Drawing test part C",
      "Planning based questions",
      "Full syllabus coverage"
    ]
  },
  "NATA": {
    title: "NATA Preparation",
    description: "National Aptitude Test in Architecture preparation",
    price: "₹20,999",
    duration: "11 months",
    image: "/images/courses/nata.jpg",
    features: [
      "Drawing test preparation",
      "Aesthetic sensitivity training",
      "3D visualization",
      "Perspective drawing",
      "Mock test series"
    ]
  },

  // College Course - Management
  "CAT": {
    title: "CAT Preparation",
    description: "Comprehensive Common Admission Test preparation",
    price: "₹29,999",
    duration: "12 months",
    image: "/images/courses/cat.jpg",
    features: [
      "Quantitative aptitude mastery",
      "Verbal ability and reading comprehension",
      "Data interpretation & logical reasoning",
      "20 full-length mock tests",
      "Personalized performance analysis"
    ]
  },
  "XAT": {
    title: "XAT Preparation",
    description: "Xavier Aptitude Test preparation for management programs",
    price: "₹27,999",
    duration: "11 months",
    image: "/images/courses/xat.jpg",
    features: [
      "Decision making practice",
      "Verbal and logical ability",
      "Quantitative ability & DI",
      "General awareness updates",
      "Essay writing practice"
    ]
  },
  "KMAT": {
    title: "KMAT Preparation",
    description: "Karnataka Management Aptitude Test preparation",
    price: "₹18,999",
    duration: "8 months",
    image: "/images/courses/kmat.jpg",
    features: [
      "Verbal ability training",
      "Quantitative ability practice",
      "Logical reasoning mastery",
      "General knowledge updates",
      "Mock test series"
    ]
  },
  "CMAT": {
    title: "CMAT Preparation",
    description: "Common Management Admission Test preparation",
    price: "₹19,999",
    duration: "9 months",
    image: "/images/courses/cmat.jpg",
    features: [
      "Quantitative techniques",
      "Logical reasoning training",
      "Language comprehension",
      "General awareness updates",
      "Mock test series"
    ]
  },
  "MAT": {
    title: "MAT Preparation",
    description: "Management Aptitude Test preparation",
    price: "₹17,999",
    duration: "7 months",
    image: "/images/courses/mat.jpg",
    features: [
      "Paper-based and computer-based training",
      "Language comprehension",
      "Mathematical skills",
      "Data analysis and sufficiency",
      "Indian and global environment"
    ]
  },
  "NMAT": {
    title: "NMAT Preparation",
    description: "NMIMS Management Aptitude Test preparation",
    price: "₹20,999",
    duration: "8 months",
    image: "/images/courses/nmat.jpg",
    features: [
      "Language skills training",
      "Quantitative skills development",
      "Logical reasoning practice",
      "Computer-based test simulation",
      "Personalized study plan"
    ]
  },
  "CUET(PG)": {
    title: "CUET (PG) Preparation",
    description: "Common University Entrance Test for Postgraduate preparation",
    price: "₹21,999",
    duration: "10 months",
    image: "/images/courses/cuet-pg.jpg",
    features: [
      "Domain-specific subject preparation",
      "General test training",
      "Language test preparation",
      "10 full-length mock tests",
      "Application guidance"
    ]
  },
  "MICAT": {
    title: "MICAT Preparation",
    description: "MICA Admission Test preparation",
    price: "₹22,999",
    duration: "9 months",
    image: "/images/courses/micat.jpg",
    features: [
      "Psychometric test training",
      "Creative ability assessment",
      "Descriptive test preparation",
      "General awareness updates",
      "Group exercise guidance"
    ]
  },

  // College Course - Civil Service
  "UPSC": {
    title: "UPSC CSE Preparation",
    description: "Comprehensive Civil Services Examination preparation",
    price: "₹49,999",
    duration: "24 months",
    image: "/images/courses/upsc.jpg",
    features: [
      "Prelims and Mains integrated program",
      "Current affairs updates",
      "Optional subject guidance",
      "Answer writing practice",
      "Interview preparation"
    ]
  },

  // College Course - Government
  "RAILWAY": {
    title: "Railway Exam Preparation",
    description: "Comprehensive preparation for Railway Recruitment Board exams",
    price: "₹14,999",
    duration: "6 months",
    image: "/images/courses/railway.jpg",
    features: [
      "Mathematics practice",
      "General intelligence & reasoning",
      "General awareness",
      "Technical subjects (if applicable)",
      "Previous year paper analysis"
    ]
  },
  "SSC": {
    title: "SSC Exam Preparation",
    description: "Staff Selection Commission exam preparation",
    price: "₹15,999",
    duration: "7 months",
    image: "/images/courses/ssc.jpg",
    features: [
      "Quantitative aptitude",
      "English language mastery",
      "General awareness",
      "Reasoning ability",
      "Mock test series"
    ]
  },

  // College Course - Defence
  "CDS": {
    title: "CDS Preparation",
    description: "Combined Defence Services examination preparation",
    price: "₹19,999",
    duration: "10 months",
    image: "/images/courses/cds.jpg",
    features: [
      "English paper training",
      "General knowledge updates",
      "Elementary mathematics",
      "SSB interview guidance",
      "Physical fitness tips"
    ]
  },

  // College Course - Design & Architecture
  "NID PG": {
    title: "NID PG Preparation",
    description: "National Institute of Design postgraduate entrance preparation",
    price: "₹26,999",
    duration: "12 months",
    image: "/images/courses/nid-pg.jpg",
    features: [
      "Design theory training",
      "Research methodology",
      "Portfolio development",
      "Studio test guidance",
      "Interview preparation"
    ]
  },
  "NIFT PG": {
    title: "NIFT PG Preparation",
    description: "National Institute of Fashion Technology postgraduate preparation",
    price: "₹24,999",
    duration: "11 months",
    image: "/images/courses/nift-pg.jpg",
    features: [
      "Creative ability enhancement",
      "General ability test training",
      "Case study approach",
      "Portfolio building",
      "Group discussion"
    ]
  },

  // College Course - Bank
  "SBI": {
    title: "SBI PO Preparation",
    description: "State Bank of India Probationary Officer exam preparation",
    price: "₹17,999",
    duration: "8 months",
    image: "/images/courses/sbi.jpg",
    features: [
      "Quantitative aptitude",
      "Reasoning ability",
      "English language",
      "General awareness",
      "Mock interview"
    ]
  },
  "IBPS P O": {
    title: "IBPS PO Preparation",
    description: "Institute of Banking Personnel Selection Probationary Officer preparation",
    price: "₹16,999",
    duration: "7 months",
    image: "/images/courses/ibps-po.jpg",
    features: [
      "Computer knowledge",
      "Quantitative techniques",
      "Logical reasoning",
      "English language",
      "Mock test series"
    ]
  },
  "RBI GRADE B": {
    title: "RBI Grade B Preparation",
    description: "Reserve Bank of India Grade B officer exam preparation",
    price: "₹24,999",
    duration: "10 months",
    image: "/images/courses/rbi.jpg",
    features: [
      "Economic and social issues",
      "English writing skills",
      "Finance and management",
      "General awareness",
      "Phase 2 preparation"
    ]
  },
  "IBPS RRB": {
    title: "IBPS RRB Preparation",
    description: "Institute of Banking Personnel Selection Regional Rural Banks preparation",
    price: "₹15,999",
    duration: "6 months",
    image: "/images/courses/ibps-rrb.jpg",
    features: [
      "Numerical ability",
      "Reasoning ability",
      "Computer knowledge",
      "Financial awareness",
      "Mock test series"
    ]
  },
  "SBI CLERK": {
    title: "SBI Clerk Preparation",
    description: "State Bank of India Clerk exam preparation",
    price: "₹14,999",
    duration: "5 months",
    image: "/images/courses/sbi-clerk.jpg",
    features: [
      "Numerical ability",
      "English language",
      "Reasoning ability",
      "Computer aptitude",
      "Mock test series"
    ]
  },
  "IBPS CLERK": {
    title: "IBPS Clerk Preparation",
    description: "Institute of Banking Personnel Selection Clerk exam preparation",
    price: "₹14,999",
    duration: "5 months",
    image: "/images/courses/ibps-clerk.jpg",
    features: [
      "Quantitative aptitude",
      "English language",
      "Reasoning ability",
      "Computer knowledge",
      "Mock test series"
    ]
  },
  "NABARD": {
    title: "NABARD Preparation",
    description: "National Bank for Agriculture and Rural Development exam preparation",
    price: "₹19,999",
    duration: "8 months",
    image: "/images/courses/nabard.jpg",
    features: [
      "Economic and social issues",
      "Agriculture and rural development",
      "English writing skills",
      "General awareness",
      "Mock test series"
    ]
  },
  "LIC AAO": {
    title: "LIC AAO Preparation",
    description: "Life Insurance Corporation Assistant Administrative Officer preparation",
    price: "₹17,999",
    duration: "7 months",
    image: "/images/courses/lic.jpg",
    features: [
      "Quantitative aptitude",
      "Reasoning ability",
      "English language",
      "General knowledge",
      "Insurance awareness"
    ]
  },

  // Study Abroad - IELTS
  "IELTS": {
    title: "IELTS Preparation",
    description: "Comprehensive International English Language Testing System preparation",
    price: "₹14,999",
    duration: "3 months",
    image: "/images/courses/ielts.jpg",
    features: [
      "All four modules: Listening, Reading, Writing, Speaking",
      "British Council trained faculty",
      "10 full practice tests",
      "Speaking mock interviews",
      "Score improvement guarantee"
    ]
  },

  // Study Abroad - SAT
  "SAT": {
    title: "SAT Preparation",
    description: "Comprehensive Scholastic Assessment Test preparation",
    price: "₹16,999",
    duration: "4 months",
    image: "/images/courses/sat.jpg",
    features: [
      "Evidence-Based Reading and Writing",
      "Mathematics section mastery",
      "Optional Essay writing",
      "8 full-length practice tests",
      "College application guidance"
    ]
  },

  // Study Abroad - ACT
  "ACT": {
    title: "ACT Preparation",
    description: "Comprehensive American College Testing preparation",
    price: "₹16,999",
    duration: "4 months",
    image: "/images/courses/act.jpg",
    features: [
      "English, Math, Reading, Science sections",
      "Optional Writing test",
      "Test-taking strategies",
      "6 full-length practice tests",
      "Score analysis"
    ]
  },

  // Study Abroad - GRE
  "GRE": {
    title: "GRE Preparation",
    description: "Comprehensive Graduate Record Examinations preparation",
    price: "₹18,999",
    duration: "3 months",
    image: "/images/courses/gre.jpg",
    features: [
      "Verbal Reasoning intensive",
      "Quantitative Reasoning mastery",
      "Analytical Writing training",
      "Computer-adaptive test practice",
      "Vocabulary building"
    ]
  },

  // Study Abroad - GMAT
  "GMAT": {
    title: "GMAT Preparation",
    description: "Comprehensive Graduate Management Admission Test preparation",
    price: "₹19,999",
    duration: "3 months",
    image: "/images/courses/gmat.jpg",
    features: [
      "Quantitative section training",
      "Verbal section mastery",
      "Integrated Reasoning",
      "Analytical Writing Assessment",
      "Adaptive test strategies"
    ]
  },

  // Career Counseling
  "ResumeBuilding": {
    title: "Resume Building",
    description: "Professional resume development service",
    price: "₹4,999",
    duration: "2 weeks",
    image: "/images/courses/resume.jpg",
    features: [
      "ATS optimized formatting",
      "Industry-specific keywords",
      "Achievement-oriented language",
      "Professional templates",
      "Cover letter included"
    ]
  },
  "InterviewPreparation": {
    title: "Interview Preparation",
    description: "Comprehensive job interview training program",
    price: "₹6,999",
    duration: "3 weeks",
    image: "/images/courses/interview.jpg",
    features: [
      "Mock interview sessions",
      "Behavioral question training",
      "Technical interview prep",
      "Salary negotiation",
      "Follow-up strategies"
    ]
  },
  "CareerPlanning": {
    title: "Career Counseling",
    description: "Personalized career roadmap development",
    price: "₹8,999",
    duration: "1 month",
    image: "/images/courses/career.jpg",
    features: [
      "Aptitude assessment",
      "Interest mapping",
      "Industry research",
      "Skill gap analysis",
      "5-year career plan"
    ]
  },
  "SkillDevelopment": {
    title: "Skill Development",
    description: "Professional skills enhancement program",
    price: "₹7,999",
    duration: "6 weeks",
    image: "/images/courses/skills.jpg",
    features: [
      "Communication training",
      "Leadership development",
      "Time management",
      "Team collaboration",
      "Problem solving"
    ]
  },
  "JobSearchStrategies": {
    title: "Job Search Strategies",
    description: "Effective job hunting techniques",
    price: "₹5,999",
    duration: "4 weeks",
    image: "/images/courses/jobsearch.jpg",
    features: [
      "LinkedIn optimization",
      "Networking strategies",
      "Application tracking",
      "Recruiter outreach",
      "Follow-up system"
    ]
  },
  "StreamSelection": {
    title: "Stream Selection",
    description: "Academic stream guidance for students",
    price: "₹3,999",
    duration: "2 weeks",
    image: "/images/courses/stream.jpg",
    features: [
      "Aptitude testing",
      "Interest assessment",
      "Career matching",
      "Parent counseling",
      "Roadmap creation"
    ]
  }
};
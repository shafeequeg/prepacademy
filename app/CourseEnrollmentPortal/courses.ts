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
  
  export type MainCategory = {
    id: string;
    label: string;
    tabs: Tab[];
  };
  
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
          label: "CUET",
          path: "/cuet",
          dropdownItems: [
            { label: "CUET ", path: "/collegecourse/management/cuet" },
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
          label: "Career Planning",
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
  export const courseMockData = {
    title: "JEE Main Preparation",
    description: "Comprehensive preparation for Joint Entrance Examination",
    price: "₹15,999",
    duration: "6 months",
    features: [
      "Live classes with expert faculty",
      "Complete syllabus coverage",
      "Regular mock tests and analysis",
      "Doubt clearing sessions",
      "Study material and notes",
      "Mobile app access for on-the-go learning",
    ],
  };
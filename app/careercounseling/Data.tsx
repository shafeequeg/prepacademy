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

export interface Course {
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
    slug: "ResumeBuilding",
    title: "ResumeBuilding",
    courseTitle: "Crack Resume Building 2025 with ",
    description: `
Resume Building is the process of creating a structured and professional summary of an individual's academic background, work experience, skills, and achievements. It plays a crucial role in job applications, internships, college admissions, and other career-related opportunities. A well-crafted resume effectively showcases your strengths and helps you stand out to employers or academic institutions. The goal of resume building is to communicate your value clearly and concisely, tailored to the specific role or field you     `,
    points: [
      "Expert Faculty & Personalized Mentorship",
      "Comprehensive Study Materials & Mock Tests",
      "Live & Interactive Sessions with Doubt-Solving",
    ],
    telegramLink: "#",
    relatedVideos: [
      { title: "Preparing for the JEE 2025", videoId: "M33APKoNOqE" },
      { title: "Strategies for JEE 2025", videoId: "_lgTHGKC7Oc" },
      { title: "Best Coaching Centers", videoId: "RyLsKV6z2tw" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "Classroom", label: "Classroom" },
      // { id: "test", label: "Test Series" },
      // { id: "Bookmaterials", label: "Book Materials" },
      // { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "JEE-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Conceptual clarity sessions",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEE-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced problem-solving techniques",
          "Mock test series with AI analysis",
          "Best for repeat JEE takers",
        ],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Result",
        description:
          "NTA has declared the Result/Scores of Joint Entrance Examination (JEE) Main – 2025.",
      },
      {
        category: "Application Form",
        description:
          "The National Testing Agency (NTA) has released the JEE Main 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for the Joint Entrance Examination (JEE) 2025 is set to close soon, with the deadline for submitting applications expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "Beginner's Guide Volume 1", id: 1 },
      { title: "Beginner's Guide Volume 2", id: 2 },
      { title: "Beginner's Guide Volume 3", id: 3 },
      { title: "Beginner's Guide Volume 4", id: 4 },
      { title: "Beginner's Guide Volume 5", id: 5 },
      { title: "Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the JEE exam?",
        answer:
          "The Joint Entrance Examination (JEE) is an entrance examination conducted for admission to engineering programs in premier institutes like IITs, NITs, and other top colleges in India. It consists of JEE Main and JEE Advanced.",
      },
      {
        question: "Is JEE open for non-Indian students?",
        answer:
          "Yes, JEE is open to candidates from all over the world, including non-Indian students, provided they meet the eligibility criteria set by the National Testing Agency (NTA).",
      },
      {
        question: "Where can I get the JEE syllabus?",
        answer:
          "The JEE syllabus includes Physics, Chemistry, and Mathematics. It is recommended to visit the official website jeemain.nta.nic.in for detailed information.",
      },
      {
        question: "Is the JEE exam tough?",
        answer:
          "JEE is considered highly competitive and challenging due to its vast syllabus and limited seats. However, with consistent preparation and practice, candidates can perform well.",
      },
    ],
  },
  {
    slug: "kmat",
    title: "KMAT",
    courseTitle: "Crack KMAT 2025 with ",
    description: `
      The Karnataka Management Aptitude Test (KMAT) is a state-level examination administered by the Karnataka Private Post Graduate Colleges Association (KPPGCA) for admissions into MBA, PGDM, and MCA programs in Karnataka. KMAT 2025 will be conducted in Remote Proctored Internet-Based Test (IBT) mode, tentatively in October 2025.
    `,
    points: [
      "Mentoring & Teaching by experts",
      "Testing & Analysis",
      "Support for School/Board Exams",
    ],
    telegramLink: "#",
    relatedVideos: [
      { title: "Preparing for the KMAT 2025", videoId: "M33APKoNOqE" },
      { title: "Strategies for KMAT 2025", videoId: "_lgTHGKC7Oc" },
      { title: "Best Coaching Centers", videoId: "RyLsKV6z2tw" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "Classroom", label: "Classroom" },
      // { id: "test", label: "Test Series" },
      // { id: "Bookmaterials", label: "Book Materials" },
      // { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "KMAT-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "KMAT-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced problem-solving techniques",
          "Mock test series with AI analysis",
          "Best for repeat KMAT takers",
        ],
      },
    ],
    demoVideos: [
      { title: "Preparing for the KMAT 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for KMAT 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Result",
        description:
          "KPPGCA has declared the Result/Scores of Karnataka Management Aptitude Test (KMAT) – 2024.",
      },
      {
        category: "Application Form",
        description:
          "The Karnataka Private Post Graduate Colleges Association (KPPGCA) has released the KMAT 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for the Karnataka Management Aptitude Test (KMAT) 2025 is set to close soon, with the deadline for submitting applications expected by September 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "Beginner's Guide Volume 1", id: 1 },
      { title: "Beginner's Guide Volume 2", id: 2 },
      { title: "Beginner's Guide Volume 3", id: 3 },
      { title: "Beginner's Guide Volume 4", id: 4 },
      { title: "Beginner's Guide Volume 5", id: 5 },
      { title: "Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is KMAT exam?",
        answer:
          "Karnataka Management Aptitude Test (KMAT) is an entrance examination conducted for admission to MBA, PGDM, and MCA programs in private postgraduate colleges across Karnataka.",
      },
      {
        question: "Is KMAT open for non-Karnataka students?",
        answer:
          "Yes, KMAT is open to candidates from all over India, not just those from Karnataka.",
      },
      {
        question: "Where can I get the KMAT syllabus?",
        answer:
          "The KMAT syllabus includes Verbal Ability and Reading Comprehension, Quantitative Ability, and Logical Reasoning. It is recommended to visit the official website kmatindia.com for detailed information.",
      },
      {
        question: "Is the KMAT exam tough?",
        answer:
          "KMAT is considered to be moderately difficult and is designed to test basic aptitude and reasoning skills. Good preparation and practice can help you score well.",
      },
    ],
  },
  {
    slug: "resume-building",
    title: "Resume Building",
    courseTitle: "Master Resume Building with ",
    description: `
      Learn how to craft a professional resume that stands out to recruiters and hiring managers. Our Resume Building course provides step-by-step guidance on creating impactful resumes tailored to your career goals.
    `,
    points: [
      "Expert Guidance on Resume Structure",
      "Personalized Feedback on Your Resume",
      "Tips to Optimize for ATS (Applicant Tracking Systems)",
    ],
    telegramLink: "#",
    relatedVideos: [
      { title: "Crafting a Winning Resume", videoId: "M33APKoNOqE" },
      { title: "Resume Tips for Freshers", videoId: "_lgTHGKC7Oc" },
      { title: "Common Resume Mistakes", videoId: "RyLsKV6z2tw" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      // { id: "test", label: "Test Series" },
      // { id: "study-material", label: "Study Material" },
      // { id: "self-based", label: "Self Based" },
    ],
    offerings: [
      {
        id: "JEEMAIN-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced drawing and aptitude techniques",
          "Mock test series with AI analysis",
          "Best for repeat JEE Main takers",
        ],
      },
      {
        id: "JEEMAIN-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "JEEMAIN-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "JEEMAIN-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "JEEMAIN-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Resume Building Basics", videoId: "5qws0gIHpuY" },
      { title: "Advanced Resume Strategies", videoId: "wfIq-nqvByY" },
      { title: "Resume Review Session", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Workshop Announcement",
        description:
          "New Resume Building workshops scheduled for November 2025.",
      },
      {
        category: "Resource Update",
        description: "Updated ATS-optimized resume templates released.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "templates", label: "Templates" },
      { id: "tips", label: "Tips & Tricks" },
      { id: "examples", label: "Examples" },
    ],
    courseContent: [
      { title: "Resume Guide Volume 1", id: 1 },
      { title: "Resume Guide Volume 2", id: 2 },
      { title: "Resume Guide Volume 3", id: 3 },
      { title: "Resume Guide Volume 4", id: 4 },
    ],
    faqs: [
      {
        question: "What makes a good resume?",
        answer:
          "A good resume is clear, concise, and tailored to the job. It highlights relevant skills, experiences, and achievements while being ATS-friendly.",
      },
      {
        question: "How long should a resume be?",
        answer:
          "A resume should typically be one page for freshers and up to two pages for experienced professionals.",
      },
      {
        question: "What is ATS optimization?",
        answer:
          "ATS optimization involves formatting and using keywords to ensure your resume passes through Applicant Tracking Systems used by employers.",
      },
    ],
  },
  {
    slug: "InterviewPreparation",
    title: "Interview Preparation",
    courseTitle: "Master Interview Preparation with ",
    description: `
      Our Interview Preparation course equips you with the skills and confidence to excel in job interviews. Learn how to answer common questions, handle behavioral interviews, and present yourself professionally to impress recruiters.
    `,
    points: [
      "Mock Interview Practice with Feedback",
      "Techniques for Behavioral and Technical Interviews",
      "Personalized Coaching for Confidence Building",
    ],
    telegramLink: "#",
    relatedVideos: [
      { title: "Acing Your Job Interview", videoId: "M33APKoNOqE" },
      { title: "Common Interview Questions", videoId: "_lgTHGKC7Oc" },
      { title: "Interview Do's and Don'ts", videoId: "RyLsKV6z2tw" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      // { id: "test", label: "Test Series" },
      // { id: "study-material", label: "Study Material" },
      // { id: "self-based", label: "Self Based" },
    ],
    offerings: [
      {
        id: "JEEMAIN-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced drawing and aptitude techniques",
          "Mock test series with AI analysis",
          "Best for repeat JEE Main takers",
        ],
      },
      {
        id: "JEEMAIN-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "JEEMAIN-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "JEEMAIN-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "JEEMAIN-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Interview Prep Basics", videoId: "5qws0gIHpuY" },
      { title: "Advanced Interview Strategies", videoId: "wfIq-nqvByY" },
      { title: "Mock Interview Session", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Workshop Announcement",
        description:
          "New Interview Preparation workshops scheduled for November 2025.",
      },
      {
        category: "Resource Update",
        description: "Updated interview question bank released.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "question-bank", label: "Question Bank" },
      { id: "tips", label: "Tips & Tricks" },
      { id: "mock-interviews", label: "Mock Interviews" },
    ],
    courseContent: [
      { title: "Interview Guide Volume 1", id: 1 },
      { title: "Interview Guide Volume 2", id: 2 },
      { title: "Interview Guide Volume 3", id: 3 },
      { title: "Interview Guide Volume 4", id: 4 },
    ],
    faqs: [
      {
        question: "How do I prepare for a job interview?",
        answer:
          "Prepare by researching the company, practicing common questions, and conducting mock interviews to build confidence.",
      },
      {
        question: "What are behavioral interview questions?",
        answer:
          "Behavioral questions ask about past experiences to predict future performance, e.g., 'Tell me about a time you faced a challenge.'",
      },
      {
        question: "How can I stand out in an interview?",
        answer:
          "Stand out by showcasing relevant skills, asking thoughtful questions, and demonstrating enthusiasm for the role.",
      },
    ],
  },
  {
    slug: "CareerPlanning",
    title: "Career Counseling",
    courseTitle: "Master Career Counseling with ",
    description: `
      Our Career Counseling course helps you identify your strengths, set career goals, and create a roadmap to achieve them. Learn how to explore career options, make informed decisions, and build a fulfilling career.
    `,
    points: [
      "Personalized Career Assessments",
      "Guidance on Setting Career Goals",
      "Strategies for Long-Term Career Success",
    ],
    telegramLink: "#",
    relatedVideos: [
      { title: "Planning Your Career Path", videoId: "M33APKoNOqE" },
      { title: "Choosing the Right Career", videoId: "_lgTHGKC7Oc" },
      { title: "Career Goal Setting", videoId: "RyLsKV6z2tw" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      // { id: "test", label: "Test Series" },
      // { id: "study-material", label: "Study Material" },
      // { id: "self-based", label: "Self Based" },
    ],
    offerings: [
      {
        id: "JEEMAIN-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced drawing and aptitude techniques",
          "Mock test series with AI analysis",
          "Best for repeat JEE Main takers",
        ],
      },
      {
        id: "JEEMAIN-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "JEEMAIN-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "JEEMAIN-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "JEEMAIN-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Career Counseling Basics", videoId: "5qws0gIHpuY" },
      { title: "Advanced Career Strategies", videoId: "wfIq-nqvByY" },
      { title: "Career Assessment Session", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Workshop Announcement",
        description:
          "New Career Counseling workshops scheduled for November 2025.",
      },
      {
        category: "Resource Update",
        description: "Updated career assessment tools released.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "assessments", label: "Assessments" },
      { id: "goal-setting", label: "Goal Setting" },
      { id: "career-paths", label: "Career Paths" },
    ],
    courseContent: [
      { title: "Career Guide Volume 1", id: 1 },
      { title: "Career Guide Volume 2", id: 2 },
      { title: "Career Guide Volume 3", id: 3 },
      { title: "Career Guide Volume 4", id: 4 },
    ],
    faqs: [
      {
        question: "What is Career Counseling?",
        answer:
          "Career Counseling is the process of identifying your strengths, interests, and goals to create a roadmap for your professional future.",
      },
      {
        question: "How do I choose the right career?",
        answer:
          "Choose a career by assessing your skills, exploring industries, and aligning your interests with market opportunities.",
      },
      {
        question: "Can I change careers later in life?",
        answer:
          "Yes, with proper planning and skill development, you can successfully transition to a new career at any stage.",
      },
    ],
  },
  {
    slug: "SkillDevelopment",
    title: "Skill Development",
    courseTitle: "Master Skill Development with ",
    description: `
      Our Skill Development course helps you acquire in-demand skills to boost your employability. From technical skills to soft skills, learn what employers value and how to stand out in the job market.
    `,
    points: [
      "Training in In-Demand Skills",
      "Practical Projects and Assignments",
      "Certification for Skill Mastery",
    ],
    telegramLink: "#",
    relatedVideos: [
      { title: "Top Skills for 2025", videoId: "M33APKoNOqE" },
      { title: "Developing Soft Skills", videoId: "_lgTHGKC7Oc" },
      { title: "Technical Skills Mastery", videoId: "RyLsKV6z2tw" },
    ],
   offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      // { id: "test", label: "Test Series" },
      // { id: "study-material", label: "Study Material" },
      // { id: "self-based", label: "Self Based" },
    ],
    offerings: [
      {
        id: "JEEMAIN-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced drawing and aptitude techniques",
          "Mock test series with AI analysis",
          "Best for repeat JEE Main takers",
        ],
      },
      {
        id: "JEEMAIN-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "JEEMAIN-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "JEEMAIN-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "JEEMAIN-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Skill Development Basics", videoId: "5qws0gIHpuY" },
      { title: "Advanced Skill Strategies", videoId: "wfIq-nqvByY" },
      { title: "Skill Workshop Demo", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Workshop Announcement",
        description:
          "New Skill Development workshops scheduled for November 2025.",
      },
      {
        category: "Resource Update",
        description: "Updated skill development resources released.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "technical-skills", label: "Technical Skills" },
      { id: "soft-skills", label: "Soft Skills" },
      { id: "projects", label: "Projects" },
    ],
    courseContent: [
      { title: "Skills Guide Volume 1", id: 1 },
      { title: "Skills Guide Volume 2", id: 2 },
      { title: "Skills Guide Volume 3", id: 3 },
      { title: "Skills Guide Volume 4", id: 4 },
    ],
    faqs: [
      {
        question: "What skills are in demand?",
        answer:
          "In-demand skills include coding, data analysis, communication, and leadership, depending on the industry.",
      },
      {
        question: "How long does it take to learn a new skill?",
        answer:
          "It varies, but with consistent practice, you can gain proficiency in 3-6 months for most skills.",
      },
      {
        question: "Do certificates help in job applications?",
        answer:
          "Yes, certificates validate your skills and can make your application stand out to employers.",
      },
    ],
  },
  {
    slug: "JobSearchStrategies",
    title: "Job Search Strategies",
    courseTitle: "Master Job Search Strategies with ",
    description: `
      Our Job Search Strategies course teaches you how to navigate the job market effectively. Learn how to leverage job boards, network strategically, and optimize your applications to land your ideal job.
    `,
    points: [
      "Proven Job Search Techniques",
      "Networking and LinkedIn Optimization",
      "Application Tracking and Follow-Up Strategies",
    ],
    telegramLink: "#",
    relatedVideos: [
      { title: "Effective Job Search Tips", videoId: "M33APKoNOqE" },
      { title: "Networking for Jobs", videoId: "_lgTHGKC7Oc" },
      { title: "Optimizing LinkedIn", videoId: "RyLsKV6z2tw" },
    ],
     offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      // { id: "test", label: "Test Series" },
      // { id: "study-material", label: "Study Material" },
      // { id: "self-based", label: "Self Based" },
    ],
    offerings: [
      {
        id: "JEEMAIN-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced drawing and aptitude techniques",
          "Mock test series with AI analysis",
          "Best for repeat JEE Main takers",
        ],
      },
      {
        id: "JEEMAIN-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "JEEMAIN-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "JEEMAIN-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "JEEMAIN-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Job Search Basics", videoId: "5qws0gIHpuY" },
      { title: "Advanced Job Search Strategies", videoId: "wfIq-nqvByY" },
      { title: "Networking Demo", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Workshop Announcement",
        description:
          "New Job Search Strategies workshops scheduled for November 2025.",
      },
      {
        category: "Resource Update",
        description: "Updated job search templates released.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "job-boards", label: "Job Boards" },
      { id: "networking", label: "Networking" },
      { id: "applications", label: "Applications" },
    ],
    courseContent: [
      { title: "Job Search Guide Volume 1", id: 1 },
      { title: "Job Search Guide Volume 2", id: 2 },
      { title: "Job Search Guide Volume 3", id: 4 },
      { title: "Job Search Guide Volume 4", id: 4 },
    ],
    faqs: [
      {
        question: "How do I find job openings?",
        answer:
          "Use job boards, company websites, and networking to discover opportunities in your field.",
      },
      {
        question: "How important is networking?",
        answer:
          "Networking is crucial, as many jobs are filled through referrals and personal connections.",
      },
      {
        question: "How do I optimize my LinkedIn profile?",
        answer:
          "Use a professional photo, write a compelling summary, and include relevant skills and experiences.",
      },
    ],
  },
  {
    slug: "StreamSelection",
    title: "Stream Selection",
    courseTitle: "Master Stream Selection with ",
    description: `
      Our Stream Selection course guides students in choosing the right academic stream after 10th grade. Learn how to assess your interests, strengths, and career aspirations to make informed decisions.
    `,
    points: [
      "Personalized Stream Assessments",
      "Guidance on Career Paths for Each Stream",
      "Counseling for Informed Decision-Making",
    ],
    telegramLink: "#",
    relatedVideos: [
      { title: "Choosing Your Stream", videoId: "M33APKoNOqE" },
      { title: "Science vs. Commerce", videoId: "_lgTHGKC7Oc" },
      { title: "Arts Stream Opportunities", videoId: "RyLsKV6z2tw" },
    ],
    offeringTypes: [
      { id: "online", label: "Online Class" },
      { id: "classroom", label: "Classroom" },
      { id: "test", label: "Test Series" },
      { id: "study-material", label: "Study Material" },
      { id: "self-based", label: "Self Based" },
    ],
    offerings: [
      {
        id: "JEEMAIN-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced drawing and aptitude techniques",
          "Mock test series with AI analysis",
          "Best for repeat JEE Main takers",
        ],
      },
      {
        id: "JEEMAIN-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Drawing and aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "JEEMAIN-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Drawing and aptitude practice",
        ],
      },
      {
        id: "JEEMAIN-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "JEEMAIN-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "JEEMAIN-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "JEEMAIN-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Stream Selection Basics", videoId: "5qws0gIHpuY" },
      { title: "Advanced Stream Guidance", videoId: "wfIq-nqvByY" },
      { title: "Counseling Demo", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Counseling Announcement",
        description:
          "New Stream Selection counseling sessions scheduled for November 2025.",
      },
      {
        category: "Resource Update",
        description: "Updated stream selection guides released.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "assessments", label: "Assessments" },
      { id: "streams", label: "Stream Options" },
      { id: "careers", label: "Career Paths" },
    ],
    courseContent: [
      { title: "Stream Guide Volume 1", id: 1 },
      { title: "Stream Guide Volume 2", id: 2 },
      { title: "Stream Guide Volume 3", id: 3 },
      { title: "Stream Guide Volume 4", id: 4 },
    ],
    faqs: [
      {
        question: "How do I choose the right stream?",
        answer:
          "Assess your interests, strengths, and career goals, and research the career opportunities each stream offers.",
      },
      {
        question: "What are the main streams after 10th?",
        answer:
          "The main streams are Science, Commerce, and Arts, each leading to different career paths.",
      },
      {
        question: "Can I change my stream later?",
        answer:
          "Yes, but it may require additional effort. Early guidance helps make the right choice.",
      },
    ],
  },
];

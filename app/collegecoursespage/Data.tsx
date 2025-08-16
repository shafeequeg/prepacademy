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
    slug: "management/xat",
    title: "XAT",
    courseTitle: "Master XAT 2025 with ",
    description: `
The Xavier Aptitude Test (XAT) is a national-level MBA entrance examination conducted annually by XLRI Jamshedpur on behalf of Xavier Association of Management Institutes (XAMI). It is used for admission into management programs at XLRI and over 160 other B-schools across India. 
XAT 2025 will be conducted in Computer-Based Test (CBT) mode on January 5, 2025 (Sunday). 
    `,
    points: [
      "Mentoring & Teaching by Experts ",
      "Regular Testing & Analysis ",
      "GD/PI & Essay Writing Support ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "XAT-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "XAT-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "XAT-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "XAT-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "XAT-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "XAT-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "XAT-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "XAT-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "XAT-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "XAT-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "XAT-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "XAT-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Notification",
        description: "	XLRI has released the official notification for XAT 2025 on the official website xatonline.in. ",
      },
      {
        category: "Registration",
        description: "	Registration for XAT 2025 is now open and will close on November 30, 2024. ",
      },

      {
        category: "XAT 2025 Exam Date: ",
        description: "Scheduled for January 5, 2025 (Sunday). ",
      },

      {
        category: "Admit cards",
        description: "The admit cards will be available for download from December 20, 2024. ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top B-Schools" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "XAT Beginner's Guide Volume 1", id: 1 },
      { title: "XAT Beginner's Guide Volume 2", id: 2 },
      { title: "XAT Beginner's Guide Volume 3", id: 3 },
      { title: "XAT Beginner's Guide Volume 4", id: 4 },
      { title: "XAT Beginner's Guide Volume 5", id: 5 },
      { title: "XAT Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the XAT exam? ",
        answer: "The Xavier Aptitude Test (XAT) is a national-level MBA entrance exam conducted by XLRI Jamshedpur for admission into its management programs and other top B-schools in India. ",
      },
      {
        question: "Is XAT only for XLRI admission? ",
        answer: " No, while XLRI uses XAT scores, over 160 management institutes across India also accept XAT scores for their MBA/PGDM programs. ",
      },
      {
        question: "Where can I find the XAT syllabus? ",
        answer: "The XAT syllabus includes sections on Verbal & Logical Ability, Decision Making, Quantitative Ability & Data Interpretation, and General Knowledge. Essay writing may also be a component depending on the year. ",
      },
      {
        question: "Is the XAT exam tough? ",
        answer: "Yes, XAT is generally considered tougher than other MBA entrance exams like CAT, especially due to the Decision Making and Essay Writing sections. Strategic preparation is crucial. ",
      },

    ],
  },
  {
    slug: "management/cmat",
    title: "CMAT",
    courseTitle: "Ace CMAT 2025 with ",
    description: `
The Common Management Admission Test (CMAT) is a national-level examination administered by the National Testing Agency (NTA) for admissions into MBA and other postgraduate management programs offered by AICTE-approved institutions across India. 
CMAT 2025 will be conducted in Computer-Based Test (CBT) mode, tentatively in April 2025. 
Ace the CMAT with our expert coaching and study materials! 
    `,
    points: [
      "Mentoring & Teaching by experts Regular  ",
      "Testing & Analysis",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "CMAT-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CMAT-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "CMAT-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CMAT-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CMAT-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CMAT-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CMAT-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "CMAT-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock test",
        ],
      },
      {
        id: "CMAT-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "CMAT-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "CMAT-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "CMAT-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for Strategies JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching for Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Admission Test ",
        description: "NTA Declares the Result/NTA Scores of Common Management Admission Test (CMAT) – 2024 ",
      },
      {
        category: "Application Form",
        description: "The National Testing Agency (NTA) has released the CMAT 2025 application form ",
      },
      {
        category: "Registration",
        description: "The registration process for the Common Management Admission Test (CMAT) 2025 is set to close soon, with the deadline for submitting applications expected by March 2025 ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top B-Schools" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "CMAT Beginner's Guide Volume 1", id: 1 },
      { title: "CMAT Beginner's Guide Volume 2", id: 2 },
      { title: "CMAT Beginner's Guide Volume 3", id: 3 },
      { title: "CMAT Beginner's Guide Volume 4", id: 4 },
      { title: "CMAT Beginner's Guide Volume 5", id: 5 },
      { title: "CMAT Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is CMAT exam? ",
        answer: "Common Management Admission Test (CMAT) is an entrance examination conducted for admission to MBA and other postgraduate management programs in AICTE-approved institutions across India. ",
      },
      {
        question: "Is CMAT accepted for MBA admissions across India? ",
        answer: "Yes, CMAT scores are accepted by hundreds of AICTE-approved management institutions throughout India for MBA, PGDM, and similar programs. ",
      },
      {
        question: "Where can I get the CMAT syllabus? ",
        answer: "The CMAT syllabus includes sections on Quantitative Techniques, Logical Reasoning, Language Comprehension, General Awareness, and Innovation & Entrepreneurship. The detailed syllabus is available on cmat.nta.nic.in. ",
      },

      {
        question: "Is the CMAT exam tough? ",
        answer: "CMAT is considered moderately difficult and is generally easier compared to CAT or XAT. With proper preparation, many candidates are able to achieve a good score. ",
      },

    ],
  },
  {
    slug: "management/mat",
    title: "MAT",
    courseTitle: "Excel in MAT 2025 with ",
    description: `
The Management Aptitude Test (MAT) is a national-level examination administered by the All India Management Association (AIMA) for admissions into MBA and allied programs in various business schools across India. 
MAT 2025 will be conducted in Computer-Based Test (CBT), Paper-Based Test (PBT), and Internet-Based Test (IBT) modes in multiple sessions throughout the year. 
    `,
    points: [
      "Mentoring & Teaching by experts Regular ",
      "Testing & Analysis ",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "MAT-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MAT-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "MAT-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MAT-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MAT-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MAT-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MAT-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "MAT-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "MAT-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "MAT-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "MAT-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "MAT-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Aptitude Test ",
        description: "	AIMA Declares the Result/Scores of Management Aptitude Test (MAT) – February 2025 ",
      },
      {
        category: "Application Form",
        description: " The All India Management Association (AIMA) has released the MAT May 2025 session application form ",
      },
      {
        category: "Registration Process",
        description: " The registration process for the MAT 2025 May session is currently ongoing, with the final application deadline varying by test mode (PBT, CBT, IBT) – check mat.aima.in for detailed schedule ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top B-Schools" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "MAT Beginner's Guide Volume 1", id: 1 },
      { title: "MAT Beginner's Guide Volume 2", id: 2 },
      { title: "MAT Beginner's Guide Volume 3", id: 3 },
      { title: "MAT Beginner's Guide Volume 4", id: 4 },
      { title: "MAT Beginner's Guide Volume 5", id: 5 },
      { title: "MAT Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is MAT exam? ",
        answer: "Management Aptitude Test (MAT) is a national-level entrance exam conducted by AIMA for admission to MBA and related programs in over 600 B-Schools across India. ",
      },
      {
        question: "Can I take MAT multiple times a year? ",
        answer: "Yes, MAT is conducted multiple times a year (typically in February, May, September, and December). You can appear for more than one session to improve your score. ",
      },
      {
        question: "Where can I get the MAT syllabus? ",
        answer: "The MAT syllabus generally includes Language Comprehension, Intelligence & Critical Reasoning, Mathematical Skills, Data Analysis & Sufficiency, and Indian & Global Environment. Visit mat.aima.in for official updates. ",
      },

      {
        question: "Is the MAT exam tough? ",
        answer: "MAT is considered to be of moderate difficulty and is suitable for candidates with basic aptitude skills. With the right preparation, it is manageable for most aspirants. ",
      },
    ],
  },
  {
    slug: "management/nmat",
    title: "NMAT",
    courseTitle: "Crack NMAT 2025 with ",
    description: `
The NMAT by GMAC is a national-level entrance examination administered by the Graduate Management Admission Council (GMAC) for admissions into MBA and other graduate management programs offered by NMIMS and other top B-schools in India and globally. 
NMAT 2025 will be conducted in Computer-Based Test (CBT) mode at test centers and through Online Proctored Exam from Home, tentatively between October and December 2025. 
    `,
    points: [
      "Mentoring & Teaching by experts Regular ",
      "Testing & Analysis ",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "NMAT-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMAT-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "NMAT-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMAT-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMAT-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMAT-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMAT-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance test scores",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "NMAT-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "Bookmaterials-1",
        title: "Book Materials Only",
        image: "/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "SelfBased-1",
        title: "Self Based",
        image: "/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Result/Scores",
        description: "GMAC Declares the Result/Scores of NMAT by GMAC – 2024 ",
      },
      {
        category: "Application Form",
        description: "The Graduate Management Admission Council (GMAC) has released the NMAT 2025 application form ",
      },

      {
        category: "Registration Process",
        description: "The registration process for the NMAT 2025 exam is set to begin in August 2025 and will remain open until October 2025 ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top B-Schools" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "NMAT Beginner's Guide Volume 1", id: 1 },
      { title: "NMAT Beginner's Guide Volume 2", id: 2 },
      { title: "NMAT Beginner's Guide Volume 3", id: 3 },
      { title: "NMAT Beginner's Guide Volume 4", id: 4 },
      { title: "NMAT Beginner's Guide Volume 5", id: 5 },
      { title: "NMAT Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is NMAT exam? ",
        answer: "NMAT by GMAC is a national-level MBA entrance test accepted by NMIMS and other top management institutes in India and abroad for admission into MBA and related programs. ",
      },
      {
        question: "Can I retake the NMAT exam? ",
        answer: "Yes, you can take the NMAT up to three times (one main attempt and two retakes) within the testing window, and you can choose your best score to send to schools. ",
      },
      {
        question: "Where can I get the NMAT syllabus? ",
        answer: "The NMAT syllabus typically includes Language Skills, Quantitative Skills, and Logical Reasoning. The detailed content is available on the official website mba.com/nmat. ",
      },

      {
        question: "Is the NMAT exam tough? ",
        answer: ". NMAT is considered to be moderately difficult with a candidate-friendly format (no negative marking, flexible scheduling). Consistent practice and mock tests are key to a good score. ",
      },
    ],
  },
  {
    slug: "management/cuetpg",
    title: "cuetpg",
    courseTitle: "Succeed in CUET PG 2025 with Expert Prep",
    description: `
The Common University Entrance Test (CUET) is a national-level examination administered by the National Testing Agency (NTA) for admissions into undergraduate (UG) programs across various central and participating universities in India. 
CUET (UG) 2025 will be conducted in Computer-Based Test (CBT) mode from May 8 to June 1, 2025. 
    `,
    points: [
      "Mentoring & Teaching by experts ",
      " Regular Testing & Analysis ",
      " Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "CUETPG-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CUETPG-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "CUETPG-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CUETPG-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CUETPG-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CUETPG-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CUETPG-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "CUETPG-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "CUETPG-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "CUETPG-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "CUETPG-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "CUETPG-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Result/NTA Scores ",
        description: "NTA Declares the Result/NTA Scores of Common University Entrance Test (PG) – 2024 ",
      },
      {
        category: "Application form",
        description: "The National Testing Agency (NTA) has released the CUET PG 2025 application form ",
      },

      {
        category: "Registration Process",
        description: "The registration process for the Common University Entrance Test-Postgraduate (CUET PG) 2025 is set to close soon, with the deadline for submitting applications expected in January 2025 ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top Universities" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "CUET PG Beginner's Guide Volume 1", id: 1 },
      { title: "CUET PG Beginner's Guide Volume 2", id: 2 },
      { title: "CUET PG Beginner's Guide Volume 3", id: 3 },
      { title: "CUET PG Beginner's Guide Volume 4", id: 4 },
      { title: "CUET PG Beginner's Guide Volume 5", id: 5 },
      { title: "CUET PG Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is CUET PG exam? ",
        answer: "Common University Entrance Test (CUET) PG is an entrance examination conducted by NTA for admission to postgraduate programs in central, state, deemed, and private universities across India. ",
      },
      {
        question: "Is CUET PG mandatory for all PG admissions in central universities? ",
        answer: "Yes, most central universities require CUET PG scores for admission into their postgraduate programs. However, candidates are advised to check university-specific requirements. ",
      },
      {
        question: "Where can I get the CUET PG syllabus? ",
        answer: "The CUET PG syllabus is available on the official website cuet.nta.nic.in. It varies by subject, so candidates must refer to their applied course for accurate details. ",
      },

      {
        question: "Is the CUET PG exam difficult? ",
        answer: "CUET PG is moderately challenging. The difficulty level can vary depending on the subject and the candidate's preparation. Understanding the exam pattern and practicing past papers can be very helpful. ",
      },
    ],
  },
  {
    slug: "management/micat",
    title: "MICAT",
    courseTitle: "Master MICAT 2025 for MICA Admission",
    description: `
The Mudra Institute of Communications Admission Test (MICAT) is a national-level entrance exam conducted by MICA, Ahmedabad, for admission to its flagship 2-year Post Graduate Diploma in Management – Communications (PGDM-C) and Post Graduate Diploma in Management (PGDM) programs, held twice a year—MICAT I and MICAT II—and includes both objective and subjective questions that assess analytical ability, verbal ability, logical reasoning, divergent thinking, written communication skills, and general awareness; MICAT 2025 will be conducted in Computer-Based Test (CBT) mode in two phases: MICAT I on December 7, 2024, and MICAT II on January 25, 2025.    `,
    points: [
      "	Mentoring & Teaching by experts ",
      "Regular Testing & Analysis ",
      "Support for GD-PI preparation ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "MICAT-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MICAT-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "MICAT-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MICAT-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MICAT-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MICAT-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MICAT-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "MICAT-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "MICAT-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "MICAT-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "MICAT-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "MICAT-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "MICA has announced the exam dates for MICAT 2025: ",
        description: "MICAT I will be held on December 7, 2024, and MICAT II on January 25, 2025. ",
      },
      {
        category: "MICAT I Registration",
        description: "	Registration for MICAT I 2025 is open from August 23 to November 20, 2024. ",
      },

      {
        category: "MICAT II Registration",
        description: "	MICAT II registration will begin on November 23, 2024, and close on January 15, 2025.  ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "MICA Programs" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "MICAT Beginner's Guide Volume 1", id: 1 },
      { title: "MICAT Beginner's Guide Volume 2", id: 2 },
      { title: "MICAT Beginner's Guide Volume 3", id: 3 },
      { title: "MICAT Beginner's Guide Volume 4", id: 4 },
      { title: "MICAT Beginner's Guide Volume 5", id: 5 },
      { title: "MICAT Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the MICAT exam? ",
        answer: "MICAT is an entrance test conducted by MICA, Ahmedabad, for its PGDM-C and PGDM programs. It evaluates candidates across multiple dimensions like creative writing, general awareness, verbal and analytical abilities. ",
      },
      {
        question: "How many times is MICAT conducted? ",
        answer: "MICAT is conducted twice a year – MICAT I and MICAT II. Candidates can appear for both, and the better of the two scores is considered. ",
      },
      {
        question: "Is it mandatory to take both MICAT I and II? ",
        answer: "No, it is not mandatory. You can appear for either MICAT I or MICAT II or both. The higher of the two scores will be used for further selection. ",
      },

      {
        question: "Is there a separate application for MICAT? ",
        answer: "Yes, candidates must apply separately for MICAT through the official MICA website (mica.ac.in). ",
      },

      {
        question: "Is MICAT a difficult exam?  ",
        answer: "MICAT is considered moderately difficult. It includes a mix of aptitude and psychometric assessments, which can be challenging but manageable with proper preparation. ",
      },
    ],
  },
  {
    slug: "management/mhcet",
    title: "MHCET",
    courseTitle: "Crack MH-CET 2025 for Top MBA Colleges",
    description: `
The Maharashtra Common Entrance Test (MHCET or MHT CET) is a state-level entrance exam conducted by the State Common Entrance Test Cell, Maharashtra, for admission into undergraduate courses in Engineering, Pharmacy, and Agriculture offered by colleges across Maharashtra. 
MHCET 2025 will be conducted in Computer-Based Test (CBT) mode between April and May 2025 across multiple sessions. 
    `,
    points: [
      "Mentoring & Teaching by experts ",
      "Regular Testing & Analysis ",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "MHCET-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MHCET-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "MHCET-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MHCET-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MHCET-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MHCET-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "MHCET-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "MHCET-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "MHCET-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "MHCET-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "MHCET-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "MHCET-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "	State CET Cell has released the tentative schedule for MHT CET 2025. ",
        description: "MHT CET 2025 for PCM group is likely to be held from April 16 to April 30, 2025, and for PCB group from May 2 to May 17, 2025. ",
      },
      {
        category: "Online application",
        description: "Online application for MHT CET 2025 is expected to begin in January 2025 on the official website cetcell.mahacet.org. ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top B-Schools" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "MH-CET Beginner's Guide Volume 1", id: 1 },
      { title: "MH-CET Beginner's Guide Volume 2", id: 2 },
      { title: "MH-CET Beginner's Guide Volume 3", id: 3 },
      { title: "MH-CET Beginner's Guide Volume 4", id: 4 },
      { title: "MH-CET Beginner's Guide Volume 5", id: 5 },
      { title: "MH-CET Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is MHCET exam? ",
        answer: "MHCET (MHT CET) is a state-level entrance test conducted for admissions to undergraduate courses in Engineering, Pharmacy, and Agriculture offered by institutions in Maharashtra. ",
      },
      {
        question: "Is MHT CET compulsory for engineering admission in Maharashtra? ",
        answer: "Yes, MHT CET is mandatory for admission into B.E./B.Tech programs in government, government-aided, and private engineering colleges in Maharashtra. ",
      },
      {
        question: "How can I apply for MHCET? ",
        answer: "You can apply online through the official CET Cell website at cetcell.mahacet.org once the application window opens. ",
      },

      {
        question: "Is MHT CET tough? ",
        answer: "MHT CET is considered moderately difficult. With regular practice and good understanding of the Class 11 and 12 syllabus, it is manageable. ",
      },

      {
        question: "What is the syllabus for MHT CET? ",
        answer: ". The syllabus is primarily based on the Maharashtra State Board curriculum for Physics, Chemistry, Mathematics/Biology of Class 11 and 12. ",
      },
    ],
  },
  {
    slug: "civilservice/upsc",
    title: "UPSE",
    courseTitle: "Conquer UPSC 2025 with ",
    description: `
The Union Public Service Commission (UPSC) conducts the Civil Services Examination (CSE), a national-level competitive exam, for recruitment into prestigious services like IAS, IPS, IFS, and other Central Government Group A & B services. 
UPSC CSE is conducted in three stages: Preliminary, Mains, and Personality Test (Interview). 
UPSC Civil Services (Prelims) 2025 is scheduled to be conducted on May 25, 2025. 
    `,
    points: [
      "Mentoring & Teaching by experts ",
      "Regular Testing & Analysis ",
      "Support for Optional Subjects & Essay Writing ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "UPSC-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "UPSC-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "UPSC-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "UPSC-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "UPSC-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "UPSC-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "UPSC-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "UPSC-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "UPSC-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "UPSC-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "UPSC-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "UPSC-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "	Prelims notification  ",
        description: "UPSC 2025 Prelims notification will be released in February 2025.",
      },
      {
        category: "Civil Services Examination (Prelims)",
        description: "	The notification for Civil Services Examination (Prelims) 2025 will be released on February 12, 2025. ",
      },

      {
        category: "Last Date of Civil Services Examination (Prelims)",
        description: "The last date to apply for the UPSC Prelims 2025 is March 4, 2025. ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top Resources" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "UPSC Beginner's Guide Volume 1", id: 1 },
      { title: "UPSC Beginner's Guide Volume 2", id: 2 },
      { title: "UPSC Beginner's Guide Volume 3", id: 3 },
      { title: "UPSC Beginner's Guide Volume 4", id: 4 },
      { title: "UPSC Beginner's Guide Volume 5", id: 5 },
      { title: "UPSC Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is UPSC exam? ",
        answer: "The UPSC Civil Services Exam is conducted for recruitment to various civil services like IAS, IPS, IFS, IRS, and others. It is one of the most prestigious competitive exams in India. ",
      },
      {
        question: "How many stages are there in the UPSC exam?  ",
        answer: "The UPSC exam has three stages: Preliminary Examination (objective type), Mains Examination (descriptive type), and Personality Test (Interview).",
      },
      {
        question: "Is UPSC exam very difficult? ",
        answer: "Yes, UPSC is considered one of the toughest exams in India due to its vast syllabus, intense competition, and multi-stage format. However, consistent preparation and the right strategy can lead to success. ",
      },

      {
        question: "Who can apply for the UPSC exam? ",
        answer: "Any Indian citizen who holds a graduate degree from a recognized university and meets the age and eligibility criteria can apply for the UPSC CSE. ",
      },

      {
        question: "How many attempts are allowed for UPSC? ",
        answer: "General category candidates are allowed 6 attempts up to 32 years of age. OBC candidates have 9 attempts up to 35 years, and SC/ST candidates have unlimited attempts up to 37 years, subject to other conditions. ",
      },
    ],
  },
  {
    slug: "government/railway",
    title: "Railway",
    courseTitle: "Ace Railway Exams 2025 with Confidence",
    description: `
The Railway Recruitment Board (RRB) exams are national-level competitive examinations conducted to recruit candidates for various technical and non-technical posts in Indian Railways. 
RRB exams 2025 will be conducted in Computer-Based Test (CBT) mode, with notifications released post-wise throughout the year. 
    `,
    points: [
      "Mentoring & Teaching by experts Regular ",
      "Testing & Analysis ",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "Railway-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "Railway-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced exam strategies",
          "Mock test series with AI analysis",
          "Best for repeaters",
        ],
      },
      {
        id: "Railway-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "Railway-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "Railway-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "Railway-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "Railway-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "Railway-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "Railway-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "Railway-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "Railway-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "Railway-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "RRB released the notification for ALP",
        description: "	RRB released the notification for ALP (Assistant Loco Pilot) 2025 recruitment. ",
      },
      {
        category: "Online Application",
        description: "The online application window for RRB ALP 2025 is now open from January 20, 2025. ",
      },

      {
        category: "Deadline",
        description: "The deadline for submitting applications is February 19, 2025 (11:59 PM). ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top Resources" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "Railway Beginner's Guide Volume 1", id: 1 },
      { title: "Railway Beginner's Guide Volume 2", id: 2 },
      { title: "Railway Beginner's Guide Volume 3", id: 3 },
      { title: "Railway Beginner's Guide Volume 4", id: 4 },
      { title: "Railway Beginner's Guide Volume 5", id: 5 },
      { title: "Railway Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the RRB exam? ",
        answer: "RRB exams are conducted by the Railway Recruitment Board to fill various posts in Indian Railways, such as ALP, Technician, NTPC, Group D, etc. ",
      },
      {
        question: "Is there any negative marking in RRB exams? ",
        answer: "Yes, for most RRB exams, 1/3 mark is deducted for each incorrect answer in the CBT stage. ",
      },
      {
        question: "How can I apply for the RRB exam? ",
        answer: "Candidates can apply through the official RRB website of their respective region when the notification is released. ",
      },

      {
        question: "What is the difficulty level of the RRB exam? ",
        answer: "The difficulty level is usually moderate; however, competition is high due to the large number of applicants. ",
      },
    ],
  },

  {
    slug: "government/ssc",
    title: "SSC",
    courseTitle: "Master SSC Exams 2025 with",
    description: `
The Staff Selection Commission (SSC) conducts various national-level exams to recruit candidates for government jobs in ministries, departments, and organizations of the Government of India. 
SSC exams 2025 will be conducted in Computer-Based Test (CBT) mode, with schedules and notifications released for different posts throughout the year. 
    `,
    points: [
      "Mentoring & Teaching by experts Regular ",
      "Testing & Analysis ",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "SSC-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SSC-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced SSC exam strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "SSC-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SSC-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SSC-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SSC-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SSC-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "SSC-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "SSC-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "SSC-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "SSC-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "SSC-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Combined Graduate Level (CGL) Examination 2025",
        description:
          "SSC released the notification for the Combined Graduate Level (CGL) Examination 2025. ",
      },
      {
        category: "Application Process",
        description:
          "The SSC CGL 2025 application process started on March 26, 2025. ",
      },
      {
        category: "Deadline",
        description:
          "	The last date to apply online for SSC CGL 2025 is April 24, 2025 (11:00 PM). ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-jobs", label: "Top Jobs" },
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
        question: "What is the SSC exam? ",
        answer:
          "The SSC exam is conducted by the Staff Selection Commission to recruit staff for various posts in the Government of India’s departments and ministries through exams like SSC CGL, CHSL, MTS, JE, etc. ",
      },
      {
        question: "Is SSC CGL a tough exam? ",
        answer:
          "The SSC CGL exam is considered moderately difficult. With consistent preparation, candidates can crack it even on the first attempt. ",
      },
      {
        question: "How many stages are there in the SSC CGL exam? ",
        answer:
          "The SSC CGL exam has two stages: Tier I (Prelims) and Tier II (Mains), both conducted in online mode. ",
      },
      {
        question: "Where can I find the SSC syllabus and notifications? ",
        answer:
          "All official updates, notifications, and syllabi are available on the SSC official website:ssc.nic.in. ",
      },
    ],
  },
  {
    slug: "defence/cds",
    title: "CDS",
    courseTitle: "Excel in CDS Exam 2025 with",
    description: `
The Combined Defence Services (CDS) Examination is conducted by the Union Public Service Commission (UPSC) for recruitment into the Indian Military Academy, Indian Naval Academy, Air Force Academy, and Officers’ Training Academy. 
CDS 2025 will be conducted in offline (pen and paper) mode. The exam is held twice a year – CDS I and CDS II. 
    `,
    points: [
      "Mentoring & Teaching by experts Regular ",
      "Testing & Analysis",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "CDS-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CDS-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced CDS exam strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "CDS-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CDS-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CDS-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CDS-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CDS-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "CDS-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "CDS-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "CDS-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "CDS-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "CDS-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "UPSC released the notification",
        description:
          "	UPSC released the notification for CDS II 2025 on May 15, 2025. ",
      },
      {
        category: "Application Process",
        description:
          "	The application process for CDS II 2025 began on May 15, 2025. ",
      },
      {
        category: "Deadline",
        description:
          "	The last date to apply for CDS II 2025 is June 4, 2025 (6:00 PM). ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-academies", label: "Top Academies" },
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
        question: "What is the CDS exam? ",
        answer:
          "The Combined Defence Services (CDS) exam is a national-level entrance exam conducted by UPSC for candidates who wish to join the Indian Armed Forces",
      },
      {
        question: "How many times is the CDS exam conducted in a year? ",
        answer:
          "The CDS exam is conducted twice a year: CDS I (February) and CDS II (September). ",
      },
      {
        question: "Who is eligible to apply for the CDS exam? ",
        answer:
          "Unmarried male and female graduates can apply. Specific academies have age and qualification requirements. Candidates must check the official UPSC notification for detailed eligibility. ",
      },
      {
        question: "Is there negative marking in the CDS exam? ",
        answer:
          "Yes, 1/3rd of the marks are deducted for every incorrect answer in the objective-type papers. ",
      },
    ],
  },
  {
    slug: "defence/afcat",
    title: "AFCAT",
    courseTitle: "Succeed in AFCAT 2025 with",
    description: `
The Air Force Common Admission Test (AFCAT) is a national-level competitive exam conducted by the Indian Air Force for recruitment into Flying Branch, Ground Duty (Technical), and Ground Duty (Non-Technical) branches. 
AFCAT 2025 will be conducted in Computer-Based Test (CBT) mode, held twice a year — AFCAT I and AFCAT II. 
    `,
    points: [
      "Mentoring & Teaching by experts Regular ",
      "Testing & Analysis ",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "AFCAT-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "AFCAT-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced AFCAT exam strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "AFCAT-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "AFCAT-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "AFCAT-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "AFCAT-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "AFCAT-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "AFCAT-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "AFCAT-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "AFCAT-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "AFCAT-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "AFCAT-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Indian Air Force has released the notification",
        description:
          "	Indian Air Force has released the notification for AFCAT II 2025. ",
      },
      {
        category: "Application Form",
        description:
          "	The online application process for AFCAT II 2025 starts from June 1, 2025. ",
      },
      {
        category: "Deadline",
        description:
          "The last date to apply for AFCAT II 2025 is June 30, 2025 (5:00 PM). ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-branches", label: "Top Branches" },
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
        question: "What is the AFCAT exam? ",
        answer:
          "AFCAT (Air Force Common Admission Test) is conducted by the Indian Air Force to recruit candidates for Flying Branch and Ground Duty (Technical and Non-Technical) positions. ",
      },
      {
        question: "How many times is the AFCAT exam conducted in a year? ",
        answer:
          "The AFCAT exam is conducted twice a year — in February (AFCAT I) and August (AFCAT II). ",
      },
      {
        question: "Is there negative marking in AFCAT? ",
        answer:
          "Yes, 1 mark is deducted for every incorrect answer in the objective-type questions. ",
      },
      {
        question: "Who is eligible for the AFCAT exam? ",
        answer:
          "Both male and female graduates (with specified qualifications and age limits) can apply. Detailed eligibility is provided in the official notification on afcat.cdac.in. ",
      },
    ],
  },
  {
    slug: "designandarchictecture/nidpg",
    title: "NID PG",
    courseTitle: "Ace NID PG Entrance 2025 with",
    description: `
The National Institute of Design (NID) conducts the Design Aptitude Test (DAT) for admission to its postgraduate (M.Des) programs offered across various campuses in India. 
NID DAT (M.Des) 2025 will be conducted in a two-stage process: Prelims (pen-and-paper mode) and Mains (Studio Test & Interview). 
    `,
    points: [
      "Mentoring & Teaching by experts Regular ",
      "Testing & Analysis ",
      "Support for School/Board Exams ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "NIDPG-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIDPG-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced design aptitude strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "NIDPG-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIDPG-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIDPG-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIDPG-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIDPG-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "NIDPG-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "NIDPG-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "NIDPG-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "NIDPG-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "NIDPG-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Admission Cycle",
        description:
          "NID has announced the dates for the NID DAT M.Des 2025 admission cycle. ",
      },
      {
        category: "Application Form",
        description:
          "	The application form for NID PG 2025 will be available from September 15, 2024. ",
      },
      {
        category: "Deadline",
        description:
          "	The last date to apply online for NID PG 2025 is November 30, 2024 (without late fee). ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-programs", label: "Top Programs" },
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
        question: "What is the NID PG exam? ",
        answer:
          "The NID PG exam refers to the Design Aptitude Test (DAT) conducted for admission to the Master of Design (M.Des) programs at National Institutes of Design. ",
      },
      {
        question: "What are the stages of the NID PG exam? ",
        answer:
          "The exam consists of two stages: DAT Prelims (written test) and DAT Mains (Studio Test + Interview). ",
      },
      {
        question: "Is there a specific syllabus for NID DAT PG? ",
        answer:
          "No fixed syllabus is provided. The test evaluates design aptitude, creativity, analytical skills, visual perception, and knowledge of design principles. ",
      },
      {
        question: "Can graduates from any stream apply for NID M.Des? ",
        answer:
          "Yes, candidates from any discipline with a bachelor’s degree (10+2+3 or 4) are eligible to apply, depending on the specific specialization. ",
      },
    ],
  },
  {
    slug: "designandarchictecture/niftpg",
    title: "NIFT PG",
    courseTitle: "Excel in NIFT PG Entrance 2025 with",
    description: `
The National Institute of Fashion Technology Postgraduate (NIFT PG) entrance exam is a national-level test conducted for admission into PG programs like M.Des, M.F.M, and M.F.Tech across various NIFT campuses in India. 
NIFT PG 2025 will be conducted in a Computer-Based Test (CBT) mode in early 2025, as per the official schedule announced by NIFT. 
    `,
    points: [
      "Mentoring & Teaching by experts ",
      "Regular Testing & Analysis ",
      "Support for Graduation/Design Backgrounds ",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "NIFTPG-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIFTPG-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced NIFT exam strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "NIFTPG-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIFTPG-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIFTPG-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIFTPG-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NIFTPG-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "NIFTPG-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "NIFTPG-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "NIFTPG-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "NIFTPG-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "NIFTPG-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
      },
    ],
    demoVideos: [
      { title: "Preparing for the JEE 2025", videoId: "5qws0gIHpuY" },
      { title: "Strategies for JEE 2025", videoId: "wfIq-nqvByY" },
      { title: "Best Coaching Centers", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Entrance Exam ",
        description:
          "	NIFT has released the official schedule for the NIFT PG Entrance Exam 2025 on its website. ",
      },
      {
        category: "Application Form",
        description:
          "The application form for NIFT PG 2025 is expected to be available from October 2024. ",
      },
      {
        category: "Deadline",
        description:
          "The last date to apply for NIFT PG 2025 is tentatively December 2024, and the written entrance exam (GAT & CAT) will likely be held in February 2025. ",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-programs", label: "Top Programs" },
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
        question: "What is NIFT PG exam? ",
        answer:
          "The NIFT PG entrance exam is conducted for admission into postgraduate courses such as Master of Design (M.Des), Master of Fashion Management (M.F.M), and Master of Fashion Technology (M.F.Tech) at various NIFT campuses",
      },
      {
        question: "Is there any age limit for NIFT PG courses? ",
        answer:
          "No, there is no age limit for applying to postgraduate programs at NIFT. ",
      },
      {
        question: "What is the selection process for NIFT PG 2025? ",
        answer:
          "The selection process involves a written test (GAT/CAT) followed by a Group Discussion (GD) and Personal Interview (PI) for shortlisted candidates. ",
      },
      {
        question: "Is work experience required for NIFT PG courses? ",
        answer:
          "Work experience is not mandatory for M.Des and M.F.Tech, but may be considered an added advantage for M.F.M candidates. ",
      },

      {
        question: "Where can I apply for NIFT PG 2025? ",
        answer:
          "You can apply online through the official website of NIFT: www.nift.ac.in ",
      },
    ],
  },
  {
    slug: "bank/sbi",
    title: "SBI",
    courseTitle: "Crack SBI Exams 2025 with",
    description: `
The State Bank of India (SBI) conducts exams like SBI PO, SBI Clerk, and SBI SO to recruit candidates for various banking positions. These exams test reasoning, quantitative aptitude, English, and general awareness, requiring a focused preparation strategy.
    `,
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "SBI-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBI-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced SBI exam strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "SBI-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBI-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBI-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBI-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBI-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "SBI-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "SBI-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "SBI-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "SBI-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "SBI-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
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
          "SBI has declared the results for SBI PO 2025 Prelims.",
      },
      {
        category: "Application Form",
        description:
          "The State Bank of India has released the SBI PO 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for SBI exams 2025 is set to close soon, with the deadline expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-jobs", label: "Top Jobs" },
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
        question: "What is the SBI exam?",
        answer:
          "The State Bank of India conducts exams like SBI PO, SBI Clerk, and SBI SO for recruitment to various banking positions, testing reasoning, quantitative aptitude, English, and general awareness.",
      },
      {
        question: "Is SBI exam open to non-Indian students?",
        answer:
          "SBI exams are primarily for Indian citizens. Check the official SBI website for eligibility details.",
      },
      {
        question: "Where can I get the SBI syllabus?",
        answer:
          "The SBI syllabus includes reasoning, quantitative aptitude, English, and general awareness. Visit the official SBI website (sbi.co.in) for details.",
      },
      {
        question: "Is the SBI exam tough?",
        answer:
          "SBI exams are competitive due to a large number of applicants and a comprehensive syllabus. Consistent preparation is key to success.",
      },
    ],
  },
  {
    slug: "bank/ibpspo",
    title: "IBPS PO",
    courseTitle: "Crack IBPS PO 2025 with",
    description: `
The Institute of Banking Personnel Selection (IBPS) Probationary Officer (PO) exam is conducted to recruit candidates for managerial posts in public sector banks. It tests reasoning, quantitative aptitude, English, and general awareness, followed by an interview process.
    `,
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "IBPSPO-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSPO-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced IBPS PO strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "IBPSPO-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSPO-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSPO-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSPO-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSPO-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "IBPSPO-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "IBPSPO-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "IBPSPO-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "IBPSPO-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "IBPSPO-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
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
          "IBPS has declared the results for IBPS PO 2025 Prelims.",
      },
      {
        category: "Application Form",
        description:
          "The Institute of Banking Personnel Selection has released the IBPS PO 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for IBPS PO 2025 is set to close soon, with the deadline expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-jobs", label: "Top Jobs" },
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
        question: "What is the IBPS PO exam?",
        answer:
          "The IBPS Probationary Officer (PO) exam is conducted for recruitment to managerial posts in public sector banks, testing reasoning, quantitative aptitude, English, and general awareness.",
      },
      {
        question: "Is IBPS PO open to non-Indian students?",
        answer:
          "IBPS PO exams are primarily for Indian citizens. Check the official IBPS website for eligibility details.",
      },
      {
        question: "Where can I get the IBPS PO syllabus?",
        answer:
          "The IBPS PO syllabus includes reasoning, quantitative aptitude, English, and general awareness. Visit the official IBPS website (ibps.in) for details.",
      },
      {
        question: "Is the IBPS PO exam tough?",
        answer:
          "IBPS PO is competitive due to a large number of applicants and a comprehensive syllabus. Consistent preparation is key to success.",
      },
    ],
  },
  {
    slug: "bank/rbigradeb",
    title: "RBI Grade B",
    courseTitle: "Crack RBI Grade B 2025 with",
    description: `
The Reserve Bank of India (RBI) Grade B exam is conducted to recruit officers for various roles in the RBI. It tests economic and social issues, finance, management, reasoning, quantitative aptitude, and English, followed by an interview process.
    `,
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "RBIGradeB-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "RBIGradeB-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced RBI Grade B strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "RBIGradeB-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "RBIGradeB-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "RBIGradeB-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "RBIGradeB-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "RBIGradeB-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "RBIGradeB-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "RBIGradeB-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "RBIGradeB-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "RBIGradeB-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "RBIGradeB-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
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
          "RBI has declared the results for RBI Grade B 2025 Phase I.",
      },
      {
        category: "Application Form",
        description:
          "The Reserve Bank of India has released the RBI Grade B 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for RBI Grade B 2025 is set to close soon, with the deadline expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-jobs", label: "Top Jobs" },
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
        question: "What is the RBI Grade B exam?",
        answer:
          "The RBI Grade B exam is conducted for recruitment to officer positions in the Reserve Bank of India, testing economic and social issues, finance, management, reasoning, quantitative aptitude, and English.",
      },
      {
        question: "Is RBI Grade B open to non-Indian students?",
        answer:
          "RBI Grade B exams are primarily for Indian citizens. Check the official RBI website for eligibility details.",
      },
      {
        question: "Where can I get the RBI Grade B syllabus?",
        answer:
          "The RBI Grade B syllabus includes economic and social issues, finance, management, reasoning, quantitative aptitude, and English. Visit the official RBI website (rbi.org.in) for details.",
      },
      {
        question: "Is the RBI Grade B exam tough?",
        answer:
          "RBI Grade B is highly competitive due to its specialized syllabus and limited vacancies. Consistent preparation is essential for success.",
      },
    ],
  },
  {
    slug: "bank/ibpsrrb",
    title: "IBPS RRB",
    courseTitle: "Crack IBPS RRB 2025 with",
    description: `
The Institute of Banking Personnel Selection (IBPS) Regional Rural Banks (RRB) exam is conducted to recruit candidates for various posts in regional rural banks, such as Officer Scale I, II, III, and Office Assistant. It tests reasoning, quantitative aptitude, English, and general awareness.
    `,
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "IBPSRRB-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSRRB-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced IBPS RRB strategies",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "IBPSRRB-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSRRB-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSRRB-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSRRB-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSRRB-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "IBPSRRB-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "IBPSRRB-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "IBPSRRB-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "IBPSRRB-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "IBPSRRB-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
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
          "IBPS has declared the results for IBPS RRB 2025 Prelims.",
      },
      {
        category: "Application Form",
        description:
          "The Institute of Banking Personnel Selection has released the IBPS RRB 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for IBPS RRB 2025 is set to close soon, with the deadline expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-jobs", label: "Top Jobs" },
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
        question: "What is the IBPS RRB exam?",
        answer:
          "The IBPS Regional Rural Banks (RRB) exam is conducted for recruitment to posts like Officer Scale I, II, III, and Office Assistant in regional rural banks, testing reasoning, quantitative aptitude, English, and general awareness.",
      },
      {
        question: "Is IBPS RRB open to non-Indian students?",
        answer:
          "IBPS RRB exams are primarily for Indian citizens. Check the official IBPS website for eligibility details.",
      },
      {
        question: "Where can I get the IBPS RRB syllabus?",
        answer:
          "The IBPS RRB syllabus includes reasoning, quantitative aptitude, English, and general awareness. Visit the official IBPS website (ibps.in) for details.",
      },
      {
        question: "Is the IBPS RRB exam tough?",
        answer:
          "IBPS RRB is competitive due to a large number of applicants and a comprehensive syllabus. Consistent preparation is key to success.",
      },
    ],
  },
  {
    slug: "bank/sbiclerk",
    title: "SBI Clerk",
    courseTitle: "Crack SBI Clerk 2025 with ",
    description:
      "SBI Clerk preparation involves mastering the syllabus for the State Bank of India Clerk exam, which includes Reasoning, Quantitative Aptitude, English Language, General Awareness, and Computer Knowledge. This course is designed to help candidates excel in both Prelims and Mains exams through structured learning, practice, and expert guidance. A strong preparation strategy will enhance your chances of securing a clerical position in one of India's leading banks.",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "SBIClerk-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBIClerk-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced banking exam concepts",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "SBIClerk-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBIClerk-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBIClerk-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBIClerk-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SBIClerk-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "SBIClerk-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "SBIClerk-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "SBIClerk-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "SBIClerk-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "SBIClerk-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
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
          "SBI has declared the Result/Scores of Clerk Exam 2025.",
      },
      {
        category: "Application Form",
        description:
          "The State Bank of India has released the SBI Clerk 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for the SBI Clerk 2025 exam is set to close soon, with the deadline for submitting applications expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "exam-pattern", label: "Exam Pattern" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "SBI Clerk Beginner's Guide Volume 1", id: 1 },
      { title: "SBI Clerk Beginner's Guide Volume 2", id: 2 },
      { title: "SBI Clerk Beginner's Guide Volume 3", id: 3 },
      { title: "SBI Clerk Beginner's Guide Volume 4", id: 4 },
      { title: "SBI Clerk Beginner's Guide Volume 5", id: 5 },
      { title: "SBI Clerk Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the SBI Clerk exam?",
        answer:
          "The SBI Clerk exam is conducted by the State Bank of India for recruitment of Junior Associates (Clerical Cadre) in its branches across India. It consists of Prelims and Mains exams.",
      },
      {
        question: "Is the SBI Clerk exam open to non-Indian students?",
        answer:
          "No, the SBI Clerk exam is typically open only to Indian citizens who meet the eligibility criteria set by the State Bank of India.",
      },
      {
        question: "Where can I get the SBI Clerk syllabus?",
        answer:
          "The SBI Clerk syllabus includes Reasoning, Quantitative Aptitude, English Language, General Awareness, and Computer Knowledge. Visit the official website www.sbi.co.in for details.",
      },
      {
        question: "Is the SBI Clerk exam tough?",
        answer:
          "The SBI Clerk exam is moderately challenging due to its competitive nature and vast syllabus. Consistent preparation and practice can lead to success.",
      },
    ],
  },
  {
    slug: "bank/ibpsclerk",
    title: "IBPS Clerk",
    courseTitle: "Crack IBPS Clerk 2025 with ",
    description:
      "IBPS Clerk preparation equips candidates for the Institute of Banking Personnel Selection Clerk exam, covering Reasoning, Quantitative Aptitude, English Language, General Awareness, and Computer Knowledge. This course offers comprehensive training for Prelims and Mains, helping aspirants secure clerical roles in public sector banks in India.",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "IBPSClerk-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSClerk-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced banking exam concepts",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "IBPSClerk-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSClerk-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSClerk-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSClerk-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "IBPSClerk-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "IBPSClerk-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "IBPSClerk-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "IBPSClerk-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "IBPSClerk-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "IBPSClerk-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
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
          "IBPS has declared the Result/Scores of Clerk Exam 2025.",
      },
      {
        category: "Application Form",
        description:
          "The Institute of Banking Personnel Selection has released the IBPS Clerk 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for the IBPS Clerk 2025 exam is set to close soon, with the deadline for submitting applications expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "exam-pattern", label: "Exam Pattern" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "IBPS Clerk Beginner's Guide Volume 1", id: 1 },
      { title: "IBPS Clerk Beginner's Guide Volume 2", id: 2 },
      { title: "IBPS Clerk Beginner's Guide Volume 3", id: 3 },
      { title: "IBPS Clerk Beginner's Guide Volume 4", id: 4 },
      { title: "IBPS Clerk Beginner's Guide Volume 5", id: 5 },
      { title: "IBPS Clerk Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the IBPS Clerk exam?",
        answer:
          "The IBPS Clerk exam is conducted by the Institute of Banking Personnel Selection for recruitment of clerical staff in public sector banks in India. It includes Prelims and Mains exams.",
      },
      {
        question: "Is the IBPS Clerk exam open to non-Indian students?",
        answer:
          "No, the IBPS Clerk exam is generally open only to Indian citizens who meet the eligibility criteria set by IBPS.",
      },
      {
        question: "Where can I get the IBPS Clerk syllabus?",
        answer:
          "The IBPS Clerk syllabus includes Reasoning, Quantitative Aptitude, English Language, General Awareness, and Computer Knowledge. Visit www.ibps.in for details.",
      },
      {
        question: "Is the IBPS Clerk exam tough?",
        answer:
          "The IBPS Clerk exam is moderately challenging due to its competitive nature and broad syllabus. Regular practice and preparation can lead to success.",
      },
    ],
  },
  {
    slug: "bank/nabard",
    title: "NABARD",
    courseTitle: "Crack NABARD Grade A 2025 with ",
    description:
      "NABARD Grade A preparation focuses on the National Bank for Agriculture and Rural Development's exam for Assistant Manager roles. The course covers Reasoning, Quantitative Aptitude, English, General Awareness, Computer Knowledge, and specialized subjects like Agriculture and Rural Development. It equips candidates for Prelims, Mains, and Interview stages to secure a prestigious banking role.",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "NABARD-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NABARD-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced banking exam concepts",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "NABARD-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NABARD-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NABARD-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NABARD-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NABARD-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "NABARD-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "NABARD-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "NABARD-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "NABARD-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "NABARD-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
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
          "NABARD has declared the Result/Scores of Grade A Exam 2025.",
      },
      {
        category: "Application Form",
        description:
          "The National Bank for Agriculture and Rural Development has released the NABARD Grade A 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for the NABARD Grade A 2025 exam is set to close soon, with the deadline for submitting applications expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "exam-pattern", label: "Exam Pattern" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "NABARD Grade A Beginner's Guide Volume 1", id: 1 },
      { title: "NABARD Grade A Beginner's Guide Volume 2", id: 2 },
      { title: "NABARD Grade A Beginner's Guide Volume 3", id: 3 },
      { title: "NABARD Grade A Beginner's Guide Volume 4", id: 4 },
      { title: "NABARD Grade A Beginner's Guide Volume 5", id: 5 },
      { title: "NABARD Grade A Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the NABARD Grade A exam?",
        answer:
          "The NABARD Grade A exam is conducted by the National Bank for Agriculture and Rural Development for recruitment of Assistant Managers. It includes Prelims, Mains, and Interview stages.",
      },
      {
        question: "Is the NABARD Grade A exam open to non-Indian students?",
        answer:
          "No, the NABARD Grade A exam is typically open only to Indian citizens who meet the eligibility criteria set by NABARD.",
      },
      {
        question: "Where can I get the NABARD Grade A syllabus?",
        answer:
          "The NABARD Grade A syllabus includes Reasoning, Quantitative Aptitude, English, General Awareness, Computer Knowledge, and Agriculture and Rural Development. Visit www.nabard.org for details.",
      },
      {
        question: "Is the NABARD Grade A exam tough?",
        answer:
          "The NABARD Grade A exam is challenging due to its specialized syllabus and competitive nature. Focused preparation can lead to success.",
      },
    ],
  },
  {
    slug: "bank/licaao",
    title: "LIC AAO",
    courseTitle: "Crack LIC AAO 2025 with ",
    description:
      "LIC AAO preparation is designed for the Life Insurance Corporation of India's Assistant Administrative Officer exam. The course covers Reasoning, Quantitative Aptitude, English Language, General Knowledge, and Professional Knowledge, preparing candidates for Prelims, Mains, and Interview stages to secure a prestigious role in LIC.",
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
      { id: "test", label: "Test Series" },
      { id: "Bookmaterials", label: "Book Materials" },
      { id: "SelfBased", label: "Self Based" },
    ],
    offerings: [
      {
        id: "LICAAO-online-1",
        title: "Daily Class",
        image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "LICAAO-online-2",
        title: "Night Class",
        image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced banking exam concepts",
          "Mock test series with AI analysis",
          "Best for repeat aspirants",
        ],
      },
      {
        id: "LICAAO-online-3",
        title: "Weekend Class",
        image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "LICAAO-Classroom-1",
        title: "Day Classes",
        image: "/catdailyclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "LICAAO-Classroom-2",
        title: "Night Classes",
        image: "/catnightclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "LICAAO-Classroom-3",
        title: "Weekend Classes",
        image: "/catweekendclass.jpeg",
        type: "Classroom",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "LICAAO-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Interview guidance",
        ],
      },
      {
        id: "LICAAO-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "LICAAO-test-3",
        title: "Mock + Test Series + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Interview guidance",
          "Test Series",
          "Mock Test",
          "Book Materials",
        ],
      },
      {
        id: "LICAAO-Bookmaterials-1",
        title: "Book Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials"],
      },
      {
        id: "LICAAO-Bookmaterials-2",
        title: "Test Series + Mock Test + Book Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "Bookmaterials",
        features: ["Complete Book Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "LICAAO-SelfBased-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "SelfBased",
        features: ["Video lectures", "Mock Test", "Book Materials"],
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
          "LIC has declared the Result/Scores of AAO Exam 2025.",
      },
      {
        category: "Application Form",
        description:
          "The Life Insurance Corporation of India has released the LIC AAO 2025 application form.",
      },
      {
        category: "Registration Process",
        description:
          "The registration process for the LIC AAO 2025 exam is set to close soon, with the deadline for submitting applications expected by January 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginners Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "exam-pattern", label: "Exam Pattern" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "LIC AAO Beginner's Guide Volume 1", id: 1 },
      { title: "LIC AAO Beginner's Guide Volume 2", id: 2 },
      { title: "LIC AAO Beginner's Guide Volume 3", id: 3 },
      { title: "LIC AAO Beginner's Guide Volume 4", id: 4 },
      { title: "LIC AAO Beginner's Guide Volume 5", id: 5 },
      { title: "LIC AAO Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the LIC AAO exam?",
        answer:
          "The LIC AAO exam is conducted by the Life Insurance Corporation of India for recruitment of Assistant Administrative Officers. It includes Prelims, Mains, and Interview stages.",
      },
      {
        question: "Is the LIC AAO exam open to non-Indian students?",
        answer:
          "No, the LIC AAO exam is typically open only to Indian citizens who meet the eligibility criteria set by LIC.",
      },
      {
        question: "Where can I get the LIC AAO syllabus?",
        answer:
          "The LIC AAO syllabus includes Reasoning, Quantitative Aptitude, English Language, General Knowledge, and Professional Knowledge. Visit www.licindia.in for details.",
      },
      {
        question: "Is the LIC AAO exam tough?",
        answer:
          "The LIC AAO exam is challenging due to its competitive nature and comprehensive syllabus. Strategic preparation can lead to success.",
      },
    ],
  },
];
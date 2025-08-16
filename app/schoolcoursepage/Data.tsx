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
    slug: "MANAGEMENT/CHRIST",
    title: "Christ University Management",
    courseTitle: "Crack Christ University Management 2025 with ",
    description:
      "The Christ University Management Entrance Exam is conducted for admission to undergraduate management programs like BBA and BBA (Hons) at Christ (Deemed to be University), Bengaluru. Prep Academy offers expert coaching to help students excel in this competitive exam with comprehensive resources and strategies.",
    points: [
      "Expert Faculty & Personalized Mentorship",
      "Comprehensive Study Materials & Mock Tests",
      "Live Interactive Classes with Doubt Resolution",
    ],
    telegramLink: "https://t.me/ChristManagementPrepAcademy",
    relatedVideos: [
      { title: "Christ Management 2025 Prep Tips", videoId: "M33APKoNOqE" },
      { title: "Mastering Aptitude for Christ", videoId: "_lgTHGKC7Oc" },
      { title: "Christ Mock Test Strategies", videoId: "RyLsKV6z2tw" },
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
        id: "CHRIST-online-1",
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
        id: "CHRIST-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced problem-solving techniques",
          "Mock test series with AI analysis",
          "Best for repeat Christ takers",
        ],
      },
      {
        id: "CHRIST-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CHRIST-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CHRIST-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CHRIST-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CHRIST-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "GDPI assistance",
        ],
      },
      {
        id: "CHRIST-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "CHRIST-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "CHRIST-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "CHRIST-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "CHRIST-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Christ Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "Aptitude Basics for Christ", videoId: "wfIq-nqvByY" },
      { title: "Christ Mock Test Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Exam Date:",
        description:
          "Expected in April–May 2025 (official dates to be announced).",
      },
      {
        category: "Courses Offered:",
        description:
          "Admission to BBA and BBA (Hons) programs at Christ University.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "Christ Beginner's Guide Volume 1", id: 1 },
      { title: "Christ Beginner's Guide Volume 2", id: 2 },
      { title: "Christ Beginner's Guide Volume 3", id: 3 },
      { title: "Christ Beginner's Guide Volume 4", id: 4 },
      { title: "Christ Beginner's Guide Volume 5", id: 5 },
      { title: "Christ Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the eligibility for Christ Management programs?",
        answer:
          "Candidates must have passed Class 12 with at least 50% marks from a recognized board.",
      },
      {
        question: "What is the Christ University Management Entrance Exam?",
        answer:
          "It is an entrance examination conducted for admission to undergraduate management programs like BBA and BBA (Hons) at Christ University, Bengaluru.",
      },
      {
        question: "Where can I get the Christ syllabus?",
        answer:
          "Aspirants are advised to check the official Christ University website for the detailed syllabus and eligibility criteria.",
      },
      {
        question: "Is the Christ exam tough?",
        answer:
          "The difficulty of the Christ exam varies based on individual preparation, but it is considered moderately challenging with proper guidance.",
      },
    ],
  },
  {
    slug: "DEFENCE/AFCAT",
    title: "AFCAT",
    courseTitle: "Crack AFCAT 2025 with ",
    description:
      "The Air Force Common Admission Test (AFCAT) is a national-level entrance examination conducted by the Indian Air Force (IAF). It serves as a gateway for both male and female candidates to join the IAF as Class-I Gazetted Officers.Prep Academy prepares aspiring Air Force officers with expert guidance, strategic training, and AFCAT-focused mock tests — empowering them to ace the exam and secure a commission in the Indian Air Force",
    points: [
      "Expert-Led Coaching",
      "Comprehensive Study Materials",
      "Mock Tests & Doubt Resolution",
    ],
    telegramLink: "https://t.me/AFCATPrepAcademy",
    relatedVideos: [
      { title: "AFCAT 2025 Prep Tips", videoId: "M33APKoNOqE" },
      { title: "AFCAT Reasoning Strategies", videoId: "_lgTHGKC7Oc" },
      { title: "AFCAT Mock Test Prep", videoId: "RyLsKV6z2tw" },
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
        id: "AFCAT-online-1",
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
        id: "AFCAT-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced problem-solving techniques",
          "Mock test series with AI analysis",
          "Best for repeat AFCAT takers",
        ],
      },
      {
        id: "AFCAT-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "AFCAT-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "AFCAT-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "AFCAT-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
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
          "GDPI assistance",
        ],
      },
      {
        id: "AFCAT-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "AFCAT-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "AFCAT-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "AFCAT-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "AFCAT-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "AFCAT Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "AFCAT Reasoning Basics", videoId: "wfIq-nqvByY" },
      { title: "AFCAT Mock Test Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Notification Release Date:",
        description: " June 2, 2025",
      },
      {
        category: "Application Period: ",
        description: "June 2 to July 1, 2025",
      },
      {
        category: "Vacancies: ",
        description: " A total of 284 vacancies are announced for AFCAT 2 2025",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "AFCAT Beginner's Guide Volume 1", id: 1 },
      { title: "AFCAT Beginner's Guide Volume 2", id: 2 },
      { title: "AFCAT Beginner's Guide Volume 3", id: 3 },
      { title: "AFCAT Beginner's Guide Volume 4", id: 4 },
      { title: "AFCAT Beginner's Guide Volume 5", id: 5 },
      { title: "AFCAT Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the age limit for AFCAT 2 2025?",
        answer:
          "Graduates with a minimum of 60% marks and specific eligibility criteria based on the branch.",
      },
      {
        question: "What is the AFCAT exam?",
        answer:
          " Candidates must be Indian citizens. For the Flying Branch, the age limit is 20 to 24 years and for Ground Duty Branches, it's 20 to 26 years.",
      },
      {
        question: " How should I prepare for the AFCAT exam?",
        answer:
          "A structured study plan is essential. Focus on strengthening fundamentals in English, General Awareness, Numerical Ability, and Reasoning. Regularly read newspapers and current affairs magazines to stay updated. Practice previous years' question papers and take mock tests to build confidence and improve time management.",
      },
      {
        question: "What is the selection process after the written exam?",
        answer:
          "Candidates who qualify the written exam are called for the AFSB Interview, which assesses psychological aptitude and personality. The AFSB process spans over five days and includes psychological tests, group tasks, and personal interviews. Final selection is based on combined performance in the written exam and AFSB interview",
      },
    ],
  },
  {
    slug: "TUITIONS/TUITIONS",
    title: "Tuitions",
    courseTitle: "Excel in Tuitions with ",
    description:
      "Prep Academy delivers high-quality tuition programs for school and college students across key academic subjects such as Physics, Chemistry, Biology, Mathematics, English, Commerce, Business Studies, Accounting, and Economics.Our programs are crafted to build strong conceptual understanding, enhance academic performance, and prepare students for school exams, board assessments, and entrance tests. With a team of experienced faculty, well-structured lesson plans, and personalized guidance, we ensure every student gets the support they need to thrive.Classes are offered in both online and offline formats, with flexible batch schedules to suit individual learning needs.                     ",
    points: [
      "Expert Tutors",
      "Customized Study Plans",
      "Interactive Learning Sessions",
    ],
    telegramLink: "https://t.me/TuitionsPrepAcademy",
    relatedVideos: [
      { title: "Tuitions Prep Tips", videoId: "M33APKoNOqE" },
      { title: "Tuitions Study Strategies", videoId: "_lgTHGKC7Oc" },
      { title: "Tuitions Practice Tips", videoId: "RyLsKV6z2tw" },
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
        id: "TUITIONS-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interactive sessions",
          "Live doubt-solving sessions",
          "Subject-specific practice",
        ],
      },
      {
        id: "TUITIONS-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced problem-solving techniques",
          "Practice test series",
          "Best for advanced learners",
        ],
      },
      {
        id: "TUITIONS-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Interactive sessions",
          "Live doubt-solving sessions",
          "Subject-specific practice",
        ],
      },
      {
        id: "TUITIONS-classroom-1",
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
        id: "TUITIONS-classroom-2",
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
        id: "TUITIONS-classroom-3",
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
        id: "TUITIONS-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Subject-specific practice",
        ],
      },
      {
        id: "TUITIONS-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Subject-specific practice",
        ],
      },
      {
        id: "TUITIONS-test-3",
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
        id: "TUITIONS-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "TUITIONS-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "TUITIONS-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Tuitions Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "Tuitions Study Basics", videoId: "wfIq-nqvByY" },
      { title: "Tuitions Practice Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Availability:",
        description: "Classes available year-round for grades 6–12.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "Tuitions Beginner's Guide Volume 1", id: 1 },
      { title: "Tuitions Beginner's Guide Volume 2", id: 2 },
      { title: "Tuitions Beginner's Guide Volume 3", id: 3 },
      { title: "Tuitions Beginner's Guide Volume 4", id: 4 },
      { title: "Tuitions Beginner's Guide Volume 5", id: 5 },
      { title: "Tuitions Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question:
          "What subjects does Prep Academy offer for +1 and +2 students?",
        answer:
          "We provide comprehensive coaching in core subjects: Physics, Chemistry, Mathematics, Biology, Accountancy, Business Studies, Economics, and English, tailored for both Science and Commerce streams.",
      },
      {
        question:
          "Are online classes available for students unable to attend in person?",
        answer:
          "Yes, we offer live online classes and provide access to recorded sessions, ensuring flexibility for students across Kerala.",
      },
      {
        question:
          " How can students enroll in Prep Academy's +1 and +2 programs?",
        answer:
          "Enrollment is open through our website. Interested students can fill out the online registration form or contact our admissions team for guidance.",
      },
    ],
  },
  {
    slug: "OTHERS/ASHOKAUNIVERSITY",
    title: "Ashoka University",
    courseTitle: "Crack Ashoka University Entrance 2025 with ",
    description:
      "Ashoka University, located in Sonipat, Haryana, is renowned for its liberal arts and sciences education..Prep Academy guides aspiring Ashoka University students with expert mentorship, strategic preparation, and mock assessments — helping them excel in the Ashoka Aptitude Assessment (AAA), craft compelling personal essays, and perform confidently in interviews to secure admission into one of India’s premier liberal arts universities.",
    points: [
      "Expert Guidance",
      "Mock Tests & Essay Writing Practice",
      "Personalized Feedback",
    ],
    telegramLink: "https://t.me/AshokaPrepAcademy",
    relatedVideos: [
      { title: "Ashoka 2025 Prep Tips", videoId: "M33APKoNOqE" },
      { title: "Ashoka Aptitude Strategies", videoId: "_lgTHGKC7Oc" },
      { title: "Ashoka Essay Writing Prep", videoId: "RyLsKV6z2tw" },
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
        id: "ASHOKA-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Essay writing workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "ASHOKA-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced essay and aptitude techniques",
          "Mock test series with AI analysis",
          "Best for repeat Ashoka takers",
        ],
      },
      {
        id: "ASHOKA-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Essay writing workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "ASHOKA-classroom-1",
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
        id: "ASHOKA-classroom-2",
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
        id: "ASHOKA-classroom-3",
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
        id: "ASHOKA-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Essay writing practice",
        ],
      },
      {
        id: "ASHOKA-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Essay writing practice",
        ],
      },
      {
        id: "ASHOKA-test-3",
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
        id: "ASHOKA-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "ASHOKA-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "ASHOKA-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "Ashoka Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "Ashoka Aptitude Basics", videoId: "wfIq-nqvByY" },
      { title: "Ashoka Essay Writing Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Application Deadline:",
        description:
          "Ashoka University conducted its undergraduate admissions in three rounds for the August 2025 intake. The application deadlines were; [ Round 1 : November 27, 2024.Round 2: January 15, 2025.] [Round 3: April 25, 2025.Each round included the submission of the application form, participation in the Ashoka Aptitude Assessment (AAA), and interviews.]",
      },

      {
        category: "Ashoka Aptitude Assessment (AAA) Dates:",
        description:
          " The AAA, a mandatory component of the admissions process, was conducted on the following dates:  [Round 1: December 8, 2024.] [Round 2: January 25, 2025.] [Round 3: May 4, 2025.The AAA comprised multiple-choice questions and an on-the-spot essay, assessing critical thinking and problem-solving skills.]",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "Ashoka Beginner's Guide Volume 1", id: 1 },
      { title: "Ashoka Beginner's Guide Volume 2", id: 2 },
      { title: "Ashoka Beginner's Guide Volume 3", id: 3 },
      { title: "Ashoka Beginner's Guide Volume 4", id: 4 },
      { title: "Ashoka Beginner's Guide Volume 5", id: 5 },
      { title: "Ashoka Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "What is the Ashoka Aptitude Assessment (AAA)?",
        answer:
          "The AAA is a computer-based test comprising multiple-choice questions and an on-the-spot essay. It assesses critical thinking, problem-solving abilities, and written communication skills. ",
      },
      {
        question: " Is it mandatory to take the AAA for admission?",
        answer:
          " While the AAA is a significant component of the admission process, Ashoka University also considers SAT, ACT, and CUET scores. Applicants can choose to submit these scores instead of taking the AAA.",
      },
      {
        question:
          "How does Prep Academy assist in Ashoka University admissions?",
        answer:
          "Prep Academy offers: Coaching for AAA and other accepted standardized tests , Guidance on crafting impactful personal essays , Interview preparation sessions-Assistance with the application process and documentation",
      },
    ],
  },
  {
    slug: "OTHERS/SYMBIOSIS",
    title: "Symbiosis",
    courseTitle: "Crack Symbiosis Entrance Test 2025 with ",
    description:
      "The Symbiosis Entrance Test (SET) is a university-level examination conducted by Symbiosis International (Deemed University) for admission into various undergraduate programs across its affiliated institutes. The SET assesses candidates' proficiency in areas such as English, Quantitative Aptitude, General Awareness, and Logical Reasoning. It serves as a gateway to programs in Management, Law, Engineering, Liberal Arts, and more",
    points: [
      "Comprehensive Study Materials",
      "Mock Tests & Practice",
      "Expert Mentorship",
    ],
    telegramLink: "https://t.me/SymbiosisPrepAcademy",
    relatedVideos: [
      { title: "SET 2025 Prep Tips", videoId: "M33APKoNOqE" },
      { title: "SET Aptitude Strategies", videoId: "_lgTHGKC7Oc" },
      { title: "SET Mock Test Prep", videoId: "RyLsKV6z2tw" },
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
        id: "SYMBIOSIS-online-1",
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
        id: "SYMBIOSIS-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced problem-solving techniques",
          "Mock test series with AI analysis",
          "Best for repeat SET takers",
        ],
      },
      {
        id: "SYMBIOSIS-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SYMBIOSIS-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SYMBIOSIS-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SYMBIOSIS-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "SYMBIOSIS-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "GDPI assistance",
        ],
      },
      {
        id: "SYMBIOSIS-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "SYMBIOSIS-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "SYMBIOSIS-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "SYMBIOSIS-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "SYMBIOSIS-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "SET Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "SET Aptitude Basics", videoId: "wfIq-nqvByY" },
      { title: "SET Mock Test Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Application Deadline Extended:",
        description:
          " The last date to register for SET 2025 was extended to April 16, 2025.",
      },
      {
        category: "Exam Dates:",
        description:
          "  SET 2025 was conducted in two phases: Test 1: May 5, 2025 (Monday) and Test 2: May 11, 2025 (Sunday)",
      },

      {
        category: "Admit Card Release:",
        description:
          "  Admit cards were made available on: April 25, 2025 for Test 1 and April 30, 2025 for Test 2",
      },

      {
        category: "Result Declaration:",
        description: "  The SET 2025 results were declared on May 22, 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "SET Beginner's Guide Volume 1", id: 1 },
      { title: "SET Beginner's Guide Volume 2", id: 2 },
      { title: "SET Beginner's Guide Volume 3", id: 3 },
      { title: "SET Beginner's Guide Volume 4", id: 4 },
      { title: "SET Beginner's Guide Volume 5", id: 5 },
      { title: "SET Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "How can Prep Academy assist in preparing for the SET?",
        answer:
          "Prep Academy provides comprehensive study materials that are fully aligned with the SET syllabus. Students benefit from regular mock tests and practice sessions designed to build confidence and exam readiness. Expert-led classes focus on key concepts and effective problem-solving techniques, while personalized mentoring ensures individual student needs are carefully addressed.",
      },
      {
        question: "Are there any scholarships available through SET?",
        answer:
          "Yes, Symbiosis International University offers scholarships to meritorious students based on their SET performance and academic records. Specific scholarship criteria and availability may vary across different institutes under the university.",
      },
      {
        question: "What are the next steps after clearing the SET?",
        answer:
          "After the SET exam, candidates may need to take part in additional selection processes such as Personal Interviews (PI), Written Ability Tests (WAT), and Group Discussions (GD), depending on the specific requirements of the institution.",
      },
    ],
  },
  {
    slug: "OTHERS/NMIMS",
    title: "NMIMS",
    courseTitle: "Crack NMIMS NPAT 2025 with ",
    description:
      "The NMIMS Programs After Twelfth (NPAT) is a national-level entrance exam conducted by SVKM’s Narsee Monjee Institute of Management Studies (NMIMS).Prep Academy equips aspiring NMIMS students with expert guidance, smart strategies, and rigorous mock tests designed to help them excel in the NPAT exam and secure admission into prestigious undergraduate programs like BBA, B.Com (Hons.), B.Sc. (Finance), and B.A. (Liberal Arts) offered by NMIMS across its top campuses.",
    points: [
      "Expert-Led Coaching",
      "Comprehensive Study Materials",
      "Mock Tests & Practice",
    ],
    telegramLink: "https://t.me/NMIMSPrepAcademy",
    relatedVideos: [
      { title: "NPAT 2025 Prep Tips", videoId: "M33APKoNOqE" },
      { title: "NPAT Aptitude Strategies", videoId: "_lgTHGKC7Oc" },
      { title: "NPAT Mock Test Prep", videoId: "RyLsKV6z2tw" },
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
        id: "NMIMS-online-1",
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
        id: "NMIMS-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced problem-solving techniques",
          "Mock test series with AI analysis",
          "Best for repeat NPAT takers",
        ],
      },
      {
        id: "NMIMS-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMIMS-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMIMS-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMIMS-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "NMIMS-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "GDPI assistance",
        ],
      },
      {
        id: "NMIMS-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "NMIMS-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "NMIMS-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "NMIMS-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "NMIMS-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "NPAT Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "NPAT Aptitude Basics", videoId: "wfIq-nqvByY" },
      { title: "NPAT Mock Test Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Application Deadline: ",
        description:
          "The last date to submit the NPAT 2025 application form was May 26, 2025.",
      },

      {
        category: "Exam Schedule:  ",
        description:
          "The NPAT 2025 was conducted as an online computer-based test at designated test centers from March 1 to May 31, 2025.",
      },

      {
        category: "Admit Card Release:",
        description:
          " Admit cards were made available online after successful registration and exam scheduling. Candidates could download their admit cards by logging into the official NPAT portal.",
      },

      {
        category: "Result Declaration: ",
        description:
          "The NPAT 2025 results were announced in June 2025. Candidates could check their results by logging into the official NPAT website.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "NPAT Beginner's Guide Volume 1", id: 1 },
      { title: "NPAT Beginner's Guide Volume 2", id: 2 },
      { title: "NPAT Beginner's Guide Volume 3", id: 3 },
      { title: "NPAT Beginner's Guide Volume 4", id: 4 },
      { title: "NPAT Beginner's Guide Volume 5", id: 5 },
      { title: "NPAT Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "How can Prep Academy assist in preparing for the NPAT?",
        answer:
          "Prep Academy provides comprehensive study materials that are closely aligned with the NPAT syllabus. Students benefit from regular mock tests and practice sessions that enhance their exam preparedness. Expert-led classes emphasize key concepts and effective problem-solving techniques, while personalized mentoring ensures that individual student needs are thoroughly addressed.",
      },
      {
        question: "Can I attempt the NPAT exam multiple times?",
        answer:
          "Yes, candidates are allowed to attempt the NPAT exam up to three times within the exam window. The best of the three scores will be considered for admission.",
      },
      {
        question: " What are the eligibility criteria for NPAT?",
        answer:
          "Candidates must have completed their 10+2 or equivalent examination from a recognized board with a minimum aggregate of 50% marks. Specific eligibility criteria may vary depending on the program applied for.",
      },
    ],
  },
  {
    slug: "OTHERS/STXAVIERS",
    title: "STXAVIERS",
    courseTitle: "Crack St. Xavier's Entrance 2025 with ",
    description:
      "St. Xavier’s College, Mumbai – one of India’s most prestigious institutions – conducts the St. Xavier’s Entrance Test (XET) for admission to select undergraduate programs like BMS (Bachelor of Management Studies) and BA in Mass Communication & Journalism.Preparing with expert guidance significantly boosts your chances of securing a seat in this top-tier college – and that’s where our Prep Academy course comes in.",
    points: [
      "Expert Guidance",
      "Mock Tests & Practice",
      "Personalized Mentorship",
    ],
    telegramLink: "https://t.me/StXaviersPrepAcademy",
    relatedVideos: [
      { title: "St. Xavier's 2025 Prep Tips", videoId: "M33APKoNOqE" },
      { title: "St. Xavier's Aptitude Strategies", videoId: "_lgTHGKC7Oc" },
      { title: "St. Xavier's Mock Test Prep", videoId: "RyLsKV6z2tw" },
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
        id: "STXAVIERS-online-1",
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
        id: "STXAVIERS-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced problem-solving techniques",
          "Mock test series with AI analysis",
          "Best for repeat St. Xavier's takers",
        ],
      },
      {
        id: "STXAVIERS-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "STXAVIERS-classroom-1",
        title: "Day Classes",
    image: "/catdailyclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "STXAVIERS-classroom-2",
        title: "Night Classes",
    image: "/catnightclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "STXAVIERS-classroom-3",
        title: "Weekend Classes",
    image: "/catweekendclass.jpeg",
        type: "classroom",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Authentic Learning Experiences",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "STXAVIERS-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "GDPI assistance",
        ],
      },
      {
        id: "STXAVIERS-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
        ],
      },
      {
        id: "STXAVIERS-test-3",
        title: "Mock + Test Series + Study Material",
        image: "/allcourse/testmockandbook.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "GDPI assistance",
          "Test Series",
          "Mock Test",
          "Study Materials",
        ],
      },
      {
        id: "STXAVIERS-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "STXAVIERS-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "STXAVIERS-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "St. Xavier's Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "St. Xavier's Aptitude Basics", videoId: "wfIq-nqvByY" },
      { title: "St. Xavier's Mock Test Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Application Timeline:",
        description:
          " Online applications commenced on April 3, 2025, and concluded on May 5, 2025, at 6 PM IST",
      },

      {
        category: "Examination Dates:",
        description:
          "The examination will be conducted at all India centers on May 10 and 11, 2025, with additional slots available exclusively at the Mumbai center on May 16 and 17, 2025.",
      },

      {
        category: "Test Centers:",
        description:
          " Examinations were conducted across 9 cities, including Mumbai, Delhi, Jaipur, Pune, Bangalore, Kochi, Kolkata, Guwahati, and Goa",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "St. Xavier's Beginner's Guide Volume 1", id: 1 },
      { title: "St. Xavier's Beginner's Guide Volume 2", id: 2 },
      { title: "St. Xavier's Beginner's Guide Volume 3", id: 3 },
      { title: "St. Xavier's Beginner's Guide Volume 4", id: 4 },
      { title: "St. Xavier's Beginner's Guide Volume 5", id: 5 },
      { title: "St. Xavier's Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "How can I apply for XET?",
        answer:
          "Applications were accepted online through the official portal: The application window was open from April 3 to May 5, 2025. ",
      },
      {
        question: "What is the application fee?",
        answer:
          "The application fee for XET 2025 was ₹3,000, payable online during the application process",
      },
      {
        question: "When will the results be announced?",
        answer:
          "The first merit list was released on May 27, 2025, with subsequent lists on May 31 and June 5, 2025.",
      },
    ],
  },
  {
    slug: "DESIGN/CEED",
    title: "CEED",
    courseTitle: "Crack CEED 2025 with ",
    description:
      "The Common Entrance Exam for Design (CEED) is a prestigious national-level test conducted by IIT Bombay for admission to Master of Design (M.Des) and Ph.D. programs at top institutes like IITs and IISc. CEED evaluates a student’s creativity, design aptitude, visual thinking, logical reasoning, and communication skills.If you're aiming for a career in design, CEED is your gateway – and our Prep Academy course is designed to help you clear it with confidence.",
    points: [
      "Expert Design Faculty",
      "Mock Tests & Studio Practice",
      "Personalized Feedback",
    ],
    telegramLink: "https://t.me/CEEDPrepAcademy",
    relatedVideos: [
      { title: "CEED 2025 Prep Tips", videoId: "M33APKoNOqE" },
      { title: "CEED Design Strategies", videoId: "_lgTHGKC7Oc" },
      { title: "CEED Mock Test Prep", videoId: "RyLsKV6z2tw" },
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
        id: "CEED-online-1",
        title: "Daily Class",
    image: "/catdailyclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Design aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CEED-online-2",
        title: "Night Class",
    image: "/catnightclass.jpeg",
        type: "online",
        features: [
          "Live doubt-solving sessions",
          "Advanced design techniques",
          "Mock test series with AI analysis",
          "Best for repeat CEED takers",
        ],
      },
      {
        id: "CEED-online-3",
        title: "Weekend Class",
    image: "/catweekendclass.jpeg",
        type: "online",
        features: [
          "Personal mentoring",
          "Design aptitude workshops",
          "Live & interactive sessions",
          "Live doubt-solving sessions",
        ],
      },
      {
        id: "CEED-classroom-1",
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
        id: "CEED-classroom-2",
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
        id: "CEED-classroom-3",
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
        id: "CEED-test-1",
        title: "Mock Test Only",
        image: "/allcourse/mocktest.jpeg",
        type: "test",
        features: [
          "Enhance exam preparation skill",
          "10 Mock tests available",
          "Personal mentoring",
          "Design aptitude practice",
        ],
      },
      {
        id: "CEED-test-2",
        title: "Test Series + Mock",
        image: "/allcourse/mockandtest.jpeg",
        type: "test",
        features: [
          "Personal mentoring",
          "Test Series",
          "Mock Test",
          "Design aptitude practice",
        ],
      },
      {
        id: "CEED-test-3",
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
        id: "CEED-study-material-1",
        title: "Study Materials Only",
        image: "/allcourse/bookmaterials.jpeg",
        type: "study-material",
        features: ["Complete Study Materials"],
      },
      {
        id: "CEED-study-material-2",
        title: "Test Series + Mock Test + Study Materials",
        image: "/allcourse/testmockandbook.jpeg",
        type: "study-material",
        features: ["Complete Study Materials", "Mock Tests", "Test Series"],
      },
      {
        id: "CEED-self-based-1",
        title: "Self Based",
        image: "/allcourse/selfbased.jpeg",
        type: "self-based",
        features: ["Video lectures", "Mock Test", "Study Materials"],
      },
    ],
    demoVideos: [
      { title: "CEED Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "CEED Design Basics", videoId: "wfIq-nqvByY" },
      { title: "CEED Mock Test Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Exam Date:",
        description:
          " CEED 2025 was held on January 19, 2025, from 9:00 AM to 12:00 Noon.",
      },

      {
        category: "Registration Period:",
        description:
          " Online registration was open from October 1 to October 31, 2024, with late registration available until November 8, 2024.",
      },

      {
        category: " Result Announcement:",
        description:
          " Results were declared on March 5, 2025, and scorecards were available for download from March 10 to June 11, 2025.",
      },

      {
        category: "Participating Institutes: ",
        description:
          "New institutes like ATLAS SkillTech University, Mumbai, and RV University, Bengaluru, joined CEED 2025 as result-sharing institutes",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "CEED Beginner's Guide Volume 1", id: 1 },
      { title: "CEED Beginner's Guide Volume 2", id: 2 },
      { title: "CEED Beginner's Guide Volume 3", id: 3 },
      { title: "CEED Beginner's Guide Volume 4", id: 4 },
      { title: "CEED Beginner's Guide Volume 5", id: 5 },
      { title: "CEED Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "Who is eligible to apply for CEED?",
        answer:
          "Candidates must have completed a degree/diploma/postgraduate degree program of minimum 3 years (after 10+2 level), or be appearing for the final examination by July 2025. There is no age limit, and candidates can appear for CEED any number of times.",
      },
      {
        question: "How can I apply for CEED?",
        answer:
          "Applications were submitted online through the official CEED website: ceed.iitb.ac.in. Candidates had to register, fill in personal and academic details, upload required documents, and pay the application fee.",
      },
      {
        question: "When will the CEED 2025 results be declared?",
        answer:
          "The results were announced on March 5, 2025, and candidates could download their scorecards from March 10 to June 11, 2025",
      },
    ],
  },
  {
    slug: "DESIGN/JEEMAIN",
    title: "JEE Main",
    courseTitle: "Crack JEE Main (Design & Architecture) 2025 with ",
    description:
      "JEE Main is India’s most important engineering entrance exam, conducted by the National Testing Agency (NTA) for admission to NITs, IIITs, CFTIs, and other top engineering institutions. It also serves as the qualifying exam for JEE Advanced, required for admission to the prestigious IITs.Our Prep Academy course is designed to help you master the concepts, boost your problem-solving speed, and excel in JEE Main with confidence.",
    points: [
      "Expert Faculty",
      "Mock Tests & Drawing Practice",
      "Comprehensive Study Materials",
    ],
    telegramLink: "https://t.me/JEEMainDesignPrepAcademy",
    relatedVideos: [
      { title: "JEE Main Design 2025 Prep Tips", videoId: "M33APKoNOqE" },
      { title: "JEE Main Drawing Strategies", videoId: "_lgTHGKC7Oc" },
      { title: "JEE Main Mock Test Prep", videoId: "RyLsKV6z2tw" },
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
      { title: "JEE Main Design Prep Intro", videoId: "5qws0gIHpuY" },
      { title: "JEE Main Drawing Basics", videoId: "wfIq-nqvByY" },
      { title: "JEE Main Mock Test Prep", videoId: "nQfvbJjl-XE" },
    ],
    notifications: [
      {
        category: "Participating Institutes:",
        description:
          "Admissions through JEE Main are offered by NITs, IIITs, CFTIs, and other participating institutions.",
      },

      {
        category: "Exam Sessions:",
        description:
          "The examination will be conducted in two sessions: Session 1 from January 22 to January 31, 2025, and Session 2 from April 1 to April 9, 2025.",
      },
    ],
    courseTabs: [
      { id: "beginners-guide", label: "Beginner's Guide" },
      { id: "study-plan", label: "Study Plan" },
      { id: "syllabus", label: "Syllabus" },
      { id: "top-college", label: "Top College" },
      { id: "free-resources", label: "Free Resources" },
    ],
    courseContent: [
      { title: "JEE Main Design Beginner's Guide Volume 1", id: 1 },
      { title: "JEE Main Design Beginner's Guide Volume 2", id: 2 },
      { title: "JEE Main Design Beginner's Guide Volume 3", id: 3 },
      { title: "JEE Main Design Beginner's Guide Volume 4", id: 4 },
      { title: "JEE Main Design Beginner's Guide Volume 5", id: 5 },
      { title: "JEE Main Design Beginner's Guide Volume 6", id: 6 },
    ],
    faqs: [
      {
        question: "Who is eligible to apply for JEE Main 2025?",
        answer:
          "Candidates who have passed or are appearing in the 10+2 examination with Physics, Chemistry, and Mathematics in 2023, 2024, or 2025 are eligible. There is no age limit for appearing in JEE Main 2025.",
      },
      {
        question: "How can I apply for JEE Main 2025?",
        answer:
          "Applications are to be submitted online through the official website: jeemain.nta.nic.in. Candidates need to register, fill in personal and academic details, upload required documents, and pay the application fee.",
      },
      {
        question: "When will the results be declared?",
        answer:
          "The results for Session 1 were announced on February 11, 2025, and for Session 2 on April 18, 2025. Candidates can check their results on the official website by logging in with their application number and date of birth.",
      },
    ],
  },
];

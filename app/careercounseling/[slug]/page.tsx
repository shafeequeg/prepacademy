// app/careercounseling/[slug]/page.tsx
import { notFound } from "next/navigation";
import Course from "@/app/components/allcourses/careercounseling/courses/Courses";
import Gladiators from "@/app/components/allcourses/careercounseling/courses/Gladiators";
import About from "@/app/components/allcourses/careercounseling/courses/About";

// Define the valid slugs based on your tabs (all lowercase)
const validSlugs = [
  "resumebuilding",
  "interviewpreparation",
  "careerplanning",
  "skilldevelopment",
  "jobsearchstrategies",
  "streamselection",
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


export default async function CareerCounselingCoursePage({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();

  // Check if the slug is valid (case-insensitive)
  if (!validSlugs.includes(normalizedSlug)) {
    notFound();
  }

  return (
    <div>
      <Course slug={normalizedSlug} />
      <Gladiators slug={normalizedSlug} />
      <About slug={normalizedSlug} />
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata based on slug
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();

  const slugTitles: Record<string, string> = {
    resumebuilding: "Resume Building",
    interviewpreparation: "Interview Preparation",
    careerplanning: "Career Planning",
    skilldevelopment: "Skill Development",
    jobsearchstrategies: "Job Search Strategies",
    streamselection: "Stream Selection",
  };
  

  const title = slugTitles[normalizedSlug] || "Career Counseling";

  return {
    title: `${title} - Career Counseling`,
    description: `Expert ${title.toLowerCase()} guidance and counseling services.`,
  };
}
// app/careercounseling/[slug]/page.tsx
import { notFound } from "next/navigation";
import Course from "@/app/components/allcourses/careercounseling/courses/Courses";
import Gladiators from "@/app/components/allcourses/careercounseling/courses/Gladiators";
import About from "@/app/components/allcourses/careercounseling/courses/About";

// Define the valid slugs based on your tabs
const validSlugs = [
  "ResumeBuilding",
  "InterviewPreparation",
  "CareerPlanning",
  "SkillDevelopment",
  "JobSearchStrategies",
  "StreamSelection",
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CareerCounselingCoursePage({ params }: PageProps) {
  const { slug } = await params;

  // Check if the slug is valid
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return (
    <div>
      <Course slug={slug} />
      <Gladiators slug={slug} />
      <About slug={slug} />
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

  const slugTitles: Record<string, string> = {
    ResumeBuilding: "Resume Building",
    InterviewPreparation: "Interview Preparation",
    CareerPlanning: "Career Planning",
    SkillDevelopment: "Skill Development",
    JobSearchStrategies: "Job Search Strategies",
    StreamSelection: "Stream Selection",
  };

  const title = slugTitles[slug] || "Career Counseling";

  return {
    title: `${title} - Career Counseling`,
    description: `Expert ${title.toLowerCase()} guidance and counseling services.`,
  };
}
// app/schoolcourse/law/[slug]/page.tsx
import { notFound } from "next/navigation";
import Course from "@/app/components/allcourses/schoolcourse/law/Lawcourses";
import Gladiators from "@/app/components/allcourses/schoolcourse/law/LawGladiators";
import About from "@/app/components/allcourses/schoolcourse/law/Lawabout";

const validSlugs = ["SLAT", "AILET", "KLEE", "CULEE"];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LawCoursePage({ params }: PageProps) {
  const { slug } = await params;

  console.log(slug);
  console.log(validSlugs);
  
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
    SLAT: "SLAT",
    AILET: "AILET",
    KLEE: "KLEE",
    CULEE: "CULEE",
  };

  const title = slugTitles[slug] || "Law Entrance Exam";

  return {
    title: `${title} - PrepAcademy`,
    description: `Expert coaching and resources for ${title} to help you secure admission to top law schools.`,
  };
}

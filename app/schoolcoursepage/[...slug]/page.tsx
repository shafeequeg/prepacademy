// app/schoolcourse/schoolcoursepage/[...slug]/page.tsx
import { notFound } from "next/navigation";
import Course from "@/app/components/allcourses/schoolcourse/schoolcoursepage/Schoolcoursepage";
import Gladiators from "@/app/components/allcourses/schoolcourse/schoolcoursepage/Schoolcoursepagegladiators";
import About from "@/app/components/allcourses/schoolcourse/schoolcoursepage/Schoolcoursepageabout";

const validSlugs = [
  "MANAGEMENT/CHRIST",
  "DEFENCE/AFCAT",
  "TUITIONS/TUITIONS",
  "OTHERS/ASHOKAUNIVERSITY",
  "OTHERS/SYMBIOSIS",
  "OTHERS/NMIMS",
  "OTHERS/STXAVIERS",
  "DESIGN/CEED",
  "DESIGN/JEEMAIN",
];

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  const { slug: slugArray } = await params;
  
  // Join the slug array to recreate the original slug format
  const slug = slugArray.join('/');

  console.log('Slug array:', slugArray);
  console.log('Joined slug:', slug);
  console.log('Valid slugs:', validSlugs);
  
  // Check if the slug is valid
  if (!validSlugs.includes(slug)) {
    console.log('Slug not found, returning 404');
    notFound();
  }

  return (
    <>
      <Course slug={slug} />
      <Gladiators slug={slug} />
      <About slug={slug} />
    </>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug: slug.split('/'), // Split the slug into array segments
  }));
}

// Generate metadata based on slug
export async function generateMetadata({ params }: PageProps) {
  const { slug: slugArray } = await params;
  const slug = slugArray.join('/');

  const slugTitles: Record<string, string> = {
    "MANAGEMENT/CHRIST": "Christ University Management",
    "DEFENCE/AFCAT": "AFCAT",
    "TUITIONS/TUITIONS": "Tuitions",
    "OTHERS/ASHOKAUNIVERSITY": "Ashoka University",
    "OTHERS/SYMBIOSIS": "Symbiosis",
    "OTHERS/NMIMS": "NMIMS",
    "OTHERS/STXAVIERS": "St. Xavier's",
    "DESIGN/CEED": "CEED",
    "DESIGN/JEEMAIN": "JEE Main (Design & Architecture)",
  };

  const title = slugTitles[slug] || "Course";

  return {
    title: `${title} - PrepAcademy`,
    description: `Expert coaching and resources for ${title} to help you achieve your academic and career goals.`,
  };
}
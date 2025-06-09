import { notFound } from "next/navigation";
import Course from "@/app/components/allcourses/allcoursepage/collegecourse/collegecoursepage/Collegecoursepage";
import Gladiators from "@/app/components/allcourses/allcoursepage/collegecourse/collegecoursepage/Collegecoursegladiator";
import About from "@/app/components/allcourses/allcoursepage/collegecourse/collegecoursepage/CollegePageabout";

const validSlugs = [
  "management/xat",
  "management/cmat",
  "management/mat",
  "management/nmat",
  "management/cuetpg",
  "management/micat",
  "management/mhcet",
  "civilservice/upsc",
  "government/railway",
  "government/ssc",
  "defence/cds",
  "defence/afcat",
  "designandarchictecture/nidpg",
  "designandarchictecture/niftpg",
  "bank/sbi",
  "bank/ibpspo",
  "bank/rbigradeb",
  "bank/ibpsrrb",
  "bank/sbiclerk",
  "bank/ibpsclerk",
  "bank/nabard",
  "bank/licaao",
];

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  const { slug: slugArray } = await params;

  // Join the slug array to recreate the original slug format
  const slug = slugArray.join("/");

  console.log("Slug array:", slugArray);
  console.log("Joined slug:", slug);
  console.log("Valid slugs:", validSlugs);

  // Check if the slug is valid
  if (!validSlugs.includes(slug)) {
    console.log("Slug not found, returning 404");
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
    slug: slug.split("/"), // Split the slug into array segments
  }));
}

// Generate metadata based on slug
export async function generateMetadata({ params }: PageProps) {
  const { slug: slugArray } = await params;
  const slug = slugArray.join("/");

  const slugTitles: Record<string, string> = {
    "management/xat": "XAT",
    "management/cmat": "CMAT",
    "management/mat": "MAT",
    "management/nmat": "NMAT",
    "management/cuetpg": "CUET PG",
    "management/micat": "MICAT",
    "management/mhcet": "MH-CET",
    "civilservice/upsc": "UPSC",
    "government/railway": "Railway",
    "government/ssc": "SSC",
    "defence/cds": "CDS",
    "defence/afcat": "AFCAT",
    "designandarchitecture/nidpg": "NID PG",
    "designandarchitecture/niftpg": "NIFT PG",
  };
  const title = slugTitles[slug] || "Course";

  return {
    title: `${title} - PrepAcademy`,
    description: `Expert coaching and resources for ${title} to help you achieve your academic and career goals.`,
  };
}

import Jeecousre from "@/app/components/allcourses/schoolcourse/engineering/jee/Jee";
import JeeGladiator from "@/app/components/allcourses/schoolcourse/engineering/jee/Gladiators";
import JeeAboutcourse from "@/app/components/allcourses/schoolcourse/engineering/vitee/Aboutcourse";

export const metadata = {
  title: "JEE Coaching",
  description:
    "Top-rated online JEE coaching classes with expert faculty and live sessions.",
  keywords: ["JEE", "JEE online coaching", "JEE prep", "medical entrance"],
  openGraph: {
    title: "JEE Coaching | Prepacademy",
    description: "Top-rated online JEE coaching classes.",
    url: "https://www.prepacademy.in/engineering/jee",
    images: ["/images/neet-og-banner.jpg"],
  },
  alternates: {
    canonical: "https://www.prepacademy.in/engineering/jee",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div>
      <Jeecousre />
      <JeeGladiator />
      <JeeAboutcourse />
    </div>
  );
}

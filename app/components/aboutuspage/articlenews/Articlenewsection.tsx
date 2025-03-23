import Link from "next/link";
import React from "react";
import Image from "next/image";


interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  id: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, image, title, description }) => (
  <div className="bg-[#1A1412] rounded-lg overflow-hidden flex flex-col h-full">
<Image 
  src={image} 
  alt={title} 
  width={500} // Set appropriate width
  height={192} // Set appropriate height (48 * 4)
  className="w-full h-48 object-cover" 
/>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{description}</p>
      <div className="mt-auto">
        <Link href={`/blogdetails/${id}`}>
          <button className="text-[#FF5733] flex items-center gap-2 text-sm hover:text-[#FF6B4A] transition-colors">
            Read More
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const NewsAndArticles: React.FC = () => {
  const articles: ArticleCardProps[] = [
    {
      id: 9,
      image: "/aboutusnews/aboutusnews1.jpeg",
      title: "Registration and examination date announced “NMMIMS NPAT 2025”",
      description: "The Narsee Monjee Institute of Management Studies (NMIMS) has announced the registration and examination dates for the NPAT 2025. The registration process commenced in mid-December 2024 and will continue until April 2025. The examination is scheduled to be held from March 1 to May 31, 2025.",
    },
    {
      id: 10,
      image: "/aboutusnews/aboutusnews2.jpeg",
      title: "NTA CUET 2025: UG Registration, Exam Dates, Notification, Eligibility, Pattern (Revised), Syllabus",
      description: "The National Testing Agency (NTA) is set to commence the registration process for the Common University Entrance Test (CUET) 2025 for undergraduate (UG) programs. The registration is expected to begin in the first week of February 2025 and will conclude in the first week of April 2025. Prospective candidates can apply online through the official CUET website: cuet.nta.nic.in.",
    },
    {
      id: 11,
      image: "/news3.png",
      title: "How to Crack CAT?",
      description: "Cracking the Common Admission Test (CAT) 2025 requires a strategic and disciplined approach. Here's a comprehensive guide to help you prepare effectively:",
    },
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-3 mb-10">
          <h2 className="text-3xl font-bold italic text-white">Latest</h2>
          <span className="text-3xl font-bold text-[#FF5733]">News & Articles</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        <div className="text-center">
          <Link href={'/blogs'}>
            <button className="text-white flex items-center gap-2 mx-auto hover:text-gray-300 transition-colors">
              View More
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;
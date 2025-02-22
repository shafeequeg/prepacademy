import React from "react";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, description }) => (
  <div className="bg-[#1A1412] rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
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
    </div>
  </div>
);

const NewsAndArticles: React.FC = () => {
  const articles: ArticleCardProps[] = [
    {
      image: "/news1.png",
      title: "Strategies for CAT 2025",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
    },
    {
      image: "/new2.png",
      title: "Ace the CAT Essential",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
    },
    {
      image: "/news3.png",
      title: "How to Crack CAT?",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
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
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <div className="text-center">
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
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;

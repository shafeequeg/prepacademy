import React from "react";
import { SalesCategory } from "./types";

interface CategoryTabsProps {
  salesCategories: SalesCategory[];
  activeMainTab: string;
  setActiveMainTab: (tab: string) => void;
  setActiveSubTab: (tab: string) => void;
  setActiveCourse: (course: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = React.memo(({ salesCategories, activeMainTab, setActiveMainTab, setActiveSubTab, setActiveCourse }) => {
  console.log(salesCategories);
  
  return (
    <div className="flex flex-wrap border-b border-orange-600">
      {salesCategories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-3 text-sm font-medium ${
            activeMainTab === category.id?.toString()
              ? "text-white border-b-2 border-orange-500 bg-gradient-to-r from-orange-600 to-orange-500"
              : "text-orange-300 hover:text-white hover:bg-gradient-to-r from-orange-700 to-orange-600"
          } transition-all duration-300 sm:px-6 sm:text-base`}
          onClick={() => {
            setActiveMainTab(category.id?.toString() || "");
            setActiveSubTab("");
            setActiveCourse("");
          }}
        >
          {category.category}
        </button>
      ))}
    </div>
  );
});

CategoryTabs.displayName = 'CategoryTabs';


export default CategoryTabs;
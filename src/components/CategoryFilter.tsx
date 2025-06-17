import React from 'react';
import { CheckCircle2, Tag } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      Robotics: 'bg-blue-500 text-white',
      AIML: 'bg-purple-500 text-white',
      'GEN AI': 'bg-indigo-500 text-white',
      RoboDK: 'bg-orange-500 text-white',
      ROS: 'bg-green-500 text-white',
      'AR VR': 'bg-red-500 text-white',
      'Project Mentoring': 'bg-yellow-500 text-white',
    };

    for (const key in categoryColors) {
      if (category.includes(key)) {
        return categoryColors[key];
      }
    }

    return 'bg-gray-500 text-white';
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border
          ${selectedCategory === null 
            ? 'bg-green-500 text-white border-green-500' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
          }`}
      >
        <Tag className="h-4 w-4" />
        All Categories
      </button>
      
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border
            ${selectedCategory === category 
              ? getCategoryColor(category)
              : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
            }`}
        >
          {selectedCategory === category && <CheckCircle2 className="h-4 w-4" />}
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
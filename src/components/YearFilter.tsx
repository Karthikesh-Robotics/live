import React from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';

interface YearFilterProps {
  years: number[];
  selectedYear: number | null;
  onSelectYear: (year: number | null) => void;
}

const YearFilter: React.FC<YearFilterProps> = ({ years, selectedYear, onSelectYear }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onSelectYear(null)}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border
          ${selectedYear === null 
            ? 'bg-green-500 text-white border-green-500' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
          }`}
      >
        <Calendar className="h-4 w-4" />
        All Years
      </button>
      
      {years.map(year => (
        <button
          key={year}
          onClick={() => onSelectYear(year)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border
            ${selectedYear === year 
              ? 'bg-green-500 text-white border-green-500' 
              : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
            }`}
        >
          {selectedYear === year && <CheckCircle2 className="h-4 w-4" />}
          {year}
        </button>
      ))}
    </div>
  );
};

export default YearFilter;
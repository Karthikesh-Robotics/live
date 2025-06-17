import React, { useState, useEffect } from 'react';
import { achievements } from '../data/achievements';
import AchievementCard from '../components/AchievementCard';
import YearFilter from '../components/YearFilter';
import CategoryFilter from '../components/CategoryFilter';
import { Trophy, Users, Calendar, MapPin, Search, Award, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredAchievements, setFilteredAchievements] = useState(achievements);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { icon: <Trophy className="h-6 w-6" />, count: '50+', label: 'Workshops Conducted' },
    { icon: <Star className="h-6 w-6" />, count: '1000+', label: 'Students Trained' },
    { icon: <Award className="h-6 w-6" />, count: '25+', label: 'Partner Institutions' },
    { icon: <Target className="h-6 w-6" />, count: '100%', label: 'Satisfaction Rate' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Apply filters
  useEffect(() => {
    let filtered = achievements;

    if (selectedYear !== null) {
      filtered = filtered.filter(a => a.year === selectedYear);
    }

    if (selectedCategory !== null) {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(query) ||
        a.location.toLowerCase().includes(query)
      );
    }

    filtered = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
      const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
      return dateB.getTime() - dateA.getTime();
    });

    setFilteredAchievements(filtered);
  }, [selectedYear, selectedCategory, searchQuery]);

  const loadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 6, filteredAchievements.length));
  };

  return (
    <motion.section 
      className="min-h-screen py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-block mb-6">
            <Trophy className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-green-500">Achievements</span>
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our journey of innovation and education through successful workshops,
            training programs, and collaborative achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-green-500 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.count}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search workshops by title or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <span className="sr-only">Clear search</span>
                  ×
                </button>
              )}
            </div>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <YearFilter
              years={[...new Set(achievements.map(a => a.year))].sort().reverse()}
              selectedYear={selectedYear}
              onSelectYear={setSelectedYear}
            />
            <CategoryFilter
              categories={[...new Set(achievements.map(a => a.category))].sort()}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </motion.div>
        </motion.div>

        {filteredAchievements.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            variants={itemVariants}
          >
            <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Workshops Found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {filteredAchievements.slice(0, visibleCount).map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <AchievementCard
                  id={achievement.id}
                  date={achievement.date}
                  title={achievement.title}
                  location={achievement.location}
                  category={achievement.category}
                  images={achievement.images}
                  expanded={false}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {visibleCount < filteredAchievements.length && (
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={loadMore}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Achievements
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Achievements;
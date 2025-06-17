import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, MapPin, Users, CheckCircle, ArrowRight, Play } from 'lucide-react';

interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  mode: string;
  description: string;
  level: string;
  price?: string;
  image: string;
  registerLink?: string;
  status: 'completed' | 'upcoming';
  participants?: number;
  duration?: string;
}

const WorkshopsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'previous' | 'upcoming'>('upcoming');

  const workshops: Workshop[] = [
    // Previous Workshop
    {
      id: 'ros2-urdf-slam',
      title: 'ROS 2: Creating URDF, ROS2 CONTROL & SLAM',
      date: 'May 21, 2025',
      time: '10:00 AM - 4:00 PM',
      mode: 'Online',
      description: 'Comprehensive workshop covering URDF creation, ROS2 Control implementation, and SLAM techniques for autonomous navigation.',
      level: 'Intermediate',
      image: '/assets/workshop1.png',
      status: 'completed',
      participants: 150,
      duration: '6 hours'
    },
    // Upcoming Workshop (from existing workshop section)
    {
      id: 'ros2-basics-roadmap',
      title: 'ROS 2: Basics, Roadmap to Pro',
      date: 'June 29, 2025',
      time: '9:30 AM - 12:00 PM',
      mode: 'Online',
      description: 'Dive into ROS2 Basics and Complete Road map for ROS2 Beginner to Pro',
      level: 'Intermediate',
      price: '₹150',
      image: '/assets/workshop.png',
      registerLink: 'https://unstop.com/o/frM5Agm?utm_medium=Share&utm_source=shortUrl',
      status: 'upcoming',
      duration: '2.5 hours'
    }
  ];

  const previousWorkshops = workshops.filter(w => w.status === 'completed');
  const upcomingWorkshops = workshops.filter(w => w.status === 'upcoming');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const WorkshopCard: React.FC<{ workshop: Workshop }> = ({ workshop }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {workshop.status === 'completed' && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Completed
          </div>
        )}
        {workshop.status === 'upcoming' && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Upcoming
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-green-100 text-green-500 rounded-full text-sm font-medium">
            {workshop.level}
          </span>
          {workshop.price && (
            <span className="text-xl font-bold text-green-500">
              {workshop.price}
            </span>
          )}
          {workshop.status === 'completed' && workshop.participants && (
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Users className="h-4 w-4" />
              {workshop.participants} participants
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-4 group-hover:text-green-500 transition-colors">
          {workshop.title}
        </h3>

        <p className="text-gray-600 mb-6">{workshop.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <Calendar className="h-5 w-5 text-green-500" />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Clock className="h-5 w-5 text-green-500" />
            <span>{workshop.time}</span>
            {workshop.duration && (
              <span className="text-sm text-gray-500">({workshop.duration})</span>
            )}
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Globe className="h-5 w-5 text-green-500" />
            <span>{workshop.mode}</span>
          </div>
        </div>

        {workshop.status === 'upcoming' && workshop.registerLink ? (
          <a
            href={workshop.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-900 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Register Now
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <div className="w-full bg-gray-100 text-gray-500 font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Workshop Completed
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-green-500">Workshops</span>
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our hands-on workshops and master the latest in robotics technology.
            Learn from industry experts and build real-world projects.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              Upcoming Workshops
            </button>
            <button
              onClick={() => setActiveTab('previous')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'previous'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              Previous Workshops
            </button>
          </div>
        </div>

        {/* Workshop Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab}
        >
          {activeTab === 'upcoming' && (
            <div>
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center"
                variants={itemVariants}
              >
                Upcoming Workshops
              </motion.h2>
              {upcomingWorkshops.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingWorkshops.map((workshop) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                  ))}
                </div>
              ) : (
                <motion.div 
                  className="text-center py-16"
                  variants={itemVariants}
                >
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Upcoming Workshops</h3>
                  <p className="text-gray-600">Stay tuned for exciting new workshops coming soon!</p>
                </motion.div>
              )}
            </div>
          )}

          {activeTab === 'previous' && (
            <div>
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center"
                variants={itemVariants}
              >
                Previous Workshops
              </motion.h2>
              {previousWorkshops.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {previousWorkshops.map((workshop) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                  ))}
                </div>
              ) : (
                <motion.div 
                  className="text-center py-16"
                  variants={itemVariants}
                >
                  <CheckCircle className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Previous Workshops</h3>
                  <p className="text-gray-600">Our workshop history will appear here.</p>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-black text-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Want to Host a <span className="text-green-500">Workshop?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in organizing a robotics workshop at your institution? 
            We provide customized training programs tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkshopsPage;
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Wrench, Cpu, Code, Sparkles } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    size: 10 + Math.random() * 20,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      {floatingElements.map(element => (
        <motion.div
          key={element.id}
          className="absolute opacity-5"
          style={{
            width: element.size,
            height: element.size,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #10b981, #059669)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-8"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <BookOpen className="h-24 w-24 text-green-500" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Courses <span className="text-green-500">Coming Soon</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We're working hard to bring you comprehensive robotics courses. 
            Stay tuned for exciting learning opportunities!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: <Code className="h-12 w-12 text-green-500" />,
                title: "ROS2 Fundamentals",
                description: "Learn the basics of Robot Operating System 2"
              },
              {
                icon: <Cpu className="h-12 w-12 text-green-500" />,
                title: "Advanced Robotics",
                description: "Master complex robotics concepts and applications"
              },
              {
                icon: <Wrench className="h-12 w-12 text-green-500" />,
                title: "Hands-on Projects",
                description: "Build real-world robotics projects from scratch"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-100"
              >
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="h-8 w-8 text-green-500" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900">Get Notified</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Be the first to know when our courses are available. Join our community for updates!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Notify Me
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Clock className="h-5 w-5" />
              <span>Expected launch: Q2 2025</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesPage;
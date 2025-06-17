import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Brain, Send, MessageSquare, MessagesSquare, Users, Code, Heart, Star, Zap, Shield, Coffee, Gift } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    designation: '',
    organization: '',
    interest: '',
    experience: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Redirect to WhatsApp community after a short delay
    setTimeout(() => {
      window.open('https://chat.whatsapp.com/IkD0QwVQ6iBLjhbtZd1idG', '_blank');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    size: 10 + Math.random() * 20,
  }));

  // Moving icons configuration
  const leftIcons = [
    { src: '/assets/pages/community/icon1.png', delay: 0, duration: 8 },
    { src: '/assets/pages/community/icon2.png', delay: 1, duration: 10 },
    { src: '/assets/pages/community/icon3.png', delay: 2, duration: 9 }
  ];

  const rightIcons = [
    { src: '/assets/pages/community/icon4.png', delay: 0.5, duration: 9 },
    { src: '/assets/pages/community/icon5.png', delay: 1.5, duration: 8 },
    { src: '/assets/pages/community/icon6.png', delay: 2.5, duration: 10 }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, count: '100+', label: 'Community Members' },
    { icon: <Code className="h-6 w-6" />, count: '50+', label: 'Resources Shared' },
  ];

  const benefits = [
    { 
      icon: <Heart className="h-12 w-12" />, 
      title: 'Supportive Community', 
      description: 'Join a network of passionate robotics enthusiasts who support each other\'s learning journey'
    },
    { 
      icon: <Star className="h-12 w-12" />, 
      title: 'Expert Guidance', 
      description: 'Learn from industry professionals and experienced mentors in robotics and automation'
    },
    { 
      icon: <Zap className="h-12 w-12" />, 
      title: 'Hands-on Learning', 
      description: 'Access to practical workshops, tutorials, and real-world project experiences'
    },
    { 
      icon: <Shield className="h-12 w-12" />, 
      title: 'Exclusive Resources', 
      description: 'Get access to premium learning materials, tools, and educational content'
    },
    { 
      icon: <Coffee className="h-12 w-12" />, 
      title: 'Networking Opportunities', 
      description: 'Connect with like-minded individuals, potential collaborators, and industry professionals'
    },
    { 
      icon: <Gift className="h-12 w-12" />, 
      title: 'Special Events', 
      description: 'Participate in exclusive hackathons, competitions, and community challenges'
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 relative overflow-hidden">
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

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section with Animated Icons */}
        <div className="relative">
          {/* Left Side Icons */}
          <div className="absolute left-0 top-0 w-32 h-full">
            {leftIcons.map((icon, index) => (
              <motion.div
                key={`left-${index}`}
                className="absolute w-24 h-24"
                style={{
                  left: `${Math.random() * 50}px`,
                  top: `${100 + index * 150}px`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: icon.duration,
                  delay: icon.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={icon.src}
                  alt={`Community Icon ${index + 1}`}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="absolute right-0 top-0 w-32 h-full">
            {rightIcons.map((icon, index) => (
              <motion.div
                key={`right-${index}`}
                className="absolute w-24 h-24"
                style={{
                  right: `${Math.random() * 50}px`,
                  top: `${100 + index * 150}px`,
                }}
                animate={{
                  y: [0, 30, 0],
                  x: [0, -15, 0],
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: icon.duration,
                  delay: icon.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={icon.src}
                  alt={`Community Icon ${index + 4}`}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <Bot className="h-20 w-20 text-green-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ROOKIES <span className="text-green-500">COMMUNITY</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our vibrant community of robotics enthusiasts, developers, and innovators.
              Together, we build the future of robotics.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-green-500 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Our <span className="text-green-500">Community?</span>
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-green-500 mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form Section - Made Bigger */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl"
          >
            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-xl border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.01 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Join Our Community</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">WhatsApp Number *</label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Enter your WhatsApp number"
                      />
                    </div>

                    <div>
                      <label htmlFor="designation" className="block text-gray-700 font-medium mb-2">Designation</label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Your job title or role"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">Organization Name</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="Your company or institution"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">Area of Interest *</label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                      >
                        <option value="">Select an area</option>
                        <option value="robotics">Robotics</option>
                        <option value="ros2">ROS2</option>
                        <option value="ai">AI/ML</option>
                        <option value="all">All of the above</option>
                        <option value="others">Others</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Experience Level *</label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                      >
                        <option value="">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why do you want to join? *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="Tell us about your interest in robotics and what you hope to achieve..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Application
                  <Send className="h-5 w-5" />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                className="bg-white p-10 rounded-xl text-center border border-gray-200 shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <MessagesSquare className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to the Community!</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Your application has been received successfully! You'll be redirected to our WhatsApp community group shortly.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-medium">
                    Redirecting to WhatsApp Community...
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
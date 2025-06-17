import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Code, Cpu, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Removed the 8th logo (cli8.jpg) from the array
const clientLogos = [
  '/assets/clients/cli1.png',
  '/assets/clients/cli2.jpg',
  '/assets/clients/cli3.png',
  '/assets/clients/cli4.png',
  '/assets/clients/cli5.png',
  '/assets/clients/cli6.jpg',
  '/assets/clients/cli7.png',
];

const Testimonials: React.FC = () => {
  // Create two rows of logos for better control
  const firstRowLogos = clientLogos.slice(0, 4);
  const secondRowLogos = clientLogos.slice(4);

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

  return (
    <>
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-green-500">Clients</span>
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud to have worked with these esteemed clients.
            </p>
          </motion.div>

          {/* First row with 4 logos */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-16 items-center justify-items-center mb-16 px-4"
            variants={containerVariants}
          >
            {firstRowLogos.map((logo, index) => (
              <motion.div 
                key={index} 
                className="w-80 h-56 flex items-center justify-center p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Second row with 3 logos centered */}
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-12"
            variants={containerVariants}
          >
            {secondRowLogos.map((logo, index) => (
              <motion.div 
                key={index} 
                className="w-80 h-56 flex items-center justify-center p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo}
                  alt={`Client ${index + 5}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet <span className="text-green-500">BUMPY</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our flagship autonomous mobile robot designed for educational institutions and research labs.
                Experience the future of robotics education with advanced features and seamless integration.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Advanced Navigation",
                    desc: "Precise mapping & localization"
                  },
                  {
                    icon: <Code className="h-6 w-6" />,
                    title: "ROS2 Ready",
                    desc: "Built-in ROS2 support"
                  },
                  {
                    icon: <Cpu className="h-6 w-6" />,
                    title: "Smart Processing",
                    desc: "Powerful onboard computing"
                  },
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: "Fast Response",
                    desc: "Real-time control system"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 p-4 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-green-500 mb-2">{feature.icon}</div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/products"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="absolute -inset-4 bg-green-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.img
                src="/assets/bumpy.png"
                alt="BUMPY Robot"
                className="relative z-10 w-full h-auto transform hover:scale-105 transition-transform duration-500"
                whileHover={{ rotate: 5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
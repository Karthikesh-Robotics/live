import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowRight, MapPin, Code, Cpu, Zap, Cog, Wrench, Battery, Wifi, Users, Network, Compass, Gauge, HardDrive, Camera, Monitor, Cherry as Raspberry, BatteryCharging, Car as SdCard, Package, ShoppingCart, X, Upload, Send, Factory, Truck, Shield, Clock, CheckCircle, Settings, Target, Lightbulb, Award, Globe, Heart, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CustomRobotsPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    organization: '',
    designation: '',
    robotTitle: '',
    specifications: '',
    referencePhoto: null as File | null
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, referencePhoto: file }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon regarding your custom robot requirements.');
    setFormData({
      name: '',
      mobile: '',
      email: '',
      organization: '',
      designation: '',
      robotTitle: '',
      specifications: '',
      referencePhoto: null
    });
    setShowForm(false);
  };

  const robotTypes = [
    {
      icon: <Factory className="h-8 w-8" />,
      name: 'Industrial AMR',
      description: 'Warehouse automation & material handling',
      applications: ['Warehouse Automation', 'Material Transport', 'Inventory Management', 'Quality Control']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      name: 'Security Robots',
      description: 'Surveillance & perimeter monitoring',
      applications: ['Perimeter Patrol', 'Surveillance', 'Intrusion Detection', 'Emergency Response']
    },
    {
      icon: <Heart className="h-8 w-8" />,
      name: 'Healthcare Bots',
      description: 'Medical assistance & patient care',
      applications: ['Medicine Delivery', 'Patient Monitoring', 'Sanitization', 'Telepresence']
    },
    {
      icon: <Users className="h-8 w-8" />,
      name: 'Service Robots',
      description: 'Hospitality & customer service',
      applications: ['Reception Assistance', 'Food Service', 'Information Kiosk', 'Entertainment']
    },
    {
      icon: <Truck className="h-8 w-8" />,
      name: 'Logistics Bots',
      description: 'Last-mile delivery & transportation',
      applications: ['Package Delivery', 'Fleet Management', 'Route Optimization', 'Load Balancing']
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      name: 'Research Platforms',
      description: 'Educational & research applications',
      applications: ['Algorithm Testing', 'Sensor Integration', 'AI Development', 'Academic Research']
    }
  ];

  const capabilities = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Precision Navigation',
      description: 'Advanced SLAM with cm-level accuracy'
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'AI Integration',
      description: 'Machine learning & computer vision'
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: 'Fleet Management',
      description: 'Multi-robot coordination systems'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safety Systems',
      description: 'Advanced collision avoidance'
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: 'IoT Connectivity',
      description: 'Real-time monitoring & control'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Modular Design',
      description: 'Easy customization & upgrades'
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: 'Power Management',
      description: 'Extended operation time'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Remote Access',
      description: 'Cloud-based management'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Deep dive into your needs, environment, and objectives',
      icon: <Briefcase className="h-8 w-8" />
    },
    {
      step: '02',
      title: 'Concept Design',
      description: 'Create detailed specifications and 3D models',
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      step: '03',
      title: 'Prototype Development',
      description: 'Build and test initial working prototype',
      icon: <Cog className="h-8 w-8" />
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Rigorous testing in real-world conditions',
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      step: '05',
      title: 'Production & Deployment',
      description: 'Manufacturing and on-site installation',
      icon: <Factory className="h-8 w-8" />
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and system updates',
      icon: <Wrench className="h-8 w-8" />
    }
  ];

  const specifications = {
    'Payload Capacity': 'Up to 500kg',
    'Speed Range': '0.1 - 3.0 m/s',
    'Navigation': 'LiDAR + Camera SLAM',
    'Battery Life': '6 to 10 hours',
    'Operating Temp': '-10°C to +50°C'
  };

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Custom <span className="text-green-500">Robotics Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored autonomous robots designed specifically for your unique requirements and industry needs
            </p>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-lg border-2 border-green-500/20"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-lg border-2 border-green-500/30"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.img
                src="/assets/amr.png"
                alt="Custom AMR Robot"
                className="w-full h-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {Object.entries(specifications).map(([key, value], idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-lg border border-green-500/20 text-center"
                  whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.5)" }}
                >
                  <h3 className="text-green-500 text-sm uppercase mb-2">
                    {key}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">{value}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 text-center">
              <motion.div
                className="inline-flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 flex items-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Get Custom Quote
                </button>
                <Link
                  to="/contact"
                  className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 flex items-center gap-2"
                >
                  <Users className="h-5 w-5" />
                  Consult Our Experts
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Robot Types Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types of <span className="text-green-500">Custom Robots</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We design and build robots for various industries and applications
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {robotTypes.map((robot, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                variants={itemVariants}
              >
                <div className="absolute inset-0 bg-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 z-10">
                  <div className="mb-4 text-green-500 group-hover:text-white transition-colors duration-300">
                    {robot.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {robot.name}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {robot.description}
                  </p>
                  <ul className="space-y-1">
                    {robot.applications.map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-green-500">Development Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we follow a structured approach to ensure your robot meets all requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-500 transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      {process.step}
                    </div>
                    <div className="text-green-500 group-hover:scale-110 transition-transform">
                      {process.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Advanced <span className="text-green-500">Capabilities</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Our custom robots are equipped with cutting-edge technology and can be tailored to meet your specific operational requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 rounded-lg bg-white hover:bg-green-50 transition-colors border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-green-500 mb-2">{capability.icon}</div>
                    <h3 className="font-semibold mb-1">{capability.title}</h3>
                    <p className="text-sm text-gray-600">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src="/assets/pages/products/customrobot.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-green-500">Our Custom Robots?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 rounded-xl bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Industry Expertise</h3>
              <p className="text-gray-600">3+ years of experience in robotics development across multiple industries</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-xl bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Fast Development</h3>
              <p className="text-gray-600">Rapid prototyping and development cycle - from concept to deployment in 8-16 weeks</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-xl bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Full Support</h3>
              <p className="text-gray-600">Complete lifecycle support including training, maintenance, and updates</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your <span className="text-green-500">Custom Robot?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your requirements and create the perfect robotic solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Submit Requirements
              </button>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Robot Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Custom Robot Requirements</h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                        placeholder="Your mobile number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email ID *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Organization Name</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Designation</label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                        placeholder="Your job title"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Custom Robot Title *</label>
                    <input
                      type="text"
                      name="robotTitle"
                      required
                      value={formData.robotTitle}
                      onChange={handleFormChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                      placeholder="e.g., Warehouse Automation Robot"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Brief About Specifications *</label>
                    <textarea
                      name="specifications"
                      required
                      value={formData.specifications}
                      onChange={handleFormChange}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                      placeholder="Describe your robot requirements, intended use, environment, payload, sensors needed, etc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Additional Reference Photo (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label htmlFor="photo-upload" className="cursor-pointer">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Click to upload reference image</p>
                        {formData.referencePhoto && (
                          <p className="text-green-600 mt-2">{formData.referencePhoto.name}</p>
                        )}
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Submit Requirements
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomRobotsPage;
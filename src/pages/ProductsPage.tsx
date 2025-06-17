import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Upload, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  details: string;
  tags: string[];
  image: string;
  route: string;
}

const products: Product[] = [
  {
    id: 'bumpy',
    name: 'BUMPY',
    description: 'Autonomous Mobile Robot',
    details:
      'Advanced autonomous mobile robot designed for educational and research purposes. Features ROS2 integration, advanced navigation, and modular design perfect for learning and development.',
    tags: ['ROS2 Ready', 'SLAM Navigation', 'Modular Design', 'Educational Platform'],
    image: '/assets/bumpy.png',
    route: '/products/bumpy',
  },
  {
    id: 'customrobot',
    name: 'Custom AMR',
    description: 'Customized Robots',
    details:
      'Tailored autonomous mobile robots designed specifically for your unique requirements. From industrial automation to specialized research applications.',
    tags: ['Custom Design', 'Industry Specific', 'Scalable Solution', 'Full Support'],
    image: '/assets/amr.png',
    route: '/products/customrobot',
  },
];

const ProductsPage: React.FC = () => {
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
  const navigate = useNavigate();

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
    
    // Create WhatsApp message with form data
    const message = `
*Custom Robot Requirements*

👤 *Name:* ${formData.name}
📱 *Mobile:* ${formData.mobile}
📧 *Email:* ${formData.email}
🏢 *Organization:* ${formData.organization || 'Not specified'}
💼 *Designation:* ${formData.designation || 'Not specified'}
🤖 *Robot Title:* ${formData.robotTitle}

📝 *Specifications:*
${formData.specifications}

${formData.referencePhoto ? `📎 *Reference Photo:* ${formData.referencePhoto.name}` : ''}

Thank you for your interest in our custom robotics solutions!
    `.trim();

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918608354107?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form and close modal
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
    
    // Show success message
    alert('Redirecting to WhatsApp. Please send the message to complete your request!');
  };

  const handleCardClick = (product: Product) => {
    if (product.id === 'customrobot') {
      navigate(product.route);
    } else {
      navigate(product.route);
    }
  };

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
    <div className="pt-20">
      <section className="relative py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4 py-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-green-500">Products</span>
            </h1>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of innovative robotics solutions designed for education, research, and industry
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-500 cursor-pointer overflow-visible"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onClick={() => handleCardClick(product)}
              >
                {/* Robot Image - Large size popping out */}
                <motion.div 
                  className="absolute -top-20 -right-16 w-72 h-72 z-10"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.2))'
                    }}
                  />
                </motion.div>

                {/* Content Section */}
                <div className="relative z-0 pr-32">
                  <motion.h2 
                    className="text-3xl font-semibold mb-4"
                    whileHover={{ color: "#10b981" }}
                  >
                    {product.name}
                  </motion.h2>
                  <p className="text-xl text-green-500 font-medium mb-4">{product.description}</p>
                  <p className="text-gray-600 mb-6 line-clamp-3">{product.details}</p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-8"
                    variants={containerVariants}
                  >
                    {product.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-3 text-green-500 font-semibold"
                    whileHover={{ x: 10 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Robot CTA Section */}
          <motion.div
            className="max-w-4xl mx-auto bg-gray-900 text-white rounded-xl p-8 relative overflow-hidden mt-16"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <ArrowRight className="w-full h-full" />
              </motion.div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Need a <span className="text-green-500">Custom Robot?</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Tell us your requirements and we'll build the perfect robotic solution for your specific needs.
                From concept to deployment, we've got you covered.
              </p>
              
              <button
                onClick={() => setShowForm(true)}
                className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                Get Custom Quote
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
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

export default ProductsPage;
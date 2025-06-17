import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Youtube, Globe, Clock, Calendar } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    size: 10 + Math.random() * 20,
  }));

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-green-500" />,
      title: 'Email',
      details: [
        'karthikeshrobotics@gmail.com',
        'support@karthikeshrobotics.in'
      ],
      link: 'mailto:karthikeshrobotics@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-green-500" />,
      title: 'Phone',
      details: ['+91 86083 54107'],
      link: 'tel:+918608354107'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-500" />,
      title: 'Location',
      details: [
        'Karthikesh Robotics Private Limited',
        'Pammal, Chennai',
        'Tamil Nadu 600075, India'
      ],
      link: 'https://g.co/kgs/8mzJfzy'
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: 'Working Hours',
      details: [
        'Monday - Saturday',
        '9:00 AM - 6:00 PM IST'
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-8 w-8" />,
      name: 'Instagram',
      handle: '@karthikeshrobotics',
      link: 'https://instagram.com/karthikesh_robotics',
      color: 'hover:bg-pink-500'
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      name: 'LinkedIn',
      handle: 'Karthikesh Robotics',
      link: 'https://linkedin.com/company/karthikeshrobotics',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      name: 'YouTube',
      handle: 'Karthikesh Robotics',
      link: 'https://youtube.com/@karthikeshrobotics',
      color: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      {floatingElements.map(element => (
        <motion.div
          key={element.id}
          className="absolute opacity-10"
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
            opacity: [0.1, 0.2, 0.1],
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our robotics solutions? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {info.link ? (
                            <a
                              href={info.link}
                              className="hover:text-green-500 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:text-white transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                    <div>
                      <p className="font-semibold">{social.name}</p>
                      <p className="text-sm text-gray-600">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.970970819419!2d80.12826067574757!3d12.973708514830724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fc381bde825%3A0x641e33c1866b1cc8!2sKarthikesh%20Robotics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1748016910878!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karthikesh Robotics Location"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Location Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <p className="text-gray-600 mb-4">
                Located in the vibrant city of Chennai, our facility is equipped with state-of-the-art robotics equipment and a dedicated workspace for innovation and learning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Easy access from major highways</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Ample parking space available</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Close to public transportation</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Getting Here</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-500">By Car</h3>
                  <p className="text-gray-600">15 minutes from Chennai International Airport</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-500">By Bus</h3>
                  <p className="text-gray-600">Multiple bus routes available with stops nearby</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-500">By Train</h3>
                  <p className="text-gray-600">Accessible from major railway stations</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Business Hours Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-black text-white rounded-2xl shadow-xl p-8 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span>Monday - Saturday: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Response</h2>
              <p className="text-gray-400">
                We typically respond to inquiries within 24 hours during business days.
                For urgent matters, please contact us via phone.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Media Embeds */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LinkedIn Section with Icon and Button */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-8">
            <div className="text-center text-blue-700 mb-4">
              <FaLinkedin size={100} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black">LinkedIn Page</h3>
            <a
              href="https://www.linkedin.com/company/karthikesh-robotics/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Visit our LinkedIn Page
            </a>
          </div>

          {/* Instagram Embed */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-black text-white">
              <h3 className="text-xl font-semibold mb-2">Instagram Feed</h3>
            </div>
            <div className="h-[600px] overflow-hidden">
              <iframe
                src="https://www.instagram.com/karthikesh_robotics/embed"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                title="Instagram Feed"
              ></iframe>
            </div>
          </div>

          {/* YouTube Embed */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-black text-white">
              <h3 className="text-xl font-semibold mb-2">Latest Videos</h3>
            </div>
            <div className="h-[600px] overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sxvZ4oxeWt8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Feed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
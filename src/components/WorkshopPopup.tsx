import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkshopPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="aspect-video">
              <img
                src="/assets/workshop.png"
                alt="Workshop Banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                ROS 2 Basics and Roadmap to Master 
              </h3>
              <p className="text-gray-600 mb-4">
                Join our comprehensive workshop on ROS 2, covering Basics and Complete Road map to master ROS2
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Date:</span>
                  <span>June 29, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Time:</span>
                  <span>9:30 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Mode:</span>
                  <span>Online</span>
                </div>
              </div>
              <a
                href="https://unstop.com/o/frM5Agm?utm_medium=Share&utm_source=shortUrl"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-black text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkshopPopup;
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Book, Clock, Star, Users, ArrowLeft, Check, Play, Download, Award, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const courses = {
  'ros2-beginner': {
    title: 'ROS2 for Beginners',
    description: 'Start your journey with ROS2. Learn the fundamentals of Robot Operating System 2.',
    level: 'Beginner',
    duration: '20 hours',
    students: 1200,
    rating: 4.8,
    price: 2999,
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    instructor: 'Karthikesh J G',
    sections: [
      {
        title: 'Introduction to ROS2',
        lectures: [
          { title: 'What is ROS2?', duration: '10:00' },
          { title: 'Setting up your development environment', duration: '15:00' },
          { title: 'Understanding ROS2 concepts', duration: '20:00' }
        ]
      },
      {
        title: 'Basic Concepts',
        lectures: [
          { title: 'Nodes and Topics', duration: '25:00' },
          { title: 'Publishers and Subscribers', duration: '20:00' },
          { title: 'Services and Actions', duration: '30:00' }
        ]
      },
      {
        title: 'Practical Implementation',
        lectures: [
          { title: 'Creating your first ROS2 package', duration: '45:00' },
          { title: 'Building and running nodes', duration: '35:00' },
          { title: 'Debugging ROS2 applications', duration: '40:00' }
        ]
      }
    ],
    features: [
      'Lifetime access to course materials',
      'Hands-on projects and assignments',
      'Certificate of completion',
      'Access to community forum',
      'Regular content updates',
      'Direct instructor support'
    ]
  },
  // Add other courses here...
};

const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const course = courses[id as keyof typeof courses];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Course not found</h1>
            <Link to="/courses" className="text-green-500 hover:text-green-600">
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    addToCart({
      id: id as string,
      name: course.title,
      price: course.price,
      image: course.image
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <Link
          to="/courses"
          className="inline-flex items-center text-gray-600 hover:text-green-500 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-green-500" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-green-500" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Course Content</h2>
                    <div className="space-y-4">
                      {course.sections.map((section, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                          <div className="bg-gray-50 p-4 font-semibold">
                            {section.title}
                          </div>
                          <div className="divide-y">
                            {section.lectures.map((lecture, lectureIndex) => (
                              <div key={lectureIndex} className="p-4 flex items-center justify-between hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                  <Play className="h-4 w-4 text-green-500" />
                                  <span>{lecture.title}</span>
                                </div>
                                <span className="text-gray-500 text-sm">
                                  {lecture.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold mb-6">
                  ₹{course.price.toLocaleString()}
                </div>

                <button
                  onClick={handleEnroll}
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg mb-4 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-green-500" />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-green-500" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-green-500" />
                    <span>Lifetime access</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
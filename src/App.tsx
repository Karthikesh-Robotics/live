import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PuffLoader } from 'react-spinners';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Internship from './components/internship';
import Achievements from './pages/Achievements';
import WorkshopDetail from './pages/WorkshopDetail';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import BumpyBuildSteps from './pages/BumpyBuildSteps';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import CommunityPage from './pages/CommunityPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetail from './pages/CourseDetail';
import Cart from './components/Cart';
import NotFound from './pages/NotFound';
import WorkshopPopup from './components/WorkshopPopup';
import CustomRobotsPage from './pages/customrobot';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Karthikesh Robotics | Autonomous Robotics Solutions';
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <PuffLoader color="#10b981" size={100} />
          <p className="mt-4 text-white text-xl">Booting the Future of Robotics...</p>
        </div>
      </div>
    );
  }

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen font-sans text-gray-900">
          <Navbar />
          <WorkshopPopup />
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <Hero />
                    <Services />
                    <Testimonials />
                    <Workshops />
                    <About />
                    <Internship />
                    <Achievements />
                    <Contact />
                  </motion.div>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/bumpy" element={<BumpyBuildSteps />} />
              <Route path="/products/customrobot" element={<CustomRobotsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/workshop/:id" element={<WorkshopDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
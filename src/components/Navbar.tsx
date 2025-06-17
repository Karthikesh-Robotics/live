import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Careers', path: '/careers' },
    { name: 'Community', path: '/community' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#202020]/90 backdrop-blur-md py-2 shadow-lg' : 'bg-[#202020] py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Karthikesh Robotics Logo"
              className="h-8 w-8 mr-2 object-contain"
            />
            <span className="text-white font-semibold text-xl">
              Karthikesh Robotics
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`text-white hover:text-green-400 transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-green-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/cart"
              className="relative text-white hover:text-green-400 transition-colors duration-300"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`text-white hover:text-green-400 transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-green-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/cart"
              onClick={handleNavClick}
              className="text-white hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "Blog", to: "/blog" },
  { label: "ESG", to: "/esg" },
  { label: "Contact", to: "/contact" },
];

const dropdownItems = [
  { label: "Supply of Fresh Produce", to: "/solution/form1" },
  { label: "Large Volume Trading", to: "/solution/form2" },
  { label: "Agri Services", to: "/solution/form3" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <nav className="bg-white shadow-md fixed w-screen z-50 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/logo/logo-removebg-preview.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-gray-800 text-lg font-semibold hover:text-green-600 transition duration-300"
            >
              {item.label}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 text-lg font-semibold flex items-center hover:text-green-600 transition duration-300"
            >
              Our Solution <ChevronDown size={18} className="ml-1" />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 5 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0  mt-5 w-56 bg-white border border-gray-200 shadow-lg rounded-md"
                >
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3  py-3 text-gray-800 hover:text-green-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 h-full w-56 bg-white shadow-lg p-5"
          >
            <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
            <div className="mt-10 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-gray-800 text-lg font-semibold hover:text-green-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center w-full text-gray-800 text-lg font-semibold hover:text-green-600"
                >
                  Our Solution <ChevronDown size={18} className="ml-1" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="pl-4 mt-5"
                    >
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block text-gray-800 text-md mt-3 hover:text-green-600 transition duration-300"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
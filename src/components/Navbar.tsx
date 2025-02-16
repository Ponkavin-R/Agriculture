// spell-checker: disable
import { Menu, X, ChevronDown } from 'lucide-react';
// spell-checker: enable
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleDropdown = () => {
    // console.log("dropdown clicked before: ", isDropdownOpen);
    setIsDropdownOpen(!isDropdownOpen);
  }
  // console.log("dropdown clicked after: ", isDropdownOpen);



  return (
    <nav className="bg-white bg-opacity-60 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={'/logo/logo-removebg-preview.png'} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="relative text-gray-800 text-lg font-bold ml-10 after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:h-[3px] after:w-full after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left hidden lg:block">Home</Link>
            <Link to="/our-story" className="relative text-gray-800 text-lg font-bold ml-10 after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:h-[3px] after:w-full after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left hidden lg:block">Our Story</Link>
            <Link to="/blog" className="relative text-gray-800 text-lg font-bold ml-10 after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:h-[3px] after:w-full after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left hidden lg:block">Blog</Link>    
            <Link to="/esg" className="relative text-gray-800 text-lg font-bold ml-10 after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:h-[3px] after:w-full after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left hidden lg:block">ESG</Link>
            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative text-gray-800 text-lg font-bold ml-1 after:content-[''] after:absolute after:left-4 after:bottom-[-10px] after:h-[3px] after:w-full after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left hidden lg:block"
              >
                Our Solution <ChevronDown size={18} className="ml-32 mt-[-20px]" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md">
                   <Link
                    to="/solution/form1"
                    className="block px-4 py-3 text-gray-800 font-semibold text-[16px] hover:text-green-600 transform rounded-md cursor-pointer transition-transform duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-green-600"
                  >
                    Supply of Fresh Produce
                  </Link>
                  <Link
                    to="/solution/form2"
                    className="block px-4 py-3 text-gray-800 font-semibold text-[16px] hover:text-green-600 transform rounded-md cursor-pointer transition-transform duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-green-600"
                  >
                    Large Volume Trading
                  </Link>
                 
                </div>
              )}
            </div>

            <Link to="/contact" className="relative text-gray-800 text-lg font-bold ml-10 after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:h-[3px] after:w-full after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left hidden lg:block">Contact</Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-8 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="relative text-gray-800 text-lg font-bold ml-3 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] after:w-14 after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left block md:inline">Home</Link>
            <Link to="/our-story" className="relative text-gray-800 text-lg font-bold ml-3 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] after:w-24 after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left block md:inline">Our Story</Link>
            <Link to="/our-story" className="relative text-gray-800 text-lg font-bold ml-3 after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:h-[3px] after:w-full after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left hidden lg:block">Blog</Link>
            <Link to="/our-story" className="relative text-gray-800 text-lg font-bold ml-3 after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:h-[3px] after:w-full after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left hidden lg:block">ESG</Link>
            <div>
              <button
                onClick={handleDropdown}
                className="flex items-center w-full px-3 py-2 text-gray-800 hover:text-green-700 text-[18px] font-bold"
              >
                Our Solution <ChevronDown size={18} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <a
                    href="/solution/form1"
                    className="block px-4 py-3 text-gray-800 font-semibold text-[16px] hover:text-green-600 transform rounded-md cursor-pointer transition-transform duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-green-600"
                  // onClick={() => setIsOpen(false)}
                  >
                     Supply of Fresh Produce
                  </a>
                  <a
                    href="/solution/form2"
                    className="block px-4 py-3 text-gray-800 font-semibold text-[16px] hover:text-green-600 transform rounded-md cursor-pointer transition-transform duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-green-600"
                  // onClick={() => setIsOpen(false)}
                  >
                    Large Volume Trading
                  </a>
                  <a
                    href="/solution/form2"
                    className="block px-4 py-3 text-gray-800 font-semibold text-[16px] hover:text-green-600 transform rounded-md cursor-pointer transition-transform duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-green-600"
                  // onClick={() => setIsOpen(false)}
                  >
                    Agri Services
                  </a>
                </div>
              )}
            </div>
            <Link to="/contact" className="relative text-gray-800 text-lg font-bold ml-3 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] after:w-16 after:scale-x-0 after:bg-green-600 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:text-green-600 hover:after:origin-left block md:inline">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rose-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tight">
              AutoFin<span className="text-amber-400">Pro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-rose-700 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-rose-700 transition duration-300">
              About
            </Link>
            <Link to="/loan-types" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-rose-700 transition duration-300">
              Loan Types
            </Link>
            <Link to="/calculator" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-rose-700 transition duration-300">
              Calculator
            </Link>
            <Link to="/apply" className="px-3 py-2 rounded-md text-sm font-medium bg-amber-500 text-gray-900 hover:bg-amber-400 transition duration-300">
              Apply Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-rose-700 focus:outline-none transition duration-300"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-rose-900`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rose-800 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rose-800 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/loan-types"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rose-800 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Loan Types
          </Link>
          <Link
            to="/calculator"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rose-800 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Calculator
          </Link>
          <Link
            to="/apply"
            className="block px-3 py-2 rounded-md text-base font-medium bg-amber-500 text-gray-900 hover:bg-amber-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
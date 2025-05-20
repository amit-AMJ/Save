import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            GameZone
          </span>
        </Link>

        <div className="hidden md:flex space-x-6 text-xl font-bold">
          <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
          <Link to="/category/adventure" className="hover:text-pink-400 transition-colors">Adventure</Link>
          <Link to="/category/girls" className="hover:text-pink-400 transition-colors">Girls</Link>
          <Link to="/category/puzzle" className="hover:text-pink-400 transition-colors">Puzzle</Link>
        </div>

        <button
          className="md:hidden text-pink-400 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-pink-500 px-4 py-4 space-y-3 text-lg font-semibold">
          <Link to="/" className="block hover:text-pink-400" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/category/adventure" className="block hover:text-pink-400" onClick={toggleMobileMenu}>Adventure</Link>
          <Link to="/category/girls" className="block hover:text-pink-400" onClick={toggleMobileMenu}>Girls</Link>
          <Link to="/category/puzzle" className="block hover:text-pink-400" onClick={toggleMobileMenu}>Puzzle</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="fixed w-full max-w-md z-50 bg-gray-800/90 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/games" className="flex items-center space-x-2">
          <motion.span 
            animate={{ 
              textShadow: [
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00de, 0 0 20px #ff00de",
                "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00de, 0 0 40px #ff00de",
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00de, 0 0 20px #ff00de"
              ] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-xl font-bold"
          >
            GAMEZONE
          </motion.span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-pink-500"
    >
      <Link to={`/mobile-game/game/${game.id}`}>
        <div className="relative">
          <img 
            src={game.thumb} 
            alt={game.title} 
            className="w-full h-32 object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
            <h3 className="text-white font-bold text-sm">{game.title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard;
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GameCard = ({ game }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-pink-500"
    >
      <Link to={`/game/${game.id}`}>
        <div className="relative">
          <img 
            src={game.thumb} 
            alt={game.title} 
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-white font-bold text-lg">{game.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {game.tags.split(',').slice(0, 3).map(tag => (
              <span key={tag.trim()} className="text-xs bg-pink-600 rounded-full px-2 py-1">
                {tag.trim()}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm line-clamp-2">{game.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard;
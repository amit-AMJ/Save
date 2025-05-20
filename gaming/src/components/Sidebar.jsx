import { Link } from 'react-router-dom';
import AdSpace from './AdSpace';

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-gray-800 p-4 overflow-y-auto">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4 text-pink-400">Categories</h3>
        <ul className="space-y-2">
          <li><Link to="/category/adventure" className="block hover:bg-gray-700 p-2 rounded">Adventure</Link></li>
          <li><Link to="/category/girls" className="block hover:bg-gray-700 p-2 rounded">Girls</Link></li>
          <li><Link to="/category/puzzle" className="block hover:bg-gray-700 p-2 rounded">Puzzle</Link></li>
          <li><Link to="/category/sports" className="block hover:bg-gray-700 p-2 rounded">Sports</Link></li>
          <li><Link to="/category/racing" className="block hover:bg-gray-700 p-2 rounded">Racing</Link></li>
        </ul>
      </div>

      <AdSpace size="skyscraper">
        <div className="flex flex-col items-start w-full px-4 py-2">
          <h3 className="text-xl font-bold mb-4 text-pink-400">Top Games</h3>
          <ul className="space-y-2 w-full">
            <li><Link to="/game/64568" className="block hover:bg-gray-700 p-2 rounded w-full">Defense Designer</Link></li>
            <li><Link to="/game/65117" className="block hover:bg-gray-700 p-2 rounded w-full">Planetary Plunge</Link></li>
            <li><Link to="/game/32198" className="block hover:bg-gray-700 p-2 rounded w-full">Room Escape 3D</Link></li>
            <li><Link to="/game/65994" className="block hover:bg-gray-700 p-2 rounded w-full">Gemstone Glam</Link></li>
            <li><Link to="/game/64176" className="block hover:bg-gray-700 p-2 rounded w-full">Space Drift</Link></li>
            <li><Link to="/game/65982" className="block hover:bg-gray-700 p-2 rounded w-full">FantasticLandia</Link></li>
          </ul>
        </div>
      </AdSpace>
    </aside>
  );
};

export default Sidebar;

import { useParams } from 'react-router-dom';
import  gamesData  from '.././gamesData';
import BottomAnchorAd from '../utils/BottomAnchorAd';
import GPTAd from '../utils/GPTAd';

const GameDetails = () => {
  const { id } = useParams();
  const game = gamesData.find(game => game.id === id);
  
  if (!game) {
    return <div className="text-center py-20">Game not found</div>;
  }

  return (
    <div className="pt-16 container mx-auto px-4">
      <div className="flex justify-center pb-3">
        <GPTAd
          adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native"
          sizes={[[728, 90], [300, 250]]}
          divId="div-gpt-ad-top"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4 text-white">{game.title}</h1>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
            <iframe 
              src={game.url} 
              title={game.title}
              width={game.width}
              height={game.height}
              className="w-full h-96 border-0"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Description</h2>
            <p className="text-gray-300 mb-6">{game.description}</p>
            
            <h2 className="text-2xl font-bold mb-4 text-pink-400">How to Play</h2>
            <p className="text-gray-300">{game.instructions}</p>
          </div>
        </div>
        
        <div className="space-y-6">
        {/* <div className="flex justify-center pb-3">
        <GPTAd
          adUnitPath="/6355419/Travel/Europe/France/Paris"
          sizes={[[728, 90], [300, 250]]}
          divId="div-gpt-ad-middel"
        />
      </div> */}
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-pink-400">Game Info</h3>
            <div className="space-y-3">
              <div>
                <span className="text-gray-400">Category:</span>
                <span className="ml-2 text-white">{game.category}</span>
              </div>
              <div>
                <span className="text-gray-400">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {game.tags.split(',').map(tag => (
                    <span key={tag.trim()} className="text-xs bg-gray-700 rounded-full px-3 py-1">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-pink-400">Similar Games</h3>
            <div className="space-y-4">
              {gamesData.filter(g => g.category === game.category && g.id !== game.id).slice(0, 3).map(game => (
                <div key={game.id} className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
                  <img src={game.thumb} alt={game.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium">{game.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-1">{game.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
<BottomAnchorAd adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native" />
    </div>
  );
};

export default GameDetails;
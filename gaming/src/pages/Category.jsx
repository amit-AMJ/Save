import { useParams } from 'react-router-dom';
import  gamesData  from '.././gamesData';
import GameCard from '../components/GameCard';
import GPTAd from '../utils/GPTAd';
import BottomAnchorAd from '../utils/BottomAnchorAd';

const Category = () => {
  const { category } = useParams();
  const categoryGames = gamesData.filter(game => 
    game.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="pt-16 container mx-auto px-4 py-8">
        <div className="flex justify-center pb-3">
        <GPTAd
          adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native"
          sizes={[[728, 90], [300, 250]]}
          divId="div-gpt-ad-top"
        />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-white capitalize">
        {category} Games
      </h1>
      {categoryGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">No games found in this category</p>
        </div>
      )}
      <BottomAnchorAd adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native" />
    </div>
  );
};

export default Category;
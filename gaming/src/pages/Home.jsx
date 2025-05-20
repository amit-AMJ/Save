import gamesData from '.././gamesData';
import GameCard from '../components/GameCard';
import BottomAnchorAd from "../utils/BottomAnchorAd";
import GPTAd from "../utils/GPTAd";

const Home = () => {
  return (
    <div className="pt-1">
        <div className="flex justify-center">
        <GPTAd
          adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native"
          sizes={[[728, 90], [300, 250]]}
          divId="div-gpt-ad-top"
        />
      </div>
      <section className="relative h-64 md:h-96 bg-gradient-to-r from-purple-900 to-pink-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-300">
            Play Free Online Games
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            The best collection of free-to-play HTML5 games in one place!
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-pink-500 pb-2 inline-block">
          Featured Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gamesData.slice(0, 8).map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
      <BottomAnchorAd adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native" />
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-pink-500 pb-2 inline-block">
          Popular Categories
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Action', 'Adventure', 'Girls', 'Puzzle', 'Racing', 'Sports', 'Strategy', 'Shooting'].map(category => (
            <div 
              key={category}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-pink-700 transition-colors cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{category}</h3>
              <p className="text-gray-400 text-sm mt-2">50+ games</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 
import gamesData from "../../gamesData";
import SubfolderGPTAd from "../../utils/SubfolderGPTAd";
import RewardedAd from "../../utils/RewardedAd";
import BottomAnchorAd from '../../utils/BottomAnchorAd';

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = gamesData.find((game) => game.id === id);

  if (!game) {
    return <div className="text-center py-20">Game not found</div>;
  }

  return (
    <div className="pt-16 pb-4 px-4">
      <button
        onClick={() => navigate(-1)}
        className=" mt-5 inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 text-pink-400 hover:text-white transition-colors duration-200 font-medium shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <h1 className="text-2xl font-bold mb-4 text-white">{game.title}</h1>

      <div className="bg-gray-700 rounded-xl overflow-hidden mb-6">
        <iframe
          src={game.url}
          title={game.title}
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mb-16 flex justify-center">
        <SubfolderGPTAd
          adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native"
          sizes={[
            [300, 250],
            [320, 480],
            [250, 250],
            [300, 100],
            "fluid",
            [336, 280],
          ]}
          divId="div-gpt-ad-top"
        />
      </div>

      <div className="bg-gray-700 rounded-xl p-4 mb-6">
        <h2 className="text-xl font-bold mb-2 text-pink-400">Description</h2>
        <p className="text-gray-300 mb-4">{game.description}</p>

        <h2 className="text-xl font-bold mb-2 text-pink-400">How to Play</h2>
        <p className="text-gray-300">{game.instructions}</p>
      </div>

      <div className="bg-gray-700 rounded-xl p-4 mb-6">
        <h3 className="text-lg font-bold mb-2 text-pink-400">Game Info</h3>
        <div className="flex flex-wrap gap-2">
          {game.tags.split(",").map((tag) => (
            <span
              key={tag.trim()}
              className="text-xs bg-gray-600 rounded-full px-3 py-1"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      <BottomAnchorAd adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native" />
      <RewardedAd adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_rewarded" />
    </div>
  );
};

export default GameDetails;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import GameCard from "../../components/mobile/GameCard";
import gamesData from "../../gamesData";
import SubfolderGPTAd from "../../utils/SubfolderGPTAd";

const GameList = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setGames(gamesData);
  }, []);

  return (
    <div className="pt-16 pb-4 px-4">
      <button
        onClick={() => navigate(-1)}
        className=" mt-5 inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 text-pink-400 hover:text-white transition-colors duration-200 font-medium shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
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
      <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        GAME COLLECTION
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;

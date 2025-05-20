import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gamesData from '../../gamesData';
import SubfolderGPTAd from "../../utils/SubfolderGPTAd";
import RewardedAd from "../../utils/RewardedAd";
import BottomAnchorAd from '../../utils/BottomAnchorAd';

const Home = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffled = [...gamesData].sort(() => 0.5 - Math.random());
    setGames(shuffled.slice(0, 12));
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-y-auto">
      <div className="flex flex-col items-center justify-center pt-10 pb-6 px-6 text-center">
         <div className="mb-16 flex justify-center">
              <SubfolderGPTAd
                adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native"
                sizes={[[300, 250], [320, 480], [250, 250], [300, 100], 'fluid', [336, 280]]}
                divId="div-gpt-ad-top"
              />
            </div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm bg-gray-800 rounded-xl p-8 shadow-2xl border border-purple-500/30 m-10"
        >
          <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            AGE VERIFICATION
          </h1>

          <p className="mb-8 text-gray-300">
            This website contains games. Please verify your age to continue.
          </p>

          <div className="flex flex-col space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-bold shadow-lg"
              onClick={() => {
                setAgeVerified(true);
                navigate('/mobile-game/games');
              }}
            >
              I'm 18 or Older
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-lg font-bold shadow-lg"
              onClick={() => {
                setAgeVerified(false);
                navigate('/mobile-game/games');
              }}
            >
              I'm Under 18
            </motion.button>
          </div>
        </motion.div>

        <div className="w-full max-w-6xl">
          <h2 className="text-xl font-bold mb-4 text-center">
            Game Preview
          </h2>

          <div className={`grid grid-cols-2 gap-4 ${!ageVerified ? 'opacity-70' : ''}`}>
            {games.map((game) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: ageVerified ? 1.03 : 1 }}
                whileTap={{ scale: ageVerified ? 0.97 : 1 }}
                onClick={() => {
                  if (ageVerified) {
                    navigate(`/game/${game.id}`);
                  }
                }}
                className={`cursor-pointer relative ${!ageVerified ? 'pointer-events-none' : ''}`}
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-800 relative">
                  <img
                    src={game.thumb}
                    alt={game.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {!ageVerified && (
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4">
                      <svg
                        className="w-10 h-10 text-white mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <p className="text-sm text-center">Verify age to play</p>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium truncate">{game.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-gray-800 p-2 text-center text-xs text-gray-400">
       <RewardedAd adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_rewarded" />
       <BottomAnchorAd adUnitPath="/23270265301/sahajanand_gamejoystix.com_codeless_native" />
      </div>
    </div>
  );
};

export default Home;

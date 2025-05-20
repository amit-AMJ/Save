const AdSpace = ({ size = 'banner' }) => {
  const adStyles = {
    leaderboard: 'w-full h-20',
    banner: 'w-full h-32',
    skyscraper: 'w-full h-96',
    square: 'w-48 h-48'
  };
  
  return (
    <div className={`bg-gray-700 border-2 border-dashed border-pink-500/50 rounded-lg flex items-center justify-center ${adStyles[size]} animate-pulse`}>
      <span className="text-gray-400 text-sm">Advertisement</span>
    </div>
  );
};

export default AdSpace;
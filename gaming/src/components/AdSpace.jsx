const AdSpace = ({ size = 'banner', children }) => {
  const adStyles = {
    leaderboard: 'w-full h-20 md:h-28 m-8',
    banner: 'w-full h-32 my-8',
    skyscraper: 'w-full h-96',
    square: 'w-48 h-48'
  };
  
  return (
    <div className={`bg-gray-800 border-2 border-dashed border-pink-500 rounded-lg flex items-center justify-center ${adStyles[size]}`}>
      {children || <span className="text-gray-400">Advertisement</span>}
    </div>
  );
};

export default AdSpace;

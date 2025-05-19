const AdSpace = ({ size = 'medium' }) => {
  const sizes = {
    small: 'h-20',
    medium: 'h-28',
    large: 'h-40',
    banner: 'h-16 w-full'
  };

  return (
    <div className={`${sizes[size]} bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl flex items-center justify-center my-4 animate-pulse`}>
      <span className="text-gray-500 text-sm font-medium">Advertisement</span>
    </div>
  );
};

export default AdSpace;
const AdSpace = ({ size = 'medium', className = '' }) => {
  const adStyles = {
    small: 'h-20 md:h-24',
    medium: 'h-32 md:h-40',
    large: 'h-48 md:h-60',
    banner: 'h-20 w-full'
  };

  return (
    <div className={`${adStyles[size]} ${className} bg-gray-200 rounded-lg flex items-center justify-center my-4 animate-pulse`}>
      <span className="text-gray-500 font-medium">Advertisement Space</span>
    </div>
  );
};

export default AdSpace;
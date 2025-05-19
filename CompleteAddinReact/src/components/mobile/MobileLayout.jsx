import React from "react";

const MobileLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen max-w-sm mx-auto bg-white shadow-md overflow-hidden flex flex-col">
      {/* Mobile container (max width 640px), full height */}
      {children}
    </div>
  );
};

export default MobileLayout;

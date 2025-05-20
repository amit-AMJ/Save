import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoHome = () => {
    const isMobilePath = location.pathname.startsWith("/mobile-game");
    navigate(isMobilePath ? "/mobile-game" : "/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="text-center max-w-sm space-y-6">
        <h1 className="text-6xl font-bold text-purple-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600 text-sm">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={handleGoHome}
          className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;

import { Outlet, useLocation } from "react-router-dom";
import DesktopNavbar from "./Navbar";
import Sidebar from "./Sidebar";

import MobileNavbar from "./mobile/Navbar";
import { Link } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isMobilePage = location.pathname.startsWith("/mobile-game");

  if (isMobilePage) {
    return (
      <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-radial-gradient from-purple-900/20 to-transparent"></div>
        <div className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto bg-gray-800/90 backdrop-blur-sm shadow-2xl">
          <MobileNavbar />
          <main className="flex-1 p-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="bg-gray-800 border-2 border-dashed border-pink-500 rounded-lg flex items-center justify-center w-full h-20 md:h-28"></div>
      <DesktopNavbar />

      <div className="md:hidden px-4 py-3">
        <div className="bg-gray-800 border border-pink-500 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4 text-pink-400">Top Games</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/game/64568"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                Defense Designer
              </Link>
            </li>
            <li>
              <Link
                to="/game/65117"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                Planetary Plunge
              </Link>
            </li>
            <li>
              <Link
                to="/game/32198"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                Room Escape 3D
              </Link>
            </li>
            <li>
              <Link
                to="/game/65994"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                Gemstone Glam
              </Link>
            </li>
            <li>
              <Link
                to="/game/64176"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                Space Drift
              </Link>
            </li>
            <li>
              <Link
                to="/game/65982"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                FantasticLandia
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

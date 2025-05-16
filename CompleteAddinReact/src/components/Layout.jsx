import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  const isMobilePage = location.pathname.startsWith("/vehicle-loan");

  if (isMobilePage) {
    return (
      <div className="h-screen w-screen flex items-start justify-center bg-gray-100 overflow-y-auto">
        <div className="bg-white w-full max-w-md h-[90vh] ">
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

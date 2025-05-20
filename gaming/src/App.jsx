import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Layout from './components/Layout';
import ScrollToTop from './utils/ScrollToTop';

// Mobile pages
import MobileHome from './pages/mobile/Home';
import MobileGameList from './pages/mobile/GameList';
import MobileGameDetails from './pages/mobile/GameDetails';

// Web pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GameDetails from './pages/GameDetails';
import Category from './pages/Category';

function App() {
  return (
    <>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Web Routes */}
          <Route index element={<Home />} />
          <Route path="game/:id" element={<GameDetails />} />
          <Route path="category/:category" element={<Category />} />

          {/* Mobile Nested Routes under /vehicle-loan */}
          <Route path="mobile-game">
            <Route index element={<MobileHome />} />
            <Route path="games" element={<MobileGameList />} />
            <Route path="game/:id" element={<MobileGameDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

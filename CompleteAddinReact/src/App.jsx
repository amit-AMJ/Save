import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Layout from './components/Layout';

// Mobile pages
import AgeVerification from './pages/mobile/AgeVerification';
import LoanProducts from './pages/mobile/LoanProducts';
import LoanDetails from './pages/mobile/LoanDetails';
import Application from './pages/mobile/Application';
import MobileNotFound from './pages/mobile/MobileNotFound';

// Web pages
import Home from './pages/Home';
import About from './pages/About';
import LoanTypes from './pages/LoanTypes';
import Calculator from './pages/Calculator';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Web Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="loan-types" element={<LoanTypes />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="apply" element={<Apply />} />
          <Route path="contact" element={<Contact />} />

          {/* Mobile Nested Routes under /vehicle-loan */}
          <Route path="vehicle-loan">
            <Route index element={<AgeVerification />} />
            <Route path="loan-products" element={<LoanProducts />} />
            <Route path="loan-details/:loanType" element={<LoanDetails />} />
            <Route path="application" element={<Application />} />
            <Route path="*" element={<MobileNotFound />} />
          </Route>

          {/* Fallback for unmatched non-mobile routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;




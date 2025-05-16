const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AutoFinPro</h3>
            <p className="text-gray-300 text-sm">
              Your trusted partner for vehicle financing solutions with competitive rates and flexible terms.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Loan Calculator</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Apply Online</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Loan Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition duration-300">New Car Loans</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Used Car Loans</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Refinancing</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Commercial Vehicles</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Disclosures</a></li>
              <li><a href="#" className="hover:text-amber-400 transition duration-300">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} AutoFinPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
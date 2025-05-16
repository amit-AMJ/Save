import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SubfolderGPTAd from "../../utils/SubfolderGPTAd";

const loanData = {
  'new-car': {
    title: "New Car Loan",
    rate: "3.99%",
    term: "1-7 Years",
    features: [
      "Competitive interest rates",
      "Flexible repayment terms",
      "No prepayment penalties",
      "Fast approval process"
    ],
    description: "Finance your brand new vehicle with our competitive rates and flexible terms designed for new car buyers."
  },
  'used-car': {
    title: "Used Car Loan",
    rate: "4.99%",
    term: "1-5 Years",
    features: [
      "Quality pre-owned vehicles",
      "Higher mileage options",
      "Vehicle age up to 10 years",
      "Quick financing decisions"
    ],
    description: "Get behind the wheel of a quality used vehicle with financing options to match your budget and needs."
  },
  'truck': {
    title: "Truck Loan",
    rate: "4.49%",
    term: "1-6 Years",
    features: [
      "Heavy-duty financing",
      "Commercial options available",
      "Higher loan amounts",
      "Specialized terms"
    ],
    description: "Whether for work or personal use, our truck loans provide the financing power you need."
  },
  'motorcycle': {
    title: "Motorcycle Loan",
    rate: "5.25%",
    term: "1-4 Years",
    features: [
      "Specialized motorcycle financing",
      "New and used options",
      "Quick ride-away approval",
      "Competitive rates"
    ],
    description: "Hit the open road on your dream bike with financing tailored for motorcycle enthusiasts."
  }
};

const LoanDetails = () => {
  const { loanType } = useParams();
  const navigate = useNavigate();
  const loan = loanData[loanType] || loanData['new-car'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 bg-rose-700 text-white p-4 shadow-md z-10 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="mr-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <h1 className="text-xl font-bold">{loan.title}</h1>
      </div>
      
      <div className="p-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-sm mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-sm text-gray-500">Interest Rate</span>
              <h2 className="text-2xl font-bold text-rose-600">{loan.rate}</h2>
            </div>
            <div>
              <span className="text-sm text-gray-500">Loan Term</span>
              <h2 className="text-xl font-semibold">{loan.term}</h2>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{loan.description}</p>
          
          <h3 className="font-semibold text-gray-800 mb-2">Features:</h3>
          <ul className="space-y-2">
            {loan.features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-rose-500 mr-2">•</span>
                <span className="text-gray-600">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
         <div className="mb-16 flex justify-center">
              <SubfolderGPTAd
                adUnitPath="/21952429235/sahajanand_credinest.info_native"
                sizes={[[300, 250], [320, 480], [250, 250], [300, 100], 'fluid', [336, 280]]}
                divId="div-gpt-ad-top"
              />
            </div>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate('/vehicle-loan/application')}
          className="w-full py-3 px-6 bg-amber-500 text-gray-900 font-medium rounded-lg shadow-md mt-4"
        >
          Apply for this Loan
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LoanDetails;
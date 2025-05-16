import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SubfolderGPTAd from "../../utils/SubfolderGPTAd";
import LoanOption from "../../components/mobile/LoanOption";
import { FaCar, FaTruck, FaMotorcycle } from "react-icons/fa";
import RewardedAd from "../../utils/RewardedAd";

const LoanProducts = () => {
  const navigate = useNavigate();

  const loanOptions = [
    {
      title: "New Car Loan",
      rate: "3.99",
      term: "1-7 Years",
      icon: <FaCar className="text-xl" />,
      onClick: () => navigate("/vehicle-loan/loan-details/new-car"),
    },
    {
      title: "Used Car Loan",
      rate: "4.99",
      term: "1-5 Years",
      icon: <FaCar className="text-xl" />,
      onClick: () => navigate("/vehicle-loan/loan-details/used-car"),
    },
    {
      title: "Truck Loan",
      rate: "4.49",
      term: "1-6 Years",
      icon: <FaTruck className="text-xl" />,
      onClick: () => navigate("/vehicle-loan/loan-details/truck"),
    },
    {
      title: "Motorcycle Loan",
      rate: "5.25",
      term: "1-4 Years",
      icon: <FaMotorcycle className="text-xl" />,
      onClick: () => navigate("/vehicle-loan/loan-details/motorcycle"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 bg-rose-700 text-white p-4 shadow-md z-10 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold">Loan Products</h1>
      </div>

      <div className="mb-16 flex justify-center">
        <SubfolderGPTAd
          adUnitPath="/21952429235/sahajanand_credinest.info_native"
          sizes={[
            [300, 250],
            [320, 480],
            [250, 250],
            [300, 100],
            "fluid",
            [336, 280],
          ]}
          divId="div-gpt-ad-top"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Choose a Loan Type
        </h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {loanOptions.map((option, index) => (
            <LoanOption key={index} {...option} />
          ))}
        </motion.div>
      </div>

      <div className="mb-16 flex justify-center">
        <RewardedAd adUnitPath="/23270265301/sahajanand_finorise.info_rewarded" />
      </div>

      <div className="p-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate("/vehicle-loan/application")}
          className="w-full py-3 px-6 bg-amber-500 text-gray-900 font-medium rounded-lg shadow-md"
        >
          Quick Apply Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LoanProducts;

import { motion } from 'framer-motion';

const LoanOption = ({ title, rate, term, icon, onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white p-4 rounded-xl shadow-md mb-4 cursor-pointer border-l-4 border-rose-500"
    >
      <div className="flex items-center">
        <div className="bg-rose-100 p-3 rounded-full mr-4 text-rose-600">
          {icon}
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-gray-800">{title}</h3>
          <div className="flex justify-between mt-1">
            <span className="text-sm text-gray-600">{rate}% rate</span>
            <span className="text-sm text-gray-600">{term} term</span>
          </div>
        </div>
        <div className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default LoanOption;
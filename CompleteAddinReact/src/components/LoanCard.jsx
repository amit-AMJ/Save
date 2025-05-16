import { motion } from 'framer-motion';

const LoanCard = ({ title, rate, term, description, icon }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-rose-100 text-rose-600 mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Interest Rate</p>
            <p className="text-2xl font-bold text-rose-600">{rate}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Term</p>
            <p className="text-xl font-semibold text-gray-800">{term}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full py-2 px-4 bg-amber-500 hover:bg-amber-400 text-gray-900 font-medium rounded-lg transition duration-300">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default LoanCard;
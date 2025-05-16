import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Application = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
        <h1 className="text-xl font-bold">Loan Application</h1>
      </div>
      
      <div className="p-4">
        {/* Progress Steps */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-rose-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                {stepNumber}
              </div>
              <span className="text-xs mt-1 text-gray-500">Step {stepNumber}</span>
            </div>
          ))}
        </div>
        
        {/* Form Steps */}
        <motion.div
          key={step}
          initial={{ x: step > 1 ? 50 : -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm mb-6"
        >
          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Loan Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Select loan type</option>
                    <option>New Car</option>
                    <option>Used Car</option>
                    <option>Truck</option>
                    <option>Motorcycle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Loan Amount</label>
                  <input 
                    type="text" 
                    placeholder="$" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Loan Term</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Select term</option>
                    <option>12 months</option>
                    <option>24 months</option>
                    <option>36 months</option>
                    <option>48 months</option>
                    <option>60 months</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Income</label>
                  <input 
                    type="text" 
                    placeholder="Annual income" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Vehicle Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Make</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Model</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Year</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Mileage (if used)</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
           
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              className="py-3 px-6 bg-gray-200 text-gray-800 font-medium rounded-lg"
            >
              Back
            </motion.button>
          )}
          
          {step < 3 ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              className="ml-auto py-3 px-6 bg-rose-600 text-white font-medium rounded-lg"
            >
              Continue
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/vehicle-loan/confirmation')}
              className="ml-auto py-3 px-6 bg-amber-500 text-gray-900 font-medium rounded-lg"
            >
              Submit Application
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Application;
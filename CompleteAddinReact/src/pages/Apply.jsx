import { motion } from 'framer-motion';
import { useState } from 'react';

const Apply = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: '',
    amount: '',
    term: '',
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    employment: {
      status: '',
      employer: '',
      income: ''
    },
    vehicle: {
      make: '',
      model: '',
      year: '',
      mileage: ''
    }
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply for Vehicle Financing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete our simple application to get pre-approved for your vehicle loan
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div 
                key={stepNumber}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-rose-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                {stepNumber}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-rose-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Steps */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 mb-8"
          key={step}
          initial={{ opacity: 0, x: step > 1 ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Loan Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Type
                  </label>
                  <select
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  >
                    <option value="">Select loan type</option>
                    <option value="new-car">New Car</option>
                    <option value="used-car">Used Car</option>
                    <option value="truck">Truck</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="rv">RV/Camper</option>
                    <option value="commercial">Commercial Vehicle</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount Requested
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="$"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Loan Term (months)
                  </label>
                  <select
                    id="term"
                    name="term"
                    value={formData.term}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  >
                    <option value="">Select term</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                    <option value="72">72 months</option>
                    <option value="84">84 months</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.personalInfo.firstName}
                    onChange={(e) => handleChange(e, 'personalInfo')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.personalInfo.lastName}
                    onChange={(e) => handleChange(e, 'personalInfo')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleChange(e, 'personalInfo')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handleChange(e, 'personalInfo')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Employment Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Employment Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.employment.status}
                    onChange={(e) => handleChange(e, 'employment')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  >
                    <option value="">Select employment status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="retired">Retired</option>
                    <option value="student">Student</option>
                    <option value="unemployed">Unemployed</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="employer" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Employer
                  </label>
                  <input
                    type="text"
                    id="employer"
                    name="employer"
                    value={formData.employment.employer}
                    onChange={(e) => handleChange(e, 'employment')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Income
                  </label>
                  <input
                    type="number"
                    id="income"
                    name="income"
                    value={formData.employment.income}
                    onChange={(e) => handleChange(e, 'employment')}
                    placeholder="$"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Vehicle Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Make
                  </label>
                  <input
                    type="text"
                    id="make"
                    name="make"
                    value={formData.vehicle.make}
                    onChange={(e) => handleChange(e, 'vehicle')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    value={formData.vehicle.model}
                    onChange={(e) => handleChange(e, 'vehicle')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={formData.vehicle.year}
                    onChange={(e) => handleChange(e, 'vehicle')}
                    min="1980"
                    max={new Date().getFullYear() + 1}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Mileage (if used)
                  </label>
                  <input
                    type="number"
                    id="mileage"
                    name="mileage"
                    value={formData.vehicle.mileage}
                    onChange={(e) => handleChange(e, 'vehicle')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="focus:ring-rose-500 h-4 w-4 text-rose-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="font-medium text-gray-700">
                      I consent to a credit check and agree to the terms of service
                    </label>
                    <p className="text-gray-500">
                      By submitting this application, you authorize us to verify your information and pull your credit report.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition duration-300"
            >
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={nextStep}
              className="ml-auto px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition duration-300"
            >
              Continue
            </button>
          ) : (
            <button
              className="ml-auto px-6 py-3 bg-amber-500 text-gray-900 font-medium rounded-md hover:bg-amber-400 transition duration-300"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>

      <motion.div 
        className="bg-gray-100 rounded-2xl p-8 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">What Happens Next?</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Application Review",
                description: "Our team will review your application and verify the information provided."
              },
              {
                title: "Credit Check",
                description: "We'll perform a soft credit pull that won't affect your credit score."
              },
              {
                title: "Loan Decision",
                description: "You'll receive a decision typically within 24 hours of application."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-rose-600 font-bold text-lg mb-2">{index + 1}.</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Apply;
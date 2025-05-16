import { useState } from 'react';
import { motion } from 'framer-motion';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(60);
  
  const calculatePayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return isFinite(payment) ? payment.toFixed(2) : 0;
  };
  
  const calculateTotalInterest = () => {
    const payment = parseFloat(calculatePayment());
    const total = payment * loanTerm - loanAmount;
    return isFinite(total) ? total.toFixed(2) : 0;
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Loan Calculator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estimate your monthly payments and total loan cost with our easy-to-use calculator
        </p>
      </motion.div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Loan Details</h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Amount ({formatCurrency(loanAmount)})
              </label>
              <input
                type="range"
                id="loanAmount"
                min="5000"
                max="100000"
                step="1000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$5,000</span>
                <span>$100,000</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate ({interestRate}%)
              </label>
              <input
                type="range"
                id="interestRate"
                min="1"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>20%</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Term ({loanTerm} months)
              </label>
              <input
                type="range"
                id="loanTerm"
                min="12"
                max="84"
                step="12"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>12 mo</span>
                <span>84 mo</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-rose-700 to-rose-900 rounded-xl shadow-lg p-8 text-white"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6">Payment Summary</h2>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-rose-600">
              <span className="text-rose-100">Loan Amount</span>
              <span className="text-xl font-semibold">{formatCurrency(loanAmount)}</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-rose-600">
              <span className="text-rose-100">Interest Rate</span>
              <span className="text-xl font-semibold">{interestRate}%</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-rose-600">
              <span className="text-rose-100">Loan Term</span>
              <span className="text-xl font-semibold">{loanTerm} months</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-rose-600">
              <span className="text-rose-100">Monthly Payment</span>
              <span className="text-2xl font-bold text-amber-300">{formatCurrency(calculatePayment())}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-rose-100">Total Interest</span>
              <span className="text-xl font-semibold">{formatCurrency(calculateTotalInterest())}</span>
            </div>
            
            <div className="pt-6 mt-6 border-t border-rose-600">
              <div className="flex justify-between items-center">
                <span className="text-rose-100 font-medium">Total Cost of Loan</span>
                <span className="text-2xl font-bold">
                  {formatCurrency(loanAmount + parseFloat(calculateTotalInterest()))}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="bg-gray-100 rounded-2xl p-8 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Understanding Your Loan</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg text-gray-600">
            <h3 className="text-rose-700">How Monthly Payments Are Calculated</h3>
            <p>
              Your monthly payment is calculated using the loan amount, interest rate, and loan term. 
              The formula accounts for both principal and interest payments over the life of the loan.
            </p>
            
            <h3 className="text-rose-700 mt-6">Factors Affecting Your Rate</h3>
            <p>
              Several factors can influence your actual interest rate, including credit score, 
              loan-to-value ratio, vehicle age, and loan term. Our calculator provides estimates 
              based on the information you provide.
            </p>
            
            <h3 className="text-rose-700 mt-6">Tips for Better Rates</h3>
            <ul>
              <li>Improve your credit score before applying</li>
              <li>Consider a larger down payment to reduce loan amount</li>
              <li>Choose shorter loan terms when possible</li>
              <li>Compare offers from multiple lenders</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Calculator;
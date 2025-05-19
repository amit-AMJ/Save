import { motion } from "framer-motion";
import SubfolderGPTAd from "../../utils/SubfolderGPTAd";
import RewardedAd from "../../utils/RewardedAd";

const AgeGate = ({ onVerify }) => {
  return (
    <div className="h-full w-full bg-gray-100 flex justify-center">
      <div className="w-full max-w-md h-full p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-rose-700 mb-6">
            Vehicle Loans
          </h1>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-16 flex justify-center">
              <SubfolderGPTAd
                adUnitPath="/21952429235/sahajanand_credinest.info_native"
                sizes={[[300, 250], [320, 480], [250, 250], [300, 100], 'fluid', [336, 280]]}
                divId="div-gpt-ad-top"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Age Verification
            </h2>
            <p className="text-gray-600 mb-8">
              You must be 18+ to access our loan services
            </p>

            {/* Buttons */}
            <div className="space-y-4 mb-5">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => onVerify(true)}
                className="w-full py-3 px-6 bg-rose-600 text-white font-medium rounded-lg shadow-md"
              >
                I'm 18 or Older
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => onVerify(false)}
                className="w-full py-3 px-6 bg-amber-500 text-gray-900 font-medium rounded-lg shadow-md"
              >
                I'm Under 18
              </motion.button>
            </div>

            {/* Section 1: Loan Basics */}
            <div className="mb-8 p-4 bg-rose-50 rounded-lg">
              <h3 className="font-bold text-rose-700 mb-2">
                Understanding Vehicle Loans
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                A vehicle loan allows you to borrow money to purchase a car
                while paying it back over time with interest. The vehicle serves
                as collateral, meaning the lender can repossess it if you
                default.
              </p>
              <p className="text-sm text-gray-700">
                Loan terms typically range from 12 to 84 months, with interest
                rates varying based on creditworthiness, loan amount, and
                vehicle type.
              </p>
            </div>

            {/* Section 2: Loan Types */}
            <div className="mb-8 p-4 bg-amber-50 rounded-lg">
              <h3 className="font-bold text-amber-700 mb-2">
                Types of Vehicle Loans
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  • <span className="font-semibold">New Car Loans:</span> Lower
                  rates for brand new vehicles
                </li>
                <li>
                  • <span className="font-semibold">Used Car Loans:</span> For
                  vehicles typically up to 10 years old
                </li>
                <li>
                  • <span className="font-semibold">Refinance Loans:</span>{" "}
                  Replace existing loan with better terms
                </li>
                <li>
                  • <span className="font-semibold">Lease Buyouts:</span>{" "}
                  Purchase your leased vehicle
                </li>
                <li>
                  • <span className="font-semibold">Private Party Loans:</span>{" "}
                  Buy from individual sellers
                </li>
              </ul>
            </div>

            {/* Section 3: Requirements */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-700 mb-2">
                Loan Requirements
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                To qualify for most vehicle loans, you'll need:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                <li>Proof of income (pay stubs, tax returns)</li>
                <li>Valid driver's license</li>
                <li>Proof of insurance</li>
                <li>Minimum credit score (varies by lender)</li>
                <li>Down payment (typically 10–20%)</li>
              </ul>
            </div>

            <div className="mb-16 flex justify-center">
              <RewardedAd adUnitPath="/23270265301/sahajanand_finorise.info_rewarded" />
            </div> 

            {/* Section 4: Benefits */}
            <div className="mb-8 p-4 bg-rose-50 rounded-lg">
              <h3 className="font-bold text-rose-700 mb-2">
                Benefits of Vehicle Financing
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-start">
                  <span className="text-rose-600 mr-1">✓</span>
                  <span>Build credit history</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-600 mr-1">✓</span>
                  <span>Preserve savings</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-600 mr-1">✓</span>
                  <span>Flexible terms</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-600 mr-1">✓</span>
                  <span>Potential tax benefits</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-600 mr-1">✓</span>
                  <span>Immediate vehicle access</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-600 mr-1">✓</span>
                  <span>Competitive rates</span>
                </div>
              </div>
            </div>

            {/* Section 5: Calculator Preview */}
            <div className="mb-8 p-4 bg-amber-50 rounded-lg">
              <h3 className="font-bold text-amber-700 mb-2">
                Payment Estimates
              </h3>
              <div className="text-sm text-gray-700">
                <div className="flex justify-between mb-1">
                  <span>$20,000 loan:</span>
                  <span>$375–$450/month (60 months)</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>$30,000 loan:</span>
                  <span>$550–$650/month (60 months)</span>
                </div>
                <div className="flex justify-between">
                  <span>$40,000 loan:</span>
                  <span>$725–$850/month (60 months)</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  *Estimates based on 4–6% APR with 10% down payment
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgeGate;

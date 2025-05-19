import { motion } from "framer-motion";
import GPTAd from "../utils/GPTAd";
import LoanCard from "../components/LoanCard";
import {
  FaCar,
  FaTruckPickup,
  FaMotorcycle,
  FaBus,
  FaShuttleVan,
  FaTruck,
} from "react-icons/fa";

const LoanTypes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vehicle Loan Options
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive range of vehicle financing solutions
          tailored to your needs
        </p>
      </motion.div>

      <div className="mb-16 flex justify-center">
        <GPTAd
          adUnitPath="/21952429235/sahajanand_credinest.info_native"
          sizes={[[300, 250], [320, 480], [250, 250], [300, 100], 'fluid', [336, 280]]}
          divId="div-gpt-ad-top"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <LoanCard
          title="New Car Loans"
          rate="3.99"
          term="Up to 7 Years"
          description="Finance your brand new vehicle with our competitive rates and flexible terms."
          icon={<FaCar className="text-2xl" />}
        />
        <LoanCard
          title="Used Car Loans"
          rate="4.99"
          term="Up to 5 Years"
          description="Quality pre-owned vehicles with financing options to match your needs."
          icon={<FaCar className="text-2xl" />}
        />
        <LoanCard
          title="Truck Loans"
          rate="4.49"
          term="Up to 6 Years"
          description="Heavy-duty financing for your work or personal trucks."
          icon={<FaTruck className="text-2xl" />}
        />
        <LoanCard
          title="Motorcycle Loans"
          rate="5.25"
          term="Up to 4 Years"
          description="Hit the road on your dream bike with our specialized financing."
          icon={<FaMotorcycle className="text-2xl" />}
        />
        <LoanCard
          title="RV & Camper Loans"
          rate="5.75"
          term="Up to 10 Years"
          description="Finance your home on wheels for your next adventure."
          icon={<FaShuttleVan className="text-2xl" />}
        />
        <LoanCard
          title="Commercial Vehicles"
          rate="4.25"
          term="Up to 5 Years"
          description="Financing solutions for your business fleet needs."
          icon={<FaBus className="text-2xl" />}
        />
      </div>

      <div className="mb-16 flex justify-center">
        <GPTAd
          adUnitPath="/21952429235/sahajanand_credinest.info_native"
          sizes={[[300, 250], [320, 480], [250, 250], [300, 100], 'fluid', [336, 280]]}
          divId="div-gpt-ad-midell"
        />
      </div>

      <div className="bg-gray-100 rounded-2xl p-8 mb-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Loan Features & Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Standard Features
              </h3>
              <ul className="space-y-3">
                {[
                  "Competitive interest rates",
                  "Flexible repayment terms",
                  "No prepayment penalties",
                  "Fast approval process",
                  "Online account management",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-rose-600 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Additional Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "GAP insurance options",
                  "Extended warranty available",
                  "Refinancing options",
                  "Loan protection plans",
                  "Dedicated customer support",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-amber-500 mr-2">★</span>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoanTypes;

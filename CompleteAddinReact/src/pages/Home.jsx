import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GPTAd from "../utils/GPTAd";
import LoanCard from "../components/LoanCard";
import { FaCar, FaTruck, FaMotorcycle, FaShieldAlt } from "react-icons/fa";
import BottomAnchorAd from "../utils/BottomAnchorAd";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-700 to-rose-900 rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative px-6 py-16 sm:py-24 lg:py-32 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Drive Your Dream Vehicle Today
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-rose-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Competitive rates, flexible terms, and fast approvals for all your
              vehicle financing needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/apply"
                className="rounded-md bg-amber-500 px-6 py-3 text-lg font-medium text-gray-900 shadow-sm hover:bg-amber-400 transition duration-300"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="rounded-md bg-white px-6 py-3 text-lg font-medium text-rose-700 shadow-sm hover:bg-gray-100 transition duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mb-16 flex justify-center">
        <GPTAd
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

      {/* Loan Products */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Our Loan Products
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Tailored financing solutions for every type of vehicle and budget
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <LoanCard
            title="New Cars"
            rate="3.99"
            term="1-7 Years"
            description="Finance your brand new vehicle with our competitive rates and flexible terms."
            icon={<FaCar className="text-2xl" />}
          />
          <LoanCard
            title="Used Cars"
            rate="4.99"
            term="1-5 Years"
            description="Quality pre-owned vehicles with financing options to match your needs."
            icon={<FaCar className="text-2xl" />}
          />
          <LoanCard
            title="Trucks & SUVs"
            rate="4.49"
            term="1-6 Years"
            description="Heavy-duty financing for your work or family vehicles."
            icon={<FaTruck className="text-2xl" />}
          />
          <LoanCard
            title="Motorcycles"
            rate="5.25"
            term="1-4 Years"
            description="Hit the road on your dream bike with our specialized financing."
            icon={<FaMotorcycle className="text-2xl" />}
          />
        </div>
      </div>

      <div className="mb-16 flex justify-center">
        <GPTAd
          adUnitPath="/21952429235/sahajanand_credinest.info_native"
          sizes={[
            [300, 250],
            [320, 480],
            [250, 250],
            [300, 100],
            "fluid",
            [336, 280],
          ]}
          divId="div-gpt-ad-middle"
        />
      </div>
      <BottomAnchorAd adUnitPath="/21952429235/sahajanand_credinest.info_native" />
      {/* Features Section */}
      <div className="bg-gray-100 rounded-2xl p-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Vehicle Loans?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Rates",
                description:
                  "Our rates are among the most competitive in the industry, saving you money.",
                icon: <FaShieldAlt className="text-rose-600 text-3xl" />,
              },
              {
                title: "Fast Approvals",
                description:
                  "Get pre-approved in as little as 24 hours with our streamlined process.",
                icon: <FaShieldAlt className="text-rose-600 text-3xl" />,
              },
              {
                title: "Flexible Terms",
                description:
                  "Choose repayment terms that fit your budget and financial situation.",
                icon: <FaShieldAlt className="text-rose-600 text-3xl" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

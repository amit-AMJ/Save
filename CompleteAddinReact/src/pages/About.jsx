import { motion } from "framer-motion";
import GPTAd from "../utils/GPTAd";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About AutoFinPro
        </motion.h1>

        <motion.div
          className="bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-6">
                  At AutoFinPro, we're committed to making vehicle ownership
                  accessible to everyone. We believe that reliable
                  transportation shouldn't be out of reach due to financial
                  barriers.
                </p>
                <p className="text-gray-600 mb-6">
                  Founded with the vision of simplifying auto financing, we've
                  helped thousands of customers drive away in their dream
                  vehicles with loan solutions tailored to their unique
                  circumstances.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-48 h-48"
                >
                  <g>
                    <circle cx="144" cy="400" r="40" fill="#fbbf24" />
                    <circle cx="384" cy="400" r="40" fill="#f87171" />
                    <path
                      d="M96 352h320c8.8 0 16-7.2 16-16v-48c0-6.2-3.6-11.8-9.2-14.4l-64-32c-2.2-1.1-4.7-1.6-7.2-1.6H160c-2.5 0-5 0.6-7.2 1.6l-64 32c-5.6 2.8-9.2 8.3-9.2 14.4v48c0 8.8 7.2 16 16 16z"
                      fill="#60a5fa"
                    />
                    <path
                      d="M432 368H80c-8.8 0-16-7.2-16-16v-56c0-6.2 3.6-11.8 9.2-14.4l72-36c2.2-1.1 4.7-1.6 7.2-1.6h208c2.5 0 5 0.6 7.2 1.6l72 36c5.6 2.8 9.2 8.3 9.2 14.4v56c0 8.8-7.2 16-16 16z"
                      fill="#3b82f6"
                    />
                    <rect
                      x="160"
                      y="240"
                      width="192"
                      height="32"
                      rx="8"
                      fill="#fcd34d"
                    />
                    <circle cx="144" cy="400" r="16" fill="#f59e0b" />
                    <circle cx="384" cy="400" r="16" fill="#ef4444" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mb-12">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Transparency",
              description:
                "No hidden fees or surprises. We believe in clear, straightforward terms.",
            },
            {
              title: "Customer Focus",
              description:
                "Your satisfaction is our priority. We tailor solutions to your needs.",
            },
            {
              title: "Integrity",
              description:
                "We operate with honesty and ethical practices in all our dealings.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-rose-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16 flex justify-center">
        <GPTAd
          adUnitPath="/21952429235/sahajanand_credinest.info_native"
          sizes={[[300, 250], [320, 480], [250, 250], [300, 100], 'fluid', [336, 280]]}
          divId="div-gpt-ad-top"
        />
      </div>

      <div className="bg-rose-50 rounded-2xl p-8 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Behind AutoFinPro is a team of dedicated professionals with decades
            of combined experience in auto financing, customer service, and
            financial technology.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

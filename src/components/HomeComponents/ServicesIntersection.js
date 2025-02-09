import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  { title: "DEVELOPMENT", color: "from-orange-500 to-red-600" }, 
  { title: "SUPPORT", color: "from-green-500 to-green-900" }, 
  { title: "CONTRACT", color: "from-yellow-400 to-yellow-700" }, 
  { title: "PAY ROLL", color: "from-purple-500 to-purple-900" }, 
  { title: "DEV & SUPPORT", color: "from-blue-500 to-blue-900" }, 
  { title: "HARDWARE SUPPLY", color: "from-pink-500 to-pink-900" }, 
];

const ServicesIntersection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div
      className="relative min-h-[700px] w-full flex flex-col md:flex-row items-center justify-center bg-black overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#1a237e] to-[#0d0d2b] opacity-90"></div>

      {/* Circle Diagram */}
      <div className="relative w-[450px] h-[450px] flex justify-center items-center mb-8 md:mb-0">
        <motion.div
          className="absolute w-[150px] h-[150px] bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          data-aos="zoom-in"
        >
          IT Services
        </motion.div>

        {services.map((service, index) => {
          const angle = (index * 360) / services.length;
          const x = 180 * Math.cos((angle * Math.PI) / 180);
          const y = 180 * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className={`absolute w-[120px] h-[120px] bg-gradient-to-t ${service.color} rounded-full flex items-center justify-center text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay={index * 200} 
            >
              {service.title}
            </motion.div>
          );
        })}
      </div>

      {/* Text Content with AOS */}
      <div className="md:ml-16 text-left mt-8 md:mt-0">
        <motion.h2
          className="text-5xl font-extrabold leading-tight mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-aos="fade-right"
        >
          Innovate Fearlessly & <br />
          Protect Relentlessly
        </motion.h2>
        <motion.p
          className="mt-3 text-lg text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Sitting at the intersection of IT Services, Security, and Business
          Growth to help you scale efficiently and secure your future.
        </motion.p>
      </div>
    </div>
  );
};

export default ServicesIntersection;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  FaCode,
  FaShieldAlt,
  FaFileContract,
  FaUsers,
  FaLaptop,
  FaBriefcase,
  FaCogs,
  FaChartLine,
  FaCloud,
} from "react-icons/fa";
import logo from "/home/raju/Downloads/gloom/gloomDev8/gloomdevClient/src/assets/images/logo.png";

// Services Data
const services = [
  {
    category: "Development Services",
    icon: <FaCode className="text-blue-600 text-5xl" />,
    items: [
      "Custom Software Development",
      "Web & Mobile App Development",
      "AI & ML Solutions",
      "Blockchain Development",
      "E-commerce Development",
    ],
  },
  {
    category: "Support Services",
    icon: <FaShieldAlt className="text-blue-600 text-5xl" />,
    items: [
      "24/7 Technical Support",
      "Application Maintenance",
      "System Monitoring & Performance",
      "Bug Fixing & Troubleshooting",
      "Disaster Recovery & Backup",
    ],
  },
  {
    category: "Contract Services",
    icon: <FaFileContract className="text-blue-600 text-5xl" />,
    items: [
      "IT Staff Augmentation",
      "Managed IT Services",
      "Project-Based Contracts",
      "SLA-Based Contracts",
      "Dedicated Development Teams",
    ],
  },
  {
    category: "Payroll & Employee Leasing",
    icon: <FaUsers className="text-blue-600 text-5xl" />,
    items: [
      "Employee Leasing Solutions",
      "Full Payroll Management",
      "HR & Payroll Software Integration",
      "Multi-Industry Staffing",
      "Taxation & Compliance Services",
    ],
  },
  {
    category: "Freelancing Services",
    icon: <FaBriefcase className="text-blue-600 text-5xl" />,
    items: [
      "Hire Skilled Freelancers",
      "Short & Long-Term Contracts",
      "Remote & On-Site Freelancers",
      "Milestone-Based Payments",
      "AI-Driven Freelancer Matching",
    ],
  },
  {
    category: "Hardware & Cloud Services",
    icon: <FaLaptop className="text-blue-600 text-5xl" />,
    items: [
      "IT Hardware Procurement",
      "Cloud Computing Solutions",
      "Enterprise Networking Equipment",
      "Cloud & On-Premise Infrastructure",
      "Warranty & Maintenance Services",
    ],
  },
  {
    category: "Cybersecurity Solutions",
    icon: <FaCogs className="text-blue-600 text-5xl" />,
    items: [
      "Risk & Threat Analysis",
      "Data Encryption & Protection",
      "Cloud Security Solutions",
      "Penetration Testing & Audits",
      "Compliance & Governance Services",
    ],
  },
  {
    category: "Digital Marketing & SEO",
    icon: <FaChartLine className="text-blue-600 text-5xl" />,
    items: [
      "SEO & Content Strategy",
      "Social Media Management",
      "PPC & Google Ads Campaigns",
      "Email Marketing Automation",
      "Conversion Rate Optimization",
    ],
  },
  {
    category: "Cloud & DevOps Solutions",
    icon: <FaCloud className="text-blue-600 text-5xl" />,
    items: [
      "Cloud Migrations & Deployments",
      "CI/CD Pipeline Automation",
      "Containerization (Docker, Kubernetes)",
      "Serverless Architecture Solutions",
      "Infrastructure as Code (IaC)",
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, delay: 20 });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[700px] w-full flex items-center bg-black overflow-hidden px-8 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060b22] to-[#020617] opacity-95"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-12 left-16 w-56 h-56 bg-[#1a237e] rounded-full opacity-30 blur-3xl"
          animate={{ scale: [1, 1.5, 1], x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="absolute bottom-16 right-10 w-72 h-72 bg-[#0d47a1] rounded-full opacity-30 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-6 tracking-wide">
              Our Expertise, <br />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Your Competitive Advantage
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              From development to security, cloud to marketing – we provide world-class solutions for your business needs.
            </p>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-[#0d47a1] to-[#1a237e] hover:from-[#0b376b] hover:to-[#101c51] text-white text-lg font-medium px-8 py-4 rounded-full shadow-2xl transition-transform duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.button>
          </div>

          {/* Floating Logo */}
          <motion.img
            src={logo}
            alt="Company Logo"
            className="w-72 h-72 md:w-72 md:h-72 object-contain absolute right-[8%]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="flex flex-col items-center text-center p-8">
                <div className="text-5xl text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.category}</h3>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="p-2 rounded-lg hover:bg-gray-100 transition">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent> 
              </Card>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

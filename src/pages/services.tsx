"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageStarterSection from "@/components/PageStarterSection";
import { Box, Cpu, Shield, Zap } from "lucide-react"; // Import icons from lucide-react

const services = [
  {
    title: "Manual Testing",
    desc: "Comprehensive test cases for bug-free releases.",
    icon: <Box size={48} className="text-[#0056A6]" />,
  },
  {
    title: "Test Automation",
    desc: "Faster testing cycles with modern frameworks.",
    icon: <Zap size={48} className="text-[#0056A6]" />,
  },
  {
    title: "Performance Testing",
    desc: "Ensure scalability under heavy loads.",
    icon: <Cpu size={48} className="text-[#0056A6]" />,
  },
  {
    title: "Security Testing",
    desc: "Protect your app against vulnerabilities.",
    icon: <Shield size={48} className="text-[#0056A6]" />,
  },
];

export default function TestingServicesSection() {
  return (
    <>
      <Header />
      <PageStarterSection
        title="Our Services"
        backgroundImage="/images/carousel_bg_4.jpg"
      />
      <section className="py-20 px-6 lg:px-20 bg-[#F5F7FA]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-[#0056A6]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

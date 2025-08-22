"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import PageStarterSection from "@/components/PageStarterSection";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <PageStarterSection
        title="Contact Us"
        backgroundImage="/images/carousel_bg_4.jpg"
      />

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Whether you have a project in mind, a
              question, or just want to say hi, reach out to us through the
              details below or send us a message using the form.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#1E3A8A]" />
                <span className="text-gray-700 text-lg">+27 71 234 5678</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#1E3A8A]" />
                <span className="text-gray-700 text-lg">
                  info@qualytest.co.za
                </span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#1E3A8A]" />
                <span className="text-gray-700 text-lg">
                  123 Qualytest Ave, Sandton, Johannesburg
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-8">
              <a
                href="#"
                className="p-3 bg-gray-100 hover:bg-[#FF9800] hover:text-white rounded-full shadow transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 hover:bg-[#FF9800] hover:text-white rounded-full shadow transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 hover:bg-[#FF9800] hover:text-white rounded-full shadow transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#1E3A8A] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#FF9800] transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dynamic hero slides data
const slides = [
  {
    id: 1,
    image: "/images/carousel_bg_4.jpg",
    title: "Deliver Flawless Software with Confidence",
    description:
      "At QUALYFIRST TECHNOLOGIES, we specialize in world-class Quality Assurance solutions that help businesses launch bug-free, scalable, and reliable applications.",
    buttons: [
      { label: "Book a Free Consultation", link: "/contact", primary: true },
      { label: "Explore Services", link: "/services", primary: false },
    ],
  },
  {
    id: 2,
    image: "/images/carousel_bg_2.jpg",
    title: "Accelerate Your Digital Transformation",
    description:
      "We help businesses achieve fast, reliable, and secure software delivery through testing strategies designed for scalability and performance.",
    buttons: [
      { label: "Get Started", link: "/get-started", primary: true },
      { label: "Learn More", link: "/about", primary: false },
    ],
  },
  {
    id: 3,
    image: "/images/carousel_bg_3.jpg",
    title: "Your Quality. Our Priority.",
    description:
      "Partner with us to ensure flawless releases, increased customer satisfaction, and scalable, high-performing digital products.",
    buttons: [
      { label: "Contact Us", link: "/contact", primary: true },
      { label: "See Our Work", link: "/portfolio", primary: false },
    ],
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Softer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
      </div>

      {/* Slide Content */}
      <div className="container mx-auto px-6 flex flex-col items-center md:items-start relative z-10 max-w-3xl text-center md:text-left">
        <motion.h1
          key={currentSlide.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          {currentSlide.title}
        </motion.h1>

        <motion.p
          key={currentSlide.description}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 drop-shadow-sm"
        >
          {currentSlide.description}
        </motion.p>

        <motion.div
          key={currentSlide.id + "-buttons"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          {currentSlide.buttons.map((btn, index) => (
            <Link
              key={index}
              href={btn.link}
              className={`px-6 py-3 rounded-xl transition ${
                btn.primary
                  ? "bg-[#FF9800] hover:bg-yellow-500 text-white"
                  : "border border-white hover:bg-white hover:text-[#0056A6]"
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-6 md:px-10 z-20">
        <button
          onClick={handlePrev}
          className="bg-black/40 hover:bg-black/60 p-3 rounded-full transition flex items-center justify-center"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="bg-black/40 hover:bg-black/60 p-3 rounded-full transition flex items-center justify-center"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

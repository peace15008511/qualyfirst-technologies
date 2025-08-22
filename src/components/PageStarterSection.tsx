"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageStarterSectionProps {
  title: string;
  backgroundImage: string;
}

const PageStarterSection: React.FC<PageStarterSectionProps> = ({
  title,
  backgroundImage,
}) => {
  return (
    <section className="relative w-full min-h-[30vh] md:min-h-[35vh] flex flex-col items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={`${title} Background`}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-[#FF9800] drop-shadow-lg"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageStarterSection;

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Office furniture",
    description: "New & used office furniture solutions in Dallas.",
    imageUrl:
      "https://frontdeskdallas.com/wp-content/uploads/2024/04/Front-Desk-Office-Furniture-Texas5.jpg",
  },
  {
    id: 2,
    title: "Talk to an expert",
    description:
      "With 33 years of experience in the office furniture business, we’re excited to show you that you are in expert hands!",
    imageUrl:
      "https://frontdeskdallas.com/wp-content/uploads/2024/04/Front-Desk-Office-Furniture-Texas24-e1717012784525.jpg",
  },
  {
    id: 3,
    title: "Our services",
    description:
      "We make finding the perfect office workspace solutions made easy with our expert office furniture services.",
    imageUrl:
      "https://frontdeskdallas.com/wp-content/uploads/2024/09/Vision-Canilever-Desk-2048x1195.jpg",
  },
];

const letterVariants = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 0.2 } },
  exit: { y: "-100%", transition: { duration: 0.1 } },
};

const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
  exit: { transition: { staggerChildren: 0.06 } },
};

const lineVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { y: -50, opacity: 0, transition: { duration: 0.1 } },
};

const descriptionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02, delayChildren: 0.2 } },
  exit: { transition: { staggerChildren: 0.02 } },
};

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const radius = 46;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 950);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  w-full h-screen overflow-hidden">
      <div className="bg-black/80 w-full h-full absolute inset-0 z-[9]"></div>
      <div className="absolute inset-0 z-[99] w-full h-full bg-black/40"></div>

      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === activeSlide && (
              <motion.div
                key={slide.id}
                className="absolute z-[9] inset-0 w-full h-full"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 1, delay: 1.4, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-full h-full relative z-[99]"
                  initial={{
                    clipPath: isMobile
                      ? "circle(25% at 50% 50%)"
                      : "circle(19% at 75% 50%)",
                  }}
                  whileInView={{
                    clipPath: isMobile
                      ? "circle(100% at 50% 50%)"
                      : "circle(70% at 75% 50%)",
                  }}
                  exit={{
                    clipPath: isMobile
                      ? "circle(25% at 50% 50%)"
                      : "circle(19% at 75% 50%)",
                  }}
                  transition={{ duration: 1, delay:0.54, ease: "easeInOut"}}
                  viewport={{ once: true }}
                >
                  <Image
                    src={slide.imageUrl}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </motion.div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          className="absolute top-1/2 left-6 md:left-16 -translate-y-1/2 z-[999] text-white"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            exit: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
        >
          <motion.h2
            className="text-[3.2rem] sm:text-[6rem] md:text-[8rem] font-butler font-[200] tracking-[0] scale-y-[1.3] leading-[1] uppercase flex flex-wrap overflow-hidden"
            variants={headingContainer}
          >
            {slides[activeSlide].title.split(" ").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
                {"\u00A0"}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] leading-[1.4] mt-8 w-full max-w-[650px] font-[300] text-[#DFDFDF] flex flex-col overflow-hidden"
            variants={descriptionContainer}
          >
            {slides[activeSlide].description.split("\n").map((line, index) => (
              <motion.span key={index} variants={lineVariants}>
                {line}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute z-[999] bottom-8 md:bottom-12 left-6 md:left-16 flex flex-col space-y-3">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className="flex items-center gap-4 mb-4 cursor-pointer transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            <motion.div className="relative md:h-[40px] h-[30px] w-[30px] md:w-[40px] shrink-0 cursor-pointer rounded-full">
              {/* <div className="absolute inset-[1px] rounded-full border-[1px] border-[#FFFFFF33] z-0" /> */}
              <svg className="absolute inset-0 z-10" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{
                    strokeDashoffset: activeSlide == idx ? 0 : circumference,
                    rotate: activeSlide == idx ? 360 : 0,
                  }}
                  transition={
                    activeSlide == idx
                      ? { duration: 12, ease: "linear" }
                      : { duration: 0.2 }
                  }
                  style={{ originX: "50%", originY: "50%" }}
                />
              </svg>
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] md:w-[5px] h-[3px] md:h-[5px] rounded-full ${
                  activeSlide == idx ? "opacity-100" : "opacity-50"
                } bg-white z-20`}
              ></div>
            </motion.div>
            <h4
              className={`text-[1.1rem] sm:text-[1.24rem] md:text-[1.4rem] leading-[1.2] font-[300] tracking-[-0.02em] ${
                activeSlide == idx ? "opacity-100" : "opacity-50"
              } text-white`}
            >
              {slide.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

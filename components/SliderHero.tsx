"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    img: "https://makrasstoas.gr/wp-content/uploads/2025/02/1-2-1920x900-resized-q82.jpg",
    text: "The Property",
  },
  {
    img: "https://makrasstoas.gr/wp-content/uploads/2025/02/3-2-scaled-1920x900-resized-q82.jpg",
    text: "Project Concept",
  },
  {
    img: "https://makrasstoas.gr/wp-content/uploads/2025/02/2-2-1920x900-resized-q82.jpg",
    text: "Surrounding Neighbourhood",
  },
];

const SliderHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [resetKey]);

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setResetKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <div className="max-w-[1900px] h-[550px] md:h-screen mx-auto p-[15px] md:p-[40px] py-[70px] pb-[40px]">
      <div className="relative w-full h-full">
        <div className="overflow-hidden relative w-full h-full">
          {images.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
          {/* <div className="bg-gradient-to-b from-transparent via-transparent to-black absolute z-[9] inset-0 w-full h-full"></div> */}
          <div
            className="absolute bottom-0 left-0 right-0 w-full h-[50vh] opacity-[0.93]"
            style={{
              background: "linear-gradient(hsla(0, 0%, 100%, 0), #000)",
            }}
          ></div>
        </div>
        <div className="absolute z-[99] bottom-8 left-1/2 transform text-white -translate-x-1/2 grid md:grid-cols-3 gap-10 w-full px-[20px] md:px-[30px] md:py-[20px]">
          {images.map((slide, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex ? "flex" : " hidden md:flex "
              } flex flex-col gap-3 cursor-pointer`}
              onClick={() => handleDotClick(index)}
            >
              <p
                className={`text-[17px] md:text-[20px] ${
                  index === currentIndex ? "text-white " : "text-[#F8F2EC]/40"
                } transition-all ease-in-out duration-300 leading-[1]`}
              >
                {slide.text}
              </p>
              <div className="relative bg-[#F8F2EC]/40 w-full h-[0.3px] md:block hidden">
                <motion.div
                  className="absolute inset-0 h-full bg-white"
                  initial={{ width: 0 }}
                  key={resetKey}
                  animate={{ width: index === currentIndex ? "100%" : "0%" }}
                  transition={{
                    duration: index === currentIndex ? 5 : 0,
                    ease: "linear",
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderHero;

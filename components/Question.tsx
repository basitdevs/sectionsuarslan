"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";

const imgs = [
  "https://cdn.prod.website-files.com/653129eb7313df59f042834d/6571e63f8183c24b9b1658fa_accordion_image_01.webp",
  "https://cdn.prod.website-files.com/653129eb7313df59f042834d/6578764d40bfd5673bf1437f_criteria2.webp",
  "https://cdn.prod.website-files.com/653129eb7313df59f042834d/6578765b3c17dbc99c523811_criteria3.webp",
  "https://cdn.prod.website-files.com/653129eb7313df59f042834d/6578766c44d41844e4e7a18a_criteria4.webp",
];

const data = [
  {
    heading: "Supply-constrained markets",
    description:
      "Regions characterized by geographical boundaries, cost-related obstacles, and/or complex political barriers.",
  },
  {
    heading: "Innovations-driven employment growth",
    description:
      "Regions experiencing job expansion particularly in sectors such as technology, healthcare, education, and manufacturing.",
  },
  {
    heading: "Urban convenience",
    description:
      "Areas that offer the convenience of urban life, characterized by their proximity to downtowns and neighborhoods where amenities and services are accessible on foot.",
  },
  {
    heading: "Outdoor recreation",
    description:
      "Cities that are conducive to active lifestyles, providing ideal settings for activities such as hiking, biking, and various mountain and river sports.",
  },
];

const Question = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [overlayImgIndex, setOverlayImgIndex] = useState<number | null>(null);
  const [lastActive, setLastActive] = useState<number | null>(null);

  const radius = 46;
  const circumference = 2 * Math.PI * radius;

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) => {
      if (prev.includes(index)) {
        const newOpen = prev.filter((i) => i !== index);
        if (lastActive === index) {
          const newLast = newOpen.length ? newOpen[newOpen.length - 1] : null;
          setLastActive(newLast);
          if (newLast !== null && newLast !== currentImgIndex) {
            setOverlayImgIndex(newLast);
          }
        }
        return newOpen;
      } else {
        setLastActive(index);
        setOverlayImgIndex(index);
        return [...prev, index];
      }
    });
  };

  return (
    <div className="flex justify-between gap-12 px-7 md:px-10 py-20">
      <div className=" w-[38%] lg:w-[30%] h-full  hidden md:block min-h-[600px]  lg:min-h-[800px] max-h-[800px] shrink-0 relative rounded-[8px] overflow-hidden">
        <div className="absolute inset-0 rounded-[8px] w-full h-full overflow-hidden">
          <Image
            src={imgs[currentImgIndex]}
            alt=""
            width={1000}
            height={2000}
            className="object-cover w-full h-full"
          />
        </div>
        {overlayImgIndex !== null && (
          <motion.div
            key={overlayImgIndex}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => {
              setCurrentImgIndex(overlayImgIndex);
              setOverlayImgIndex(null);
            }}
            className="absolute inset-0 rounded-[8px] w-full h-full overflow-hidden"
          >
            <Image
              src={imgs[overlayImgIndex]}
              alt=""
              width={1000}
              height={2000}
              className="object-cover w-full h-full"
            />
          </motion.div>
        )}
      </div>

      <div className=" w-full md:w-[62%] lg:w-[70%] flex flex-col">
        {data.map((content, index) => (
          <div
            key={index}
            className="md:pt-4 flex relative cursor-pointer flex-col  gap-4 md:gap-6 group"
            onClick={() => toggleQuestion(index)}
          >
            <div className="bg-[#e5e4e4] w-full h-[1px]" />
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-3 md:gap-6 mb-4 transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)]">
                <motion.div className="relative h-9 md:h-12 w-9 md:w-12 shrink-0 cursor-pointer rounded-full">
                  <div className="absolute inset-[1.7px] rounded-full border-[1px] border-[#F1DED5] z-0" />
                  <svg className="absolute inset-0 z-10" viewBox="0 0 100 100">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#B95D2D"
                      strokeWidth="2"
                      strokeDasharray={circumference}
                      animate={{
                        strokeDashoffset: openQuestions.includes(index)
                          ? 0
                          : circumference,
                        rotate: openQuestions.includes(index) ? 360 : 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      style={{ originX: "50%", originY: "50%" }}
                    />
                  </svg>
                  <div className="absolute inset-0 text-[#B95D2D] text-[14px] md:text-[20px] flex items-center justify-center text-xl font-bold transition-colors duration-300 z-20">
                    <FaPlus />
                  </div>
                </motion.div>
                <h4 className="text-[18px] md:text-3xl group-hover:translate-x-[10px] transition-all duration-500 ease-in-out leading-[1.2] font-[400] tracking-[-0.02em]">
                  {content.heading}
                </h4>
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                  openQuestions.includes(index)
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: openQuestions.includes(index) ? 0.2 : 0,
                }}
                className="pl-2 md:pl-20 overflow-hidden"
              >
                <div className="max-w-[400px]">
                  <p className="opacity-[0.7] text-[0.9rem] md:text-[1rem] leading-[1.3]">
                    {content.description}
                  </p>
                  <div className="w-full pt-6"></div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;

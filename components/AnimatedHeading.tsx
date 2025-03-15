"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className,
}) => {
  return (
    <motion.h2
      className={`${className} leading-[1] font-[500] text-[45px] md:text-[100px] text-[#ccc0b2] `}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.03, // Smooth character-by-character animation
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedHeading;

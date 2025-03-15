"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";
import ParallaxImage from "./ParallaxImage";

gsap.registerPlugin(ScrollTrigger);

const Modernity = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: -50 },
        {
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 20%",
            end: "bottom 30%",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-[1900px] mx-auto p-[15px] md:p-[40px] overflow-hidden"
    >
      <AnimatedHeading text="Heritage meets" />
      <AnimatedHeading text="Modernity" />
      <motion.p
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0)",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="text-[20px] text-black mt-[7px] md:mt-[20px]"
      >
        A Landmark in Piraeus
      </motion.p>

      <div className="flex md:hidden justify-end relative z-[9] md:mb-[100px] mt-[70px]">
        <div className="w-full relative block z-[9] max-w-[180px]">
          <Image
            src={
              "https://makrasstoas.gr/wp-content/uploads/2025/01/Untitled-2-1920x2311-resized-q82.png"
            }
            alt=""
            width={1000}
            height={1000}
            className=" w-full h-auto object-cover"
          />
        </div>

        <AnimatedHeading
          text="1880s"
          className=" absolute text-[120px] right-0 bottom-[29%] !opacity-[0.3]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] mt-[50px]">
        <div className="">
          <ParallaxImage
            text="The Property"
            src="https://makrasstoas.gr/wp-content/uploads/2025/01/6F3A3285-850x1200-resized-q82.jpg"
          />
          <div className="hidden md:flex items-end gap-3">
            <Image
              src={
                "https://makrasstoas.gr/wp-content/uploads/2025/01/Untitled-4.png"
              }
              alt=""
              width={1000}
              height={1000}
              className="mt-[60px] max-w-[160px] w-full h-auto object-cover"
            />
            <AnimatedHeading text="iconic" className="mb-[20px]" />
          </div>
        </div>

        <div
          ref={textRef}
          className="flex flex-col items-center justify-center text-center w-full h-full mt-[30px] text-[24px] md:text-[33px] leading-[1] font-[500] text-[#aea293] max-w-[420px] mx-auto"
        >
          Built in the 1880s in Piraeus, this iconic neoclassical building has
          undergone a remarkable evolution over the years.
        </div>

        <div className="">
          <div className="hidden md:flex justify-end relative z-[9] mb-[100px]">
            <div className=" max-w-[320px]  relative block z-[9]">
              <Image
                src={
                  "https://makrasstoas.gr/wp-content/uploads/2025/01/Untitled-2-1920x2311-resized-q82.png"
                }
                alt=""
                width={1000}
                height={1000}
                className=" w-full h-auto object-cover"
              />
            </div>

            <AnimatedHeading
              text="1880s"
              className=" absolute !text-[200px] shrink-0 right-0 bottom-[-35px] !opacity-[0.3]"
            />
          </div>
          <ParallaxImage
            text="Neighbourhood"
            src="https://makrasstoas.gr/wp-content/uploads/2025/02/neighbourhood-850x1200-resized-q82.jpg"
          />
        </div>

        <div className="md:hidden flex items-center justify-between gap-3">
          <Image
            src={
              "https://makrasstoas.gr/wp-content/uploads/2025/01/Untitled-4.png"
            }
            alt=""
            width={1000}
            height={1000}
            className=" max-w-[110px] w-full h-auto object-cover"
          />
          <AnimatedHeading text="iconic" className="text-[80px] shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default Modernity;

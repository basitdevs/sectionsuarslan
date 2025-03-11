"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SliderBg = () => {
  const slides = Array.from({ length: 10 }, () => "SINCE 1983");

  return (
    <div className="flex overflow-hidden font-butler scale-y-[1.3] font-[200] z-[-1] absolute h-full top-1/2 left-0 bottom-1/2 -translate-y-1/2">
      <ul className="flex animate-infinite-scroll gap-10 py-20">
        {slides.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center shrink-0 text-[50px] md:text-[100px] text-[#ddd]"
            >
              {item}
              <div className="bg-[#ddd] size-[8px] md:size-[16px] rounded-full md:mx-4 ml-8 md:ml-12" />
            </li>
          );
        })}
      </ul>
      <ul className="flex animate-infinite-scroll gap-10 py-20">
        {slides.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center shrink-0 text-[50px] md:text-[100px] text-[#ddd]"
            >
              {item}
              <div className="bg-[#ddd] size-[8px] md:size-[16px] rounded-full md:mx-4 ml-8 md:ml-12" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Solutions = () => {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 950);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapperRef.current,
        { y: isMobile ? 50 : 100 },
        {
          y: isMobile ? -50 : -100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "bottom 80%",
            scrub: 2,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="px-10 py-20 relative overflow-hidden">
      <SliderBg />
      <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
        <h4 className="text-[22px] sm:text-[28px] md:text-[34px] font-[300]">
          Tailored Solutions
        </h4>
        <h2 className="text-[34px] sm:text-[40px] md:text-[80px] scale-y-[1.3] font-butler font-[200] text-[#7C6F63] uppercase leading-[1.1] my-6 md:my-10">
          Where Experience Meets Personalization
        </h2>

        <div className="max-w-[700px] mx-auto md:mt-10" ref={imageWrapperRef}>
          <Image
            src={
              "https://frontdeskdallas.com/wp-content/uploads/2024/05/Front-Desk-Dallas4-1536x859.jpeg"
            }
            alt=""
            width={1000}
            height={2000}
            className="w-full  h-full object-cover"
          />
        </div>
        <p className="max-w-[750px] mx-auto mt-16 md:mt-20 text-[16px] md:text-[20px]">
          Looking for top-quality office furniture in Dallas? We specialize in
          providing a full range of commercial office furniture, designed to
          enhance both the functionality and aesthetic of your workspace. Our
          expert space planning services ensure that your office layout
          maximizes productivity and comfort. In addition to our extensive
          selection of office furniture, we offer delivery and installation
          services to ensure a seamless setup from start to finish. Whether
          you’re outfitting a small office or a large corporate space, our team
          is here to help you create an efficient, stylish work environment with
          the best products and services in the industry.
        </p>
      </div>
    </div>
  );
};

export default Solutions;

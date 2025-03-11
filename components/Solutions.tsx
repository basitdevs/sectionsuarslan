"use client"

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SliderBg = () => {
  const slides = Array.from({ length: 10 }, () => "SINCE 1983");

  return (
    <div className="flex overflow-hidden z-[-1] absolute h-full top-1/2 left-0 bottom-1/2 -translate-y-1/2">
      <ul className="flex animate-infinite-scroll gap-10 py-20">
        {slides.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center shrink-0 text-[100px] text-[#ddd]"
            >
              {item}
              <div className="bg-[#ddd] size-[16px] rounded-full mx-4 ml-12" />
            </li>
          );
        })}
      </ul>
      <ul className="flex animate-infinite-scroll gap-10 py-20">
        {slides.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center shrink-0 text-[100px] text-[#ddd]"
            >
              {item}
              <div className="bg-[#ddd] size-[16px] rounded-full mx-4 ml-12" />
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

  useEffect(() => {
    // Use gsap.context to scope animations to this component
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapperRef.current,
        { y: 100 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%", // when the top of the section reaches the bottom of viewport
            end: "bottom 80%", // when the bottom of the section reaches the top of viewport
            scrub: 2, // smooth scrubbing, takes the scroll position into account
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
        <h4 className="text-[30px]">Tailored Solutions</h4>
        <h2 className="text-[80px] uppercase leading-[1.1] my-10">
          Where Experience Meets Personalization
        </h2>

        <div className="max-w-[700px] mx-auto mt-10" ref={imageWrapperRef}>
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
        <p className="max-w-[750px] mx-auto mt-20 text-[20px]">
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

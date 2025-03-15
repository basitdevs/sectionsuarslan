"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  text: string;
  alt?: string;
  className?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className,
  text,
}) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: -60,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 90%",
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className={`overflow-hidden will-change-transform ${className}`}>
        <div ref={imageRef}>
          <Image
            src={src}
            alt={alt || "Parallax Image"}
            width={1000}
            height={4000}
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 mt-[-45px] md:mt-[-40px]">
        <h4 className="text-[18px] md:text-[21px] leading-[1] font-[400]">
          {text}
        </h4>
        <button className="bg-[#ccc0b2] hover:bg-[#aea293]  transition-all duration-300 ease-in-out cursor-pointer text-[15px] text-black leading-[1] px-[29px] md:px-[34px] py-[12px] rounded-[40px] font-[500]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ParallaxImage;

"use client";

import React from "react";

interface SliderProps {
  text: string;
}

const Slider: React.FC<SliderProps> = ({ text }) => {
  const slides = Array.from({ length: 10 }, () => text);

  return (
    <div className="flex overflow-hidden my-20">
      <ul className="flex animate-infinite-scroll gap-10 py-20">
        {slides.map((item, index) => {
          return (
            <li key={index} className="flex items-center shrink-0 text-[100px] text-[#ddd]">
              {item}
              <div className="bg-[#ddd] size-[16px] rounded-full mx-4 ml-12" />
            </li>
          );
        })}
      </ul>
      <ul className="flex animate-infinite-scroll gap-10 py-20">
        {slides.map((item, index) => {
          return (
            <li key={index} className="flex items-center shrink-0 text-[100px] text-[#ddd]">
              {item}
              <div className="bg-[#ddd] size-[16px] rounded-full mx-4 ml-12" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Slider;

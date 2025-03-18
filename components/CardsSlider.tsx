"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cards = [
  {
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/arizona/alamar-community/alamar_haymoon-park-pool-1600x1000-new.jpg?cx=0.49&cy=0.89",
    tags: [
      {
        text: "16 Quick Move-Ins",
        bgColor: "#ffffff",
        textColor: "rgba(1,19,49,1)",
      },
      { text: "Promotion Available", bgColor: "#ca960e", textColor: "#ffffff" },
    ],
    title: "Alamar Community",
    location: "in Avondale, AZ",
    collections: [
      {
        name: "Highland Ridge Collection",
        type: "Single Family",
        price: "From $444,032",
        bedrooms: "3-6",
        bathrooms: "2-3",
        link: "#",
      },
      {
        name: "Highland Sage",
        type: "Single Family",
        price: "From $400,186",
        bedrooms: "3-5",
        bathrooms: "2-3",
        link: "#",
      },
    ],
    actions: [
      {
        text: "Learn More",
        link: "#",
      },
      {
        text: "View Homes",
        link: "#",
      },
    ],
  },
  {
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/arizona/blossom-rock-community/painted-sky-park-82.jpg?cx=0.45&cy=0.39",
    tags: [
      {
        text: "16 Quick Move-Ins",
        bgColor: "#ffffff",
        textColor: "rgba(1,19,49,1)",
      },
      { text: "Promotion Available", bgColor: "#ca960e", textColor: "#ffffff" },
    ],
    title: "Alamar Community",
    location: "in Avondale, AZ",
    collections: [
      {
        name: "Highland Ridge Collection",
        type: "Single Family",
        price: "From $444,032",
        bedrooms: "3-6",
        bathrooms: "2-3",
        link: "#",
      },
      {
        name: "Highland Sage",
        type: "Single Family",
        price: "From $400,186",
        bedrooms: "3-5",
        bathrooms: "2-3",
        link: "#",
      },
    ],
    actions: [
      {
        text: "Learn More",
        link: "#",
      },
      {
        text: "View Homes",
        link: "#",
      },
    ],
  },
  {
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/arizona/alamar-community/alamar_haymoon-park-pool-1600x1000-new.jpg?cx=0.49&cy=0.89",
    tags: [
      {
        text: "16 Quick Move-Ins",
        bgColor: "#ffffff",
        textColor: "rgba(1,19,49,1)",
      },
      { text: "Promotion Available", bgColor: "#ca960e", textColor: "#ffffff" },
    ],
    title: "Alamar Community",
    location: "in Avondale, AZ",
    collections: [
      {
        name: "Highland Ridge Collection",
        type: "Single Family",
        price: "From $444,032",
        bedrooms: "3-6",
        bathrooms: "2-3",
        link: "#",
      },
      {
        name: "Highland Sage",
        type: "Single Family",
        price: "From $400,186",
        bedrooms: "3-5",
        bathrooms: "2-3",
        link: "#",
      },
    ],
    actions: [
      {
        text: "Learn More",
        link: "#",
      },
      {
        text: "View Homes",
        link: "#",
      },
    ],
  },
  {
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/arizona/blossom-rock-community/painted-sky-park-82.jpg?cx=0.45&cy=0.39",
    tags: [
      {
        text: "16 Quick Move-Ins",
        bgColor: "#ffffff",
        textColor: "rgba(1,19,49,1)",
      },
      { text: "Promotion Available", bgColor: "#ca960e", textColor: "#ffffff" },
    ],
    title: "Alamar Community",
    location: "in Avondale, AZ",
    collections: [
      {
        name: "Highland Ridge Collection",
        type: "Single Family",
        price: "From $444,032",
        bedrooms: "3-6",
        bathrooms: "2-3",
        link: "#",
      },
      {
        name: "Highland Sage",
        type: "Single Family",
        price: "From $400,186",
        bedrooms: "3-5",
        bathrooms: "2-3",
        link: "#",
      },
    ],
    actions: [
      {
        text: "Learn More",
        link: "#",
      },
      {
        text: "View Homes",
        link: "#",
      },
    ],
  },
  {
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/arizona/blossom-rock-community/painted-sky-park-82.jpg?cx=0.45&cy=0.39",
    tags: [
      {
        text: "16 Quick Move-Ins",
        bgColor: "#ffffff",
        textColor: "rgba(1,19,49,1)",
      },
      { text: "Promotion Available", bgColor: "#ca960e", textColor: "#ffffff" },
    ],
    title: "Alamar Community",
    location: "in Avondale, AZ",
    collections: [
      {
        name: "Highland Ridge Collection",
        type: "Single Family",
        price: "From $444,032",
        bedrooms: "3-6",
        bathrooms: "2-3",
        link: "#",
      },
      {
        name: "Highland Sage",
        type: "Single Family",
        price: "From $400,186",
        bedrooms: "3-5",
        bathrooms: "2-3",
        link: "#",
      },
    ],
    actions: [
      {
        text: "Learn More",
        link: "#",
      },
      {
        text: "View Homes",
        link: "#",
      },
    ],
  },
];

const CardsSlider = () => {
  return (
    <div className="max-w-[1900px] font-lato relative mx-auto p-[25px] md:p-[40px] py-[70px] pb-[40px">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={{ prevEl: ".prev-card-s", nextEl: ".next-card-s" }}
        className="relative"
        breakpoints={{
          120: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1.5, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="w-full cursor-pointer">
            <div className="bg-white rounded-md block custom-shadow transition-all duration-300 ease-in-out">
              <div className="relative w-full h-[252px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={300}
                  className="w-full h-full object-cover rounded-t-md"
                />
                <div className="absolute top-1.5 left-2 z-10 flex items-center gap-2">
                  {card.tags.map((tag, index) => (
                    <button
                      key={index}
                      style={{ background: tag.bgColor, color: tag.textColor }}
                      className="bg-white rounded-sm inline-block  font-semibold text-xs leading-6 tracking-normal px-2 text-[rgba(1,19,49,1)] whitespace-nowrap"
                    >
                      {tag.text}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 p-5">
                <div className="">
                  <h4 className="text-[rgba(1,19,49,1)]  mb-1 lg:font-semibold lg:text-xl leading-[1.5] tracking-normal">
                    {card.title}
                  </h4>
                  <h6 className="text-[#575757] text-sm font-[300] leading-[1.4]">
                    {card.location}
                  </h6>
                </div>
                <div className="flex flex-col gap-4">
                  {card.collections.map((cl, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap  text-sm leading-[1.43] tracking-normal text-[rgba(1,19,49,1)] align-baseline gap-x-[0.625rem] gap-y-1"
                    >
                      <div className="flex items-baseline gap-1 flex-wrap">
                        <Link
                          href={"#"}
                          className="text-[#012a5e] underline font-[500]"
                        >
                          {cl.name}
                        </Link>
                        <span className="text-[#011331] leading-[1.43]">
                          {cl.type}
                        </span>
                        <span className="text-[#011331] font-[500] leading-[1.43]">
                          {cl.price}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-4 text-[#011331] font-[500] flex-wrap">
                        <div className="flex ">
                          <IoBedOutline className="text-[#011331] text-xl mr-2" />
                          <span>{cl.bedrooms}</span>
                        </div>
                        <div className="flex ">
                          <PiBathtub className="text-[#011331] text-xl mr-2" />
                          <span>{cl.bathrooms}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {card.actions.map((action, index) => (
                    <div className="w-full" key={index}>
                      <Link
                        href={"#"}
                        className="font-semibold text-sm rounded-[50px] w-full flex items-center justify-center leading-[1.43] tracking-normal h-9 px-6 py-[0.375rem] bg-white border-2 border-[rgba(222,225,227,1)]  text-[rgba(0,22,41,1)]"
                      >
                        {action.text}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="prev-card-s absolute top-1/2 left-[7px] md:left-[23px] cursor-pointer bg-white/90 backdrop-blur-[5px] flex items-center justify-center size-[50px] rounded-full translate-y-[-50%] z-[99]">
        <IoIosArrowBack className="text-[#011331] ml-[-5px] text-[30px]" />
      </button>
      <button className="next-card-s absolute top-1/2 right-[7px] md:right-[23px] cursor-pointer bg-white/90 backdrop-blur-[5px] flex items-center justify-center size-[50px] rounded-full translate-y-[-50%] z-[99]">
        <IoIosArrowForward className="text-[#011331] ml-[5px] text-[30px]" />
      </button>
    </div>
  );
};

export default CardsSlider;

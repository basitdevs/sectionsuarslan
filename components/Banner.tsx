import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="py-8 md:py-12 px-[25px] lg:px-24 font-lato">
      <div className="max-w-[1700px] w-full mx-auto py-12 md:py-16  bg-[#eaf3ff]  rounded-[1.3rem] px-6 md:px-10">
        <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-8">
          <div className="w-full shrink-0 md:min-w-[200px] max-w-[160px] md:max-w-[200px]">
            <Image
              src={
                "https://cdn.brookfieldresidential.net/-/media/brp/new-home-page/promo/discover-promotions-graphic.png?rev=11a735ab40c7483db8bbfcdd804c9c67"
              }
              alt=""
              width={1000}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="text-[#012a5e] text-[1rem] md:text-[1.25rem] lg:text-left text-center leading-[1.3] font-[400]">
            With a range of financing incentives, closing cost assistance,
            included options and upgrades, and more, your new home is closer
            than you think. Terms and conditions apply.
          </div>
          <div className="shrink-0">
            <Link
              href={"#"}
              className="text-white bg-[#012a5e] text-[0.8rem] md:text-[1rem] hover:bg-[#00213D] transition-all duration-500 ease-in-out py-2 md:py-2.5 rounded-[30px] px-7 md:px-10 font-[600] w-full "
            >
              Explore All Promotions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

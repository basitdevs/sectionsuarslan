"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import default styles

const CustomPhoneInput = React.forwardRef<HTMLInputElement, any>(
  ({ ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={`w-full bg-transparent border-none outline-none focus:ring-0 focus:border-none`}
      />
    );
  }
);

const PhoneInputField = ({ label }: { label: string }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <div
        className={`peer w-full border border-black/10 rounded-[40px] pt-5 pl-6 pr-4 pb-3 outline-none focus-within:border-[#333] focus-within:shadow-[0px_2px_8px_rgba(0,0,0,0.1)] bg-white transition-all
        ${value === "" ? "hide-country-code" : ""}
        `}
      >
        <PhoneInput
          international
          defaultCountry="DE"
          value={value}
          onChange={(val) => setValue(val || "")}
          placeholder=" "
          inputComponent={CustomPhoneInput}
          className="w-full phoneInputWrap bg-transparent border-none outline-none focus:ring-0 focus:border-none"
        />
      </div>
      <label
        className={`absolute left-[66px] ${
          value === ""
            ? "top-3.5 bg-white peer-focus-within:text-[14px]"
            : "top-1.5 bg-transparent !text-[14px]"
        } text-[#979797] text-[17px]  transition-all pointer-events-none peer-focus-within:bg-transparent peer-focus-within:top-1.5`}
      >
        {label}
      </label>
    </div>
  );
};

export default PhoneInputField;

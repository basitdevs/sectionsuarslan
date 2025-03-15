import React, { useState } from "react";

interface InputProps {
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, type = "text" }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        className="peer w-full border border-black/10 rounded-[40px] pt-6 pl-6 pr-4 pb-2 outline-none focus:border-[#333] focus:shadow-[0px_2px_8px_rgba(0,0,0,0.1)] bg-white transition-all"
      />
      <label
        className={`absolute left-6 ${
          value === "" ? "top-3.5 peer-focus:text-[14px]" : "top-2.5 !text-[14px]"
        } text-[#979797] text-[17px] transition-all pointer-events-none peer-focus:top-2`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

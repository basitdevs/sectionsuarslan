import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface SelectProps {
  options: { value: string; label: string }[];
  label: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, label, onChange }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="relative w-full">
      <select
        value={selected}
        onChange={handleChange}
        className={`peer w-full border border-black/10 rounded-[40px] pt-6 pl-6 pr-10 pb-2 outline-none focus:border-[#333] focus:shadow-[0px_2px_8px_rgba(0,0,0,0.1)] appearance-none bg-white transition-all`}
      >
        <option value="" disabled hidden></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-6 ${
          selected == ""
            ? "top-3.5 peer-focus:text-[14px]"
            : "top-2 !text-[14px]"
        } text-[#979797] text-[17px] transition-all pointer-events-none peer-focus:top-2 `}
      >
        {label}
      </label>
      <IoIosArrowDown className="text-[18px] absolute top-5 right-5" />
    </div>
  );
};

export default Select;

<div className="relative w-full">
  <select className="peer w-full border border-black/10 rounded-[40px] pt-5 pl-5 pr-10 pb-2 mb-5 outline-none focus:border-black/80 appearance-none bg-white transition-all">
    <option value="" disabled hidden selected></option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
  <label
    className="absolute left-6 top-4 text-gray-500 text-base transition-all pointer-events-none
    peer-focus:top-2 peer-focus:text-sm
    peer-[value='']:top-5 peer-[value='']:text-base peer-[value='']:text-gray-500"
  >
    Select an Option
  </label>
</div>;

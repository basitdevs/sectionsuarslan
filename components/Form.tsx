import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import PhoneInputField from "./PhoneInputField";
import TextArea from "./TextArea";


const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Form = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex items-center justify-center text-center py-[70px] px-[20px]">
      <div className="max-w-[500px] mx-auto">
        <h3 className="text-[30px] md:text-[50px] leading-[1]">
          Wir freuen uns von Ihnen zu hören
        </h3>
        <div className="mt-10 flex flex-col gap-[10px]">
          <Select options={options} onChange={setSelected} label="Anrede" />
          <Input label="Title (Optional)" />
          <Input label="Vorname" />
          <Input label="Nachname" />
          <PhoneInputField label="Phone" />
          <Input label="Email" />
          <TextArea label="Nachricht" />
          <div className="flex space-x-3">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-1 accent-[#C5AE80] rounded-[6px] cursor-pointer outline-none"
            />
            <label
              htmlFor="terms"
              className="text-[15px] md:text-[17px] text-left text-[#000] cursor-pointer"
            >
              Ich erkläre mich mit den{" "}
              <a href="/terms" target="_blank" className=" hover:underline">
                Datenschutzbestimmungen
              </a>{" "}
              einverstanden.
            </label>
          </div>
          <div className="">
            <button className="w-full bg-[#333333] px-5 py-3 mt-2 flex items-center justify-center text-center text-white rounded-[30px] cursor-pointer font-[500] text-[17px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

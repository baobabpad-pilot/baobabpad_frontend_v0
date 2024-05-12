import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, answer }:{
    title: string;
    answer: string;
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-5  border-t border-black font-medium ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        {accordionOpen ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
       
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
import React from "react";

const StepIndicator: React.FC<{ step: number; currentStep: number }> = ({
  step,
  currentStep,
}) => {
  const stepTexts = [
    "What is your frontend stack?",
    "What is your backend stack?",
    "What is your company size?",
    "What industry do you operate in?",
    "What is your Technology Readiness Level?",
  ];

  return (
    <div className="flex flex-col justify-center mt-8  px-12">
      <div
        className={`flex gap-4 items-center transition-all delay-150  ${
          currentStep >= step
            ? "text-3xl text-gray-800"
            : "text-2xl text-gray-400"
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full transition-colors delay-100 ${
            currentStep >= step ? "bg-[#00BDD6]" : "bg-gray-300"
          } mr-2`}
        />
        <div className="">{stepTexts[step - 1]}</div> 
      </div>
    </div>
  );
};

export default StepIndicator;

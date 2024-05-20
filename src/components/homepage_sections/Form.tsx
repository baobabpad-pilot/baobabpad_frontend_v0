import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/slices/formDataSlice";

interface FormData {
  [question: string]: string[];
}

interface Props {
  onNextStep: (nextStep: number) => void;
  onFreeTrialClick: () => void;
}

const MultiSelectForm: React.FC<Props> = ({ onNextStep, onFreeTrialClick }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>({});

  const options = {
    Frontend: [
      "JavaScript",
      "CSS",
      "React",
      "JQuery",
      "Bootstrap",
      "Angular",
      "Other",
    ],
    Backend: [
      "Python",
      "Java",
      "C#",
      "Laravel",
      "Flask",
      "Node JS",
      "Springboot",
      "Ruby",
      "Other",
    ],
    Business: [
      "Scaleup",
      "Corporation",
      "Startup",
      "B2B",
      "B2C",
      "B2G",
      "Non-profit",
      "Investor",
      "Other",
    ],
    Industry: [
      "Travel",
      "Canvas",
      "Healthcare",
      "SaaS",
      "Manufacturing",
      "Education",
      "Private",
      "Finance",
      "E-commerce",
      "Other",
    ],
    TRL: [
      "1: Basic Research",
      "2: Concept Formation",
      "3: Proof of Concept",
      "4: Component Validation",
      "5: System Validation",
      "6: Prototype Demo",
      "7: Operational Demo",
      "8: System Qualification",
      "9: Mission Proven",
    ],
    Services: [
      "AI & Data",
      "Digitalx",
      "Remote Teams",
      "Customer support",
      "Other",    
    ],
  };

  const stepTexts = [
    { text: "What is your frontend stack?", key: "Frontend" },
    { text: "What is your backend stack?", key: "Backend" },
    { text: "What is your company type?", key: "Business" },
    { text: "What industry do you operate in?", key: "Industry" },
    { text: "What is your Technology Readiness Level?", key: "TRL" },
    { text: "What services are you looking for?", key: "Services" },
  ];

  const handleOptionClick = (question: string, option: string) => {
    setFormData((prevData) => {
      const updatedOptions = prevData[question]
        ? prevData[question].includes(option)
          ? prevData[question].filter((item) => item !== option)
          : [...prevData[question], option]
        : [option];

      dispatch(updateFormData({ [question]: updatedOptions }));

      return {
        ...prevData,
        [question]: updatedOptions,
      };
    });
  };

  useEffect(() => {
    const currentStep = Object.keys(formData).length + 1;
    onNextStep(currentStep);
  }, [formData, onNextStep]);

  return (
    <div className="max-w-lg mt-8 overflow-hidden">
      <div className="space-y-4">
        {Object.entries(options).map(([question, optionList]) => (
          <div key={question} className=" border rounded-md p-4 px-8">

            <h3 className="text-lg font-medium flex lg:hidden mb-2">
              {stepTexts.find((step) => step.key === question)?.text}
            </h3>

            <h3 className="text-lg font-medium hidden lg:flex mb-2">{question}</h3>
            <div className="flex flex-wrap gap-2">
              {optionList.map((option) => (
                <div
                  key={option}
                  className={`inline-block px-4 py-2 border border-gray-300 rounded-full cursor-pointer transition-colors delay-150 ${
                    formData[question] && formData[question].includes(option)
                      ? "bg-[#00BDD6] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleOptionClick(question, option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
     {/*
      <button
        className="md:m-4 m-8 ml-[10rem] lg:mt-20 mt-8 bg-[#00BDD6] text-white py-2 px-4 rounded-full hover:bg-gray-300 transition-colors delay-75"
       onClick={() => onFreeTrialClick()}  

      >
        Free Trial
      </button>
      */}
      
    </div>
  );
};

export default MultiSelectForm;

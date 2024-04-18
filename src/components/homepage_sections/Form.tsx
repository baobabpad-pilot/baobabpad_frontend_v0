import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface FormData {
  [question: string]: string[];
}

interface Props {
    onNextStep: (nextStep: number) => void;
  }

const MultiSelectForm: React.FC<Props> = ({ onNextStep }) => {
const router = useRouter();

  const [formData, setFormData] = useState<FormData>({});

  const options = {
    Frontend: ['JavaScript', 'CSS', 'React', 'JQuery', 'Bootstrap', 'Angular', 'Other'],
    Backend: ['Python', 'Java', 'C#', 'Laravel', 'Flask', 'Node JS', 'Springboot', 'Ruby', 'Other'],
   Business: ['Scaleup', 'Corporation', 'Startup', 'B2B', 'B2C', 'B2G', 'Non-profit', 'Investor', 'Other'],
   Industry: ['Travel','Canvas','Healthcare','SaaS','Manufacturing','Education','Private','Finance','E-commerce','Other'],
   TRL: ['1-3', '4-6', '7-9']
  };

  const handleOptionClick = (question: string, option: string) => {
    setFormData(prevData => {
      const updatedOptions = prevData[question]
        ? prevData[question].includes(option)
          ? prevData[question].filter(item => item !== option)
          : [...prevData[question], option]
        : [option];
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

  const handleVerifyBusiness = () => {

    router.push('/verify_business')
  }

  return (
    <div className="max-w-lg mt-8 overflow-hidden">
      <div className="space-y-4">
        {Object.entries(options).map(([question, optionList]) => (
          <div key={question} className=' border rounded-md p-4 px-8'>
            <h3 className="text-lg font-medium">{question}</h3>
            <div className='flex flex-wrap gap-2'>
              {optionList.map(option => (
                <div
                  key={option}
                  className={`inline-block px-4 py-2 border border-gray-300 rounded-full cursor-pointer transition-colors delay-150 ${
                    formData[question] && formData[question].includes(option)
                      ? 'bg-[#00BDD6] text-white'
                      : 'bg-gray-200 text-gray-700'
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

      <button
        className="mt-20 bg-[#00BDD6] text-white py-2 px-4 rounded-full hover:bg-gray-300 transition-colors delay-75"
        onClick={() => handleVerifyBusiness()}
      >
        Free Trial
      </button>
    </div>
  );
};

export default MultiSelectForm;

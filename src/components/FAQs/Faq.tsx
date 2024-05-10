import React, { useState } from 'react'




interface FAQItem {
    question: string;
    answer: string;
  }

  interface FaqProps {
    faqs: FAQItem[];
  }

const Faq:React.FC<FaqProps>  = ({faqs}) => {
    
  
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    const handleToggle = (index:number) => {
      setActiveIndex(activeIndex === index ? null : index);
    }
  return (
    <section className="container mx-auto mt-[-6rem] py-12">
    <h2 className="text-3xl font-semibold text-center mb-8">FAQ</h2>
    <div className="grid gap-6 ">
      {faqs.map((faq:FAQItem, index:number) => (
        <div
        key={index}
        className={`bg-white p-6 shadow rounded-lg ${
          activeIndex === index ? 'border-[#00BDD6] border-2' : ''
        }`}
      >
          <button
            className="flex justify-between w-full text-left focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M6 8l4 4 4-4"></path>
            </svg>
          </button>
          <p className={`mt-2 ${activeIndex === index ? '' : 'hidden'}`}>{faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Faq
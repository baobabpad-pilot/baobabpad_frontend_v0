import React, { useState } from "react";
import Header from "@/components/homepage_sections/Header";
import Layout from "@/components/Layout";
import MyForm from "@/components/homepage_sections/Form";
import StepIndicator from "@/components/homepage_sections/StepIndicator";
import About from "@/components/homepage_sections/About";
import TrustedBy from "@/components/homepage_sections/TrustedBy";
import Customers from "@/components/homepage_sections/Customers";
import VerifyBusiness from "@/components/homepage_sections/verify_business";
import AnimatedWrapper from "@/components/AnimatedWrapper";

const Homepage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showVerifyBusiness, setShowVerifyBusiness] = useState(false);
  const totalSteps =5;

  const handleNextStep = (nextStep: number) => {
    setCurrentStep(nextStep);
  };

  const handleVerifyBusiness = () => {
    setShowVerifyBusiness(true);
  };
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <Header />
        <About />
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex-col gap-28 hidden lg:flex pl-4 lg:pl-28">
            {Array.from({ length: 6 }, (_, index) => index +1).map(
              (step) => (
                <StepIndicator
                  key={step}
                  step={step}
                  currentStep={currentStep}
                />
              )
            )}
          </div>

          

          <div>
            <MyForm
              onNextStep={handleNextStep}
              onFreeTrialClick={handleVerifyBusiness}
            />
          </div>
        </div>
        {showVerifyBusiness && (
          <AnimatedWrapper>
            <VerifyBusiness />
          </AnimatedWrapper>
        )}

        <div className=" w-[100%] mx-auto  ">{/* div for button free trial*/}
        <button
            className=" md:mt-6  mt-12 md:ml-[40%] ml-[40%] bg-[#00BDD6] text-white py-2 px-4 rounded-full hover:bg-gray-300 transition-colors delay-75"
            onClick={() => setIsVisible(!isVisible) }  >
             Free Trial
          </button>
           {isVisible && <VerifyBusiness />}
        </div>

        <TrustedBy />
        <Customers />
      </Layout>
    </div>
  );
};

export default Homepage;

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


const Businessform: React.FC = () => {


  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showVerifyBusiness, setShowVerifyBusiness] = useState(false);
  const totalSteps = 5;

  const handleNextStep = (nextStep: number) => {
    setCurrentStep(nextStep);
  };

  const handleVerifyBusiness = () => {
    setShowVerifyBusiness(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
        <div> <h1 className="text-4xl text-[#00BDD6] text-center font-bold p-6">Fill the form to identify you && your Business</h1></div>
      <div className="w-[98%] mx-auto">
      
        <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100 rounded-lg">
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

      </div>
    </div>
  );
};

export default Businessform;

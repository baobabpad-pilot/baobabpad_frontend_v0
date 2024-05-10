import Layout from "@/components/Layout";
import React, { useState } from "react";
import Solutions from "./Solutions";
import { useRouter } from "next/router";
import Link from "next/link";

import Future_is_cloud from "@/components/homepage_sections/Future_is_cloud";
import Cloud_xPert from "@/components/homepage_sections/Cloud_xPert";
import Cloud_base from "@/components/homepage_sections/Cloud_base";
import Faq from "@/components/FAQs/Faq";
import Reviews from "@/components/Reviews/Reviews";
import SolutionNavbar from "@/components/SolutionsNavbar/SolutionNavbar";
import Features from "@/components/features/Features";

const DigitalX = () => {
  interface SolutionsLinks {
    label: string;
    href: string;
  }
  interface FAQItem {
    question: string;
    answer: string;
  }

  const solutionLinks: SolutionsLinks[] = [
    { label: "CLIENT SUPPORT  ", href: "/Client" },
    { label: "REMOTE TEAM", href: "/Remote" },
    { label: "DIGITAL" + String.fromCharCode(0x02e3), href: "/DigitalX" },
    { label: "AI & DATA", href: "/Cloud" },
  ];
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSolutionsNavbar = () => {
    setIsOpen(!isOpen);
  };

  const faqs: FAQItem[] = [
    {
      question: "What are the benefits of cloud adoption for businesses?",
      answer: "We accept Visa, MasterCard, American Express, and PayPal.",
    },
    {
      question: "What skills are needed for cloud engineering",
      answer: "Yes, we offer refunds within 30 days of purchase.",
    },
    {
      question: "How will cloud computing evolve in the future?",
      answer:
        "You can contact our customer support team at support@example.com.",
    },
    {
      question: "What are the challenges associated with cloud computing?",
      answer:
        "You can contact our customer support team at support@example.com.",
    },
  ];

  const [componentVisible, setComponentVisible] = useState(false);

  const handleClick = (event: any, componentName: any) => {
    event.preventDefault();
    setComponentVisible(componentName);
  };

  const features = [
    { title: "Trust & Integrity", imageSrc: "/trust_image.png" },
    { title: "Communication", imageSrc: "/communication_image.png" },
    { title: "Cultural Intel", imageSrc: "/cultural_image.png" },
    { title: "Local Hybrid", imageSrc: "/local_hybrid_image.png" },
    { title: "Quality", imageSrc: "/quality_image.png" },
  ];





  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
      <SolutionNavbar/>
        <section className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap">
          <div className="w-full md:w-[50%] flex justify-center">
            <img
              src="/digital_infrastructure_image.png"
              alt="a guy smiling"
              className="w-full"
            />
          </div>
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
            <span className="text-[3rem] font-semibold">
              DIGITAL<sup>X</sup>
            </span>
            <span>
              Providing a scalable cloud-based infrastructure service, empower
              its clients to focus on their core business activities.
            </span>
            <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">
              Discover More
            </button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
          <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
            <div className="flex flex-row bg-[#EBFDFF] w-[13rem] items-center">
              <img
                src="/introduction-icon.png"
                alt="introduction icon"
                className="w-[4rem]"
              />
              <span className=" text-[#00BDD6] text-[1.625rem]">
                Introduction
              </span>
            </div>
            <p className="text-[3rem]">Digital infrastructure optimization </p>
            <p className="text-[1.875rem]">
              We leverage cutting-edge cloud technologies to provide you with a
              secure, reliable, and cost-effective foundation for your IT
              infrastructure.
            </p>
            <div className=" flex flex-row gap-x-5 ">
              <button className="border border-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white hover:border-none">
                Learn More
              </button>
              <button className="border border-black pl-9 pr-9 rounded-[1rem] bg-[#723CDE] text-white hover:bg-white hover:text-black">
                Sign up
              </button>
            </div>
          </div>
          <div className="w-full md:w-[49%] flex justify-center  ">
            <img
              src="/digital_infrastructure_optimization_image.png"
              alt="people smiling "
              className="w-full"
            />
          </div>
        </section>

        <section className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap justify-center items-center gap-x-[0.2rem]">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 gap-x-12 text-[1.25rem] max-w-full md:max-w-[50%]">
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[2.5rem]">
                The Future is Cloud{" "}
              </span>
              <span className="">
                Strategic management formulates and implements major goals and
                initiatoves
              </span>
              <div className="w-[100%] flex justify-end">
                <a
                  href="#"
                  onClick={(event) => handleClick(event, "Future_is_cloud")}
                  className="text-[#00BDD6] cursor-pointer"
                >
                  Learn More...
                </a>
              </div>
            </div>

            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[2.5rem]">
                Cloud xPert{" "}
              </span>
              <span className="">
                Four activities for financial health: planning, budgeting,
                integrated financial planning, and performance management.
              </span>
              <div className="w-[100%] flex justify-end">
                <a
                  href="#"
                  onClick={(event) => handleClick(event, "Cloud_xPert")}
                  className="text-[#00BDD6] cursor-pointer"
                >
                  Learn More...
                </a>
              </div>
            </div>
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[2.5rem]">
                Cloud base{" "}
              </span>
              <span className="">
                Ongoing support services provide assistance to customers for a
                limited period.
              </span>
              <div className="w-[100%]  flex justify-end">
                <a
                  href="#"
                  onClick={(event) => handleClick(event, "Cloud_base")}
                  className="text-[#00BDD6] cursor-pointer"
                >
                  Learn More...
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-[50%] md:h-[50%] flex justify-center p-5"
            id="right-sub-section"
          >
            {componentVisible === "Future_is_cloud" && <Future_is_cloud />}
            {componentVisible === "Cloud_xPert" && <Cloud_xPert />}
            {componentVisible === "Cloud_base" && <Cloud_base />}
            {!componentVisible && (
              <img src="/introduction-solution-image.png" alt="a guy smiling" />
            )}
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
          <div className="w-full md:w-[55%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
            <div className="flex flex-row bg-[#EBFDFF] w-[13rem] items-center">
              <img
                src="/introduction-icon.png"
                alt="introduction icon"
                className="w-[10rem]"
              />
              <span className=" text-[#00BDD6] text-[1.625rem]">
                Core Values
              </span>
            </div>
            <p className="text-[3rem]">The Future is cloud </p>

            <div className=" flex flex-row gap-x-5 items-center mt-[1rem]">
              <img
                src="/cloud_advisor_page.png"
                alt=""
                className="rounded-[1rem]"
              />
              <div className="">
                <p className=" font-bold font-[1rem]">Martin Sundberg</p>
                <p className="text-[#9095A0]">Cloud Advisor</p>
              </div>
            </div>
          </div>

         <Features features={features}/>
          
        </section>

        <Reviews />

        <section className="flex flex-col md:flex-row items-center justify-center  flex-wrap p-12 border-t border-t-gray m-6  ">
          <div className="w-full md:w-[60%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
            <div className="flex flex-row bg-[#F1F1FE] w-[13rem] items-center">
              <img
                src="/community_digitalx_icon.png"
                alt="community_digitalx_ico"
                className="w-[12rem]"
              />
              <span className=" text-[#3F3DE0] text-[1.625rem]">
                Our Community
              </span>
            </div>
            <p className="text-[3rem]">Gain from our cloud expert </p>
          </div>
          <div className="w-full md:w-[35%] flex-col justify-center m-1 ">
            <p className="w-[70%]">
              By carefully vetting and verifying each author, we ensure that our
              authors are experienced in their respective fields.
            </p>
            <div className="bg-[#00BDD6]  flex flex-col justify-center  items-center text-white w-[65%]  p-2  rounded-[1rem]">
              <img src="jacob_mwale_tech_lead.jpg" alt="" className="w-[90%]" />
              <h3 className="text-[2rem]">Jacob Mwale</h3>
              <p className="w-[90%]">
                Cloud database and server management, DevOps, and proficiency in
                Python, JavaScript.
              </p>
            </div>
          </div>
        </section>

        <Faq faqs={faqs} />
      </Layout>
    </div>
  );
};

export default DigitalX;

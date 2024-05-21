import Layout from "@/components/Layout";
import React, { useState } from "react";
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

  const [componentVisible, setComponentVisible] = useState(null);


  const handleClick = (event:any, componentName:any) => {
    event.preventDefault();
    setComponentVisible(componentName);
  };

  const features = [
    { title: "Trust & Integrity", imageSrc: "/trust_image.png" },
    { title: "Communi- cation", imageSrc: "/communication_image.png" },
    { title: "Cultural Intel", imageSrc: "/cultural_image.png" },
    { title: "Local Hybrid", imageSrc: "/local_hybrid_image.png" },
    { title: "Quality", imageSrc: "/quality_image.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Layout>

        <SolutionNavbar />
     
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
            <span >
              Providing a scalable cloud-based infrastructure service, empower
              its clients to focus on their core business activities.
            </span>
            <Link href="#1">
            <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">
              Discover More
            </button>
            </Link>
          </div>
        </section>

        <section id="1" className="flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
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
            <p className="md:text-[3rem] text-[2rem]">The Future is Cloud. </p>
            <p className="md:text-[1.875rem] text-[1.3rem] text-justify">
              We leverage cutting-edge cloud technologies to provide you with a
              secure, reliable, and cost-effective foundation for your IT
              infrastructure.
            </p>
            <div className=" flex flex-row gap-x-5 ">
              <Link href="#2">
              <button  className="border border-black p-2 rounded-[1rem] hover:bg-[#00BDD6]  hover:text-white hover:border-black">
                Learn More
              </button> 
              </Link>
              <Link href="/Subscription">
              <button className="border border-black p-2 rounded-[1rem] w-35  text-white bg-violet-500 hover:bg-white hover:text-black hover:border-black">
                Sign up
              </button>
              </Link>
             
              {/*
              <button onClick={() => setIsVisible(!isVisible)} className="border border-black pl-9 pr-9 rounded-[1rem] bg-[#723CDE] text-white hover:bg-white hover:text-black">
                Sign up
              </button>
              {isVisible && <Businessform />}
              */}
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

        <section id="2" className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap justify-center items-center">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 gap-x-12 text-[1.25rem] max-w-full md:max-w-[50%] ">
            <div className="sm:w-100% md:w-[30.75rem] w-[22rem] h-[15.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] md:text-[2.5rem] text-[2rem]">
              Digital infrastructure {" "}
              </span>
              <span className="">
              Cloud computing offers a couple of benefits that are particularly relevant to
              Baobabpad's mission.
              </span>
              <div className="w-[100%] hidden md:flex justify-end">
                <a
                  href="#"
                  onClick={(event) => handleClick(event, "Future_is_cloud")}
                  className="text-[#00BDD6] cursor-pointer md:mt-11 mt-6"
                >
                  Learn More...
                </a>
              </div>
            </div>

            <div className="sm:w-100% md:w-[30.75rem] w-[22rem] md:h-[18.75rem] h-[20.75rem]  bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] md:text-[2.5rem] text-[2rem]">
                Cloud xPert{" "}
              </span>
              <span className=" ">
               In today's digital landscape, the realm of technology is evolving at breaneck speed. Companies, regardless of size or indusrty , are constantly seeking ways to streamline operations,enhance scalability
               , and ensure data security.
              </span>
              <div className="w-[100%] hidden md:flex justify-end">
                <a
                  href="#"
                  onClick={(event) => handleClick(event, "Cloud_xPert")}
                  className="text-[#00BDD6] cursor-pointer"
                >
                  Learn More...
                </a>
              </div>
            </div>
            <div className="sm:w-100% md:w-[30.75rem] w-[22rem] md:h-[15.75rem] h-[17.75rem]  bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[2.5rem]">
                Cloud base{" "}
              </span>
              <span className="">
               Cloud base,often termed" cloud infrastructure," stands as digital bedrock powering Baobabpad's mission to elevate African teck talent and foster global partnerships.
              </span>
              <div className="w-[100%] hidden md:flex justify-end">
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
            <p className="md:text-[3rem] text-[1.8rem]">Our Key Strategic Approach</p>

            <div className=" flex flex-row gap-x-5 items-center mt-[1rem]">
              <img
                src="/brenda_mkeshwa_CEO.jpg"
                alt=""
                className="rounded-[1rem] w-[40px]"
              />
              <div className="">
                <p className=" font-bold font-[1rem]">Brenda Mkwesha</p>
                <p className="text-[#9095A0]">CEO</p>
              </div>
            </div>
          </div>

          <Features features={features} />
        </section>

        <Reviews />

        <section className="hidden md:flex flex-col md:flex-row items-center justify-center  flex-wrap p-12 border-t border-t-gray m-6  ">
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
            <p className="text-[3rem]">Gain insights from our cloud expert </p>
          </div>
          <div className="w-full md:w-[35%] flex-col justify-center m-1 ">
            
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
        <div className="hidden md:flex">
        <Faq faqs={faqs} />
        </div>

      </Layout>
    </div>
  );
};

export default DigitalX;

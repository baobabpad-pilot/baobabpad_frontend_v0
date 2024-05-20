import Faq from "@/components/FAQs/Faq";
import Layout from "@/components/Layout";
import Reviews from "@/components/Reviews/Reviews";
import SolutionNavbar from "@/components/SolutionsNavbar/SolutionNavbar";
import Features from "@/components/features/Features";
import Future_is_Remote from "@/components/remote_sections/Future_is_Remote";
import Managing_Remote from "@/components/remote_sections/Managing_Remote";
import Link from "next/link";
import { useRouter } from "next/router";
import { features } from "process";
import React, { useState } from "react";
import Slider from "react-slick";
import Baobabpad from "./Baobabpad";
import Baobabpad_Remote_Hybrid from "@/components/remote_sections/Baobabpad_Remote_Hybrid";

const Remote = () => {
  interface SolutionsLinks {
    label: string;
    href: string;
  }

  interface FAQItem {
    question: string;
    answer: string;
  }

  interface ValueItem{
    title:string,
    image:string
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


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  
  const faqs:FAQItem[] = [
    {
      question: 'What best practices can I follow to protect sensitive company data while working remotely?',
      answer: 'All our staff members are trained on General Data Protection Regulation(GDPR) protocols, to protect sensitive company data',
    },
    {
      question: 'How can I trust the security of my team working remotely?',
      answer: 'All Baobabpad members work remotely from a co-working space to ensure security and access to work infrastructure',
    },
    {
      question: 'How can I identify and avoid phishing scams while working remotely?',
      answer: 'We have highend Cloud identity and security management infrastructure ',
    },
     {
      question:'Do you offer support after the project is completed?',

      answer:'Yes, we offer ongoing support and maintenance services to ensure that your software continues to perform at its best.'
     }
   
  ];

  const values:ValueItem[]=[
    {
      title:'Trust & Integrity',
      image: "/trust_image.png"
    },
     {
      title:'Communication',
      image: "/communication_image.png"
    },
     {
      title:'Cultural Intel',
      image: "/cultural_image.png"
    },
     {
      title:'Local Hybrid',
      image: "/local_hybrid_image.png"
    },
     {
      title:'Quality ',
      image: "/quality_image.png"
    }
   ]

 
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const handleToggle = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const features = [
    { title: "Trust and Integrity", imageSrc: "/trust_image.png" },
    { title: "Communication", imageSrc: "/communication_image.png" },
    { title: "Cultural Intel", imageSrc: "/cultural_image.png" },
    { title: "Local Hybrid", imageSrc: "/local_hybrid_image.png" },
    { title: "Quality", imageSrc: "/quality_image.png" },
  ];


  const [componentVisible, setComponentVisible] = useState(null);


  const handleClick = (event:any, componentName:any) => {
    event.preventDefault();
    setComponentVisible(componentName);
  };
  





  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <SolutionNavbar/>
        <section className="flex mt-1 flex-col md:flex-row bg-[#8353E2] flex-wrap">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
            <span className="text-[3rem] font-semibold">
              REMOTE TEAM 
            </span>
            <span>
              Baobabpad's Virtual Tech Village platform connects a vast pool of
              skilled tech talent across Africa..
            </span>
            <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">
              Discover More
            </button>
          </div>
          <div className="w-full md:w-[50%] flex justify-center">
            <img
              src="/remote_team_image.png"
              alt="a woman holding a file"
              className="w-full"
            />
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
            <p className="text-[3rem]">Build a power Remote team </p>
            <p className="text-[1.875rem]">
              Secure remote access to company resources and applications for your team members.
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
              src="/remote_intro_image.png"
              alt="people smiling "
              className="w-full"
            />
          </div>
        </section>

        <section className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap justify-center items-center">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 gap-x-12 text-[1.25rem] max-w-full md:max-w-[50%]">
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[1.8rem]">
                The Future is Remote
              </span>
              <span className="">
              Strategic management formulates and implements major goals and initiatives.
              </span>
              <div className="w-[100%] flex justify-end">
              <a
                  href="#"
                  onClick={(event) => handleClick(event, "Future is Remote")}
                  className="text-[#00BDD6] cursor-pointer"
                >
                  Learn More...
                </a>
              </div>
            </div>
            <div className="sm:w-100% w-[30.75rem] h-[13rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[1.8rem]">
              Managing  remote culture
              </span>
              <span className="">
              Four activities for financial health: planning, budgeting, integrated financial planning, and performance management.
              </span>
              <div className="w-[100%] flex justify-end">
              <a
                  href="#"
                  onClick={(event) => handleClick(event, "Managing Remote Culture")}
                  className="text-[#00BDD6] cursor-pointer"
                >
                  Learn More...
                </a>
              </div>
            </div>
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[1.8rem]">
              Baobabpad Remotely Hybrid
              </span>
              <span className="">
               Ongoing support services provide assistance to customers for a limited period.
              </span>
              <div className="w-[100%]  flex justify-end">
              <a
                  href="#"
                  onClick={(event) => handleClick(event, "Baobabpad Remotely Hybrid")}
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
            {componentVisible === "Managing Remote Culture" && <Managing_Remote />}
            {componentVisible === "Future is Remote" && <Future_is_Remote/>}
            {componentVisible === "Baobabpad Remotely Hybrid" && <Baobabpad_Remote_Hybrid />}
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
            <p className="text-[3rem]">Virtual Tech Village on APIs</p>

            <div className=" flex flex-row gap-x-5 items-center mt-[1rem]">
              <img
                src="/kenny.png"
                alt=""
                className="rounded-[1rem] w-[40px]"
              />
              <div className="">
                <p className=" font-bold font-[1rem]">Kenny Kaluiji</p>
                <p className="text-[#9095A0]">Founder</p>
              </div>
            </div>
          </div>

          <Features features={features}/>
        
        </section>




        
       <Reviews/>
  
       
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
            <p className="text-[3rem]">Gain from our remote expert </p>
          </div>
          <div className="w-full md:w-[35%] flex-col justify-center m-1 ">
            <p className="w-[70%]">
              
              By carefully vetting and verifying each author, we ensure that our
              authors are experienced in their respective fields.
            </p>
            <div className="bg-[#00BDD6]  flex flex-col justify-center  items-center text-white w-[65%]  p-2  rounded-[1rem]">
              <img src="/selma_h.png" alt="" className="w-[90%]" />
              <h3 className="text-[2rem]">Selma H.</h3>
              <p className="w-[90%]">
              Microverse, a remote software development school volunteer
              </p>
            </div>
          </div>
        </section>


       
      <Faq faqs={faqs}/>
  

      </Layout>
    </div>
  );
};

export default Remote;

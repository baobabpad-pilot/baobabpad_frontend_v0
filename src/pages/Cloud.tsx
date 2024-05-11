import Faq from "@/components/FAQs/Faq";
import Layout from "@/components/Layout";
import Reviews from "@/components/Reviews/Reviews";
import SolutionNavbar from "@/components/SolutionsNavbar/SolutionNavbar";
import Features from "@/components/features/Features";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";

const Cloud = () => {

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  const features = [
    { title: "Integrity", imageSrc: "/virtual_image.png" },
    { title: "Collaboration", imageSrc: "/collaboration_image.png" },
    { title: "Growth", imageSrc: "/cloud_storage.png" },
    { title: "Reliability", imageSrc: "/database_image.png" },
    { title: "Commitment", imageSrc: "/management_image.png" },
  ];


  const faqs:FAQItem[] = [
    {
      question: 'What is the best environment for launching AI models?',
      answer: '..................',
    },
    {
      question: 'How can we apply AI models in our Minimum Viable Product (MVP)?',
      answer: '..................................',
    },
    {
      question: 'How do I know which data is the right fit for launching AI in development operations?',
      answer: '.................',
    },
    {
      question: 'How do I know which data is the right fit for launching AI in development operations?',
      answer: '...............................',
    },
  ];

 
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const handleToggle = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }


  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
       <SolutionNavbar/>

        <section className="flex mt-1 flex-col md:flex-row bg-[#ED7D2D] flex-wrap">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
            <span className="text-[3rem] font-semibold">
              AI and Data Infrastructure
            </span>
            <span>
              Providing a scalable cloud-based infrastructure service, empower
              its clients to focus on their core business activities.
            </span>
            <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">
              Discover More
            </button>
          </div>

          <div className="w-full md:w-[50%] flex justify-center">
            <img
              src="/AI_data_structure_image.png"
              alt="a guy smiling"
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
            <p className="text-[3rem]">Launch AI models integration</p>
            <p className="text-[1.875rem]">
            Leveraging technology for operational improvement and long-term growth strategies.
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
              src="/AI_intro_image.png"
              alt="people smiling "
              className="w-full"
            />
          </div>
        </section>

        <section className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap justify-center items-center gap-x-[0.2rem]">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 gap-x-12 text-[1.25rem] max-w-full md:w-[60%]">
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[2.5rem]">
                 AI strategy
              </span>
              <span className="">
              Strategic management formulates and implements major goals and initiatives.
              </span>
              <div className="w-[100%] flex justify-end">
                <span className="text-[#00BDD6]">Learn More... </span>
              </div>
            </div>
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[2.5rem]">
                Machine Laerning Ops
              </span>
              <span className="">
              Four activities for financial health: planning, budgeting, integrated financial planning, and performance management.
              </span>
              <div className="w-[100%] flex justify-end">
                <span className="text-[#00BDD6]">Learn More... </span>
              </div>
            </div>
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] text-[2.5rem]">
            Large Language Modelling
              </span>
              <span className="">
              Ongoing support services provide assistance to customers for a limited period.
              </span>
              <div className="w-[100%]  flex justify-end">
                <span className="text-[#00BDD6]">Learn More... </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[37%] md:h-[40%] flex justify-center p-5">
            <img src="/digital_section_3_image.png" alt="a guy smiling"  className="w-100%"/>
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
            <p className="text-[3rem]">AI Model Integrations  </p>

            <div className=" flex flex-row gap-x-5 items-center mt-[1rem]">
              <img
                src="/cloud_advisor_page.png"
                alt=""
                className="rounded-[1rem]"
              />
              <div className="">
                <p className=" font-bold font-[1rem]">Martin Sundberg</p>
                <p className="text-[#9095A0]">Advisor</p>
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
            <p className="text-[3rem]">Build AI Models with our AI expert </p>
          </div>
          <div className="w-full md:w-[35%] flex-col justify-center m-1 ">
            <p className="w-[70%]">
              
              By carefully vetting and verifying each author, we ensure that our
              authors are experienced in their respective fields.
            </p>
            <div className="bg-[#00BDD6]  flex flex-col justify-center  items-center text-white w-[65%]  p-2  rounded-[1rem]">
              <img src="reuben_nyaribari.png" alt="" className="w-[90%]" />
              <h3 className="text-[2rem]">Reuben  Nyaribari</h3>
              <p className="w-[90%]">
              Building and deploying models as web apps
              </p>
            </div>
          </div>
        </section>

     
        <Faq  faqs={faqs}/>
  
      </Layout>
    </div>
  );
};

export default Cloud;

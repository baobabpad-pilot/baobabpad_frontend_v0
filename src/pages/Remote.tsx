import Faq from "@/components/FAQs/Faq";
import Layout from "@/components/Layout";
import Reviews from "@/components/Reviews/Reviews";
import SolutionNavbar from "@/components/SolutionsNavbar/SolutionNavbar";
import Features from "@/components/features/Features";
import Link from "next/link";
import { useRouter } from "next/router";
import { features } from "process";
import React, { useState } from "react";
import Slider from "react-slick";

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
      answer: '',
    },
    {
      question: 'How can I ensure my home network is secure for work?',
      answer: '.......',
    },
    {
      question: 'How can I identify and avoid phishing scams while working remotely?',
      answer: 'You can contact our customer support team at support@example.com.',
    },
    {
      question:' What happens if my work device is lost or stolen?',
      answer: 'You can contact our customer support team at support@example.com.',
    },
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
    { title: "Communi- cation", imageSrc: "/communication_image.png" },
    { title: "Cultural Intel", imageSrc: "/cultural_image.png" },
    { title: "Local Hybrid", imageSrc: "/local_hybrid_image.png" },
    { title: "Quality", imageSrc: "/quality_image.png" },
  ];

  







  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <SolutionNavbar/>
        <section className="flex mt-1 flex-col md:flex-row bg-[#8353E2] flex-wrap">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
            <span className="text-[3rem] font-semibold">
              REMOTE TEAM 
            </span>
            <span >
              Baobabpad's Virtual Tech Village platform connects a vast pool of
              skilled tech talent across Africa..
            </span>
            <Link href="#1">
            <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white ">
              Discover More
            </button>
            </Link>
          </div>
          <div className="w-full md:w-[50%] flex justify-center">
            <img
              src="/remote_team_image.png"
              alt="a woman holding a file"
              className="w-full"
            />
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
            <p className="md:text-[3rem] text-[2rem]">Build a power Remote team </p>
            <p className="md:text-[1.875rem] text-[1.5rem] ">
              Secure remote access to company resources and applications for your team members.
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
              src="/remote_intro_image.png"
              alt="people smiling "
              className="w-full"
            />
          </div>
        </section>

        <section id="2" className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap justify-center items-center">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 gap-x-12 text-[1.25rem] max-w-full md:max-w-[50%]">
            <div className="sm:w-100% md:w-[30.75rem] w-[22rem]  md:h-[12.75rem]  h-[14.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] md:text-[2.5rem] text-[2rem]">
                The Future is Remote
              </span>
              <span className="">
              Strategic management formulates and implements major goals and initiatives.
              </span>
              <div className="w-[100%] flex justify-end">
                <span className="text-[#00BDD6]">Learn More... </span>
              </div>
            </div>
            <div className="sm:w-100% md:w-[30.75rem] w-[22rem] h-[17rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] md:text-[2.5rem] text-[2rem]">
              Remote culture
              </span>
              <span className="">
              Four activities for financial health: planning, budgeting, integrated financial planning, and performance management.
              </span>
              <div className="w-[100%] flex justify-end">
                <span className="text-[#00BDD6]">Learn More... </span>
              </div>
            </div>
            <div className="sm:w-100% md:w-[30.75rem] w-[22rem] md:h-[12.75rem] h-[15.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] md:text-[2.5rem] text-[2rem]">
              Remotely Hybrid
              </span>
              <span className="">
               Ongoing support services provide assistance to customers for a limited period.
              </span>
              <div className="w-[100%]  flex justify-end">
                <span className="text-[#00BDD6]">Learn More... </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] md:h-[50%] flex justify-center p-5">
            <img src="/remote_second_image.png" alt="a guy smiling" />
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
            <p className="md:text-[3rem] text-[1.8rem] text-center">Our Key Strategic Approach</p>
            
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

          <Features features={features}/>
        
        </section>

        
       <Reviews/>
  
       
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
            <p className="text-[3rem]">Gain insights from our remote expert </p>
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


       <div className="hidden md:flex">
      <Faq faqs={faqs}/>
      </div>
  

      </Layout>
    </div>
  );
};

export default Remote;

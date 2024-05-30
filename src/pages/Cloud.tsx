import Faq from "@/components/FAQs/Faq";
import Layout from "@/components/Layout";
import Reviews from "@/components/Reviews/Reviews";
import SolutionNavbar from "@/components/SolutionsNavbar/SolutionNavbar";
import AI_strategy from "@/components/ai_and_data_sections/AI_strategy";
import Large_Language_Modelling from "@/components/ai_and_data_sections/Large_Language_Modelling";
import Machine_Learning_Ops from "@/components/ai_and_data_sections/Machine_Learning_Ops";
import Features from "@/components/features/Features";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";


interface FAQItem {
  question: string;
  answer: string;
}

const Cloud = () => {


 
  const [componentVisible, setComponentVisible] = useState(null);

  const handleClick = (event: any, componentName: any) => {
    event.preventDefault();
    setComponentVisible(componentName);
  };


  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSolutionsNavbar = () => {
    setIsOpen(!isOpen);
  };



  const features = [
    { title: "Integrity", imageSrc: "/virtual_image.png" },
    { title: "Security", imageSrc: "/collaboration_image.png" },
    { title: "Scalability", imageSrc: "/cloud_storage.png" },
    { title: "Reliability", imageSrc: "/database_image.png" },
    { title: "Performance", imageSrc: "/management_image.png" },
  ];


  const faqs:FAQItem[] = [
    {
      question: 'What is the best environment for launching AI models?',
      answer: ' With a saved model, depending on the application and use case, eg speech commands for device control, or a language model on your own corporate data, utilization of local resources are more cost effective long term for text due to high memory usage, while for image and speech consumer level cloud servers may apply. Microcontrollers (Raspberry) can house image recognition models as well as transmitting data to cloud for processing in the presence of high bandwidth for more real time use cases.',
    },
    {
      question: 'How can we apply AI models in our Minimum Viable Product (MVP)?',
      answer: ' If your clients need to have a chat and get more detail about your company on your landing page, or your company has several branches overseas - there is a language barrier and you need real time translation during your correspondence,  or even you day to day company operations using image processing to detect faults in production, or you are in art and want to bring out other futuristic elements or mix various tastes/niches in your work, our text, image and speech models are the right ones for your MVP. ',
    },
    {
      question: 'How do I know which data is the right fit for launching AI in development operations?',
      answer: ' A1 data always brings out A1 models. If your images are well labeled showing the various attributes, your text is well structured in question answer format and proper labelled from themes to sub-themes, if the speech has a mix of day to day operation level/varying dialect sound (with colloquial interjections) and pure studio level/noiseless sound with the right text to speech matching for the shortened audio clips, if your numerical data does not have some missing data in some columns and is well, and most of all, you have as much (there can never be enough, accuracy can always improve) then your data is ripe for development operations. ',
    },
    {
      question: 'What are the considerations for deploying AI models in regulated industries, such as finance or social services, to ensure compliance with industry standards?',
      answer: ' Purpose limitation by virtue of a clear definitions of the objective outcomes of the model training and deployment process, Transparency and user consent - where in use of personal data explicit consent is provided with the use cases well defined, Data protection impact assessments (DPIA):where the risks on the data subjects rights and freedoms are well assessed, Data security and storage on proper encryption methods both in storage and transmission, Vendor and third-party management interacting with the training and deployment on regulatory compliance, and Ongoing monitoring and auditing of the model with respect to regulatory changes.',
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
            <span className="md:text-[3rem] text-[2.5rem] font-semibold">
              AI and Data Infrastructure
            </span>
            <span>
              Providing a scalable cloud-based infrastructure service, empower
              its clients to focus on their core business activities.
            </span>
            <Link href="#1">
            <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">
              Discover More
            </button>
            </Link>
          </div>

          <div className="w-full md:w-[50%] flex justify-center">
            <img
              src="/AI_data_structure_image.png"
              alt="a guy smiling"
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
            <p className="md:text-[3rem] text-[1.8rem]">Launch AI models </p>
            <p className="md:text-[1.875rem] text-[1.400rem] text-align: center;">
            Leveraging technology for operational improvement and long-term growth strategies.
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
              src="/AI_intro_image.png"
              alt="people smiling "
              className="w-full"
            />
          </div>
        </section>

        <section id="2" className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap justify-center items-center">
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 gap-x-12 text-[1.25rem] max-w-full md:max-w-[50%]">
            <div className="sm:w-100% md:w-[30.75rem] w-[22rem] md:h-[18.75rem] h-[20.75rem]  bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] md:text-[1.8rem] text-[1.6rem]">
                 AI strategy
              </span>
              <span className=" ">
               AI is a very common term nowadays, different interpretations almost like ana art. In the world of startups, two advantages make them stand out, being lightweight, and risk friendly. 
               startups can ship product without much bureaucracy.
               
              </span>
            {/* 
              <div className="w-[100%] hidden md:flex justify-end">
              <a
                  href="#"
                  onClick={(event) => handleClick(event, "AI strategy")}
                  className="text-[#00BDD6] cursor-pointer mt-4"
                >
                  Learn More...
                </a>
              </div>
              */}
            </div>
            <div className="sm:w-100% md:w-[30.75rem] w-[22rem] md:h-[12.75rem] h-[14.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] md:text-[1.8rem] text-[1.6rem]">
                Machine Learning Ops
              </span>
              <span className="">
              It highlights the paradigm shift machine learning represents and its  application beyond software products.
              </span>
              {/* 
              <div className="w-[100%] hidden md:flex justify-end">
              <a
                  href="#"
                  onClick={(event) => handleClick(event, "Machine Learning Ops")}
                  className="text-[#00BDD6] cursor-pointer"
                >
                  Learn More...
                </a>
              </div>
              */}
            </div>
            <div className="sm:w-100% md:w-[30.75rem] w-[22rem] md:h-[12.75rem] h-[17.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
              <span className="text-[#171A1F] font-[500] md:text-[1.8rem] text-[1.4rem]">
                SEO Large Language Modelling
              </span>
              <span className="">
              Integrating Generative AI ~AI21 Labs models for businesses can boost SEO quality and efficiency by optimizing page rank on the first page when rank on the first page when you search.
              </span>
              {/*
              <div className="w-[100%] hidden md:flex justify-end">
              <a
                  href="#"
                  onClick={(event) => handleClick(event, "Large Language Modelling")}
                  className="text-[#00BDD6] cursor-pointer"
                >
                  Learn More...
                </a>
              </div>
               */}
            </div>
          </div>

          <div
            className="w-full md:w-[50%] md:h-[50%] flex justify-center p-5"
            id="right-sub-section"
          >
            {componentVisible === "AI strategy" && <AI_strategy />}
            {componentVisible === "Machine Learning Ops" && <Machine_Learning_Ops />}
            {componentVisible === "Large Language Modelling" && <Large_Language_Modelling />}
            
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
              <span className=" text-[#00BDD6] md:text-[1.625rem] text-[1.300rem] ">
                Core Values
              </span>
            </div>
            <p className="md:text-[3rem] text-[1.8rem]">Our Key Strategic Approach</p>

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
      

        <section className=" hidden md:flex flex-col md:flex-row items-center justify-center  flex-wrap p-12 border-t border-t-gray m-6  ">
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
            <p className="text-[3rem]"> Gain insights from our AI Expert </p>
          </div>
          <div className="w-full md:w-[35%] flex-col justify-center m-1 ">
            
            <div className="bg-[#00BDD6]  flex flex-col justify-center  items-center text-white w-[65%]  p-2  rounded-[1rem]">
              <img src="reuben_nyaribari.png" alt="" className="w-[90%]" />
              <h3 className="text-[2rem]">Reuben  Nyaribari</h3>
              <p className="w-[90%]">
              Building and deploying models as web apps
              </p>
            </div>
          </div>
        </section>

       <div className="hidden md:flex">
        <Faq  faqs={faqs}/>
        </div> 
      </Layout>
    </div>
  );
};

export default Cloud;

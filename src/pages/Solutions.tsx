import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router';

const Solutions = () => {

 interface SolutionsLinks{
  label:string,
  href:string
 }


 const solutionLinks:SolutionsLinks[] = [
  { label: "CLIENT SUPPORT   ", href: "/Client" },
  { label: "REMOTE TEAM  ", href: "/Remote" },
  { label: "DIGITALX", href: "/DigitalX"},
  { label: "AI & DATA", href: "/Cloud" },

];
const router = useRouter();
 const [isOpen, setIsOpen] = useState(false);


  const toggleSolutionsNavbar = () => {
    setIsOpen(!isOpen);
  };







  return (
    
<Layout>

      <div className="md:hidden">
        <button
          onClick={toggleSolutionsNavbar}
          className="text-[#00BDD6] focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <>
              {" "}
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </>
          )}
        </button>
      </div>

<nav className=" md:flex space-x-12 flex-row justify-end  pr-[5rem] text-lg bg-blue-100 p-4 text-white ">
      <div className="flex justify-between items-center ">
        
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-12 sm:flex sm:justify-center sm:text-lg`}
        >
          {solutionLinks.map((solutionLink) => (
            <li key={solutionLink.label}>
              <Link
                href={solutionLink.href}
                className={`text-gray-700 ${
                  router.pathname === solutionLink.href
                    ? 'text-blue-500'
                    : 'hover:text-blue-500'
                } transition-colors duration-200 ease-in-out`}
              >
                {solutionLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>


   
  

  
   {/* Start of the Hero section  */}
 <section className="flex flex-col md:flex-row bg-[#E8C245] flex-wrap">
  <div className="w-full md:w-[50%] flex justify-center">
    <img src="/new_solution_image_1.png" alt="a woman with glasses photo" className="w-full" />
  </div>
  <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
    <span className="text-[3rem] font-semibold">CLIENT SUPPORT </span>
    <span>We offer a comprehensive client support infrastructure service designed to provide you with timely, efficient, and professional assistance.</span>
    <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">Discover More</button>
  </div>
</section>

<section className="flex mt-1 flex-col md:flex-row bg-[#8353E2] flex-wrap">
<div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
    <span className="text-[3rem] font-semibold">Remote Team </span>
    <span>Baobabpad's Virtual Tech Village platform  connects a vast pool of skilled tech talent across Africa..</span>
    <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">Discover More</button>
  </div>
  <div className="w-full md:w-[50%] flex justify-center">
    <img src="/remote_team_image.png" alt="a woman holding a file" className="w-full" />
  </div>
 
</section>

<section className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap">
<div className="w-full md:w-[50%] flex justify-center">
    <img src="/digital_infrastructure_image.png" alt="a guy smiling" className="w-full" />
  </div>
<div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
    <span className="text-[3rem] font-semibold">Digital Infrastructure</span>
    <span>Providing a scalable cloud-based infrastructure service, empower its clients to focus on their core business activities.</span>
    <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">Discover More</button>
  </div>
 
 
</section>

<section className="flex mt-1 flex-col md:flex-row bg-[#ED7D2D] flex-wrap">

<div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
    <span className="text-[3rem] font-semibold">AI and Data Infrastructure</span>
    <span>Providing a scalable cloud-based infrastructure service, empower its clients to focus on their core business activities.</span>
    <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">Discover More</button>
  </div>
  
  <div className="w-full md:w-[50%] flex justify-center">
    <img src="/AI_data_structure_image.png" alt="a guy smiling" className="w-full" />
  </div>
 
 
</section>


    {/* End of the Hero section */}

    
    <section className="flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
        <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
          <div className="flex flex-row bg-[#EBFDFF] w-[13rem] items-center">
             <img src="/introduction-icon.png" alt="introduction icon" className="w-[4rem]"/>
             <span className=" text-[#00BDD6] text-[1.625rem]">Introduction</span>
          </div>
          <p className="text-[3rem]">From bugs to bucks client  support </p>
          <p className="text-[1.875rem]">End to end client support infrastructure built to empower technology for operational improvement and creating long-term growth.</p>
          <div className=" flex flex-row gap-x-5 ">
              <button  className="border border-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white hover:border-none">Learn More</button>
              <button className="border border-black pl-9 pr-9 rounded-[1rem] bg-[#723CDE] text-white hover:bg-white hover:text-black">Sign up</button>
          </div>

           
        </div>
        <div className="w-full md:w-[49%] flex justify-center  ">
          <img src="/new_solution_image_2.png" alt="people smiling " className="w-full"/>
          
        </div>
        

        <div className="w-full md:w-[90%] flex flex-col flex-wrap items-center bg-[#F3F4F6] mt-3 p-8 gap-y-2 rounded-[2rem]">
          <div><span  className="font-serif text-[1.25rem]">As featured in </span></div>
          <div className=" flex items-center gap-x-12">
              <span className="font-serif text-[1.875rem]">BizBeat Insights</span>
              <span  className="font-serif text-[1.5rem]">Financial Scope</span>
              <span  className="font-serif text-[1.5rem] font-extrabold">CommercialCurrentScope</span>
          </div>

        </div>

        <div  className="w-full  flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
              <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
                  
          </div>
        </div>






    </section>
{/* 
    <section className="flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
        <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
          <div className="flex flex-row bg-[#EBFDFF] w-[13rem] items-center">
             <img src="/introduction-icon.png" alt="introduction icon" className="w-[4rem]"/>
             <span className=" text-[#00BDD6] text-[1.625rem]">Introduction</span>
          </div>
          <p className="text-[3rem]">From bugs to bucks client  support </p>
          <p className="text-[1.875rem]">End to end client support infrastructure built to empower technology for operational improvement and creating long-term growth.</p>
          <div className=" flex flex-row gap-x-5 ">
              <button  className="border border-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white hover:border-none">Learn More</button>
              <button className="border border-black pl-9 pr-9 rounded-[1rem] bg-[#723CDE] text-white hover:bg-white hover:text-black">Sign up</button>
          </div>

           
        </div>
        <div className="w-full md:w-[49%] flex justify-center  ">
          <img src="/new_solution_image_2.png" alt="people smiling " className="w-full"/>
          
        </div>
        

        <div className="w-full md:w-[90%] flex flex-col flex-wrap items-center bg-[#F3F4F6] mt-3 p-8 gap-y-2 rounded-[2rem]">
          <div><span  className="font-serif text-[1.25rem]">As featured in </span></div>
          <div className=" flex items-center gap-x-12">
              <span className="font-serif text-[1.875rem]">BizBeat Insights</span>
              <span  className="font-serif text-[1.5rem]">Financial Scope</span>
              <span  className="font-serif text-[1.5rem] font-extrabold">CommercialCurrentScope</span>
          </div>

        </div>

        <div  className="w-full  flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
              <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
                  
          </div>
        </div>






    </section>
     */}













</Layout>
  );
};

export default Solutions;

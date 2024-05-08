import Layout from "@/components/Layout";
import React, { useState } from "react";
import Solutions from "./Solutions";
import { useRouter } from "next/router";
import Link from "next/link";

const DigitalX = () => {
  interface SolutionsLinks {
    label: string;
    href: string;
  }

  const solutionLinks: SolutionsLinks[] = [
    { label: "CLIENT SUPPORT  ", href: "/Client" },
    { label: "REMOTE TEAM", href: "/Remote" },
    { label: "DIGITALX", href: "/DigitalX" },
    { label: "AI & DATA", href: "/Cloud" },
  ];
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSolutionsNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
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

        <nav className=" md:flex space-x-12 flex-row justify-end pr-[5rem] text-lg bg-blue-100 p-4 text-white ">
          <div className="flex justify-between items-center ">
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } sm:flex sm:space-x-12 sm:flex sm:justify-center sm:text-lg`}
            >
              {solutionLinks.map((solutionLink) => (
                <li key={solutionLink.label}>
                  <Link
                    href={solutionLink.href}
                    className={`text-gray-700 ${
                      router.pathname === solutionLink.href
                        ? "text-blue-500"
                        : "hover:text-blue-500"
                    } transition-colors duration-200 ease-in-out`}
                  >
                    {solutionLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <section className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap">
          <div className="w-full md:w-[50%] flex justify-center">
            <img
              src="/digital_infrastructure_image.png"
              alt="a guy smiling"
              className="w-full"
            />
          </div>
          <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
            <span className="text-[3rem] font-semibold">DIGITALX</span>
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

        <section className="flex mt-1 flex-col md:flex-row bg-[#00BDD6] flex-wrap justify-center items-center">
        <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 gap-x-12 text-[1.25rem] max-w-full md:max-w-[50%]">
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
                <span className="text-[#171A1F] font-[500] text-[2.5rem]">The Future is Cloud </span>
                <span className="">Strategic management formulates and implements major goals and initiatoves</span>
                <div className="w-[100%] flex justify-end">
                    <span className="text-[#00BDD6]">Learn More... </span>

                </div>
            </div>             
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
                <span className="text-[#171A1F] font-[500] text-[2.5rem]">Cloud xPert </span>
                <span className="">Four activities for financial health: planning, budgeting, integrated financial planning, and performance management.</span>
                <div className="w-[100%] flex justify-end">
                    <span className="text-[#00BDD6]">Learn More... </span>

                </div>
            </div> 
            <div className="sm:w-100% w-[30.75rem] h-[12.75rem] bg-white rounded-[1rem] flex flex-col text-black p-4 text-[#171A1F]">
                <span className="text-[#171A1F] font-[500] text-[2.5rem]">Cloud base </span>
                <span className="">
                Ongoing support services provide assistance to customers for a limited period.
                </span>
                <div className="w-[100%]  flex justify-end">
                    <span className="text-[#00BDD6]">Learn More... </span>

                </div>
            </div> 
            


          </div>



          <div className="w-full md:w-[50%] md:h-[50%] flex justify-center p-5">
            <img
              src="/digital_section_3_image.png"
              alt="a guy smiling"
           
            />
          </div>
        

        </section>

        <section className="flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
          <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
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
               <img src="/cloud_advisor_page.png" alt=""  className="rounded-[1rem]"/>
              <div className="">
                <p className=" font-bold font-[1rem]">Martin Sundberg</p>
                <p className="text-[#9095A0]">Cloud Advisor</p>

              </div>
            
            </div>
          </div>
          <div className="w-full md:w-[49%] flex-col justify-center m-1 ">
            <div className="flex  items-center gap-x-1  border-l border-l-[#00BDD6] border-l-[7px] m-2 w-[90%]" >
                <p className="font-bold text-[1.5rem] ">Virtual Machines</p>
                <img src="/virtual_image.png" alt="" className="rounded-[0.5rem]" />

            </div>

            <div className="flex  items-center gap-x-1  border-l border-l-[#00BDD6] border-l-[7px] m-2 w-[90%]" >
                <p className="font-bold text-[1.5rem] ">Collaboration</p>
                <img src="/collaboration_image.png" alt="" className="rounded-[0.5rem]" />

            </div>

            <div className="flex  items-center gap-x-1 border-l border-l-[#00BDD6] border-l-[7px] m-2 w-[90%]" >
                <p className="font-bold text-[1.5rem]">Cloud storage</p>
                <img src="/cloud_storage.png" alt="" className="rounded-[0.5rem]" />

            </div>
            <div className="flex items-center gap-x-1 border-l border-l-[#00BDD6] border-l-[7px] m-2 w-[90%]" >
                <p className="font-bold text-[1.5rem] ">Databases</p>
                <img src="/database_image.png" alt="" className="rounded-[0.5rem] ml-12" />

            </div>
            <div className="flex  items-center gap-x-1 p-2 border-l border-l-[#00BDD6] border-l-[7px] m-2 w-[90%]" >
                <p className="font-bold text-[1.5rem]">Management</p>
                <img src="/management_image.png" alt="" className="rounded-[0.5rem]" />

            </div>

          
            
            
          
          </div>
        </section>
        




      </Layout>
    </div>
  );
};

export default DigitalX;


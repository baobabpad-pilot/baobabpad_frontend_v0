import Layout from "@/components/Layout";
import React, { useState } from "react";
import Accordion  from "@/components/Impact/Accordion"
import { MdOutlineQuestionMark } from "react-icons/md";
import Link from 'next/link';
import Intern_story from "@/components/stories/Intern_story";
import Second_intern_story from "../stories/Second_intern_story";


const Internship = () => {

    const [componentVisible, setComponentVisible] = useState(null);


    const handleClick = (event:any, componentName:any) => {
      event.preventDefault();
      setComponentVisible(componentName);
    };
   
    return ( 
        <>
            <section className=" "> 
            {/*top part*/}              
             <div className=" bg-gray-100 w-[100%]  ">
             <div className="h-5"></div>
                <img src="intern1.png" alt="intern1" className="w-[80%] mx-auto " />
                <h1 className="font-bold md:text-4xl text-2xl p-4 ml-[30%] ">Virtual Internship Program</h1>
                
                <div>
                  <p className="mt-3">
                    <Link  href="/Careers" >
                    <button className="rounded-full text-center text-white bg-violet-600  ml-[40%] my-4 py-2 w-[20%] hover:bg-violet-200 ">Sign Up  </button>
                    </Link>
                  </p>
                  
                </div>
                  

                
                <div className="flex gap-3 text-sm justify-end mr-[5%]">
                    <p>Categories</p>
                    <button className="rounded-full text-center text-green-700 px-2 border border-green-700 hover hover:bg-green-400 ">Inclusion</button>
                    <button className="rounded-full  text-center text-green-700 px-2 border border-green-700  hover hover:bg-green-400">Empowerment</button>
                </div>
                <div className="h-5"></div>
             </div>
             {/*second part*/}
                <div className=" flex gap-[10%] w-[90%] mx-auto my-11">

                    {/*left part with stories*/}
                    <div className="w-[60%]">
                       {componentVisible === "Intern_story" && <Intern_story />}
                       {componentVisible === "Second_intern_story" && <Second_intern_story />}
                       {!componentVisible && (
                       <img src="/intern2.png" alt="a lady" className="rounded-lg " />
                        )}
                    </div>
                    {/*right part*/}
                    <div className="w-[40%]">
                        <h1 className="text-2xl  py-2 mb-6">Success stories</h1>
                        <div className="border-t border-b border-gray-500">
                            <a 
                             href="#"
                             onClick={(event) => handleClick(event, "Intern_story")} >
                            <h2 className="font-bold mb-8 hover hover:text-blue-600 ">
                            Internship Journey by Pascaline 
                            </h2>
                            </a>
                            <p className="text-sm text-gray-500">
                                5 min read
                            </p>
                        </div>
                        {/*Second story */}
                        <div className="border-t border-b border-gray-500">
                            <a 
                             href="#"
                             onClick={(event) => handleClick(event, "Second_intern_story")} >
                            <h2 className="font-bold mb-8 hover hover:text-blue-600 ">
                             From grad to growth, a pathway for virtual internship program 
                            </h2>
                            </a>
                            <p className="text-sm text-gray-500">
                                7 min read
                            </p>
                        </div>


                        {/*End ofSecond story */}
                    </div>
                    

                </div>
                {/*QUESTION PART*/}
                <div className="w-[90%] mx-auto border-b-2">
                    <div className="rounded-xl bg-blue-100 w-[10%] justify-start flex gap-4  mb-4">
                    <MdOutlineQuestionMark className="bg-[#00BDD6] text-white rounded-full w-[20%] h-full"/>
                    <span className="text-[#00BDD6]">FAQ</span>
                    </div>
                    <h1 className="text-3xl  ">Have Questions? </h1>
                    <h2  className="text-3xl "> Get Answers</h2>
                    <div className="py-4 ">
                      <Accordion
                          title="Who is eligible to apply for the virtual internship program?"
                          answer=" Baobabpad's program offers a strong foundation for interns to gain valuable skills and experience in software development, with a key focus for girls & women in tech. "
                          
                      />
                      <Accordion
                          title="How is the recruitment and selection of interns conducted?"
                          answer=" Baobabpad application for recruitment and selection of interns is open for all between 0 to 1 year of experience. The recruitment and selection process is easy, signing through social media auth, followed by one to one interview and then feedback."
                      />
                      <Accordion
                       title="What are the professional  opportunities after the internship program?"
                       answer=" After an internship program, based on performance, passion and growth mindset indicators, interns are given an opportunity to be part of the equity ownership in Baobabpad" 
                       />
                        <Accordion
                       title="In the internship a paid internship program?"
                       answer="Yes and No. Interns will be given a stipend for internet access to facilitate their continuous learning remotely. " 
                       />
                       
                    </div>
                </div>
             

                

            </section>
        </>
     );
}
 
export default Internship;
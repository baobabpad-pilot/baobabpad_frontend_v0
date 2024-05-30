import Layout from "@/components/Layout";
import Accordion  from "@/components/Impact/Accordion"
import { MdOutlineQuestionMark } from "react-icons/md";
import Link from 'next/link';
import React, { useState } from "react";
import Growth_mentorship from "@/components/stories/Growth_mentorship";


const Mentorship = () => {
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
                <img src="mentorship.png" alt="mentors" className="w-[80%] mx-auto " />
                <h1 className="font-bold text-4xl p-4  text-center">Mentorship Program</h1>
                <div>
                  <p className="mt-3">
                    <Link href="/Careers" >
                    <button className="rounded-full text-center text-white bg-violet-600  ml-[38%] my-4 py-2 w-[20%] hover:bg-violet-200 ">Sign Up  </button>
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
                <div className=" flex gap-[5%] w-[90%] mx-auto my-11">
                    {/*left part with stories*/}
                    <div className="w-[70%]">
                       {componentVisible === "Growth_mentorship" && <Growth_mentorship />}
                       {!componentVisible && (
                       <img src="/mentor1.png" alt="mentor" className="rounded-lg " />
                        )}
                    </div>
                    
                    {/*right part*/}
                    <div className="w-[30%]">
                        <h1 className="text-2xl  py-2 mb-6">Success stories</h1>
                        <div className="border-t border-b border-gray-500">
                           <a 
                               href="#"
                               onClick={(event) => handleClick(event, "Growth_mentorship")} 
                               className="font-bold mb-8 hover hover:text-blue-600">
                                Growth Mentorship Program.
                            </a>
                            <p className="text-sm text-gray-500 mt-8">
                                5 min read
                            </p>
                        </div>
                       
                        

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
                          title="How can I get a mentor?"
                          answer=" Mentors are allocated based on mutual growth mindset and leadership goals  between professionals and mentors."
                          
                      />
                      <Accordion
                          title="What's in it for mentors?"
                          answer="Mentors in Baobabpad are part of the community and social impact."
                      />
                      <Accordion
                       title="What are the thematic mentorship areas?"
                       answer="Baobabpad mentorship program thematic areas are: Growth mindset, leadership drive, women leadership, Impact and business innovation. " 
                       />
                        <Accordion
                       title="Why mentorship is important for remotely work?"
                       answer="Working remotely and virtually could be mentally tasking, our Mentors provide professional guidance and advice for growth." 
                       />
                       
                    </div>
                </div>
             

                

            </section>
        </>
     );
}
 
export default Mentorship;
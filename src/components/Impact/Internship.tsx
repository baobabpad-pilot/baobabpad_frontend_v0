import Layout from "@/components/Layout";
import Accordion  from "@/components/Impact/Accordion"
import { MdOutlineQuestionMark } from "react-icons/md";
import Link from 'next/link';


const Internship = () => {
   
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
                    {/*left part*/}
                    <div className=" p-2 w-[60%] ">
                        <p>
                           Objectives of the virtual internship program are providing hands-on experience in software
                           development, fostering diversity and inclusion in the tech industry, and empowering young women in technology in Africa. Baobabpad selects pilot projects or ongoing projects within the organization that offer meaningful learning experiences for interns. These projects offer remote collaboration and aligned with interns' learning goals.

                            <span className="">
                                <img src="Pascaline 1.png" alt="" className="w-[60%] mx-auto rounded-sm my-2"  />
                            </span>
                            Baobabpad then develops a structured curriculum that outlines the skills, tools, and technologies interns will learn during the program. Incorporated in it is a mix of technical training, mentorship, and project-based learning to enhance interns' software development capabilities.  Experienced supervisors are assigned to interns to guide them throughout the program. They also provide ongoing support, feedback, and guidance to help interns navigate their projects and career development. Regular monitoring of interns' progress and performance is conducted throughout the program. Interns are given opportunities to showcase their work, receive feedback, and address any challenges they encounter during project implementation.
                            <span>
                                <img src="intern2.png" alt="intern2" className="w-[100%] mx-auto rounded-sm my-5" />
                            </span>
                        </p>
                    </div>
                    {/*right part*/}
                    <div className="w-[40%]">
                        <h1 className="text-2xl  py-2 mb-6">Success stories</h1>
                        <div className="border-t border-b border-gray-500">
                            <h2 className="font-bold mb-8 ">
                                Internship journey insights for female graduates.
                            </h2>
                            <p className="text-sm text-gray-500">
                                5 min read
                            </p>
                        </div>
                        <div className=" border-b border-gray-500">
                            <h2 className="font-bold mb-8 ">
                               From grad to growth, a pathway for virtual internship program
                            </h2>
                            <p className="text-sm text-gray-500">
                                5 min read
                            </p>
                        </div>
                        <div className=" border-b border-gray-500">
                            <h2 className="font-bold mb-8">
                               Empowering social and economic inclusion for girls in tech
                            </h2>
                            <p className="text-sm text-gray-500">
                                5 min read
                            </p>
                        </div>
                        <div className=" border-b border-gray-500">
                            <h2 className="font-bold mb-8">
                            The future of tech is Africa young women and girls 
                            </h2>
                            <p className="text-sm text-gray-500">
                                5 min read
                            </p>
                        </div>
                        <div className=" border-b border-gray-500">
                            <h2 className="font-bold mb-8">
                            The virtual internship program impact and opportunities  
                            </h2>
                            <p className="text-sm text-gray-500">
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
                          title="Who is eligible to apply for the virtual internship program?"
                          answer="-----------------------------"
                          
                      />
                      <Accordion
                          title="How is the recruitment and selection of interns conducted?"
                          answer="-------------------------------"
                      />
                      <Accordion
                       title="What are the professional  opportunities after the internship program?"
                       answer="----------------------------------" 
                       />
                        <Accordion
                       title="In the internship a paid internship program?"
                       answer="----------------------------------" 
                       />
                       
                    </div>
                </div>
             

                

            </section>
        </>
     );
}
 
export default Internship;
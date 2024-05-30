import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineQuestion } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { CgMenuBoxed } from "react-icons/cg";
import Terms_condition from "@/components/stories/Terms_condition";
import Privacy_policy from "@/components/stories/Privacy_policy";
import EULA_policy from "@/components/stories/EULA_policy";
import Refund_policy from "@/components/stories/Refund_policy";
import Cookie_policy from "@/components/stories/Cookie_policy";
import Layout from "@/components/Layout";

const Terms = () => {

    const [componentVisible, setComponentVisible] = useState(null);


    const handleClick = (event:any, componentName:any) => {
      event.preventDefault();
      setComponentVisible(componentName);
    };


    return (
        <Layout>
            <div className="w-[90%] mx-auto my-[2rem]">
                {/*top division */}
                <div className="grid md:grid-cols-2 gap-5 bg-[#12BC7E] md:h-[20rem] h-[30rem] p-4 rounded-lg">
                    <div className="h-[70%] my-auto w-[60%] mx-auto">
                        <h1 className="font-bold text-3xl">Term of Service</h1>
                        <p className="py-3 font-medium">Read our terms below to learn more about your rights and responsibilities</p>
                    </div>
                    <div className="flex md:w-[100%]">
                        
                        <div className="h-[90%] my-auto w-[50%] md:mx-auto ml-[22%] bg-white rounded-lg py-[1rem]">
                            <div className="w-[90%] mx-auto h-[40%]  bg-blue-500 rounded-lg pt-[0.5rem] flex justify-between ">
                               
                                <span className=" mt-5 text-white text-2xl ml-2">GDPR</span>
                                <div className="w-[4rem] h-[4rem] rounded-l-full bg-blue-400 "></div>
                            </div>
                            <h2 className="w-[90%] mx-auto mt-2">Compliant </h2>
                            <div className="flex mt-2 ">
                            <button className="flex gap-1 h-[13%] text-white bg-[#FFC414] rounded-lg px-2 items-center ml-[-5.2rem]"><FaCheck className="text-white rounded-full size-3 ml-2 mt-1 border border-white mb-1"/>
                        <span className="mr-3 mb-1 text-sm">Accept</span>
                        </button>
                           
                            <div className="w-[90%] mx-auto">
                                <p className="bg-gray-300 h-[0.5rem]  w-[90%]"></p>
                                <p className="bg-gray-300 h-[0.2rem] mt-2 w-[80%]"></p>
                                <p className="bg-gray-300 h-[0.2rem] mt-2 w-[60%]"></p>
                                <p className="bg-gray-300 h-[0.2rem] mt-2 w-[50%]"></p>
                            </div>
                            </div>
                            <button className="bg-blue-400 hover hover:bg-blue-800 text-white rounded-lg mt-4 px-2 ml-5">Update</button>


                        </div>
                        <button className="flex gap-1 h-[10%] text-black bg-white rounded-lg px-2 items-center mt-[6.4rem] md:ml-[-15rem] ml-[-3rem]"><MdOutlineFileDownload className="text-blue-500"/>
                        <span className="mr-3 mb-1 text-sm">Download</span>
                        </button>
                    </div>

                </div>
                 {/*end of first division*/}
                 <div className="md:flex gap-5 my-[4rem]">
                    {/*left part*/}

                    {/*Five policy on large size screen */}
                    <div className="w-[30%] hidden  md:grid grid-rows-5  gap-[4rem] h-[100%] mt-[2rem]">
                        
                        <a 
                         href="#"
                         onClick={(event) => handleClick(event, "Terms_condition")} 
                         className="hover hover:text-green-600 font-medium">
                         <span>1. Terms & Conditions</span>
                        </a>
                        <a  
                          href="#"
                          onClick={(event) => handleClick(event, "Privacy_policy")} 
                          className="hover hover:text-green-600 font-medium">
                            <span>2. Privacy Policy</span>
                            </a>
                      
                        <a 
                         href="#"
                         onClick={(event) => handleClick(event, "EULA_policy")} 
                        className="hover hover:text-green-600 font-medium">
                            <span>3. EULA Policy</span></a>
                        <a  
                          href="#"
                          onClick={(event) => handleClick(event, "Refund_policy")} 
                          className="hover hover:text-green-600 font-medium">
                            <span>4. Refund Policy</span>
                        </a>
                        <a 
                          href="#"
                          onClick={(event) => handleClick(event, "Cookie_policy")}
                          className="hover hover:text-green-600 font-medium">
                            <span>5. Cookie Policy</span>
                        </a>

                    </div>

                    {/* Five Policy for small size screen */}
                    <div className=" lg:hidden md:hidden border-2 border-gray-500 grid grid-cols-2 h-[8rem] mt-[1rem] rounded-lg py-[1rem]">
                        <div className="grid grid-rows-3 gap-3 border-r-2 border-gray-500 pl-4">
                        <a 
                         href="#"
                         onClick={(event) => handleClick(event, "Terms_condition")} 
                         className="hover hover:text-green-600 font-medium">
                         <span>1. Terms & Conditions</span>
                        </a>
                        <a  
                          href="#"
                          onClick={(event) => handleClick(event, "Privacy_policy")} 
                          className="hover hover:text-green-600 font-medium">
                            <span>2. Privacy Policy</span>
                            </a>
                      
                        <a 
                         href="#"
                         onClick={(event) => handleClick(event, "EULA_policy")} 
                        className="hover hover:text-green-600 font-medium">
                            <span>3. EULA Policy</span></a>
                     </div>
                     <div className="grid grid-rows-2 gap-3 pl-4">
                        <a  
                          href="#"
                          onClick={(event) => handleClick(event, "Refund_policy")} 
                          className="hover hover:text-green-600 font-medium">
                            <span>4. Refund Policy</span>
                        </a>
                        <a 
                          href="#"
                          onClick={(event) => handleClick(event, "Cookie_policy")}
                          className="hover hover:text-green-600 font-medium">
                            <span>5. Cookie Policy</span>
                        </a>
                        </div>

                    </div>



                    {/*End for small size */}


                    {/*right part*/}
                    <div className="md:w-[70%] md:mt-0 mt-[2rem]">
                    {componentVisible === "Terms_condition" && <Terms_condition />}
                    {componentVisible === "Privacy_policy" && <Privacy_policy />}
                    {componentVisible === "EULA_policy" && <EULA_policy />}
                    {componentVisible === "Refund_policy" && <Refund_policy />}
                    {componentVisible === "Cookie_policy" && <Cookie_policy />}
                       {!componentVisible && (
                          <div className="h-[28rem] bg-gray-200 border border-gray-500 rounded-lg items-center">
                            <h1 className="text-3xl font medium text-center my-auto md:mt-[24%] mt-[38%] text-gray-700">Understand our Terms of Service</h1>

                          </div>
                        )}
                    </div>

                 </div>

                 {/*last part with buttons */}
                 <div className="md:flex justify-between w-[90%] mx-auto my-[2rem] md:h-[2.5rem] h-[8rem] ">
                    
                    <a  href="/Terms.pdf" download="Term of service.pdf"  className=" download-button flex gap-1  text-blue-500 bg-white rounded-lg px-2 py-2 items-center hover  hover:text-blue-900 md:w-[15%] w-[50%] md:mb-0 mb-[2rem] md:mx-0 mx-auto border border-gray-200"><MdOutlineFileDownload className="text-blue-500 ml-2"/>
                        <span className="mr-3 mb-1 text-sm">Download PDF</span>
                    </a>

                    <div className="flex md:gap-3 justify-between">
                        <a href="/Baobabpad">
                    <button className="flex gap-1 w-[7rem] p-2 text-gray-700 bg-gray-200 rounded-lg px-2 items-center hover hover:bg-gray-500 hover:text-white">
                     <span className="ml-6 ">Decline</span> 
                    </button>
                        </a>

                         <a href="/Subscription#1">
                    <button className="flex gap-1 w-[7rem] p-2  text-white bg-blue-500 rounded-lg px-2 items-center text-center  hover hover:bg-blue-800 ">
                    <span className="ml-6">Accept</span> 
                    </button>
                    </a>

                    </div>
                    
                 </div>


            </div>
        </Layout>
      );
}
 
export default Terms;
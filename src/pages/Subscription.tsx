import React, { useState } from "react";
import Layout from "@/components/Layout";
import { FaCheck } from "react-icons/fa6";
import { AiFillPlusCircle } from "react-icons/ai";
import { LuPlus } from "react-icons/lu";
import Businessform from "./Businessform";

const Subscription = () => {

    const [isVisible, setIsVisible] = useState(false);
    return (
        <Layout>
          <div className="">
            <h1 className="font-bold text-4xl uppercase text-[#00BDD6] text-center py-4 mt-2">
                BECOME A MEMBER
            </h1>
            <p className="text-center font-bold p-6 text-xl">
            Select your membership subscription
            </p>
            <div id="1" className=" md:flex flex-row-1  flex-col-1 md:w-[96%] w-[90%] mx-auto  gap-4 mt-11 ">
                {/*First Triangle*/}
                <div className="border-2 border-orange-600 rounded-md h-[80%]  md:w-[30%] w-[100%] mb-9 ">
                    {/*Top div with radio button */}
                    <div className="flex justify-between w-[96%] mx-auto mt-2">
                      <div className="flex gap-5 p-2">
                          <input type="radio" id="1" name="" value="" className="size-6 mt-1"/>
                          <label className="font-bold text-2xl">Free</label>
                      </div>
                      {/* 
                      <div className="flex gap-4 p-2">
                        <span className="text-2xl font-bold ">
                        $ 0.00
                        </span>
                        <span className="text-gray-500  mt-1">
                            14 days
                        </span>
                      </div>
                      */}
                    </div>
                    
                    {/*middle part */}
                    <div className="w-[60%] mx-auto mt-[10%] ">
                        <p className="flex gap-2 mb-5"><FaCheck className="text-green-500 size-5 "/><span>14 days Trial </span></p>
                        <p className="flex gap-2"><FaCheck className="text-green-500 size-5 mb-11"/><span>Moneyback guarantee</span></p>
                        
                    </div>

                </div>
                {/*End of First Triangle*/}

                {/*second Triangle*/}
                <div className="border-2 border-[#00BDD6] rounded-md  md:w-[35%] w-[100%]  md:mb-0 mb-9">
                    {/*Top div with radio button */}
                    
                    <div className="flex gap-5 p-2 mt-2">
                        <input type="radio" id="2" name="a" value="" className="size-6 mt-1"/>
                        <label className="font-bold text-2xl">Annual Membership</label>
                      
                    </div>
                    {/*middle part */}
                    <div className="w-[95%] ml-5 mt-[6%] ">
                        <p className="flex gap-2 mb-5"><FaCheck className="text-green-500 size-5 mt-1 "/><span>Dedicated account manager </span></p>
                        <p className="flex gap-2 mb-5"><FaCheck className="text-green-500 size-5 mt-1 "/><span>Access to all solutions  and serrvices all year</span></p>
                        <p className="flex gap-2"><FaCheck className="text-green-500 size-5 mt-1"/><span>Access to remote talent all year </span></p>
                    </div>
                    <div className="mt-[16%]">
                        <p className="font-bold text-xl text-center"></p>
                    </div>

                </div>
                {/*End of second Triangle*/}

                {/*Third Triangle*/}
                <div className="border-2 border-violet-600 rounded-md  md:w-[35%] w-[100%] h-[100%] ">
                    {/*Top div with radio button */}
                    
                    <div className="flex gap-5 p-2 mt-2">
                        <input type="radio" id="1" name="" value="" className="size-6 mt-1"/>
                        <label className="font-bold text-2xl">Project Membership</label>
                      
                    </div>
                    {/*middle part */}
                    <div className="w-[80%] mx-auto mt-[6%] ">
                        <p className="flex gap-2 mb-5"><FaCheck className="text-green-500 size-5 mt-1"/><span>Full access to all solutions  and services </span></p>
                        <p className="flex gap-2 mb-5"><FaCheck className="text-green-500 size-5 mt-1 "/><span>Dedictated software development team</span></p>
                        <p className="flex gap-2"><FaCheck className="text-green-500 size-5 mt-1 "/><span>Dedicated Project and Account Manager</span></p>
                    </div>
                    <div className="mt-[16%]">
                        <p className="font-bold text-xl text-center"></p>
                    </div>

                </div>
                {/*End of third triangle */}
            </div>

            {/*End of triangles*/}
            <div className=" flex gap-1  md:w-[60%] w-[80%] mx-auto mt-[3rem] ">
                
            <input type="checkbox" id="checkboxId" name="checkboxName" value="checkboxValue" className="size-6"/>
           
            <label id="checkboxId"className="text-center md:flex gap-2">By clicking the continue button, you agree to our
                <a href="/Terms" className="hover hover:text-[#00BDD6]">
                <span className="flex gap-2 md:ml-1 ml-2">
                  terms, conditions and privacy policy.
                </span>
                </a>
            </label> 
            </div>

            <div id="1" className="text-center mt-[3rem]">
                <button className="bg-[#00BDD6] text-white rounded-md md:w-[25rem] w-[15rem] h-[3rem] mx-auto hover:bg-[#314e52] "
                  onClick={() => setIsVisible(!isVisible) }>
                Continue
                </button>
                {isVisible && <Businessform />}
            </div>

  
            {/*last part with + icons*/}
            <div className="  md:w-[96%]  w-[90%] mx-auto md:flex justify-between mt-[4rem] mb-11">
              <div className="flex gap-3 md:w-[40%]  mb-7 ">
                  <span >
                  <LuPlus className="bg-gray-200 size-6 rounded-full mt-2"/>
                  </span>
                  <p className="text-sm">All membership starts on a free trial service to understand our cleints needs and services better. </p>
              </div>

              <div className="flex gap-3 md:w-[50%] ">
                  <span >
                  <LuPlus className="bg-gray-200 size-6 rounded-full mt-2"/>
                  </span>
                  <p className="text-sm">All membership starts on a free trial service to understand our cleints needs and services better. After feedback and review,, annual membership is activated after the trial period. </p>
              </div>

            </div>


          </div>


        </Layout>
      );
}
 
export default Subscription;
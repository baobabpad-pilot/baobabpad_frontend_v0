import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CiWifiOn } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaRegPaperPlane } from "react-icons/fa";
import Layout from "@/components/Layout";
import { TbStar } from "react-icons/tb";
import { TbNorthStar } from "react-icons/tb";
import { SlEmotsmile } from "react-icons/sl";
import { FaShareNodes } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";


const Baobabpad = () => {

  const teamDetailsArray=[
    {
      image:'/brenda_mkeshwa_CEO.jpg',
      username:'Brenda Mkwesha',
      position:'CEO'
    },
    {
      image:'/kenny.png',
      username:'Kenny Kaluiji',
      position:'Founder'
    },
    {
      image:'/jacob_mwale_tech_lead.jpg',
      username:'Jacob Mwale',
      position:'Tech Lead'
    },
    {
      image:'/chimwemwe_masona_tech_lead.png',
      username:'Chimwemwe Masona',
      position:'Tech Lead'
    },
    {
      image:'/selma_hamutenya_product_manager.png',
      username:'Selma Hamutenya',
      position:'Product Manager'
    },
    {
      image:'/Mark_Ai.jpg',
      username:'Mark Njoroge',
      position:'AI Lead'
    },
    {
      image:'/steve.jpg',
      username:'Stephen Ondieki',
      position:'Testing Lead'
    },
    {
      image:'/crispin_manda_product_manager.png',
      username:'Crispin Manda ',
      position:'Product Manager'
    },
    {
      image:'/sidney_kipron_cloud_manager.png',
      username:'Sidney Kiprono ',
      position:'Cloud Manager'
    },
    {
      image:'/martin_mundia_cloud_manager.jpg',
      username:'Martin Mundia ',
      position:'Cloud Manager'
    },
  ]









  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        {/* Hero section */}
        <div className="mt-7 flex flex-col items-center min-h-[500px] bg-[#ED7D2D] bg-opacity-40 justify-center text-center space-y-4">
          <h1 className="font-bold text-5xl text-[#723CDE] mt-20">
            Baobabpad
          </h1>
          <div className="flex justify-around items-center w-full pb-[150px]  mx-auto">
            <div className="rounded-full overflow-hidden -mt-48 mr-50 ">
              <img src="/about-hero-image-1.png" alt="Team Member" />
            </div>
            <div className="rounded-full overflow-hidden -mr-52">
              <img src="/about-hero-image-2.png" alt="Team Member" />
            </div>
            <p className="text-md text-[#00BDD6] bg-white p-2 px-6 br-2 rounded-3xl">
              Investing in Africa's Human & Social Capital Innovation
            </p>
            <div className="rounded-full overflow-hidden -ml-52">
              <img src="/about-hero-image-3.png" alt="Team Member" />
            </div>
            <div className="rounded-full overflow-hidden -mt-48">
              <img
                src="/about-hero-image-4.png"
                alt="Team Member"
                className="w-32"
              />
            </div>
          </div>
        </div>
        {/* About us */}
        <section className=" flex justify-between items-center -40 p-10">
          {/* Left side with text */}
          <div className="pl-20 max-w-[610px]">
            <h1 className="text-6xl mb-8 text-gray-800 font-bold">About us</h1>
            <img className="mb-8" src="/underline.png" alt="underline" />
            <p className="mb-10 text-gray-700 text-2xl">
              Baobabpad is a Virtual Technology Village, that offers a dynamic
              and innovative platform with top African technology talent,
              providing state of art technology value creation for businesses.
            </p>
            <button className=" text-blue-500 text-2xl bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition duration-300 px-20">
              Learn more
            </button>
          </div>

          {/* Right side with image and social icons */}
          <div className="relative pr-20">
            <img
              className="pr-32"
              src="/about-us-image.png"
              alt="Person using a phone"
            />

            {/* Eiusmod comm container */}
            <div className="absolute top-24 -left-32 p-6 w-[230px] mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
              <h3 className="text-xl  font-medium text-[#00BDD6]">
                Contact Us
              </h3>
              <div className="w-full">
                <button className="flex w-full px-4 py-2 bg-[#C8F9FF] text-blue-800 rounded-md shadow-sm space-x-2">
                  <CiWifiOn className="mt-1" />
                  <span>LinkedIn</span>
                </button>
                <button className="flex  w-full px-4 py-2 mt-4 bg-[#F5F2FD] text-[#8353E2] rounded-md shadow-sm space-x-2">
                  <CiShare2 className="mt-1" />
                  <span>Share</span>
                </button>
                <button className="flex  w-full px-4 py-2 mt-4 bg-[#FEF9EE] text-[#98690C] rounded-md shadow-sm space-x-2">
                  <FaRegPaperPlane className="mt-1" />
                  <span>Chat</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Who we are section */}
        <section className="flex justify-between items-center p-10  " >
                <div className="w-[100%] h-[95%] flex flex-row ">
                   <ul className=" flex flex-col items-left gap-y-10 p-10 w-[40%]">
                      <li><span className="text-9xl text-[#8353E2] font-bold">W</span> <span className="text-3xl text-[#8353E2] font-bold">HO</span></li>
                      <li><span className="text-9xl text-[#58CAEF] font-bold">W</span> <span className="text-3xl text-[#58CAEF] font-bold">E</span></li>
                      <li><span className="text-9xl text-[#F5C4C6] font-bold">A</span> <span className="text-3xl text-[#F5C4C6] font-bold">RE</span></li>
                    </ul>
                    <div className="flex flex-col items-left w-[60%] mx-3">
                        <div className="flex flex-col border-b border-gray-300 p-8">
                           <div className="flex  items-center ">
                              <TbNorthStar className="text-[#8353E2] text-400 text-[0.8rem] w-16 h-16" />
                              <span  className="text-[1.25rem] ml-2 text-2xl text-500 font-bold">Vision</span>
                           </div>
                           <span className="px-16">Elevating African Talent, Virtually and Globally</span>
                        </div>

                        <div className="flex flex-col  border-b border-gray-300 p-8">
                           <div className="flex  items-center ">
                           <SlEmotsmile  className="text-[#8353E2] text-200 text-[0.8rem] w-16 h-16" />
                              <span  className="text-[1.25rem] ml-2  text-500 font-bold">Mission</span>
                           </div>
                           <span className="px-16">Empowering African Talents through a bustling ecosystem that harnesses the immense potential of Africa's tech-experts to the world. </span>
                        </div>

                        
                        <div className="flex flex-col border-b border-gray-300 p-8 ">
                           <div className="flex  items-center ">
                           <FaShareNodes  className="text-[#8353E2] text-200 text-[0.8rem] w-16 h-16" />
                              <span  className="text-[1.25rem] ml-2 text-500 font-bold">Business Model</span>
                           </div>
                           <span className="px-16">Our business model is ownership and impact  based busiiness model , empowering economic and social inclusion for all  our talent. </span>
                        </div>


                    </div>


                </div>
        </section>
   
    

        {/* Start of why baobabpad section */}
        <section className="border-t border-500  flex items-center flex-wrap p-10">
            <div className="flex flex-col justify-center w-[65%] gap-y-5  p-4">
              <div className="flex flex-col ">
                  <span className="text-[#00BDD6]">Officia esse deserunt magna</span>
                  <span className="font-bold text-5xl text-[#323842]">Why Baobabpad</span>
              </div>

              <div className="mt-5">
                <span className="text-[1.5rem] ">Intuitive talent software development platform that lets you find and hire vetted talent, build teams, and connect seamless.</span>
              </div>

              <div className="flex flex-row gap-x-4 items-center">
                   <button className="w-[7rem] bg-[#00BDD6] text-white font-[1.125rem] p-[0.4rem] rounded-[1rem] hover:bg-white hover:text-[#00BDD6] hover:border hover:border-500"> Try Free</button>
                   <span className="text-[#9095A0] font-[1.125rem] cursor-pointer hover:bg-[#00BDD6] hover:border hover:bg-[#00BDD6] hover:text-[#FFF] hover:p-[0.4rem]  hover:rounded-[1rem]">Learn More</span>
              </div>

               
              
                    
            </div>

            <div className=" flex   w-[34.5%]  ">
              <div className="bg-[#A6F5FF]  border  rounded-t-[50%] border-t-o border-  w-[22rem] h-[27rem]  relative z-99">
                 <img src="/hand_holding_phone.png" alt="hand holiding a phone"  className="pl-[-1rem] absolute top-8 left-[-3.2rem] "/>
                 <div className="w-[15.75rem] h-[8.75rem] shadow-2xl absolute top-5 left-[12rem] z-999 bg-[#fff] flex flex-col items-left p-3 border border-gar-100 rounded-[0.7rem]">
                  <span className="text-gray-400">Return on Investment</span>
                  <span className="text-[3rem]">230%</span>
                  <span className="text-green-500">5.39%</span>

                 </div>
              </div>
                 


            </div>
        </section>
        {/* End of why baobabpad section */}

        {/* Start of  Clients benefits and  devops benefits */}
          <section className="border-t border-500 flex  flex-row justify-center w-[100%] items-center flex-wrap  gap-x-7  gap-y-10 p-10">
            <div className="border border-white-100 bg-[#EBFDFF] flex flex-col w-[30.625rem] h-[18.625rem] p-8 ">
                <span className="font-bold text-3xl">Client Benefits</span>
                <span>adipisicing elit. Quidem officiis explicabo quos dolorem perspiciatis vel asperiores odit harum, itaque quas maxime eveniet numquam hic, iste error omnis! Ad, rerum provident</span>
                <ul className="list-disc pl-8">
                    <li className="mb-2">100% remote team management support</li>
                    <li className="mb-2">Culture and team building excellence</li>
                    <li className="mb-2">Merit-reward infrastructure</li>
                    <li className="mb-2">High return on investment and impact</li>
                </ul>
            </div>

            <div className="border border-white-100 bg-[#F5F2FD] flex flex-col w-[30.625rem] h-[18.625rem] p-8">
                <span className="font-bold text-3xl"> DevOps benefits</span>
                <span>adipisicing elit. Quidem officiis explicabo quos dolorem perspiciatis vel asperiores odit harum, itaque quas maxime eveniet numquam hic, iste error omnis! Ad, rerum provident</span>

            <div className="flex flex-row justify-around">
            <div className="flex flex-col justify-center">
                   <div className="flex  items-center ml-1 p-2">
                      <VscGraph />
                      <span className="p-2">Cost Effective</span>
                   </div>

                     <div>
                        <span className="p-4 text-[2rem] font-bold font-700">+40%</span>
                     </div>
              </div>

              <div className="flex flex-col justify-center">
                   <div className="flex  items-center ml-1 p-2">
                   <FaRegHandshake />
                      <span className="p-2">Quality Assurance</span>
                   </div>
                   <div>
                        <span className="p-4 text-[2rem] font-bold font-700">100%</span>
                   </div>
              </div>
            </div>

            


            </div>

          </section>

          {/* End of  Clients benefits and  devops benefits */}

          {/* Start of team building and project management section */}
          <section className="flex flex-row justify-evenly items-center flex-wrap p-10">
            <div className="flex flex-col items-center  w-[20rem] h-[20rem] p-2">
                  <HiOutlineUserAdd className="text-[#00BDD6] text-[3rem] "/>
                  <span className="text-[#00BDD6] text-[2rem]">Team Building</span>
                  <span className="text-[1.25rem]">Effortlessly manage your hiring process with real-time candidate tracking</span>
             </div>

             <div className="flex flex-col items-center  w-[25rem] h-[20rem] p-2">
                  <FaPeopleGroup  className="text-[#4069E5] text-[3rem] "/>
                  <span className="text-[#4069E5] text-[2rem]">Project Management</span>
                  <span className="text-[1.25rem]">
                  Simplify HR tasks with efficient employee information management through our centralized database
                  </span>
             </div>



          </section>

          {/* End of team building and project management section */}

          {/* Start of message from  our village  */}

          {/* Start of  Village Management Team  */}

          <section className="border-t border-500 p-12">
          <div className=" p-2 flex flex-col gap-y-1 justify-center">
              <span className="font-bold text-600 text-[1.5rem]">Village Management Team</span>
              
                   
                 
                 {/*  start of profile cards */}
                 <div className=" px-4  flex gap-x-6  flex-wrap justify-center">
                 

                 {teamDetailsArray.map((member, index)=>(
                      <div key={index} className="pt-2 w-[25rem] h-[30rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer
                      ">
                                                <img
                                                src={member.image}
                                                alt="Team Member"
                                                className="w-[40%] h-[30%] rounded-[50%]"
                                              />
                                              <span className="font-bold font-700 text-xl">{member.username}</span>
                                              <span className="text-[#9095A0]">{member.position}</span>
                                              <button type="button" className="bg-[#C8F9FF] pt-2 pb-2 px-8 py-8 align-center ">View Profile</button>
                                              {/* <div className="bg-[#C8F9FF] text-white rounded-[100%] w-10 h-10 px-3 py-1  "><span className="text-black  text-2xl">+</span></div> */}
                                              
                                          </div>

                    ))}
                  
                    

                 

                     
                     
                     

                     
                     
                  
                  
                 </div>
                 {/* end of profile cards */}
              

          </div>
        </section>
        
        <section className="border-t border-500 p-12">
          <div className=" p-4 flex flex-col gap-y-1 justify-center">
              <span className="font-bold text-600 text-[1.5rem]">Advisory Team</span>
              
                   
                 
                 {/*  start of profile cards */}
                 <div className=" px-4  flex gap-x-6  flex-wrap justify-center">
                 

                 {teamDetailsArray.map((member, index)=>(
                      <div key={index} className="pt-2 w-[23rem] h-[30.75rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer
                      ">
                                                <img
                                                src={member.image}
                                                alt="Team Member"
                                                className="w-[40%] h-[30%] rounded-[50%]"
                                              />
                                              <span className="font-bold font-700 text-xl">{member.username}</span>
                                              <span className="text-[#9095A0]">{member.position}</span>
                                              <button type="button" className="bg-[#C8F9FF] pt-2 pb-2 px-8 py-8 align-center ">View Profile</button>
                                              {/* <div className="bg-[#C8F9FF] text-white rounded-[100%] w-10 h-10 px-3 py-1  "><span className="text-black  text-2xl">+</span></div> */}
                                              
                                          </div>

                    ))}
                  
                    

                 

                     
                     
                     

                     
                     
                  
                  
                 </div>
                 {/* end of profile cards */}
              

          </div>
        </section>
          {/* end of Village management team  */}


          <section className="flex flex-col justify-center  ">
              <div className="flex flex-row justify-center">
              <span className="align-center font-extrabold font text-[3rem]">Message from Our Village</span>
              </div>
           <div className="flex justify-end p-4" >
              <button className="border border-[#00BDD6] p-2 text-[#00BDD6] text-[0.875rem] rounded-[1rem] hover:bg-[#00BDD6] hover:text-[#fff]">View More ...</button>
           </div>

           <div className="flex justify-center  flex-wrap gap-x-7 gap-y-7 ">
             <div className="hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
             < CiPlay1  className="text-[2rem] text-[#000] absolute  "/>
                <img src="/our-village-image1.png" alt="woman smiling photo 2"  />
             </div>
              <div className="hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
              < CiPlay1  className="text-[2rem] text-[#000] absolute  "/>      
                <img src="/our-village-Image.png" alt="woman smiling photo 1" />
              </div>
          
                
           </div>




          </section>

          {/* End of message from our village  */}

          {/* Start of the impact section */}
          <section className="flex flex-col justify-center mt-7 ">
              <div className="flex flex-row justify-center">
              <span className="align-left font-extrabold font text-[3rem]">Our Impact</span>
              </div>
           <div className="flex justify-end p-4" >
                    <button className="border border-[#00BDD6] p-2 text-[#00BDD6] text-[0.875rem] rounded-[1rem] hover:bg-[#00BDD6] hover:text-[#fff]">View More ...</button>
           </div>

           <div className="flex justify-center  flex-wrap gap-x-7 gap-y-7  ">
             <div className=" flex flex-col p-4 gap-y-5 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
          
                <img src="/Pascaline 1.png" alt="Pascaline's photo"  className="w-[19rem]" />
                <span className="text-[1.5rem] font-bold">Virtual Intership Program </span>
                <div >
                   <span className="bg-[#EBFDFF] text-[#00BDD6] text-[0.7rem] p-1 rounded-[1rem]">Impact</span>
                </div>
               
             </div>
              <div className="flex flex-col p-4  gap-y-5 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
                <img src="/kenny.png" alt="Kenny's photo"  />
                <span className="text-[1.5rem] font-bold">Growth Mentorship</span>
                <div>
                     <span className="bg-[#F1F4FD] text-[#4069E5] text-[0.7rem] p-1 rounded-[1rem]">Human Capital</span>
                </div>
              </div>

              <div className="flex flex-col p-4 gap-y-5 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
                <img src="/team_haniken.png" alt="A boy holding a ball photo" className="w-[19rem]" />
                <span className="text-[1.5rem] font-bold">Team Hanniken</span>
               <div>
                   <span className="bg-[#EBFDFF] text-[#00BDD6] text-[0.7rem] p-1 rounded-[1rem]">Sports</span>
               </div>
              </div>
              
          
                
           </div>




          </section>

          {/* End of the impact section */}

          {/* Start of featured by section */}
          <section className="bg-[#F8F9FA] flex flex-col items-center mt-8 p-6 gap-y-4 ">

            <div>
              <span className="text-[2rem] font-medium text-[#341473]">Featured by:</span>
            </div>

            <div className="flex flex-row gap-x-8 justify-between">
            <div className="flex flex-row ">
                  <img src="/apex-fusion-icon-1.png" alt=" apex fusion icon" />
              
              </div>
              <div className="flex flex-row">
                  <img src="/nebulla-dynamics-1.png" alt="nebulla dynamics icon" />
               
              </div>

              <div className="flex flex-row">
                  <img src="/virtuoso-icon-1.png" alt=" virtuoso icon" />
               
              </div>

              <div className="flex flex-row">
                  <img src="/quantum-icon-1.png" alt="quantum icon" />
            
              </div>

              <div className="flex flex-row">
                  <img src="/pinnacle-nexus-icon-1.png" alt="pinnacle-nexus icon" />
               
              </div>
              
              <div className="flex flex-row">
                  <img src="/elysium-global-icon.png" alt="elysium-global icon" />
                
              </div>
            </div>
              


          </section>

          {/* End of featured by section */}




      </Layout>
    </div>
  );
};

export default Baobabpad;

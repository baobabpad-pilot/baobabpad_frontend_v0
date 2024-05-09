import Layout from "@/components/Layout";
import { BsStars } from "react-icons/bs";
import { BiMessageAdd } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { GrFormEdit } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import Chatform  from "@/components/Chat/Chatform"



const Chatbox = () => {
    return ( 
        <div className="max-h-screen">
            <Layout >
                <div className="  shadow-inner rounded-md w-[90%]  border-2 border-gray-200 mx-auto py-4">
                 <div className="flex mb-3">
                <img src="logo.png" alt="logo" className="w-[90px] px-1 py-1 ml-8"/>
                <h2 className="p-4 sm:text-xl text-2xl font-bold mt-2 ">Baobabpad AI</h2>
                </div>
                <div className="flex gap-8 ">
                 {/*left section*/}
                <section className=" w-[300PX] h-full ml-11 ">
               
                     <div >
                        <h2 className="py-2 font-medium">My Chatbots</h2>
                        <div className="flex gap-3 bg-[#00BDD6] rounded-full my-2"> 
                        <img src="emoji1.png" alt="emoji1" className=" my-auto p-2 size-[50px] hover:scale-125 duration-300"/>
                        <a href="#" className="my-auto hover:text-green-800 text-sm text-white p-2  font-medium">
                        AI & Data
                        </a>
                        <a href="#" className="text-white my-auto ml-[5rem] hover:text-green-800 ">
                            <GrFormEdit  className="size-[20px]"/>
                        </a>
                        <a href="#" className="text-white my-auto  hover:text-green-800 ">
                        <BsThreeDots className="size-[20px]"/>
                        </a>
                        
                        </div>
                        <div className="flex gap-3  rounded-full my-2"> 
                        <img src="emoji2.png" alt="emoji2" className=" my-auto p-2 size-[50px] rounded-full hover:scale-125 duration-300"/>
                        <a href="#" className="text-sm p-2 my-auto font-medium text-gray-600  hover:text-[#00BDD6]" >Digital X</a>
                        </div>
                        <div className="flex gap-3  rounded-full my-2"> 
                        <img src="emoji3.png" alt="emoji3" className=" my-auto p-2 size-[50px] rounded-full hover:scale-125 duration-300"/>
                        <a href="#" className="text-sm p-2 my-auto font-medium text-gray-600  hover:text-[#00BDD6]" >Baobabpad</a>
                        </div>
                        <div className="flex gap-3  rounded-full my-2"> 
                        <img src="emoji4.png" alt="emoji4" className=" my-auto p-2 size-[50px] rounded-full hover:scale-125 duration-300"/>
                        <a href="#" className="text-sm p-2 my-auto font-medium text-gray-600  hover:text-[#00BDD6]" >Careers</a>
                        </div>


                    </div>
                    <div className="border-t-2 border-b-2 py-2">
                      <div className="flex gap-6  rounded-full my-2 ml-1 "> 
                          <BsStars  className="rounded-full my-auto p-2 size-[35px] text-gray-600 border border-gray-600 hover:scale-125 duration-300"/>
                          <a href="#" className="text-sm p-2 my-auto font-medium text-gray-600 hover:text-[#00BDD6]">Explore</a>
                      </div>
                    </div>

                    <div className=" py-2">
                        <div className="justify-between flex text-gray-600 my-4">
                            <h2 className=" my-auto font-medium">Recent Chats</h2>
                            <BiMessageAdd  className="my-auto size-[20px] hover:scale-125 duration-300"/>
                        </div>
                        <div className="flex gap-6 mt-8">
                          <BiMessageDetail  className="rounded-full my-auto p-2 size-[35px] text-gray-600 border bg-gray-100 hover:scale-125 duration-300"/>
                        <div className="grid grid-rows-2">
                            <button  className="border border-blue-500 text-sm rounded-[1rem] text-blue-500 w-[60px] text-center hover hover:bg-blue-200">carrers</button>
                            <a href="#" className="hover:text-[#00BDD6]">Carrer development</a>
                        </div>
                            
                        </div>

                        <div className="flex gap-6 mt-8">
                          <BiMessageDetail  className="rounded-full my-auto p-2 size-[35px] text-gray-600 border bg-gray-100 hover:scale-125 duration-300"/>
                        <div className="grid grid-rows-2">
                            <button  className="border border-yellow-500 text-sm rounded-[1rem] text-yellow-500 w-[70px] text-center hover hover:bg-yellow-200">solutions</button>
                            <a href="#" className="hover:text-[#00BDD6]">Business model canvas</a>
                        </div>
                            
                        </div>

                        <div className="flex gap-6 mt-8">
                          <BiMessageDetail  className="rounded-full my-auto p-2 size-[35px] text-gray-600 border bg-gray-100 hover:scale-125 duration-300"/>
                        <div className="grid grid-rows-2">
                            <button  className="border border-yellow-500 text-sm rounded-[1rem] w-[60px] text-yellow-500  text-center hover hover:bg-yellow-200">talent</button>
                            <a href="#" className="hover:text-[#00BDD6]">UX researcher Q&A</a>
                        </div>
                            
                        </div>
                      
                     
                    </div>
                    

                </section>
                {/*Right section with message*/}
                <Chatform/>
                

                </div>
              
                </div>
            </Layout>

        </div>
     );
}
 
export default Chatbox;

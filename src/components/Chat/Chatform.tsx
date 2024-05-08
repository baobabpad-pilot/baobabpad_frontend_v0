import Layout from "@/components/Layout";
import { BsStars } from "react-icons/bs";
import { BiMessageAdd } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { GrFormEdit } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { TbPhoto } from "react-icons/tb";
import { MdKeyboardVoice } from "react-icons/md";
import { MdSend } from "react-icons/md";


const Chatform = () => {
    return ( 
        <>
        {/*Right section with message*/}
        <section className=" hidden md:block lg:block bg-gray-100 rounded-lg w-[700px] ml-11  mr-2 mb-8">
        <div className="flex justify-center items-center mt-[3rem]">
        <img src="chatuser1.png" alt="chatuser1" className="rounded-full size-[70px] " />
        </div>
        <h1 className="font-bold text-2xl flex justify-center py-2 text-gray-600">Kenbot</h1>
        <p className="  text-gray-500  text-center py-2 ">
             I'm your customer support, ready to answer your <br /> questions
         </p>
         {/*Question and reply 1*/}
         <div>
            <div className="bg-white mx-4 mt-5 rounded-full shadow-md p-4 ">
                <p className="my-auto text-gray-600 ml-4 ">What subscription plans do you offer?</p>
            </div>
            <div className=" flex gap-2 mx-4 mt-4 rounded-full  p-4 ml-7 ">
                <img src="chatuser1.png" alt="chatuser1" className="rounded-full size-[30px] " />
                <p className="my-auto text-gray-600 ml-4 ">Is there a free trial available ?</p>
            </div>
         </div>

        {/*Question and reply 2*/}
         <div>
            <div className="bg-white mx-4 mt-5 rounded-full shadow-md p-4  ">
                <p className="my-auto text-gray-600 ml-4 ">How do I upgrade or downgrade my subscription?</p>
            </div>
            <div className=" flex gap-2 mx-4 mt-4 rounded-full  p-4 ml-7 ">
                <img src="chatuser1.png" alt="chatuser1" className="rounded-full size-[30px] " />
                <p className="my-auto text-gray-600 ml-4  ">Typing....</p>
            </div>
            <div className="bg-white mx-4 mt-5 rounded-full shadow-md p-4 ">
                <p className="my-auto text-gray-600 ml-4">How do I cancel my subscription?</p>
            </div>
         </div>

           {/*part for typing your text*/}

            <div className="flex text-center mx-4 my-11   bg-white rounded-full h-[50px]   ">
            < input type="text" id="text" placeholder="  Type your Message.. " className="w-[90%] mb-[-3rem] px-5 h-full rounded-l-full  bg-white" />
            <div className="flex  gap-4 mr-4">
            <a href="#" className="  my-auto text-[#00BDD6] hover:text-green-800  ">
                <TbPhoto className="size-[25px]"/>
            </a>
            <a href="#" className="  my-auto text-[#00BDD6] hover:text-green-800">
            <MdKeyboardVoice  className="  size-[25px]"/>
            </a>
            <a href="#" className=" my-auto text-[#00BDD6] hover:text-green-800" >
            <MdSend className="size-[25px]" />
            </a>
            </div>
            </div>     
        
    </section>
    </>
     );
}
 
export default Chatform;
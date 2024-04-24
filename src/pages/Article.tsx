
import Layout from "@/components/Layout";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlinePlayArrow } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Article = () => {
    return ( 
        <div className="min-h-screen">
            <Layout>
                {/* Top section*/}
                <section className="w-[700px]  py-6 flex h-[100px]">
                    <div className="  ml-4 rounded-full border text-gray-700 border-gray-500 p-4 hover hover:bg-gray-300"><FaArrowLeft/> </div>
                    
                    <div className="flex gap-4 ml-[10rem] my-auto">
                    <button  className="border border-black p-1  text-sm rounded-[1rem] hover:bg-[#00BDD6] hover:text-white hover:border-none">Hybrid</button>
                    <button className="border border-black px-2  text-sm  rounded-[1rem] bg-black text-white hover:bg-white hover:text-black">Remote</button>
                    <p className="text-sm mt-1 font-medium">Mar 28,2024</p>
                    </div>
                </section>
                <h1 className="font-medium  md:text-3xl mx-[14rem] p-2 sm:text-sm">
                 Baobabpad Prioritizes Well-Being and Productivity <br />for Remote Workforce
                </h1>
                {/* section 2*/}
                <section className="flex h-[50px] ml-[14rem] py-6">
                    <img src="image1.png" alt="image1" className="my-auto p-2"/>
                    <div className="grid grid-rows-2 gap-5">
                        <h2 className="font-medium p-2">Brenda Mkwesha</h2>
                        <p className="text-sm p-2 ">4 min read</p>
                    </div>
                    <button className=" px-4 py-2 my-auto mt-2 text-sm  rounded-[0.5rem] bg-orange-100 text-orange-600 hover:bg-white hover:text-black">Follow</button>

                    
                </section>

                 {/* section 3*/}
                 <section className=" border-h-[3px] border-t-2 border-b-2 h-[50px] my-11 mx-[14rem] flex justify-between ">
                    <div className=" flex gap-1 align-left my-auto">
                    <FaRegEye className="mt-1 text-2xl"/>
                    <p className=" my-auto  ">1.8M</p>
                    </div>
                    <div className="flex gap-3  text-2xl my-auto">
                    <IoShareSocialOutline />
                    <FaRegBookmark />
                    <BsThreeDotsVertical />
                    
                    </div>

                 </section> 

                 {/* section 4*/}
                 <section className="mx-[14rem] py-4 text-justify">
                    <img src="image2.png" className="w-full" alt="image2 " />
                    <div>
                        <p className="text-justify py-4">
                        Baobabpad recognizes the importance of adapting to the needs of a remote or hybrid workforce. By prioritizing well-being and clear communication, they aim to ensure employees feel supported, engaged, and valued.<br/><br />

                        Holistic Approach to Employee Well-being <br /><br />

                        Physical and mental health: Baobabpad promotes regular breaks, exercise, and ergonomic workspaces. They also provide open communication channels for emotional well-being and access to health resources, including counseling and employee assistance programs. Additionally, they foster a supportive culture where colleagues can rely on each other.<br/><br />

                        Workflow planning: Clear goals, deadlines, and project management tools are implemented to streamline remote work. Flexible scheduling considers time zones and individual preferences, while virtual meetings, brainstorming sessions, and shared documents encourage collaboration.<br/><br />

                        Effective supervision: Regular check-ins between managers and team members provide guidance. Key performance indicators (KPIs) measure productivity and quality, with regular reviews offering constructive feedback. Peer review systems ensure high standards are maintained.
                        </p>
                        <h2 className="font-medium py-6">
                        1. Financial Planning and Investment in Employees:
                        </h2>
                    </div>
                    <img src="image3.png" className="w-full mb-2" alt="image3 " />
                    <div>
                        <p>
                        Resource allocation: Resources are allocated for necessary remote work tools and technology.
                        Cost-saving measures: Baobabpad explores cost-saving measures like shared office spaces, remote work stipends, and reimbursement policies. Employee
                         development: They invest in training, remote team-building activities, and virtual events.
                        </p>
                        <h2 className="font-medium py-6">
                        2. Performance Management and Recognition
                        </h2>

                        <p>
                        Clear metrics: Clear performance metrics are established, aligned with organizational objectives. Development 
                        opportunities: Employees are offered opportunities to enhance their skills. Recognition and rewards: Outstanding
                         performance is acknowledged through bonuses, promotions, or public recognition. Addressing performance issues: 
                         Performance issues are addressed promptly through coaching, improvement plans, or disciplinary actions when 
                         necessary.
                        </p>
                        <h2 className="font-medium py-6">
                        3. Accountability and Trust:
                        </h2>
                        <p >
                        Culture of accountability: A culture of accountability is nurtured, where employees take 
                        ownership of their work. Expectations are set regarding communication, meeting attendance,
                         and participation. Transparency: Transparency is built through sharing relevant information 
                         and updates with the team. Trust-building: Consistent actions, fairness, and integrity in decision-making
                          processes help build trust.
                        </p>
                        <h1 className=" text-2xl py-4">
                        Investing in remote work infrastructure growth
                        </h1>
                        <p>
                        Baobabpad's commitment extends beyond just providing a physical space. They understand that 
                        a sense of belonging is intertwined with both mental and professional growth. The coworking 
                        space can facilitate brainstorming sessions, team-building exercises, and opportunities for 
                        mentorship. This investment in a collaborative environment empowers employees to develop 
                        their skills and advance their careers.
                        <br /><br />
                        Baobabpad acknowledges that unreliable electricity and internet access can hinder productivity 
                        and satisfaction for remote employees. By providing a coworking space, they ensure their 
                        talent has access to the necessary infrastructure to thrive in a professional setting. The 
                        coworking space goes beyond just offering a reliable internet connection and a comfortable 
                        workspace. It serves as a physical hub where remote employees can connect with colleagues, 
                        collaborate on projects, and build camaraderie. This fosters a sense of belonging and 
                        community, which can be crucial for remote workers who might otherwise feel isolated.
                        </p>

                    </div>

                 </section>

                  {/* section 5*/}
                  <section className="my-6 ml-[8rem] mr-4">
                    <h2 className="font-medium py-4 text-2xl mb-4"> Recommend to you</h2>
                    <div className="flex md:gap-20 sm:gap-8 ">
                        <div className=" bg-gray-100 w-[250px] rounded-sm shadow-sm  hover:scale-105 duration-300 ">
                            <img src="image4.png" className="w-full " alt="/" />
                            <p className="p-2 text-sm h-11"> Baobabpad Virtual Workshops </p>
                        </div>
                        <div className=" bg-gray-100 w-[250px] rounded-sm shadow-sm  hover:scale-105 duration-300 ">
                            <img src="image5.png" className="w-full " alt="/" />
                            <p className="p-2 text-sm h-11"> Mental and Physical Holistic Welln=being  </p>
                        </div>
                        <div className=" bg-gray-100 w-[250px] rounded-sm shadow-sm hover:scale-105 duration-300 ">
                            <img src="image6.png" className="w-full " alt="/" />
                            <p className="p-2 text-sm "> Fight or flight - [E12]: Negative vs. Positive Motivation  </p>
                        </div>
                        <div className=" bg-gray-400 text-white rounded-full my-auto p-2 text-2xl hover hover:bg-gray-700">
                            <MdOutlinePlayArrow /></div>

                    </div>
                  </section>


                 


            

            </Layout>


        

        </div>
     );
}
 
export default Article;
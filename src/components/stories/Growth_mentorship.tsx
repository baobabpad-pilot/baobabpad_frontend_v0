import { GiCircle } from "react-icons/gi";

const Mentor_story = () => {
    return ( 
        <div >
            <h1 className="text-3xl p-4 font-bold ml-4 ">Growth Mentorship Program.</h1>
            <p>
                Baobabpad offers a Growth Mentorship Program to its technology talent and this
                program is designed to nurture the professional development of the software developers
                by connecting them experts in the global sphere of software development The mentors
                help the software developers to horn in their skills so as to become more competitive in
                the global marketplace.
            </p>


            <h2 className="font-bold my-4 text-xl">There are five objectives entailed in the Growth Mentorship Program which
            are:</h2>
            <ul className="ml-2 my-4 grid grid-rows-5 gap-2 text-justify ">
                <li className="flex gap-2"><GiCircle className="mt-1"/>Mentorship Pairing: Match developers with experienced mentors from
                        the tech industry who can provide guidance, feedback, and support.
                </li>

                <li className="flex gap-2"><GiCircle className="mt-1"/>Regular Check-ins:
                Schedule regular meetings to monitor progress, address challenges, and set goals.
                </li>

                <li className="flex gap-2"><GiCircle className="mt-1"/>Community Support:
                Nurturing a supportive community where software developers can share knowledge, collaborate, and learn from each other.
                </li>

                <li className="flex gap-2"><GiCircle className="mt-1"/>Skill Enhancement:
                Equipping software developers with more technical skills and industry knowledge.
                </li>
                <li className="flex gap-2"><GiCircle className="mt-1"/>Professional Development:
                Enhancement of soft skills, including communication, project management, and teamwork in diverse teams.
                </li>

            </ul>
            <div>
                <h1 className="text-2xl font-medium my-4">The Growth Mentorship Program Structure entails:</h1>
                <h2 className="text-2xl  my-2">1. Training and Development</h2>
                <ul className="ml-8 list-disc my-4 grid grid-rows-2 gap-3 text-justify">
                    <li>Technical Training: provides access to training in the latest technologies, programming languages, and frameworks and advanced social development topics that affect work-life balance.</li>
                    <li> Soft Skills Workshops: Training of software developers incommunication, teamwork, and project management.</li>
                </ul>

                <h2 className="text-2xl  my-2">2. Networking and Career Advancement</h2>
                <ul className="ml-8 list-disc my-4 grid grid-rows-2 gap-3 text-justify">
                    <li>Global Networks: Connect developers with global companies and networks so as to showcase their areas of tech expertise.</li>
                    <li>Career Pathways: Assist in career planning and advancement ensuring developers can achieve their professional career goals.</li>
                </ul>
            </div>
            <div>
            <h1 className="text-2xl font-medium my-6">Benefits to Developers</h1>
            <ul className="ml-8 list-disc my-4 grid grid-rows-4 gap-3 text-justify">
                    <li>Skill Development: Continuous learning and development prospects to stay  current and/or ahead in the technology industry.</li>
                    <li>Professional Growth: Acquire valuable experience working on international projects and improve career prospects.</li>
                    <li>Mentorship: Access to experienced mentors who provide personalized guidance and support.</li>
                    <li>Networking: Fostering of a network of industry professionals and peers to collaborate and learn from.</li>
                </ul>
            </div>
            <div>
            <h1 className="text-2xl font-medium my-6">Benefits to Clients</h1>
            <ul className="ml-8 list-disc my-4 grid grid-rows-4 gap-3 text-justify">
                    <li>Access to Talent: Tap into a pool of highly skilled and vetted African software developers.</li>
                    <li>Cost Efficiency: Reduce recruitment and training costs by partnering with Baobabpad which provides skilled and professional ready-to-work software developers.</li>
                    <li>Diverse Perspectives: Benefit from the innovative solutions and diverse perspectives that come from working with a global team.</li>
                    <li>Flexibility: Scale your team up or down based on project needs with access to a flexible talent pool.</li>
                </ul>

            </div>

            <p className="text-justify p-3 ">
                Baobabpad’s Growth Mentorship Program is a win-win for both software developers
                and clients that sign up for membership on our platform. We feel that through investing
                in the technical and professional growth of African software developers, we empower
                individuals and contribute to the global technological environment. This program
                ensures that software developers are well-prepared to meet the demands of the global
                market, while companies gain access to top-tier talent to push their technology projects.
                Baobabpad can therefore contribute to the development of a more connected and
                innovative world.
            </p>

                {/* 
                    <img src="mentor1.png" alt="mentor1" className="w-[100%] mx-auto rounded-sm my-2"  />
                    <img src="mentor2.png" alt="mentor2" className="w-[100%] mx-auto rounded-sm my-5" />
                */}
            
        </div>
     );
}
 
export default Mentor_story;
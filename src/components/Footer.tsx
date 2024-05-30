import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube,FaInstagram } from "react-icons/fa";


interface NavLink {
  label: string;
  href: string;
  id: string;
}

const navLinks: NavLink[] = [
  { id: "buh43jn15", label: "The Village", href: "/Village" },
  { id: "tfgbuyhejni3m", label: "Baobabpad", href: "/Baobabpad" },
  { id: "4389hunref", label: "Solutions", href: "/Solutions" },
  { id: "9ol,ytgrer", label: "Careers", href: "/Careers" },
  { id: "buh43jnadsgqwe", label: "Try for free", href: "/Subscription" },
  { id: "akljhqkjwebr", label: "Login", href: "/login" },
];

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-[#171A1F] py-8 px-12">
      <div className="container mx-auto flex flex-wrap flex-col gap-4 sm:items-center">
        <div className="flex">
          <div className="flex md:ml-auto flex-col justify-center items-center gap-8">
            <label
              htmlFor="email"
              className="text-[#323842] font-semibold text-xl mr-2"
            >
              Subscribe to our sharepad
            </label>

            <div className="flex">
              <input
                id="email"
                type="email"
                placeholder="Input your email"
                className="px-4 py-2 rounded-l-full border-l border-y border-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-blue-500"
              />
              <button className="bg-[#00BDD6] hover:bg-[#489fab] text-white font-bold py-2 px-4 rounded-r-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <nav className="flex">
          <ul className="hidden md:flex flex-col sm:flex-row flex-wrap sm:items-center pl-4 md:pl-0">
            
            {/*<h3 className="font-semibold mb-2 sm:hidden">Navigation</h3> */}
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-gray-300 sm:px-2 px-1 mb-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden grid grid-cols-2 gap-[7rem] sm:items-center pl-4 md:pl-0  text-gray-400   px-1 mb-2 ">
            
            {/*<h3 className="font-semibold mb-2 md:hidden">Navigation</h3>*/}
           <div className="flex flex-col ">
            <a href ="/Village" className="hover:text-gray-300">The village</a>
            <a href="/Baobabpad" className="hover:text-gray-300">Baobabpad</a>
            <a  href="/Solutions"  className="hover:text-gray-300">The village</a>
           </div>
           <div className="flex flex-col">
            <a href="/Careers" className="hover:text-gray-300 ">Careers</a>
            <a  href="/Subscription" className="hover:text-gray-300">Try for free</a>
            <a  href="/login" className="hover:text-gray-300">Login</a>
           </div>
          </div>
          
        </nav>

        <span className="border w-full"></span>
        <div className="w-full flex flex-col sm:flex-row gap-6 justify-between">
          <div className="flex md:order-1">
            <p className="text-sm text-center md:text-left">
              © 2024 Baobabpad
              <a href="/Terms" className="hover:underline px-2">
                Privacy
              </a>
              <a href="/Terms" className="hover:underline px-2">
                Terms
              </a>
              <a href="#" className="hover:underline px-2">
                Sitemap
              </a>
            </p>
          </div>
          <div className="flex items-center justify-end md:order-1 md:mt-0">
            {/*}
            <a href="#" className="mr-4 text-gray-400 hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="mr-4 text-gray-400 hover:text-gray-300">
              <FaFacebook />
            </a>
          */}
            <a href="https://www.linkedin.com/company/baobabpad/mycompany/?viewAsMember=true" className="mr-4 text-gray-400 hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/baobabpad/" className="text-gray-400 hover:text-gray-300">
            <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "The Village", href: "/Village" },
  { label: "Baobabpad", href: "/Baobabpad" },
  { label: "Solutions", href: "/Solutions" },
  { label: "Careers", href: "/Careers" },
  // { label: 'Login', href: '/login' },
  // { label: 'Try for free', href: '/try-for-free' },
];

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#FAFAFB] text-[#171A1F] py-8 px-12">
      <div className="container mx-auto flex flex-wrap flex-col gap-4 items-center">
        <div className="flex">
          <div className="flex md:ml-auto flex-col justify-center items-center gap-8">
            <label
              htmlFor="email"
              className="text-[#323842] font-semibold text-xl mr-2"
            >
              Subscribe to our sharepad
            </label>

            <div>
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

        <nav className="flex flex-wrap">
          <ul className="flex items-center pl-4 md:pl-0">
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-300 px-2">
                The Village
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-300 px-2">
                Baobabpad
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-300 px-2">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-300 px-2">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-300 px-2">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-300 px-2">
                FAQs
              </a>
            </li>
          </ul>
        </nav>

        <span className="border w-full"></span>
        <div className="w-full flex justify-between">
          <div className="flex md:order-1">
            <p className="text-sm text-center md:text-left">
              © 2024 Baobabpad
              <a href="#" className="hover:underline px-2">
                Privacy
              </a>
              <a href="#" className="hover:underline px-2">
                Terms
              </a>
              <a href="#" className="hover:underline px-2">
                Sitemap
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center md:order-1 md:mt-0">
            <a href="#" className="mr-4 text-gray-400 hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="mr-4 text-gray-400 hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="mr-4 text-gray-400 hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

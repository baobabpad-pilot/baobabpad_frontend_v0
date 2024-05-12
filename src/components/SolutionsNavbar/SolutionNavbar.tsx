import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'


interface SolutionsLinks {
    label: string;
    href: string;
  }
  interface FAQItem {
    question: string;
    answer: string;
  }
  interface SolutionNavbarProps {
    onSelectPage: (href: string) => void;
  }

  const solutionLinks: SolutionsLinks[] = [
    { label: "CLIENT SUPPORT  ", href: "/Client" },
    { label: "REMOTE TEAM", href: "/Remote" },
    { label: "DIGITAL" + String.fromCharCode(0x02e3), href: "/DigitalX" },
    { label: "AI & DATA", href: "/Cloud" },
  ];


const SolutionNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
      const toggleSolutionsNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
             <div className="md:hidden">
    <button
      onClick={toggleSolutionsNavbar}
      className="text-[#00BDD6] focus:outline-none"
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <>
          {" "}
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </>
      )}
    </button>
  </div>
 
    <nav className=" md:flex space-x-12 flex-row justify-end pr-[5rem] text-lg bg-blue-100 p-4 text-white ">
          <div className="flex justify-between items-center ">
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } sm:flex sm:space-x-12 sm:flex sm:justify-center sm:text-lg`}
            >
              {solutionLinks.map((solutionLink) => (
                <li key={solutionLink.label}>
                  <Link
                    href={solutionLink.href}
                    className={`text-gray-700 ${
                      router.pathname === solutionLink.href
                        ? "text-blue-500"
                        : "hover:text-blue-500"
                    } transition-colors duration-200 ease-in-out`}
                  >
                    {solutionLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
    
    
    
    </>
   
  )
}

export default SolutionNavbar
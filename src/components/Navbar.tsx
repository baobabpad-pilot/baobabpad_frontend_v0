import React, { useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "The Village", href: "/Village" },
  // { label: "Baobabpad", href: "/Baobabpad" },
  { label: "Solutions", href: "/Solutions"},
  { label: "Careers", href: "/Careers" },

  // { label: 'Login', href: '/login' },
  // { label: 'Try for free', href: '/try-for-free' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" relative w-full flex items-center justify-between p-4 px-10">
      <div className="text-xl font-bold text-[#424955]">
        <Link href="/" >
          <div className="relative h-14 w-32"> <Image
            src={Logo}
            alt="Baobabpad logo"
            layout="fill" objectFit="cover"
            className="cursor-pointer h-24  z-10"
          /></div>
         
        </Link>
        {/* <Link href="/">Baobabpad</Link> */}
      </div>
      <ul className="hidden md:flex space-x-12 flex-row text-lg">
        {navLinks.map((navLink) => (
          <li key={navLink.label}>
            <Link
              href={navLink.href}
              className="text-[#424955] hover:text-[#00BDD6] transition-colors delay-100 ease-in-out"
            >
              {navLink.label}
            </Link>
          </li>
        ))}

        <Link href={"/login"} className="text-[#00BDD6]">
          Login
        </Link>
        <a
          href={"/Businessform"}
          className="text-white bg-[#00BDD6] px-2 p-1 rounded-full"
        >
          Try for free
        </a>
      </ul>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
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
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full py-4 z-50 bg-white space-y-2">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a
                href={navLink.href}
                className="text-gray-800 hover:text-[#00BDD6] block px-4 py-2"
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

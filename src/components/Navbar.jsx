// Navbar.jsimport React, { useState, useEffect } from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import maid from "../assets/Maid.jpeg";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        isScrolled
          ? "bg-white text-black fixed z-[99999] top-0 w-full shadow-md"
          : "bg-transparent text-white"
      } transition-all ease-in-out duration-300 `}
    >
      <div className="container mx-auto  flex items-center gap-20">
        <div className="bg-white rounded-none p-2 py-6 px-6">
          {/* Insert your logo here */}
          <img src={maid} alt="Logo" className="w-12 h-12" />
        </div>
        <div
          className={`flex justify-between items-center w-full border-b py-6 border-[#706f6f] ${
            isScrolled ? "border-transparent" : "border-b border-[#706f6f]"
          }`}
        >
          <ul className="flex space-x-16    font-medium font-sans text-sm">
            <li>
              <Link to="/" className="hover:border-b-2 border-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:border-b-2 border-white">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:border-b-2 border-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:border-b-2 border-white">
                Our Rooms
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 items-center">
            <h1 className=" mr-3 font-medium text-sm  ">EN</h1>
            <button className="text-white bg-[#49122C] text-sm font-normal border-transparent px-4 py-2 rounded-none hover:bg-transparent hover:border hover:border-white ">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

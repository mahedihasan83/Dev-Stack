import Logo from "../assets/logo-text.png";
import React from "react";

const Nav = () => {
  return (
  
    <nav className="navber sticky top-0 z-50 bg-white shadow-sm px-4 lg:px-12 py-4 lg:py-6">

      <div className="flex w-full items-center justify-between lg:hidden">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
             <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>

          </button>
          <ul tabIndex={0} className="menu dropdown-content mt-3 w-32 rounded-box bg-base-100 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>

        </div>
        <img src= {Logo} alt="" />

        <div className="flex items-center gap-1">
          <button className="btn btn-ghost btn-sm">  Sign In</button>
          <button className="btn btn-secondary btn-sm rounded-full px-4">  Sign Up</button>
        </div>
      </div>

      <div className="hidden w-full items-center justify-between lg:flex">
        <div>
          <img src= {Logo} alt="" />
        </div>
        <ul className="flex gap-7 font-medium">
         
           <li>
            <a className="text-[#DB2777]" >
              Home
            </a>
          </li>
          <li>
            <a className="text-[#475569]">
              Technologies
            </a>
          </li>
          <li>
            <a className="text-[#475569]">
              Projects
            </a>
          </li>
          <li>
            <a className="text-[#475569]">
              About
            </a>
          </li>
          <li>
            <a className="text-[#475569]">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="btn btn-ghost font-medium"> Sign In</button>
          <button className="btn btn-secondary rounded-full px-6"> Sign Up</button>
        </div>
      </div>

    </nav>
  
  );
};

export default Nav;

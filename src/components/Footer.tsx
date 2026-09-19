import React from "react";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div>
            <div>
              <img src={Logo} alt="" />
            </div>
            <p className="text-[12px] leading-5 text-gray-500 mt-4 max-w-[330px]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="space-x-4 mt-3">
                <a href="" className="text-[12px] text-gray-700">GitHub</a>
                <a href="" className="text-[12px] text-gray-700">Twitter</a>
                <a href="" className="text-[12px] text-gray-700">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-gray-900 mb-4">PRODUCT</h3>
            <ul>
                <li><a href="" className="text-[12px] text-gray-500">Home</a></li>
                <li><a href="" className="text-[12px] text-gray-500">Technologies</a></li>
                <li><a href="" className="text-[12px] text-gray-500">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-gray-900 mb-4">COMPANY</h3>
            <ul>
                <li><a href="" className="text-[12px] text-gray-500">About</a></li>
                <li><a href="" className="text-[12px] text-gray-500">Contact</a></li>
                <li><a href=""  className="text-[12px] text-gray-500">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[12px] font-semibold text-gray-900 mb-4">LEGAL</h3>
            <ul>
                <li><a href="" className="text-[12px] text-gray-500">Privacy Policy</a></li>
                <li><a href="" className="text-[12px] text-gray-500">Terms of Service</a></li>
              
            </ul>
          </div>
        </div>

        <div className="border-gray-100 border-t py-7 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-gray-400">
                © 2026 Dev Stack. All rights reserved.

            </p>

            <div className="flex gap-6">
                <a href="" className="text-[12px] text-gray-400">Privacy</a>
                <a href="" className="text-[12px] text-gray-400">Terms</a>

            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

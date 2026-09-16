import bannerImg from "../assets/banner-stack.png";
import React from "react";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        <div className="w-full lg:w-[55%] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0F172A]">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Development Stack
            </span>
          </h1>
          <p className="mt-4 lg:mt-5 text-sm sm:text-base text-gray-500 leading-6 max-w-lg mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 mt-6">
            <button className="btn btn-sm sm:btn-md bg-linear-to-r from-orange-500 to-pink-500 text-white border-none">
              Explore Technologies
            </button>
            <button className="btn btn-sm sm:btn-md btn-outline border-gray-300 text-gray-600">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[45%] flex justify-center">
          <img src={bannerImg} alt="" className="w-72 sm:w-80  lg:w-100" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

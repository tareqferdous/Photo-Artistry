import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ data }) => {
  const { label, title, titleColored, description, image } = data;

  return (
    <div className="min-w-full relative flex flex-col-reverse py-12 h-full lg:h-screen lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-8/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={image}
          alt="banner1"
        />
      </div>

      {/* Banner Content */}
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-5 lg:max-w-screen-xl">
        <div className="my-16 lg:my-44 lg:max-w-lg lg:pr-5">
          <p
            className="inline-block px-4 py-1 mb-4 text-xs font-body font-medium tracking-wider text-white uppercase rounded-full "
            style={{ background: "#f28482" }}
          >
            {label}
          </p>
          <h2
            style={{ color: "#3d405b", lineHeight: "1.25" }}
            className="mb-5 font-display text-xl font-semibold tracking-tight  sm:text-4xl lg:text-5xl sm:leading-none"
          >
            {title}
            <span style={{ color: "#ff595e" }} className="inline-block">
              {titleColored}
            </span>
          </h2>
          <p className="pr-5 mb-5 font-body text-base text-gray-700 md:text-lg">
            {description}
          </p>
          <div className="flex items-center">
            <a
              style={{ color: "#ff595e" }}
              href="#gallery"
              className="inline-flex items-center font-bold transition-colors text-md text-white rounded-lg duration-200 text-red-accent-700 hover:text-gray-900 hover:bg-transparent  cursor-pointer"
            >
              View Gallery
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

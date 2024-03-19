"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";


const MobileNav = ({ onLinkClick }) => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setCoursesDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleCoursesDropdownToggle = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);

    setServicesDropdownOpen(false);
  };

  const handleServicesDropdownToggle = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);

    setCoursesDropdownOpen(false);
  };
  return (
    <div className=" bg-body z-50 top-0  py-7 fixed  w-full  lg:py-0 shadow">
      <div className="container mx-auto">
        <ul className="lg:hidden relative flex flex-col justify-center items-start gap-5 mx-4">
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Home
          </Link>
         
          <span
  onClick={handleCoursesDropdownToggle}
  data-dropdown-toggle="servicesDropdown"
  className="text-black flex items-center font-medium text-[17px]"
>
About
  <svg
    className={`w-2.5 h-2.5 ms-3 ${
        isCoursesDropdownOpen ? "rotate-180" : ""
    }`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
</span>

<div
            id="servicesDropdown"
            className={`z-10 ${
                isCoursesDropdownOpen ? "block" : "hidden"
            } bg-body divide-y divide-gray-100`}
          >
            <ul
              class=" flex flex-col justify-start items-start gap-3  py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="servicesDropdown"
            >
              
                          <Link
                           href={'/our-story'}
                           onClick={handleLinkClick}
                            className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                    Our Story
                          </Link>
                          <Link
                            href={`/kathika-museum`}
                            onClick={handleLinkClick}
                            className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                       Kathika Museum
                          </Link>
                         
                          <Link
                            href={`/neem-ki-haveli`}
                            onClick={handleLinkClick}
                            className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                      Neem ki Haveli
                          </Link>
                          <Link
                            href={`/`}
                            onClick={handleLinkClick}
                            className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                     Gallary
                          </Link>
                       
            </ul>
          </div>
          <Link
            href={"/culture-heritage"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
         Culture & Heritage
          </Link>

          
          <span
  onClick={handleServicesDropdownToggle}
  data-dropdown-toggle="servicesDropdown"
  className="text-black flex items-center font-medium text-[17px]"
>
Experiences & Activities
  <svg
    className={`w-2.5 h-2.5 ms-3 ${
      isServicesDropdownOpen ? "rotate-180" : ""
    }`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
</span>

          <div
            id="servicesDropdown"
            className={`z-10 ${
              isServicesDropdownOpen ? "block" : "hidden"
            } bg-body divide-y divide-gray-100`}
          >
            <ul
              class=" flex flex-col justify-start items-start gap-3  py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="servicesDropdown"
            >
              
                          <Link
                           href={'/cultural-experiences'}
                           onClick={handleLinkClick}
                            className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                      kathika Cultural Experience
                          </Link>
                          <Link
                            href={`/`}
                            onClick={handleLinkClick}
                            className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                       Kathika Cultural Brunch
                          </Link>
                          <Link
                            href={`/`}
                            onClick={handleLinkClick}
                            className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                   Kathika Baithak
                          </Link>
                          <Link
                            href={`/`}
                            onClick={handleLinkClick}
                            className=" block border-b border-gray-100 text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                 Kathika Neighbourhood Walk
                          </Link>
                          
                       
            </ul>
          </div>

         
          <Link
            href={"/events-collaborations"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
       Kathika Events & Collaborations
          </Link>
          <Link
            href={"/our-team"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
     Our Team
          </Link>
          <Link
            href={"/trust"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
    Kathika Trust
          </Link>
          <Link
            href={"/contact"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
   Contact Us
          </Link>
        </ul>
        <div className="lg:hidden flex absolute top-4 right-3  flex-[1 0 0] border  bg-white rounded-lg  shadow-md  p-[6px] ">
          <span onClick={handleLinkClick}><IoClose className="text-3xl cursor-pointer"/></span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

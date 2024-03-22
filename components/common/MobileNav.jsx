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
          <Link
            href={"/about"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
       About
          </Link>
        
          <Link
            href={"/culture-heritage"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
         Culture & Heritage
          </Link>
          <Link
            href={"/experiences-activities"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
      Experiences & Activities
          </Link>
          
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

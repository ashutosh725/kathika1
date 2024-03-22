"use client"
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
 
 

  
 

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };
    
    const [stickyMenu, setStickyMenu] = useState(false);
    const handleStickyMenu = () => {
        if (window.scrollY >= 80) {
          setStickyMenu(true);
        } else {
          setStickyMenu(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleStickyMenu);
      });
  return (
    <header
    className={
      `fixed left-0 top-0 z-50 w-full bg-white `
      // ${
      //   stickyMenu
      //     ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
      //     : ""
      // }
    }
   >
    <div className="">
<div >
<ul className="flex justify-between items-center pr-4">
    <li>
   <Link href={'/'}>
   <Image
              src="/logo/logo1.png"
              alt="logo"
              width={120}
              height={25}
              className=" dark:hidden object-cover"
            />
   </Link>
    </li>
    <li className="hidden lg:flex relative group px-3 ">
                  <div className="flex justify-center items-center space-x-3">
                    <Link href={'/about'} className="hidden menu-hover lg:flex  tracking-wider ">
                   About
                    </Link>
                  </div>
                  <div className={`absolute top-0 -left-14 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform `}>
                    <div className="relative top-8  bg-body border-2 border-black   w-full">
                      {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                      <div className="relative z-10 ">
                        <div className=" flex flex-col gap-3 justify-center items-center ">
                         <Link href={"/about#our-story"} className="border-b-2 border-b-black w-full py-2 text-center">Our Story</Link>
                         <Link href={"/about#kathika-museum"} className="border-b-2 border-b-black w-full pb-2 text-center">Kathika Museum</Link>
                         <Link href={"/about#neem-ki-haveli"} className=" w-full pb-2 text-center">Neem ki Haveli</Link>
                      
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
    <li><Link href={'/culture-heritage'} className="hidden lg:flex">Culture & Heritage</Link></li>

    <li className="hidden lg:flex relative group px-3 ">
                  <div className="flex justify-center items-center space-x-3">
                    <Link href={'/experiences-activities'} className="hidden menu-hover lg:flex  tracking-wider ">
                    Experiences & Activities
                    </Link>
                  </div>
                  <div className={`absolute top-0 -left-5 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform `}>
                    <div className="relative top-8  bg-body   border-2 border-black   w-full">
                      {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                      <div className="relative z-10 ">
                        <div className=" flex flex-col gap-3 justify-center items-center">
                         <Link href={"/experiences-activities#experience"} className="border-b-2 border-b-black w-full py-2 text-center">Kathika Cultural Experience</Link>
                         <Link href={'/experiences-activities#brunch'} className="border-b-2 border-b-black w-full pb-2 text-center">Kathika Cultural Brunch</Link>
                         <Link href={'/experiences-activities#baithak'} className="border-b-2 border-b-black w-full pb-2 text-center">Kathika Baithak</Link>
                         <Link href={'/experiences-activities#neighbourhood'} className=" w-full pb-2 text-center">Kathika Neighbourhood Walk</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><Link href={'/events-collaborations'} className="hidden lg:flex">Kathika Events & Collaborations</Link></li>
    <li><Link href={'/our-team'} className="hidden lg:flex">Our Team</Link></li>
    <li><Link href={'/trust'} className="hidden lg:flex">Kathika Trust</Link></li>
    <li><Link href={'/contact'} className="hidden lg:flex pl-4">Contact Us</Link></li>
       
    <div className="pl-4">
    <div className="lg:hidden flex flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md  p-[8px]  " >
                <GiHamburgerMenu className="text-[28px] text-black cursor-pointer " onClick={toggleMobileNav} />
              </div>
    </div>
  
</ul>

</div>
    </div>
    {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav}/>}
   </header>
  )
}

export default Header

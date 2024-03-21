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
      `fixed left-0 top-0 z-50 w-full bg-white md:py-7 py-4`
      // ${
      //   stickyMenu
      //     ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
      //     : ""
      // }
    }
   >
    <div className="container mx-auto">
<div >
<ul className="flex justify-between items-center">
    <li>
   <Link href={'/'}>
   <Image
              src="/logo/logo-light.svg"
              alt="logo"
              width={100}
              height={25}
              className=" dark:hidden"
            />
   </Link>
    </li>
    <li className="hidden lg:flex relative group px-3 py-2">
                  <div className="flex justify-center items-center space-x-3">
                    <div className="hidden menu-hover lg:flex  tracking-wider ">
                   About
                    </div>
                   
                  </div>
                  <div className={`absolute top-0 -left-14 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform `}>
                    <div className="relative top-8 p-6 bg-body   w-full">
                      {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                      <div className="relative z-10 ">
                        <div className=" flex flex-col gap-3 justify-center items-center">
                         <Link href={'/our-story'}>Our Story</Link>
                         <Link href={'/kathika-museum'}>Kathika Museum</Link>
                         <Link href={'/neem-ki-haveli'}>Neem ki Haveli</Link>
                         <Link href={'/'}>Gallery</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
    <li><Link href={'/culture-heritage'} className="hidden lg:flex">Culture & Heritage</Link></li>

    <li className="hidden lg:flex relative group px-3 py-2">
                  <div className="flex justify-center items-center space-x-3">
                    <div className="hidden menu-hover lg:flex  tracking-wider ">
                    Experiences & Activities
                    </div>
                   
                  </div>
                  <div className={`absolute top-0 -left-5 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform `}>
                    <div className="relative top-8 p-6 bg-body   w-full">
                      {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                      <div className="relative z-10 ">
                        <div className=" flex flex-col gap-3 justify-center items-center">
                         <Link href={'/cultural-experiences'}>Kathika Cultural Experience</Link>
                         <Link href={'/kathika-cultural-brunch'}>Kathika Cultural Brunch</Link>
                         <Link href={'/'}>Kathika Baithak</Link>
                         <Link href={'/'}>Kathika Neighbourhood Walk</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><Link href={'/events-collaborations'} className="hidden lg:flex">Kathika Events & Collaborations</Link></li>
    <li><Link href={'/our-team'} className="hidden lg:flex">Our Team</Link></li>
    <li><Link href={'/trust'} className="hidden lg:flex">Kathika Trust</Link></li>
    <li><Link href={'/contact'} className="hidden lg:flex">Contact Us</Link></li>
       
    <div className="lg:hidden flex flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md  p-[8px] " >
                <GiHamburgerMenu className="text-[28px] text-black cursor-pointer " onClick={toggleMobileNav} />
              </div>
  
</ul>

</div>
    </div>
    {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav}/>}
   </header>
  )
}

export default Header

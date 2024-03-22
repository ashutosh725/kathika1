"use client"
import React, { useState } from "react";
import Image from "next/image";
import M1 from "../../public/home/cul1.jpg";
import M2 from "../../public/home/cul2.jpeg";
import ContactModel from "./ContactModel";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MuseumCard = () => {
  const [contactmodel, setContactModel] = useState(false);
const router = useRouter();
  const handleOpenContactModel = () => {
    setContactModel(true);
  };

  const handleCloseContactModel = () => {
    setContactModel(false);
  };

  const handlebtn = ()=> {
    router.push('/experiences-activities')
  }
  return (
    <div className="my-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row   justify-center items-start gap-16">
       
            <div className="bg-white rounded-[40px] flex flex-col justify-center items-center">
              <Image
                src={M1}
                alt="M1"
                className="object-cover w-[500px] h-[500px] rounded-[40px]"
              />
              
              <div className=" flex flex-col justify-center items-center">
                <p className="border-b-4 border-b-black w-[200px] py-5 "></p>
              <p className="text-[25px] font-Alice pt-4">Museum Visit</p>
              <p className="text-[25px] font-Alice">10:00 a.m. to 6:00 p.m.</p>
              <p className="text-[25px] font-Alice">{`(Closed on Mondays)`}</p>
              </div>
              <div className="py-4">
                <button className="px-7 py-3 rounded-full bg-body text-[20px]" onClick={handleOpenContactModel}>FOR ENQUIRY</button>
              </div>
            </div>
            <div className="bg-white rounded-[40px] flex flex-col justify-center items-center">
              <Image
                src={M2}
                alt="M2"
                className="object-cover w-[500px] h-[500px] rounded-[40px]"
              />
              
              <div className=" flex flex-col justify-center items-center">
                <p className="border-b-4 border-b-black w-[200px] py-5 "></p>
              <p className="text-[25px] text-center font-Alice pt-4">Cultural Experience Program
</p>
              <p className="text-[25px] font-Alice">11:30 a.m. to 1: 30 p.m. </p>
              <p className="text-[25px] font-Alice">{`(Closed on Mondays)`}</p>
              </div>
              <div className="py-4">
                <button onClick={handlebtn} className="px-7 py-3  rounded-full bg-body  text-[20px] uppercase"  >Know More</button>
              </div>
            </div>
          </div>
        
   
        <div></div>
      </div>
      {contactmodel && <ContactModel handleCloseContactModel={handleCloseContactModel} handleOpenContactModel={handleOpenContactModel}/>}
    </div>
  );
};

export default MuseumCard;

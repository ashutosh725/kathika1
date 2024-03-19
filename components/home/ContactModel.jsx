import Link from 'next/link';
import React from 'react'
import { IoClose } from "react-icons/io5";

const ContactModel = ({handleCloseContactModel, handleOpenContactModel}) => {
  return (
    <div>
       <div
        id="default-modal"
        className={`${
            handleOpenContactModel ? 'flex' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-[rgba(0,0,0,0.40)] max-h-full`}
      >
       <div className='relative bg-white md:p-12 p-8 rounded-md shadow-md'>
        <h3 className='text-[45px] font-Yeseva'>Contact</h3>
    <div className='flex flex-col justify-center items-center pt-5 gap-3'>
   
    <Link href="tel:+919938280195">
    <a className="font-jost font-[400] text-[18px] text-blue-600"> +91 9938280195
</a>,
  </Link>

<Link href="tel:+919650339839">
    <a className="font-jost font-[400] text-[18px] text-blue-600"> +91 9650339839</a>,
  </Link>

    </div>
       <div className='absolute top-2 right-1 ' >
        <IoClose onClick={handleCloseContactModel}   className='text-[30px] font-bold cursor-pointer'/>
       </div> 
       </div>
       
   
      </div>
    </div>
  )
}

export default ContactModel

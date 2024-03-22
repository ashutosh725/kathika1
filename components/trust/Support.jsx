import Image from 'next/image'
import React from 'react'

import Upi from '../../public/trust/upi.jpg'
const Support = () => {
  return (
    <div className='bg-white py-10'>
    <div className='container mx-auto'>
    <h3 className='text-[45px] font-Yeseva text-center'>Support Us</h3>
       <div className='flex flex-col  justify-center items-center  gap-10 py-10'>
    
       <div className=' w-full'>
       <form className='  '>
           <div className='flex w-full  justify-start items-start lg:gap-10 gap-4'>
           <div className='flex flex-col lg:w-[20%] w-full justify-start items-start gap-5'>
            <label className='md:text-[25px] text-[16px] font-Alice'>Full Name</label>
            <label className='md:text-[25px] text-[16px]  font-Alice text-justify flex'>Contact Details</label>
            <label className='md:text-[25px] text-[16px] font-Alice'>Message</label>
            </div>
            <div className='flex  w-full flex-col justify-start items-start gap-5'>
            <input type='text'  className='md:pt-4 pt-0 outline-none border-b-4 border-b-black w-[50%]'/>
            <input type='text'  className='md:pt-4 pt-0 outline-none border-b-4 border-b-black w-[50%]'/>
            <input type='text'  className='md:pt-4 pt-0 outline-none border-b-4 border-b-black w-[100%]'/>
            </div>
           </div>
             <div className='flex justify-center pt-10 items-center '>
             <button className="px-7 py-3 rounded-full bg-body text-[20px] font-Yeseva" >Submit</button>
             </div>
        </form>
       </div>
        <div className=' flex flex-col justify-center items-center w-full'>
          <h3 className='text-[45px] font-Alice font-semibold text-center uppercase'>Kathika trust</h3>
          <p className='text-[16px] font-semibold pb-3'>Scan OR Code below with your PSP App</p>
          <Image src={Upi} alt='upi' className='w-[400px] h-[300px] object-contain'/>
          <p className='text-[16px] font-semibold pt-3'>Or Pay to VPA</p>
          <h5 className='italic text-[25px] tracking-wide font-semibold'>Kathikatr.09@cmsidfc</h5>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Support

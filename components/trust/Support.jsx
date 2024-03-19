import Image from 'next/image'
import React from 'react'
import Upi from '../../public/trust/upi.jpg'
const Support = () => {
  return (
    <div className='bg-white py-10'>
    <div className='container mx-auto'>
    <h3 className='text-[45px] font-Yeseva text-center'>Support Us</h3>
       <div className='flex flex-col md:flex-row justify-center items-start gap-10 py-10'>
    
       <div className='md:w-[50%] w-full'>
       <form className='  '>
           <div className='flex  justify-start items-start gap-10'>
           <div className='flex flex-col justify-start items-center gap-5'>
            <label className='md:text-[25px] text-[16px] font-Alice'>Full Name</label>
            <label className='md:text-[25px] text-[16px] font-Alice'>Contact Details</label>
            <label className='md:text-[25px] text-[16px] font-Alice'>Message</label>
            </div>
            <div className='flex flex-col justify-start items-center gap-5'>
            <input type='text'  className='pt-4 outline-none border-b-4 border-b-black'/>
            <input type='text'  className='pt-4 outline-none border-b-4 border-b-black'/>
            <input type='text'  className='pt-4 outline-none border-b-4 border-b-black w-full'/>
            </div>
           </div>
             <div className='flex justify-center pt-10 items-center '>
             <button className="px-7 py-3 rounded-full bg-body text-[20px] font-Yeseva" >Submit</button>
             </div>
        </form>
       </div>
        <div className='md:w-[50%] w-full'>
          <Image src={Upi} alt='upi' className='w-[400px] h-[300px] object-contain'/>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Support

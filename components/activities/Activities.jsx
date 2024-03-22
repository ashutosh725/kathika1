import React from 'react'
import Exp from '../../public/experince/exp.jpg'
import Image from 'next/image'

const Activities = () => {
  return (
    <div className=' pt-[90px]'>
    <div>
      <Image src={Exp} alt='exprience' className='w-full h-full object-cover'/>
    </div>
   <div className='bg-white rounded-b-[40px]'>
   <div className='container mx-auto'>
      <div className='   flex flex-col justify-center items-center pt-5 pb-5 gap-2'>
       <h1 className='md:text-[45px] text-[32px] font-Yeseva '> Experiences & Activities</h1>
       <p className='md:text-[27px] text-[16px] md:text-center text-justify'>Indulge in the nostalgic colors of the medieval traditions of Mehman Nawazi and Mehfils through our specially curated cultural experience at Kathika : Cultural Centre and Museum.
</p>
<p className='md:text-[27px] text-[16px] md:text-center text-justify'>Delve into the realm of  <span className='font-bold italic'>“Purani Dilli ki Tehzeeb”</span></p>
      </div>
    </div>
   </div>
  </div>
  )
}

export default Activities

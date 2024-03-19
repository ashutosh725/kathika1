import React from 'react'
import Slide1 from '../../public/home/home-slide1.png'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className=' pt-[90px]'>
      <div>
        <Image src={Slide1} className='w-full h-full object-cover'/>
      </div>
     <div className='bg-white rounded-b-[40px]'>
     <div className='container mx-auto'>
        <div className='   flex flex-col justify-center items-center pt-5 pb-3 gap-2'>
         <h1 className='md:text-[45px] text-[32px] font-Yeseva '>Welcome to Kathika</h1>
         <p className='md:text-[27px] text-[16px] md:text-center text-justify'>Kathika, the Haveli full of stories is one-of-a-kind Museum and cultural centre situated in the historic neighbourhood of Kucha Pati Ram in Sita Ram Bazaar, Old Delhi. Its endeavour is to promote and celebrate the vibrant living cultures of Delhi and beyond.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default HeroSection

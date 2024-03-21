import React from 'react'
import TrustSlide from '../../public/trust/trustslide.jpg'
import Image from 'next/image'

const TrustSection = () => {
  return (
    <div className=' pt-[90px]'>
    <div>
      <Image src={TrustSlide} alt='trustslide' className='w-full h-full object-cover'/>
    </div>
    <div className='bg-white rounded-b-[40px]'>
    <div className='container mx-auto'>
      <div className='   flex flex-col justify-center items-center pt-5 pb-3 gap-2'>
       <h1 className='md:text-[45px] text-[32px] font-Yeseva '>Kathika Trust</h1>
       <p className='md:text-[27px] text-[16px] md:text-center text-justify'>{`The Kathika Cultural Centre run by the Kathika Trust, is situated in Old Delhi and is a unique museum-like haveli where we celebrate art and culture. The trust is dedicated to preserving and promoting art and culture, with a particular focus on the traditional art of Kathak. It plays a pivotal role in reviving and celebrating this rich cultural heritage, offering exhibitions, workshops, and classes to engage the public in the art form. The trust's efforts contribute to the conservation and dissemination of traditional Indian dance and music, making it a significant cultural institution in the region.`}
    </p>
      </div>
    </div>
    </div>
    </div>


  )
}

export default TrustSection


import React from 'react'
import Events1 from '../../public/events/eventshero.jpg'
import Image from 'next/image'
const EventSection = () => {
  return (
    <div className=' pt-[90px]'>
      <div>
        <Image src={Events1} className='w-full h-full object-contain'/>
      </div>
     <div className='bg-white rounded-b-[40px]'>
     <div className='container mx-auto'>
        <div className='   flex flex-col justify-center items-center pt-5 pb-3 gap-2'>
         <h1 className='md:text-[45px] text-[32px] font-Yeseva '>Kathika Events and Collaborations</h1>
         <p className='md:text-[27px] text-[16px] md:text-center text-justify'>Experience the vibrant cultures of India and the world through our specially curated events and collaborative projects at Kathika Cultural Centre
</p>
<p className='md:text-[27px] text-[16px] md:text-center text-justify'>Kathika also ties up with artists of different genres on occasions to celebrate art and culture
</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default  EventSection

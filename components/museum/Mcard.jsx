import React from 'react'
import M1 from '../../public/museum/m1 (1).jpg'
import M2 from '../../public/museum/m1 (2).jpg'
import M3 from '../../public/museum/m1 (3).jpg'
import M4 from '../../public/museum/m1 (4).jpg'
import M5 from '../../public/museum/m1 (5).jpg'
import Image from 'next/image'

const Mcard = () => {
  return (
    <div className='py-10 bg-white'>
      <div className='container mx-auto'>
        <p className=' md:text-[30px] text-[20px] text-justify py-5'>The Kathika Museum provides an insight into the architectural marvel of the Havelis of Old Delhi and also exhibits a collections of Archival Photographs, Decorative Arts, Paintings and Handicrafts of Old Delhi that tell the story of the medieval ages and the lifestyle of the people of Purani Dilli . 
</p>
        <div className='grid grid-cols-1 place-content-center place-items-center gap-12 md:grid-cols-2'>
            <div className='bg-body'>
             <div>   <Image src={M3} alt='M3' className='w-full h-full object-contain'/></div>
                <h3 className='text-center md:text-[30px] text-[20px] py-5'>Archival Photographs</h3>
            </div>
            <div className='bg-body'>
                <div>
                <Image src={M4} alt='M3' className='w-full h-full object-contain'/>
                </div>
                <h3 className='text-center md:text-[30px] text-[20px] py-5'>Paintings</h3>
            </div>
            <div className='bg-body'>
                <div><Image src={M5} alt='M3' className='w-full h-full object-contain'/></div>
                <h3 className='text-center md:text-[30px] text-[20px] py-5'>Decorative Arts</h3>
            </div>
            <div className='bg-body'>
               <div> <Image src={M1} alt='M3' className='w-full h-full object-contain'/></div>
               <h3 className='text-center md:text-[30px] text-[20px] py-5'>Handicrafts</h3>
            </div>
            <div className='bg-body'>
               <div> <Image src={M2} alt='M3' className='w-full h-full object-contain'/></div>
               <h3 className='text-center md:text-[30px] text-[20px] py-5'>Vintage Collectibles </h3>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Mcard

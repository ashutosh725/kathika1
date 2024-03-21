import React from 'react'
import Slide1 from '../../public/culture/cultureSlide2.png'
import Image from 'next/image'
const Heritage = () => {
  return (
    <div className=' pt-[90px]'>
      <div>
        <Image src={Slide1} alt='Slide1' className='w-full h-full object-cover'/>
      </div>
     <div className='bg-white rounded-b-[40px]'>
     <div className='container mx-auto'>
        <div className='   flex flex-col justify-center items-center pt-5 pb-3 gap-2'>
         <h1 className='md:text-[45px] text-[32px] font-Yeseva '>Old Delhi’s Culture and Heritage</h1>
         <p className='md:text-[27px] text-[16px] md:text-center text-justify'>Situated in the heart of Delhi where vibrant history and culture blends itself with the urban lifestyle, Old Delhi has beautifully preserved and nurtured the heritage that still lingers in the bustling lanes, bazaars, houses and courtyards of the forgotten Havelis. 
The walled city presents the rich tapestry of living heritage and traditions of the medieval years that are still thriving in the lanes of Purani Dilli. 
</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Heritage

import React from 'react'
import Banner2 from "../../public/culture/1.png"

const HBanner = () => {
  return (
    <div>
    <div  className='mt-10'>
    <div  className="   bg-cover bg-center lg:h-[500px] h-full lg:mb-10 mb-0" style={{ backgroundImage: `url(${Banner2.src})`, backgroundSize: 'cover' , backgroundPosition: 'center'}}>
<div className='bg-[rgba(243,240,240,0.08)] flex justify-center items-center h-full'>
<div className='container mx-auto'>
<div className='bg-[rgba(245,242,242,0.61)] rounded-[40px] my-5 h-full flex justify-center items-center'>
     <div className='flex flex-col  gap-10 justify-between items-center py-20 px-10 '>
<div className='flex flex-col items-center justify-center  gap-3  w-full'> 
            
        <p className='md:text-[25px] text-[16px] font-Alice text-center text-black'>{`Old Delhi, also known as Shahjahanabad, is a city steeped in history, culture, and heritage, dating back to the 17th century when it was founded by Mughal Emperor Shah Jahan as his new capital. The city is a treasure trove of architectural styles, with monuments like the Red Fort, Jama Masjid, and Chandni Chowk showcasing the rich history and diverse cultural influences that have shaped it over time.
Old Delhi's living heritage is also evident in its traditional crafts, such as stone polishing and haveli architecture, which have been adapted and preserved over time. The city's history, culture, and heritage make it a fascinating destination for those seeking to immerse themselves in the rich tapestry of India's past and present.
`} </p>
         </div>
        
     </div>
    
     
  </div>
</div>
</div>
 </div>
 </div>
 </div>
)
  
}

export default HBanner

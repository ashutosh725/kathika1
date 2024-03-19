import React from 'react'
import Story1 from '../../public/story/storyhero.jpg'
import Image from 'next/image'
const StorySection = () => {
  return (
    <div className=' pt-[100px]'>
    <div  className="   bg-cover bg-center  h-full " style={{ backgroundImage: `url(${Story1.src})`, backgroundSize: 'cover' , backgroundPosition: 'center'}}>
  <div className='bg-[rgba(61,61,61,0.35)] flex justify-center items-center h-full'>
  <div className='container mx-auto'>
  <div className='bg-[rgba(245,242,242,0.50)] rounded-[40px] my-10 h-full flex justify-center items-center'>
       <div className='flex flex-col  gap-10 justify-between items-center py-20 px-10 '>
<div className='flex flex-col items-center justify-center  gap-3  w-full'> 
<h3 className='text-black text-center md:text-[45px] text-[32px] font-Yeseva'> {`Welcome to Kathika`}</h3>
          <p className='md:text-[27px] text-[16px] font-Alice text-center text-black'>{` Kathika is a one-of-a-kind Museum and Cultural Center situated in the historic neighbourhood of Kucha Pati Ram in Sita Ram Bazar, Old Delhi. Its endeavour is to promote and celebrate the vibrant living cultures of Delhi. 
`} </p>
<p className='md:text-[27px] text-[16px] font-Alice text-center text-black'> The museum is housed in two 19th-century adjacent Havelis that have been lovingly preserved and equipped. The Havelis offer exclusive spaces for performing arts, workshops, screenings, culinary experiences, photography, and heritage baithaks. The collection at Kathika includes archival photographs, decorative arts, textiles and crafts. 
</p>
<p className='md:text-[27px] text-[16px] font-Alice text-center text-black'>Visitors can learn about the city’s rich history and cultural traditions through interactive displays, multimedia exhibits, and live demonstrations. 
</p>
           </div>
          
       </div>
      
       
    </div>
  </div>
  </div>
   </div>
   
   </div>
  )
}

export default StorySection

import React from 'react'
import Banner1 from "../../public/trust/banner1.jpg"


const TrustBanner = ({title, description, img}) => {
  return (
    <div>
       <div  className='mt-10'>
       <div  className="   bg-cover bg-center lg:h-[500px] h-full lg:mb-20 mb-0" style={{ backgroundImage: `url(${img.src})`, backgroundSize: 'cover' , backgroundPosition: 'center'}}>
   <div className='bg-[rgba(238,235,235,0.08)] flex justify-center items-center h-full'>
   <div className='container mx-auto'>
   <div className='bg-[rgba(245,242,242,0.62)] rounded-[40px] my-5 h-full flex justify-center items-center'>
        <div className='flex flex-col  gap-10 justify-between items-center py-20 px-10 '>
<div className='flex flex-col items-center justify-center  gap-3  w-full'> 
               <h3 className='text-black text-center md:text-[45px] text-[32px] font-Yeseva'> {title}</h3>
           <p className='md:text-[25px] text-[16px] font-Alice text-center text-black'>{description} </p>
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

export default TrustBanner


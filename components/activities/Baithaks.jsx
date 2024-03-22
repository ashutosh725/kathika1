import React from 'react'
import Br3 from "../../public/brunch/br2.jpg";
const Baithaks = () => {
  return (
    <div id='baithak' className=' my-10'>
    <div className=' container mx-auto'>

    <div  className="  rounded-[20px]  bg-cover bg-center  h-full " style={{ backgroundImage: `url(${Br3.src})`, backgroundSize: 'cover' , backgroundPosition: 'center'}}>
  <div className=' flex justify-center items-center h-full'>
  <div className='lg:px-20 px-4'>
  <div className='bg-[rgba(245,242,242,0.61)] rounded-[40px] my-10 h-full flex justify-center items-center'>
       <div className='flex flex-col  gap-10 justify-between items-center py-20 px-10 '>
<div className='flex flex-col items-center justify-center  gap-3  w-full'> 
             <h3 className='md:text-[45px] text-[32px] text-center font-Yeseva py-5'>{`Kathika Baithaks`}</h3>
          <p className='md:text-[27px] text-[16px] font-Alice text-center text-black'>{`Kathika Baithak is a contemporary take on the traditional concept of baithaks or gatherings for insightful discussions on Indian Art, Culture and History`} </p>

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

export default Baithaks

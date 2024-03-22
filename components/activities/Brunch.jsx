import React from 'react'
import Br1 from "../../public/brunch/br.png";
const Brunch = () => {
  return (
    <div id='brunch' className=''>
    <div className=' container mx-auto'>

    <div  className="  rounded-[20px]  bg-cover bg-center  h-full " style={{ backgroundImage: `url(${Br1.src})`, backgroundSize: 'cover' , backgroundPosition: 'center'}}>
  <div className=' flex justify-center items-center h-full'>
  <div className='lg:px-20 px-4'>
  <div className='bg-[rgba(245,242,242,0.61)] rounded-[40px] my-10 h-full flex justify-center items-center'>
       <div className='flex flex-col  gap-10 justify-between items-center py-20 px-10 '>
<div className='flex flex-col items-center justify-center  gap-3  w-full'> 
             <h3 className='md:text-[45px] text-[32px] text-center font-Yeseva py-5'>{`Kathika Cultural Brunch`}</h3>
          <p className='md:text-[27px] text-[16px] font-Alice text-center text-black'>{`Indulge your  senses and savour the vibrant flavours of Old Delhi at our Kathika Cultural Brunch. 
`} </p>
<p className='md:text-[27px] text-[16px] font-Alice text-center text-black'>{`Indulge your  senses and savour the vibrant flavours of Old Delhi at our Kathika Cultural Brunch. 
`}</p>
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

export default Brunch

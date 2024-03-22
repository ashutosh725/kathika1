import React from 'react'
import Br2 from "../../public/brunch/br1.jpg";
const Neighbourhood = () => {
  return (
    <div id='neighbourhood' className=' mb-10'>
    <div className=' container mx-auto'>

    <div  className="  rounded-[20px]  bg-cover bg-center  h-full " style={{ backgroundImage: `url(${Br2.src})`, backgroundSize: 'cover' , backgroundPosition: 'center'}}>
  <div className=' flex justify-center items-center h-full'>
  <div className='lg:px-20 px-4'>
  <div className='bg-[rgba(245,242,242,0.70)] rounded-[40px] my-10 h-full flex justify-center items-center'>
       <div className='flex flex-col  gap-10 justify-between items-center py-20 px-10 '>
<div className='flex flex-col items-center justify-center  gap-3  w-full'> 
             <h3 className='md:text-[45px] text-[32px] text-center font-Yeseva py-5'>{`Kathika Neighbourhood Walks`}</h3>
          <p className='md:text-[27px] text-[16px] font-Alice text-center text-black'>{`Neighbourhood Walks conducted by Kathika is a pleasant way to explore the local surroundings of Old Delhi, interact with the communities and enjoy the history protected in the lanes of the walled city`} </p>

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

export default Neighbourhood

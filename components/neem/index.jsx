import React from 'react'
import Neem1 from '../../public/neem/neemhero.jpg'
import Image from 'next/image'
const NeemSection = () => {
  return (
    <div className=' pt-[120px]'>
     <div  className="   bg-cover bg-center  h-full " style={{ backgroundImage: `url(${Neem1.src})`, backgroundSize: 'cover' , backgroundPosition: 'center'}}>
  <div className='bg-[rgba(61,61,61,0.35)] flex justify-center items-center h-full'>
  <div className='container mx-auto'>
  <div className='bg-[rgba(245,242,242,0.50)] rounded-[40px] my-10 h-full flex justify-center items-center'>
       <div className='flex flex-col  gap-10 justify-between items-center py-20 px-10 '>
<div className='flex flex-col items-center justify-center  gap-3  w-full'> 

          <p className='md:text-[27px] text-[16px] font-Alice text-center text-black'>{` Neem ki Haveli, an early 19th-century residential space near Kucha Pati Ram, was restored by Kathika founder Atul Khanna in 2015 after being dilapidated. The Haveli features a neem tree in its courtyard,  flanked by small rooms and kothris on both sides, and a mixed architectural vocabulary, influenced by Delhi's late medieval period and British sensibilities. The Haveli retains echoes of the past while welcoming visitors into its serene atmosphere. 
`} </p>

           </div>
          
       </div>
      
       
    </div>
  </div>
  </div>
   </div>
    </div>
  )
}

export default NeemSection

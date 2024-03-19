import Image from 'next/image'
import React from 'react'
import Neem1 from '../../public/neem/neem2 (3).jpg'
import Neem2 from '../../public/neem/neem2 (1).jpg'


const NeemGalary = () => {
  return (
    <div className='bg-white py-10 mt-10'>
   <div className='container mx-auto'>
<div>
    <h3 className='md:text-[45px] text-[32px] text-center font-Yeseva'>Neem Ki Haveli Gallery</h3>
    <div className='flex justify-center items-center py-10 gap-10'>
<div className='lg:w-[50%] w-full'>
    <div>
        <Image src={Neem1} className='rounded-[40px] w-[600px] h-[500px] object-cover'/>
    </div>
</div>
<div className='lg:w-[50%] w-full'>
    <div>
        <Image src={Neem2} className='rounded-[40px] w-[600px] h-[500px] object-cover'/>
    </div>
</div>
    </div>
    <div className='bg-body rounded-full py-5'>
        <p className='md:text-[30px] text-center text-[17px] font-Alice'>To showcase your artwork, send us your proposals : <span className='text-blue-500 cursor-pointer'>info@kathika.in</span></p>
    </div>
</div>
   </div>
    </div>
  )
}

export default NeemGalary

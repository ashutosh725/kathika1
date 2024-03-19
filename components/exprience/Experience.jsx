"use client"
import Exp1 from '../../public/experince/exp1.jpeg'
import Exp2 from '../../public/experince/exp2.jpg'
import Exp3 from '../../public/experince/exp3.png'
import Image from 'next/image'
import ContactModel1 from './ContactModel1'
import { useState } from 'react'

const Experience = () => {
    const [contactmodel1, setContactModel1] = useState(false);

    const handleOpenContactModel1 = () => {
      setContactModel1(true);
    };
  
    const handleCloseContactModel1 = () => {
      setContactModel1(false);
    };
  return (
    <div  className='my-10 bg-white py-10'>
    <div className='container mx-auto'>
        <h3 className='md:text-[45px] text-[32px] font-Yeseva text-center pb-10 '> Kathika Cultural Experience</h3>
        <div className='grid grid-cols-1 place-content-center place-items-center gap-12 md:grid-cols-2 lg:grid-cols-3'>
            <div className=''>
             <div>   <Image src={Exp1} alt='M3' className='w-[500px] h-[300px] object-cover rounded-[40px]'/></div>
                <h3 className='text-center md:text-[25px] text-[16px] py-5'>Live Jugalbandi and Kathak</h3>
            </div>
            <div className=''>
                <div>
                <Image src={Exp2} alt='M3' className='w-[500px] h-[300px] object-cover rounded-[40px]'/>
                </div>
                <h3 className='text-center md:text-[25px] text-[16px] py-5'>Curatorial Walkthrough</h3>
            </div>
            <div className=''>
                <div><Image src={Exp3} alt='M3' className='w-[500px] h-[300px] object-cover rounded-[40px]'/></div>
                <h3 className='text-center md:text-[25px] text-[16px] py-5'>DIY Handcrafted Workshop</h3>
            </div>
            
        </div>
        <div className='flex justify-center items-center pt-6'>

        <button className="px-7 py-3 rounded-full font-Yeseva bg-body text-[20px]"onClick={handleOpenContactModel1} >CONTACT US</button>
        </div>
      </div>
      {contactmodel1 && <ContactModel1 handleCloseContactModel1={handleCloseContactModel1} handleOpenContactModel1={handleOpenContactModel1}/>}
    </div>
  )
}

export default Experience

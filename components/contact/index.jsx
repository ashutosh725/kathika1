import React from 'react'
import ContactSlide from '../../public/contact/contact.jpg'
import Image from 'next/image'

const ContactSection = () => {
  return (
    <div className='pt-[75px]'>
       <div>
        <Image src={ContactSlide} className='w-full h-full object-cover'/>
      </div>
      <div className='bg-white rounded-b-[40px]'>
     <div className='container mx-auto'>
        <div className='   flex flex-col justify-center items-center pt-5 pb-3 gap-2'>
         <h1 className='md:text-[45px] text-[32px] font-Yeseva '>Contact US</h1>

        </div>
        <div className='flex flex-col md:flex-row justify-center items-start md:py-10 py-5 md:gap-10 gap-5'>
  <div className='lg:w-[50%] w-full   md:border-r-4 md:border-r-black'>
    <h5 className='md:text-[30px] text-[22px] font-Alice text-center font-bold '>Kathika Museum Visit</h5>
    <p className='md:text-[25px] text-[20px] text-center font-Alice'>For Enquiry - </p>
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice'> +91 9938280195
</p>
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice'> +91 9650339839</p>
  </div>
  <div className='lg:w-[50%] w-full '>
    <h5 className='md:text-[30px] text-[22px] font-Alice text-center font-bold '>Kathika Cultural Experience</h5>
    <p className='md:text-[25px] text-[20px] text-center font-Alice'>For Enquiry - </p>
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice'>  +91 9650339839

</p>
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice'> +91 9811276231</p>
  </div>
</div>
<div className='flex flex-col md:flex-row justify-center items-center lg:py-10 md:gap-10 gap-5'>
  <div className='lg:w-[50%] w-full md:border-r-4 md:border-r-black'>
    <h5 className='md:text-[30px] text-[22px] font-Alice text-center font-bold '>Visit Us</h5>
   
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice px-5'> Kathika Haveli, Imli Mohalla, Kucha Pati Ram Sita Ram Bazaar, Gali Khatikan, Near Himmat Garh Police Station - Delhi 110006
</p>
   
  </div>
  <div className='lg:w-[50%] w-full '>
    <h5 className='md:text-[30px] text-[22px] font-Alice text-center font-bold '>Find Us</h5>
    
    <p  className='md:text-[30px] text-[17px] text-center font-Alice'>Instragram : kathikaolddelhi
</p>
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice'>Facebook : Kathika
</p>
    <p  className='md:text-[30px] text-[17px]   text-center font-Alice'>LinkedIn : Kathika
</p>
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice'>Email Address : info@kathika.in</p>
  </div>
</div>
      </div>
     </div>
    </div>
  )
}

export default ContactSection

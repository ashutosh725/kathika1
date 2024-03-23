import Link from 'next/link'
import React from 'react'
import Map from './Map'



const ContactSection = () => {
  return (
    <div >
      
      <div className='bg-white rounded-b-[40px]'>
     <div className='container mx-auto'>
        <div className='   flex flex-col justify-center items-center pt-5 pb-3 gap-2'>
         <h1 className='md:text-[45px] text-[32px] font-Yeseva '>Contact US</h1>

        </div>
        <div className='flex flex-col md:flex-row justify-center items-start md:py-10 py-5 md:gap-10 gap-5'>
  <div className='lg:w-[50%] w-full   md:border-r-4 md:border-r-black '>
    <h5 className='md:text-[30px] text-[22px] font-Alice text-center font-bold '>Kathika Museum Visit</h5>
    <p className='md:text-[25px] text-[20px] text-center font-Alice'>For Enquiry - </p>
<div className='flex flex-col justify-center items-center'>
<Link href="tel:+919938280195"  className='md:text-[30px] text-[17px]  text-center font-Alice'> +91 9938280195
</Link>
    <Link  href="tel:+919650339839"  className='md:text-[30px] text-[17px]  text-center font-Alice'> +91 9650339839</Link>
</div>

  </div>
  <div className='lg:w-[50%] w-full '>
    <h5 className='md:text-[30px] text-[22px] font-Alice text-center font-bold '>Kathika Cultural Experience</h5>
    <p className='md:text-[25px] text-[20px] text-center font-Alice'>For Enquiry - </p>
<div className='flex flex-col justify-center items-center'>
<Link href="tel:+919650339839"  className='md:text-[30px] text-[17px]  text-center font-Alice'>  +91 9650339839

</Link>
    <Link href="tel:+919811276231"  className='md:text-[30px] text-[17px]  text-center font-Alice'> +91 9811276231</Link>
</div>
  </div>
</div>
<div className='flex flex-col md:flex-row justify-center items-start lg:py-10 md:gap-10 gap-5'>
  <div className='lg:w-[50%] w-full flex flex-col justify-center items-center md:border-r-4 md:border-r-black'>
    <h5 className='md:text-[30px] text-[22px] font-Alice text-center font-bold '>Visit Us</h5>
   
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice px-5'> Kathika Haveli, Imli Mohalla, Kucha Pati Ram Sita Ram Bazaar, Gali Khatikan, Near Himmat Garh Police Station - Delhi 110006
</p>
<div className='flex justify-center items-center mt-5'>
<Map/>
</div>
  </div>
  <div className='lg:w-[50%] w-full '>
    <h5 className='md:text-[30px] text-[22px] font-Alice text-center font-bold '>Find Us</h5>
    
    <p  className='md:text-[30px] text-[17px] text-center font-Alice'>Instragram : <Link href="https://www.instagram.com/kathikaolddelhi/?hl=en" target='_blank' className="text-blue-500 cursor-pointer">kathikaolddelhi</Link> 
</p>
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice'>Facebook : <Link href="https://www.facebook.com/Kathika.OldDelhi/" target='_blank' className="text-blue-500 cursor-pointer">Kathika</Link>  
</p>
    <p  className='md:text-[30px] text-[17px]   text-center font-Alice'>LinkedIn : <Link href="https://www.linkedin.com/company/kathikaolddelhi/?originalSubdomain=in" target='_blank' className="text-blue-500 cursor-pointer">Kathika</Link> 
</p>
    <p  className='md:text-[30px] text-[17px]  text-center font-Alice'>Email Address : <Link href="mailto:info@kathika.in" className="text-blue-500 cursor-pointer">
  info@kathika.in
</Link></p>
  </div>
</div>
      </div>
     </div>
    </div>
  )
}

export default ContactSection

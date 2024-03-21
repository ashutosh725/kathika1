import React from 'react'
import TeamSlide from '../../public/team/teamhero.jpg'
import Image from 'next/image'

const TeamSection = () => {
  return (
    <div>
       <div>
        <Image src={TeamSlide} alt='teamSlide' className='w-full h-full object-cover'/>
      </div>
      <div className='bg-white rounded-b-[40px]'>
     <div className='container mx-auto'>
        <div className='   flex flex-col justify-center items-center pt-5 pb-3 gap-2'>
         <h1 className='md:text-[45px] text-[32px] font-Yeseva '>The Team of Kathika Cultural Centre</h1>

        </div>
      </div>
     </div>
    </div>
  )
}

export default TeamSection

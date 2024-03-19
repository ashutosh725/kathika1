import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import Event1 from '../../public/events/event1.jpeg'
import Event2 from '../../public/events/event2.jpg'
import Event3 from '../../public/events/event3.jpg'
import Image from 'next/image';

const Events1 = () => {
  return (
    <div className='bg-white mb-10 py-10'>
      <div className='container mx-auto'>
        <div>
<div className='flex flex-col justify-center items-center gap-3'>
<h2 className='md:text-[45px] text-[32px] text-center font-Yeseva '>
        EVENTS
        </h2>
        <button className="flex justify-center items-center gap-2 px-7 py-4 rounded-md bg-body text-[22px] font-Yeseva" ><FaRegCalendarAlt/> <p>CALENDAR</p></button>
</div>
<div className='grid md:grid-cols-3 grid-cols-1 place-content-center place-items-center gap-10 pt-8'>
    <div>
        <Image src={Event1} className='w-[400px] h-[400px] object-cover'/>
    </div>
    <div>
        <Image src={Event2} className='w-[400px] h-[400px] object-cover'/>
    </div>
    <div>
        <Image src={Event3} className='w-[400px] h-[400px] object-cover'/>
    </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Events1

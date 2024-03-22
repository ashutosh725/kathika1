"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoClose } from "react-icons/io5";

const CalendarModel = ({ handleCloseCalendar, isCalendarOpen }) => {
    const [value, onChange] = useState(new Date());
 
  return (
    
    <div>
      

      <div
        id="default-modal"
        className={`${
            isCalendarOpen ? 'flex' : 'hidden'
        } overflow-y-auto overflow-x-hidden bg-[rgba(43,41,41,0.3)] fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]  max-h-full`}
      >
       <div className='relative bg-white md:p-8 p-2 rounded-md shadow-md'>
       <Calendar onChange={onChange} value={value} className="border-none" />
       <div className='absolute top-2 right-1 ' >
        <IoClose onClick={handleCloseCalendar}  className='text-[30px] font-bold cursor-pointer'/>
       </div> 
       </div>
       
   
      </div>
    </div>
  );
};

export default CalendarModel;

import React from 'react'
import Mueseum1 from '../../public/museum/museum.jpg'

const MuseumSection = () => {
  return (
    <div className=' pt-[110px]'>
     <div  className="   bg-cover bg-center  h-full " style={{ backgroundImage: `url(${Mueseum1.src})`, backgroundSize: 'cover' , backgroundPosition: 'center'}}>
   <div className='bg-[rgba(61,61,61,0.35)] flex justify-center items-center h-full'>
   <div className='container mx-auto'>
   <div className='bg-[rgba(245,242,242,0.50)] rounded-[40px] my-10 h-full flex justify-center items-center'>
        <div className='flex flex-col  gap-10 justify-between items-center py-20 px-10 '>
<div className='flex flex-col items-center justify-center  gap-3  w-full'> 
              
           <p className='md:text-[27px] text-[16px] font-Alice text-center text-black'>{`Kathika, a unique museum-haveli in Old Delhi, that takes on the role of a storyteller, breathing life into the captivating tales of cultural history and celebrating heritage in the vicinity of Kucha Pati Ram . Run by the Kathika Trust, it showcases the restoration of architectural treasures and a commitment to adaptive reuse and sustainable development. The Haveli, a combination of art and architecture, houses a collection of everyday artefacts and artistic treasures from Atul Khanna's personal collection. Visitors can also access a curated library to learn more about Delhi's enchanting narratives.`} </p>
            </div>
           
        </div>
       
        
     </div>
   </div>
   </div>
    </div>
    
    </div>
  )
}

export default MuseumSection

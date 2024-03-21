import React from 'react'
import M1 from '../../public/museum/m1 (1).jpg'
import M2 from '../../public/museum/m1 (2).jpg'
import M3 from '../../public/museum/m1 (3).jpg'
import M4 from '../../public/museum/m1 (4).jpg'
import M5 from '../../public/museum/m1 (5).jpg'
import Image from 'next/image'

const museumList = [
  {
    title: "Archival Photographs",
    img: M3

  },
  {
    title: "Paintings",
    img: M4

  },
  {
    title: "Decorative Arts",
    img: M5

  },
  {
    title: "Handicrafts",
    img: M1

  },
  {
    title: "Vintage Collectibles",
    img: M2

  },
]

const Mcard = () => {
  return (
    <div className='py-10 bg-white'>
      <div className='container mx-auto'>
        <p className=' md:text-[30px] text-[20px] text-justify py-5'>The Kathika Museum provides an insight into the architectural marvel of the Havelis of Old Delhi and also exhibits a collections of Archival Photographs, Decorative Arts, Paintings and Handicrafts of Old Delhi that tell the story of the medieval ages and the lifestyle of the people of Purani Dilli . 
</p>
        <div className='grid grid-cols-1 place-content-center place-items-center gap-12 md:grid-cols-2'>
           {
            museumList.map((item,index)=>{
              return  <div key={index} className='bg-body'>
              <div>   <Image src={item.img} alt={item.img} className='w-full h-full object-contain'/></div>
                 <h3 className='text-center md:text-[30px] text-[20px] py-5'>{item.title}</h3>
             </div>
            })
           }
           
        </div>
      </div>
    </div>
  )
}

export default Mcard


import Image from 'next/image';
import h1 from '../../public/events/h1.png'
import h2 from '../../public/events/h2.png'
import h3 from '../../public/events/h3.png'
import h4 from '../../public/events/h4.png'
import h5 from '../../public/events/h5.png'
import h6 from '../../public/events/h6.png'
import vi1 from '../../public/events/vi1.png'
import vi2 from '../../public/events/vi2.png'
import vi3 from '../../public/events/vi3.png'



const Events= () => {
  
  return (
    <div className='bg-white my-10'>
    <div className="container mx-auto">
      <div className='pt-10'>
        <h2 className='md:text-[45px] text-[32px] text-center font-Yeseva '>
          Glimpses of the events at KATHIKA
        </h2>
      </div>
     
       

 <div className='grid grid-cols-2 pb-10 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6 pt-7  gap-y-4 justify-between'>
 <div className='flex flex-col gap-2'>
 <Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={h1}
                alt={`Image`}
                
              
              />
              <Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={h2}
                alt={`Image`}
              
              />
 </div>
<div>
<Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={vi1}
                alt={`Image`}
                
              
              />
</div>
 <div className='flex flex-col gap-2'>
 <Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={h3}
                alt={`Image`}
                
              
              />
              <Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={h4}
                alt={`Image`}
              
              />
 </div>
 <Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={vi2}
                alt={`Image`}
                
              
              />
 <div className='flex flex-col gap-2'>
 <Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={h5}
                alt={`Image`}
                
              
              />
              <Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={h6}
                alt={`Image`}
              
              />
 </div>
 <Image
                className="border-2 border-white opacity-60 hover:opacity-100"
                src={vi3}
                alt={`Image`}
                
              
              />
 </div>
 



      </div>
      </div>
  
  );
};

export default Events;
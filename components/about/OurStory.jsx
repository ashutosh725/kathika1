"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Story1 from '../../public/story/story.jpg';
import Story2 from '../../public/story/story1.jpg';

const OurStory = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="our-story" className='bg-white rounded-[40px] my-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[40px] w-full py-4'>
          <div className='lg:w-[50%] flex flex-col  w-full'>
            <div className='flex flex-col justify-center '>
              <div>
                <div className='flex flex-col justify-center items-center'>
                  <h3 className='md:text-[45px] text-[32px] text-center font-Yeseva'>Our Story</h3>
                  <h5 className='text-[30px] font-Yeseva text-center'>A Restoration from Heart</h5>
                  <p className='border-b-4 border-b-black pt-3 flex justify-center w-[200px] text-center items-center'></p>
                </div>
                <div>
                  <p className='md:text-[27px] text-[16px] pt-3 text-justify'>
                  The captivating journey of Kathika began in 2015 when our founder, Atul khanna, came across a newspaper article detailing the unfortunate neglect of this late 19th century architectural gem. This Museum Haveli, which once belonged to the Kashmiri Pandits, is a testament to the late Mughal Era that embodies the essence of a period spanning from 1800 to 1860. The Haveli was found in a dilapidated condition and brought forward the deteriorating condition of the havelis in Old Delhi. Mr. Atul Khanna, a Heritage Conservationist and a patron of Art and Culture, was driven by his deep passion for Indian Heritage and Culture and took up the responsibility of restoring these havelis to their former glory.
                  </p>
                </div>
              </div>
              <div className='flex justify-end items-end mt-5'>
                <button onClick={() => setShowMore(!showMore)} className="px-6 py-3 rounded-full bg-body text-[20px] uppercase font-Yeseva" >{showMore ? 'Read Less' : 'Read More'}</button>
              </div>
            </div>
          </div>
          <div className='lg:w-[50%] w-full'>
            <div>
              <Image src={Story1} alt={'Story1'} className='rounded-[40px] w-full h-full object-contain'/>
            </div>
          </div>
        </div>

        {showMore && (
          <div>
            <p className='md:text-[27px] text-[16px] pt-3 text-justify'>
              Mr. Atul Khanna along with a team of architects, for over a period of 8 years, made successful attempts in preserving and reviving the two 19th century havelis. For the restoration process, Mahatta Archival Photographs were referred by the team which aided the reconstruction of the architecture of the Haveli.
            </p>
            <div className='flex  flex-col lg:flex-row justify-center items-center gap-[32px] pt-3'>
              <div className='lg:w-[50%] w-full'>
                <div>
                  <Image src={Story2} alt={'Story2'} className='w-full h-full object-contain'/>
                </div>
              </div>
              <div className='lg:w-[50%] w-full'>
                <p className='md:text-[27px] text-[16px] pt-3 text-justify'>
                  Opposite to Kathika, stands the Neem ki Haveli that serves as a precious link to the past, where the grandeur of Mughal architecture converges with the echoes of British architectural sensibilities, offering visitors a captivating glimpse into the city’s historical narrative.
                </p>
              </div>
            </div>
            <p className='md:text-[27px] text-[16px] pt-3 text-justify pb-3'>
              The first floor of the Neem ki Haveli, added at a later stage, distinguishes itself from the ground floor in terms of architectural features that are more Mughal in its features. Notably, the rooms above the left dalan exhibit influences of British architectural styles, evident through the semicircular door openings and the use of coloured glass on the windows. This infusion of British elements showcases the evolving character of the city during that era.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurStory;

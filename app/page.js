import ImageSlider from "@/components/common/ImageSlider";
import Featured from "@/components/home/Featured";
import Heart from "@/components/home/Heart";

import Museum from "@/components/home/Museum";
import MuseumCard from "@/components/home/MuseumCard";
import Slide1 from '../public/home/home-slide1.png'
import Slide2 from '../public/home/homeSlide2.png'
import Slide3 from '../public/home/homeSlide3.png'
import HeroSection from "@/components/common/HeroSection";

export default function Home() {
  return (
   <>
   <ImageSlider images={[Slide1 ,Slide2, Slide3]}/>
   <HeroSection heading={`Welcome to Kathika`} des1={`Kathika, the Haveli full of stories is one-of-a-kind Museum and Cultural Centre situated in the historic neighbourhood of Kucha Pati Ram in Sita Ram Bazaar, Old Delhi. Its endeavour is to promote and celebrate the vibrant living cultures of Delhi and beyond.   
`} />
    
   <Heart/>
   <Museum/>
   <MuseumCard/>
   <Featured/>
   </>
  );
}

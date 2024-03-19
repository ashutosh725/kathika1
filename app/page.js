import Featured from "@/components/home/Featured";
import Heart from "@/components/home/Heart";
import HeroSection from "@/components/home/HeroSection";
import Museum from "@/components/home/Museum";
import MuseumCard from "@/components/home/MuseumCard";


export default function Home() {
  return (
   <>
   <HeroSection/>
   <Heart/>
   <Museum/>
   <MuseumCard/>
   <Featured/>
   </>
  );
}

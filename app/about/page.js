import AboutSection from "@/components/about/AboutSection";
import Mcard from "@/components/about/Mcard";
import Museum from "@/components/about/Museum";
import Neem from "@/components/about/Neem";
import NeemGalary from "@/components/about/NeemGalary";
import OurStory from "@/components/about/OurStory";


export default function Page (){
    return(
        <>
  <div>
      <AboutSection />
      <OurStory id="our-story" />
      <Museum id="kathika-museum" />
      <Mcard />
      <Neem id="neem-ki-haveli" />
      <NeemGalary id="gallery" />
    </div>
        </>
    )
}
export function generateMetadata(){
    return {
        title: "About Us",
        
       
    }
}
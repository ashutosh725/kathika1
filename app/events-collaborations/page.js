
import TrustBanner from "@/components/trust/TrustBanner";
import Events2 from '../../public/events/eventshero.jpg'
import Banner1 from "../../public/trust/banner1.jpg"
import Events from "@/components/events/Events";
import Events1 from "@/components/events/Events1";
import NewsLetter from "@/components/events/NewsLetter";
import HeroSection from "@/components/common/HeroSection";
import ImageSlider from "@/components/common/ImageSlider";

export default function Page (){
    return(
        <>
        <ImageSlider images={[Events2]}/>
        <HeroSection heading={`Kathika Events and Collaborations`} des1={`Experience the vibrant cultures of India and the world through our specially curated events and collaborative projects at Kathika Cultural Centre
`} des2={`Kathika also ties up with artists of different genres on occasions to celebrate art and culture`} />
   
     <TrustBanner title={`Community Outreach Program`} description={`An initiative by Kathika Cultural Centre spearheaded by the Kathika Trust, designed to engage and connect with communities, kids and other different audience  to discuss on topics of Indian Culture, current affairs, and addressing different needs of the communities and societies. `} img={Banner1}/>
     <Events/>
     <Events1/>
     <NewsLetter/>
     </>
    )
}
export function generateMetadata(){
    return {
        title: "Kathika Events & Collaborations",
  
       
    }
  }
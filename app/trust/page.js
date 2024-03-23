import TrustSection from "@/components/trust";
import TrustBanner from "@/components/trust/TrustBanner";
import Banner1 from "../../public/trust/banner1.jpg"
import Banner2 from "../../public/trust/banner2.jpg"
import Support from "@/components/trust/Support";
import TrustSlide from '../../public/trust/trustslide.jpg'
import ImageSlider from "@/components/common/ImageSlider";
import HeroSection from "@/components/common/HeroSection";
export default function Page (){
    return(
        <>
        <ImageSlider images={[TrustSlide]}/>
<HeroSection heading={`Kathika Trust`} des1={`The Kathika Cultural Centre run by the Kathika Trust, is situated in Old Delhi and is a unique museum-like haveli where we celebrate art and culture. The trust is dedicated to preserving and promoting art and culture, with a particular focus on the traditional art of Kathak. It plays a pivotal role in reviving and celebrating this rich cultural heritage, offering exhibitions, workshops, and classes to engage the public in the art form. The trust's efforts contribute to the conservation and dissemination of traditional Indian dance and music, making it a significant cultural institution in the region.`}/>
  <TrustBanner title={`Shekhawati Revival Project`} description={`To safeguard the heritage of the land of Shekhawati, Mr. Atul Khanna, an entrepreneur and heritage conservationist has been working in the region relentlessly for over a decade and recently he formalised his efforts under Shekha- a group of institutions run by the Kathika Trust. Sustainable and adaptive reuse of heritage being central to Shekha’s vision, it aims to restore the Shekhawati Heritage and create awareness about the same. 
`} img={Banner2}/>
  <TrustBanner title={`Community Outreach Program`} description={`An initiative by Kathika Cultural Centre spearheaded by the Kathika Trust, designed to engage and connect with communities, kids and other different audience  to discuss on topics of Indian Culture, current affairs, and addressing different needs of the communities and societies. `} img={Banner1}/>
  <Support/>
        </>
    )
}
export function generateMetadata(){
  return {
      title: "Kathika Trust",

     
  }
}
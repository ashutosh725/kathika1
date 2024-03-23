import Heritage from "@/components/heritage";
import HBanner from "@/components/heritage/HBanner";
import Hcards from "@/components/heritage/Hcards";
import Slide1 from '../../public/culture/cultureSlide1.png'
import Slide2 from '../../public/culture/cultureSlide2.png'
import Slide3 from '../../public/culture/cultureSlide3.png'
import Slide4 from '../../public/culture/cultureSlide4.png'
import ImageSlider from "@/components/common/ImageSlider";
import HeroSection from "@/components/common/HeroSection";
export default function Page (){
    return(
        <>
        <ImageSlider images={[Slide1, Slide2, Slide3, Slide4]}/>
        <HeroSection heading={`Old Delhi’s Culture and Heritage`} des1={`Situated in the heart of Delhi where vibrant history and culture blends itself with the urban lifestyle, Old Delhi has beautifully preserved and nurtured the heritage that still lingers in the bustling lanes, bazaars, houses and courtyards of the forgotten Havelis. 
`} des2={`The walled city presents the rich tapestry of living heritage and traditions of the medieval years that are still thriving in the lanes of Purani Dilli. 
`}/>
        <HBanner/>
        <Hcards/>
        </>
    )
}
export function generateMetadata(){
    return {
        title: "Culture & Heritage",
  
       
    }
  }
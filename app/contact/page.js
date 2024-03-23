import ImageSlider from "@/components/common/ImageSlider";
import ContactSection from "@/components/contact";
import ContactSlide from '../../public/contact/contact.png'
export default function Page (){
    return(
        <>
        <ImageSlider images={[ContactSlide]}/>
     <ContactSection/>
        </>
    )
}
export function generateMetadata(){
    return {
        title: "Contact Us",

       
    }
}
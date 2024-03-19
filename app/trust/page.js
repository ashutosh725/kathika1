import TrustSection from "@/components/trust";
import TrustBanner from "@/components/trust/TrustBanner";
import Banner1 from "../../public/trust/banner1.jpg"
import Banner2 from "../../public/trust/banner2.jpg"
import Support from "@/components/trust/Support";
export default function Page (){
    return(
        <>
  <TrustSection/>
  <TrustBanner title={`Shekhawati Revival Project`} description={`To safeguard the heritage of the land of Shekhawati, Mr. Atul Khanna, an entrepreneur and heritage conservationist has been working in the region relentlessly for over a decade and recently he formalised his efforts under Shekha- a group of institutions run by the Kathika Trust. Sustainable and adaptive reuse of heritage being central to Shekha’s vision, it aims to restore the Shekhawati Heritage and create awareness about the same. 
`} img={Banner2}/>
  <TrustBanner title={`Community Outreach Program`} description={`An initiative by Kathika Cultural Centre spearheaded by the Kathika Trust, designed to engage and connect with communities, kids and other different audience  to discuss on topics of Indian Culture, current affairs, and addressing different needs of the communities and societies. `} img={Banner1}/>
  <Support/>
        </>
    )
}
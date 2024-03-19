import EventSection from "@/components/events";
import TrustBanner from "@/components/trust/TrustBanner";

import Banner1 from "../../public/trust/banner1.jpg"
import Events from "@/components/events/Events";
import Events1 from "@/components/events/Events1";
import NewsLetter from "@/components/events/NewsLetter";

export default function Page (){
    return(
        <>
     <EventSection/>
     <TrustBanner title={`Community Outreach Program`} description={`An initiative by Kathika Cultural Centre spearheaded by the Kathika Trust, designed to engage and connect with communities, kids and other different audience  to discuss on topics of Indian Culture, current affairs, and addressing different needs of the communities and societies. `} img={Banner1}/>
     <Events/>
     <Events1/>
     <NewsLetter/>
     </>
    )
}
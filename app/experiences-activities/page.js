import Activities from "@/components/activities/Activities";
import Baithaks from "@/components/activities/Baithaks";
import Brunch from "@/components/activities/Brunch";
import Experience from "@/components/activities/Experience";
import Neighbourhood from "@/components/activities/Neighbourhood";

export default function Page (){
    return(
        <>
   <Activities/>
   <Experience />
   <Brunch/>
   <Baithaks/>
   <Neighbourhood/>
        </>
    )
}
export function generateMetadata(){
    return {
        title: "Experiences & Activities",
  
       
    }
  }
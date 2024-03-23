import ExpSection from "@/components/exprience";
import Experience from "@/components/activities/Experience";


export default function Page() {
  return (
    <>
    <ExpSection/>
    <Experience/>
    </>
  );
}
export function generateMetadata(){
  return {
      title: "Experiences & Activities",

     
  }
}
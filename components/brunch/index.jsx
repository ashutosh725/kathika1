
import Br1 from "../../public/brunch/br.jpeg";
import Br2 from "../../public/brunch/br1.jpg";
import Br3 from "../../public/brunch/br2.jpg";
import TrustBanner from "../trust/TrustBanner";
const BrunchSection = () => {
  return (
    <div className="pt-[70px]">
      <TrustBanner
        title={`Kathika Cultural Brunch`}
        description={`Indulge your  senses and savour the vibrant flavours of Old Delhi at our Kathika Cultural Brunch. 
        Join us in this culinary journey with aromatic spices and herbs, flavourful curries and delectable sweets. 
         

`}
        img={Br1}
      />
      <TrustBanner
        title={`Kathika Baithaks`}
        description={`Kathika Baithak is a contemporary take on the traditional concept of baithaks or gatherings for insightful discussions on Indian Art, Culture and History`}
        img={Br3}
      />
       <TrustBanner
        title={`Kathika Neighbourhood Walks`}
        description={`Neighbourhood Walks conducted by Kathika is a pleasant way to explore the local surroundings of Old Delhi, interact with the communities and enjoy the history protected in the lanes of the walled city`}
        img={Br2}
      />
    </div>
  )
}

export default BrunchSection

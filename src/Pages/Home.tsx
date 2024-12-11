import { Flex } from "@radix-ui/themes";
import Tea from "../Components/Tea";
import Coffee from "../Components/Coffee";
import NonCoffee from "../Components/NonCoffee";
import Desert from "../Components/Dessert";
import { ShoppingCart, User } from "lucide-react";
import MenuList from "../Components/Menulist";
import DisplayMenu from "../Components/DisplayMenu";
import Card from "../Components/Card";
const Home = () => {
  return (
   // for designing back screen
    <div  className="flex flex-col items-start justify-center bg-[#f0b267]" >
    <div className="bg-cover min-h-screen w-full" style={{ backgroundImage: "url('/bae.jpg')" }}> 

      <div className="flex items-center justify-center w-full">
        < MenuList/>
      </div>
      <div className="flex items-center justify-center w-full">
        <DisplayMenu image={""} quote={""} author={""} />
      </div>
      <div className="flex items-center justify-center w-full">
      < Card/>
      </div>
      {/* <div className="flex items-center justify-center w-full">
        <Tea />
      </div>
      <div className="flex items-center justify-center w-full">
        <NonCoffee />
      </div>
      <div className="flex items-center justify-center w-full">
        <Desert/>
      </div> */}
    </div>
    </div>
  );
};
export default Home; 
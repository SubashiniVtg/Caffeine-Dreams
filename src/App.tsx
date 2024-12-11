// import { Flex } from "@radix-ui/themes";
// // Import Tea and the Coffee from the Components Folder
// import Coffee from "./Components/Coffee";
// import Tea from "./Components/Tea";
// import Dessert from "./Components/Dessert";
// import NonCoffee from "./Components/NonCoffee";

// import "./index.css";
// function App() {
//   return (
//     <div className="bg-cover min-h-screen" style={{ backgroundImage: "url('/bacg.jpeg')" }}>
//     <Flex gap={"3"} direction={"column"}>
//       {/* The component Breads is used Here */}
//       <Coffee/> 
//       {/* The component Vegetable is used Here */}
//       <Tea />
//       <Dessert/>
//       <NonCoffee/>
//     </Flex>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import PageNotFound from "./Pages/PageNotFound";
import Profile from "./Pages/Profile";
import Custom from "./Pages/Custom";
import About from "./Pages/About";
import Payment from "./Pages/Payment";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
// import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import MenuList from "./Components/Menulist"; // Your MenuList component
import CoffeePage from "./Components/Coffee";
import TeaPage from "./Components/Tea";
import NonPage from "./Components/NonCoffee";
import ChocolatePage  from "./Components/Chocolate";
import DessertPage from "./Components/Dessert";
import SoftPage  from "./Components/SoftDrink";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-order" element={<Custom />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/custom" element={<Custom />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<MenuList />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/tea" element={<TeaPage />} />
        <Route path="/noncoffee" element={<NonPage />} />
        <Route path="/chocolates" element={<ChocolatePage />} />        
        <Route path="/dessert" element={<DessertPage />} />
        <Route path="/softdrinks" element={<SoftPage />} />
        {/* Add other routes here */}
      
   
      </Routes>
      <Footer />
      {/* <PrivateRoutes /> 

      Role based Access 
      
      1. Admin
      2. User
      
    */}
    </BrowserRouter>
  )
}


export default App;
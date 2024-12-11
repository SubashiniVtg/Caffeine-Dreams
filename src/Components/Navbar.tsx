// // import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const links = [
//     { name: 'Home', path: '/' },
//     { name: 'Coffee', path: '/Coffee' },
//     { name: 'Tea', path: '/Sheep' },
//     { name: 'Goats', path: '/goats' },
//   ];

//   return (
//     <nav className="bg-gray-800 p-4">
//       <ul className="flex justify-center space-x-8">
//         {links.map((link) => (
//           <li key={link.path}>
//             <Link
//               to={link.path}
//               className="text-white text-lg hover:bg-gray-700 px-4 py-2 rounded"
//             >
//               {link.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
// export default Navbar;






// before using this import line first we have to install the lucid-react using "npm install lucide-react"
// lucid-react-> package used to import icon in react project
import { ShoppingCart, User } from "lucide-react";
// it takes menu list from util folder
import { links } from "../utils/consts";
// react-router-dom -> used to implement dynamic routing in react application
// useNavigate -> give access to navigating the  object
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  // goToCart->it navigate it my cart page when it was clicked
const goToCart = () =>{
  const navigate = useNavigate();
  navigate("/cart");
}
  return (
    // <nav> use for the creation of navigation bar as like as html tag
    // className-> is used for accessing the tailwind styling
    // <nav className="flex justify-between items-center bg-[#f0b267] shadow-md px-10 py-6" style={{ backgroundColor: '#FEDBA74'}}>
    <nav className="flex justify-between items-center bg-[#f0b267] shadow-md px-10 py-6">
      {/* style={{ backgroundColor: '#FFEAC5'}}-> Use for provide styling */}
      <div className="flex items-center gap-6">
        {/*   hover:text-yellow-900  -> is used when move the mouse in heading*/}
        <h2 className="text-2xl font-bold text-gray-800 hover:text-yellow-900 transition-all cursor-pointer">
          <Link to={"/"}>Caffeine Dreams</Link>
        </h2>
        {/*  */}
        {links.map((link, index) => (
          <Link key={index} to={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer" >
<Link to='/cart'>
{/* Shopping cart -> used for icon styling */}
          <ShoppingCart
            height={28}
            width={28}
            className="text-gray-700 hover:text-gray-900 transition-all"
            />
            </Link>
            {/* the circle above cart icon */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            0
          </span>
        </div>
        <Link to='/profile'>
        {/* styling of profile tab */}
        <div className="flex items-center gap-3 bg-yellow-900 border border-black hover:bg-orange-50 hover:text-black transition-all px-4 py-2 rounded-full text-white cursor-pointer">
          <User height={25} width={25} />
          <h2 className="font-medium">Profile</h2>
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
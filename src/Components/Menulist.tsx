import { Flex, Heading } from "@radix-ui/themes";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../index.css";

const MenuList = () => {
  // Create some predefined menu data for filling the component
  const menulist = [
    { title: "Coffee", link: "/Coffee" },
    { title: "Tea", link: "/Tea" },
    { title: "Non Coffee", link: "/NonCoffee" },
    { title: "Ice creams", link: "/SoftDrinks" },
    { title: "Dessert", link: "/Dessert" },
    { title: "Chocolates", link: "/Chocolates" },
  ];

  return (
    <Flex direction={"row"} gap={"6"} p={"6"} wrap={"wrap"}>
      {menulist.map((item, index) => (
        <Link to={item.link} key={index} className="no-underline">
          <Heading
            className="bg-[#451a07] text-white max-w-fit px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#5b270e] transition-all"
          >
            {item.title}
          </Heading>
        </Link>
      ))}
    </Flex>
  );
};

export default MenuList;

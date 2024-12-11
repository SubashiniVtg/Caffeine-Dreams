import { Flex } from "@radix-ui/themes";
import "../index.css"; // Assuming this contains your global styles

const Card = () => {
  // Predefined menu data for filling the component
  const card = [
    { image: "card1.jpg", 
        title: "A brew of focus and energy in every sip", 
        description: "Coffee is a perfect companion for kickstarting the day, providing a boost of energy and enhancing productivity" 
    },
    { 
        image: "card2.jpeg", 
        title: "A creamy blend of sweetness and fun", 
       description: "Milkshakes are a delicious treat, combining rich flavors and creamy texture, often enjoyed as a refreshing indulgence"
     },
     { image: "card3.jpeg",
         title: "A sweet escape to happiness.", 
         description: "Desserts offer a delightful finale to any meal, bringing joy and satisfaction with every bite of sweetness" 
        },
    // { image: "image4.jpg", title: "Card 4", description: "Description 4" },
  ];

  return (
    <Flex direction={"column"} gap={"6"} className="p-4">
       <div className="grid grid-cols-3 p-3 gap-3">
        {/* Map over the card array to generate each card */}
        {card.map((item, index) => (
          <Flex
            key={index}
            gap="4"
            direction={"column"}
            // Styling the flex card
            className="w-[380px] bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <img
              src={item.image}
              className="w-full h-[300px] object-cover rounded-t-lg"
              alt={item.title}
            />
            <Flex direction={"column"} align={"center"} p="4" gap="3">
              <h3 className="text-gray-800 text-center font-bold text-[18px] text-lg">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-[12px] italic">{item.description}</p>
            </Flex>
          </Flex>
        ))}
      </div>
      </Flex>

  );
};

export default Card;

// import { Flex, Heading, Button, Text } from "@radix-ui/themes";
// import { useState } from "react";
// import "../index.css";
// // Acccess all the parameters passed from the constructor and destruct it
// const CardComp = ({
//   name,
//   image,
//   count,
// }: {
//   name: string;
//   image: string;
//   count: number;
// }) => {
//   // Use a state to set the count of each selected items in the list
//   const [num, setNum] = useState(count);
  
//   return (
//     <Flex
//     // column ku naduvula evalo gap vranum nu pakurathukaha u sirection -column gap nu potrukom
//       gap="4"
//       direction={"column"}
//       className="max-w-[300px] min-w-[150px] bg-amber-800 rounded-lg"
//     >
//       <img
//         src={image}
//         className="w-[350px] h-[200px] rounded-t-lg object-cover"
//       />
//       {/* object-fit: fill */}
      
//       <Flex direction={"column"} justify={"center"} align={"center"} gap={"3"}>
//         <Heading>{name}</Heading>
//         {/* increment and decrement button varathukaha  ipdi set pannirukom
//         button aa click pannum pothu increment aahum */}
//         {/* set num function aa increment and decrement ku use panrom */}
//         <Flex gap={"3"} align={"center"}>
//           <Button style={{ backgroundColor: '#92400E' }} onClick={() => setNum((n) => n - 1)}>
//             -
//           </Button>
//           <Text>{num}</Text>
//           <Button style={{ backgroundColor: ' #92400E' }}onClick={() => setNum((n) => n + 1)}>
//             +
//           </Button>
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };
// export default CardComp;



// radix-ui/themes->used to build modern ,accessible web app
import { Flex, Heading, Button, Text } from "@radix-ui/themes";
// usesate->allow to obtain a state variable allow the user type in as their input
import { useState } from "react";
// handleChange->used to handle user input
const CardComp = ({
  name,
  price,
  image,
  count,
  
  handleChange,
}: {
  name: string;
  price: number;
  image: string;
  count: number;
  handleChange: (name: string, count: number) => void;
}) => {
  const [num, setNum] = useState(count);

  return (
    <Flex
      gap="4"
      direction={"column"}
      // styling the flex card
      className="max-w-[320px] bg-[#ae5731] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
    >
      <img
        src={image}
        className="w-[320px] h-[150px] object-cover rounded-t-lg"
        alt={name}
      />
      <Flex direction={"column"} align={"center"} p="4" gap="3">
        <Heading
          as="h3"
          size="4"
          className="text-gray-800 text-center font-semibold"
        >
          {name}
        </Heading>
        <Text>Rs: {price} /-</Text>
        <Flex gap={"2"} align={"center"}>
          <Button
            style={{ backgroundColor: '#451a07' }}
            size="2"
            className="bg-[#451a07] text-white hover:bg-red-600 transition-colors duration-300 rounded-full"
            onClick={() => {
              setNum((n) => (n > 0 ? n - 1 : n));
              handleChange(name, num - 1);
            }}
          >
            -
          </Button>
          <Text
            size="3"
            className="text-lg font-medium px-6 py-1 bg-gray-100 rounded-lg"
          >
            {num}
          </Text>
          <Button
            style={{ backgroundColor: '#451a07' }}
            size="2"
            className="bg-[#451a07] text-white hover:bg-green-600 transition-colors duration-300 rounded-full"
            onClick={() => {
              setNum((n) => n + 1);
              handleChange(name, num + 1);
            }}
          >
            +
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardComp;
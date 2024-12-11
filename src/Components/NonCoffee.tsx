// import { Flex} from "@radix-ui/themes";
// import CardComp from "./CardComp";
// import "../index.css";
// const NonCoffee = () => {
//   // Create some predefined breads data for filling the component
//   const non = [
//     {
//       name: "Hot Chocolate",
//       image:
//         "/hot.jpeg",
//       count: 2,
//     },
//     {
//       name: "Milkshake",
//       image:
//         "/milk.jpeg",
//       count: 1,
//     },
//     {
//       name: "Smoothie",
//       image:
//         "/smooth.jpeg",
//       count: 1,
//     },
//     {
//       name: "Vanilla Milkshake",
//       image:
//         "/vanilla.jpeg",
//       count: 1,
//     },
   
   
//   ];

//   return (
//     <Flex direction={"column"} gap={"3"}>
//        <h1 className='rounded-lg p-4 text-3xl font-serif'>Non Coffee</h1>
//       <Flex gap={"3"}>

//         {/* Here we have used the map property the map will just iterate over the array defined before the map function 
//             here it is breads so we will be accessign each element in the array with the variable bread 
//             then use a callback function and make an immediately return () a Component called CardComp and pass the datas 
//             as the parameters to the component constructor 
//         */}
//         {non.map((non) => (
//           <CardComp name={non.name} image={non.image} count={non.count} />
//         ))}
//       </Flex>
//     </Flex>
//   );
// };

// export default NonCoffee;
import { Flex, Heading, Table } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { non } from "../utils/consts";
import { useState } from "react";
const Non = () => {
  const [nonBil, setmeatBil] = useState(non);
  const handleBillChange = (name: string, count: number) => {
    const updated = nonBil.map((non) =>
      non.name == name
        ? { ...non, count: (non.count = count) }
        : { ...non }
    );
    setmeatBil(updated);
  };
  return (
    <Flex direction={"column"} gap={"6"} p={"6"} className="min-h-screen w-full bg-cover" style={{ backgroundImage: "url('/bae.jpg')" }}>
      <Heading className="bg-[#451a07] text-white max-w-fit px-4 py-1 rounded-2xl">
        Non Coffee
      </Heading>
      <div className="grid grid-cols-5 p-3 gap-3">
      {/* <Flex wrap={"wrap"} gap="6"> */}
        {non.map((non) => (
          <CardComp
            name={non.name}
            image={non.image}
            count={non.count}
            price={non.price}
            handleChange={handleBillChange}
          />
        ))}
      {/* </Flex> */}
      </div>
      <Table.Root>
        <Table.Header>
          <Table.ColumnHeaderCell>Name: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total: </Table.ColumnHeaderCell>
        </Table.Header>
        {nonBil.map((bill) => (
          <Table.Row>
            <Table.Cell className="text-white">{bill.name}</Table.Cell>
            <Table.Cell className="text-white">{bill.count}</Table.Cell>
            <Table.Cell className="text-white">{bill.price * bill.count}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Root>
    </Flex>
  );
};

export default Non;
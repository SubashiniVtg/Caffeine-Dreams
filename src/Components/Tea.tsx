// import { Flex } from "@radix-ui/themes";
// import CardComp from "./CardComp";
// import '../index.css'; 
// // import Logo from './image/react-logo.png' -for getting image from folder
// const Tea = () => {
//   const Tea = [
//     {
//       name: " Lemon Tea",
//       image:"/lemon.jpg",
        
//       count: 2,
//     },
//     {
//       name: "Mango Tea",
//       image:
//         "/mango.jpeg",
//       count: 1,
//     },
//     {
//       name: "Green Tea",
//       image:
//         "/green.jpeg",
//       count: 1,
//     },
//     {
//       name: "Mint Tea",
//       image:
//         "/mint.jpeg",
//       count: 1,
//     },
//   ];

//   return (
//     <Flex direction={"column"}>
//         <h1 className='rounded-lg p-4 text-3xl font-serif'>Tea</h1>
//       <Flex gap={"3"}>
//         {Tea.map((v) => (
//           <CardComp name={v.name} image={v.image} count={v.count} />
//         ))}
//       </Flex>
//     </Flex>
//   );
// };
// export default Tea;


import { Flex, Heading, Table } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { tea } from "../utils/consts";
import { useState } from "react";
const Tea = () => {
  // void add(int a, int b){
  // a ,b
  // }
  // add(num, num2)
  const [teaBill, setBreadBill] = useState(tea);
  const handleBillChange = (name: string, count: number) => {
    const updated = teaBill.map((tea) =>
      tea.name == name
        ? { ...tea, count: (tea.count = count) }
        : { ...tea }
    );
    setBreadBill(updated);
  };
  return (
    <Flex direction={"column"} gap={"6"} p={"6"} className="min-h-screen w-full bg-cover" style={{ backgroundImage: "url('/bae.jpg')" }}>
      <Heading className="bg-[#451a07] text-white max-w-fit px-4 py-1 rounded-2xl">
        Tea
      </Heading>
      <div className="grid grid-cols-5 p-3 gap-3">
      {/* <Flex wrap={"wrap"} gap="5"> */}
        {tea.map((tea) => (
          <CardComp
            name={tea.name}
            image={tea.image}
            count={tea.count}
            price={tea.price}
            handleChange={handleBillChange}
          />
        ))}
        {/* </Flex> */}
     </div>
      {/* use to display the bill in the form of table */}
      <Table.Root>
        <Table.Header>
          <Table.ColumnHeaderCell>Name: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total: </Table.ColumnHeaderCell>
        </Table.Header>
        {teaBill.map((bill) => (
          <Table.Row>
            <Table.Cell className="text-white">{bill.name}</Table.Cell>
            <Table.Cell className="text-white" >{bill.count}</Table.Cell>
            <Table.Cell className="text-white">{bill.price * bill.count}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Root>
    </Flex>
  );
};

export default Tea;
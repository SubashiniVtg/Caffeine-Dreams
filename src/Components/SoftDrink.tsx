// import { Flex} from "@radix-ui/themes";
// import CardComp from "./CardComp";
// import "../index.css";
// const Coffee = () => {
//   // Create some predefined breads data for filling the component
//   const coffee = [
//     {
//       name: "Espresso",
//       image:
//         "/Espresso.jpeg",
//       count: 2,
//     },
//     {
//       name: "Double Espresso",
//       image:
//         "/Double Espresso.jpeg",
//       count: 1,
//     },
//     {
//       name: "Latte",
//       image:
//         "Latte.jpeg",
//       count: 1,
//     },
//     {
//       name: "Americano",
//       image:
//         "Americano.jpeg",
//       count: 1,
//     },
   
   
//   ];

//   return (
//     <Flex direction={"column"} gap={"3"}>
//        <h1 className='rounded-lg p-4 text-3xl font-serif'>Coffee</h1>
//       <Flex gap={"3"}>

//         {/* Here we have used the map property the map will just iterate over the array defined before the map function 
//             here it is breads so we will be accessign each element in the array with the variable bread 
//             then use a callback function and make an immediately return () a Component called CardComp and pass the datas 
//             as the parameters to the component constructor 
//         */}
//         {coffee.map((coffee) => (
//           <CardComp name={coffee.name} image={coffee.image} count={coffee.count} />
//         ))}
//       </Flex>
//     </Flex>
//   );
// };

// export default Coffee;


import { Flex, Heading, Table } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { icecreams } from "../utils/consts";
import { useState } from "react";
const Coffee = () => {
  // void add(int a, int b){
  // a ,b
  // }
  // add(num, num2)
  const [coffeeBill, setBreadBill] = useState(icecreams);
  const handleBillChange = (name: string, count: number) => {
    const updated = coffeeBill.map((icecreams) =>
      icecreams.name == name
        ? { ...icecreams, count: (icecreams.count = count) }
        : { ...icecreams }
    );
    setBreadBill(updated);
  };
  return (
    <Flex direction={"column"} gap={"6"} p={"6"} className="min-h-screen w-full bg-cover" style={{ backgroundImage: "url('/bae.jpg')" }}>
      <Heading className="bg-[#451a07] text-white max-w-fit px-4 py-1 rounded-2xl">
        Ice Creams
      </Heading>
      {/* <Flex wrap={"wrap"} gap="5"> */}
      <div className="grid grid-cols-5 p-3 gap-3">
        {icecreams.map((icecreams) => (
          <CardComp
            name={icecreams.name}
            image={icecreams.image}
            count={icecreams.count}
            price={icecreams.price}
            handleChange={handleBillChange}
          />
        ))}
        </div>
      {/* </Flex> */}
      <Table.Root>
        <Table.Header>
          <Table.ColumnHeaderCell>Name: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total: </Table.ColumnHeaderCell>
        </Table.Header>
        {coffeeBill.map((bill) => (
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

export default Coffee;
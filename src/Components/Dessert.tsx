// import { Flex} from "@radix-ui/themes";
// import CardComp from "./CardComp";
// import "../index.css";
// const Desert = () => {
//   // Create some predefined breads data for filling the component
//   const desert = [
//     {
//       name: "Strawberry Waffle",
//       image:
//         "/strawberry.jpeg",
//       count: 2,
//     },
//     {
//       name: "Cinnamon Roll",
//       image:
//         "/roll.jpeg",
//       count: 1,
//     },
//     {jklb
//       name: "Lemon Pie",
//       image:
//         "lemonp.jpeg",
//       count: 1,
//     },
//     {
//       name: "Chocolate Waffle",
//       image:
//         "waffle.jpeg",
//       count: 1,
//     },
   
   
//   ];

//   return (
//     <Flex direction={"column"} gap={"3"}>
//        <h1 className='rounded-lg p-4 text-3xl font-serif'>Dessert</h1>
//       <Flex gap={"3"}>

//         {/* Here we have used the map property the map will just iterate over the array defined before the map function 
//             here it is breads so we will be accessign each element in the array with the variable bread 
//             then use a callback function and make an immediately return () a Component called CardComp and pass the datas 
//             as the parameters to the component constructor 
//         */}
//         {desert.map((desert) => (
//           <CardComp name={desert.name} image={desert.image} count={desert.count} />
//         ))}
//       </Flex>
//     </Flex>
//   );
// };

// export default Desert;
import { Flex,  Heading, Table } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { desert } from "../utils/consts";
import { useState } from "react";
const Desert = () => {
  const [DesertBill, setVegBill] = useState(desert);
  const handleBillChange = (name: string, count: number) => {
    const updated = DesertBill.map((desert) =>
      desert.name == name
        ? { ...desert, count: (desert.count = count) }
        : { ...desert }
    );
    setVegBill(updated);
  };
  return (
    <Flex direction={"column"} gap={"6"} p={"6"} className="min-h-screen w-full bg-cover" style={{ backgroundImage: "url('/bae.jpg')" }}>
      <Heading className="bg-[#451a07] text-white max-w-fit px-4 py-1 rounded-2xl">
       Dessert
      </Heading>
      {/* 5 column display ahhiruthaku */}
      {/* <div className="grid grid-cols-5 p-3 gap-3"> */}
      {/* wrap-> used to wrap the content without producing scrolling */}
      <div className="grid grid-cols-5 p-3 gap-3">
        {desert.map((item) => (
          <CardComp
            name={item.name}
            image={item.image}
            count={item.count}
            price={item.price}
            handleChange={handleBillChange}
          />
        ))}
      </div>
      
      {/* used to display the items in  price bill */}
      <Table.Root>
        <Table.Header>
          <Table.ColumnHeaderCell>Name: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total: </Table.ColumnHeaderCell>
        </Table.Header>
        {DesertBill.map((bill) => (
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

export default Desert;
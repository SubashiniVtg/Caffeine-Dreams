import { Flex, Heading, Table } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { chocolates } from "../utils/consts";
import { useState } from "react";
const Non = () => {
  const [nonBil, setmeatBil] = useState(chocolates);
  const handleBillChange = (name: string, count: number) => {
    const updated = nonBil.map((chocolates) =>
      chocolates.name == name
        ? { ...chocolates, count: (chocolates.count = count) }
        : { ...chocolates }
    );
    setmeatBil(updated);
  };
  return (
    <Flex direction={"column"} gap={"6"} p={"6"} className="min-h-screen w-full bg-cover" style={{ backgroundImage: "url('/bae.jpg')" }}>
      <Heading className="bg-[#451a07] text-white max-w-fit px-4 py-1 rounded-2xl">
       Chocolates
      </Heading>
      <div className="grid grid-cols-5 p-3 gap-3" >
      {/* <Flex wrap={"wrap"} gap="6"> */}
        {chocolates.map((chocolates) => (
          <CardComp
            name={chocolates.name}
            image={chocolates.image}
            count={chocolates.count}
            price={chocolates.price}
            handleChange={handleBillChange}
          />
        ))}
        </div>
      {/* </Flex> */}
      <Table.Root >
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
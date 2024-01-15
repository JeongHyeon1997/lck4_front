import Layout from "@/components/Layout";
import { userList } from "@/utils/dataType";
import { Table } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getUserList } from "./api/getUserList";

export default function Home() {
  const [userList, setUserList] = useState<userList[]>();
  const columns = [
    { name: "Level", uid: "level" },
    { name: "Name", uid: "name" },
    { name: "HighTier", uid: "highTier" },
    { name: "Tier", uid: "tier" },
    { name: "Win", uid: "win" },
    { name: "Loss", uid: "loss" },
    { name: "Rate", uid: "rate" },
  ];

  useEffect(() => {
    getUserList().then((res) => {
      setUserList(res);
    });
  }, []);
  return (
    <Layout>
      {userList && (
        <Table
          bordered
          shadow={false}
          aria-label="Example table with dynamic content & infinity pagination"
          css={{
            minWidth: "100%",
            height: "calc($space$14 * 10)",
            backgroundColor: "#ffffff",
          }}
          color="success"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.uid}>{column.name}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={userList}>
            {(item: userList) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.level}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.highTier}</Table.Cell>
                <Table.Cell>{item.tier}</Table.Cell>
                <Table.Cell>{item.win}</Table.Cell>
                <Table.Cell>{item.loss}</Table.Cell>
                <Table.Cell>{item.rate}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      )}
    </Layout>
  );
}

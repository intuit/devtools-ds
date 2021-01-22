import React from "react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Table } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Table",
  parameters: { notes },
};

export const Playground = () => {
  const onSelected = action("onSelected");
  const selected = select(
    "Selected Row",
    ["one", "two", "three", "four"],
    undefined
  );

  return (
    <Table selected={selected} onSelected={onSelected}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell style={{ width: "10%" }}>Status</Table.HeadCell>
          <Table.HeadCell style={{ width: "10%" }}>Method</Table.HeadCell>
          <Table.HeadCell>Domain</Table.HeadCell>
          <Table.HeadCell>Transferred</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row id="one">
          <Table.Cell>200</Table.Cell>
          <Table.Cell>GET</Table.Cell>
          <Table.Cell>localhost:6006</Table.Cell>
          <Table.Cell>4.6 KB</Table.Cell>
        </Table.Row>
        <Table.Row id="two">
          <Table.Cell>200</Table.Cell>
          <Table.Cell>POST</Table.Cell>
          <Table.Cell>localhost:6006</Table.Cell>
          <Table.Cell>22 KB</Table.Cell>
        </Table.Row>
        <Table.Row id="three">
          <Table.Cell>404</Table.Cell>
          <Table.Cell>GET</Table.Cell>
          <Table.Cell>localhost:6006</Table.Cell>
          <Table.Cell>0.1 KB</Table.Cell>
        </Table.Row>
        <Table.Row id="four">
          <Table.Cell>301</Table.Cell>
          <Table.Cell>GET</Table.Cell>
          <Table.Cell>localhost:6006</Table.Cell>
          <Table.Cell>0.2 KB</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

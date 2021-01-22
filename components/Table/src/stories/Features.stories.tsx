import React from "react";

import { Table } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Table/Features",
  parameters: { notes },
};

export const BasicUsage = () => {
  return (
    <Table>
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

export const SelectedRow = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <Table
      selected={selected}
      onSelected={(id) => {
        setSelected(id);
      }}
    >
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

export const InContainer = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <Table
        selected={selected}
        onSelected={(id) => {
          setSelected(id);
        }}
      >
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
    </div>
  );
};

export const TabOrder = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <Table
      selected={selected}
      onSelected={(id) => {
        setSelected(id);
      }}
    >
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
          <Table.Cell>
            <a target="_blank" rel="noreferrer" href="https://intuit.com">
              localhost:6006
            </a>
          </Table.Cell>
          <Table.Cell>4.6 KB</Table.Cell>
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

export const Overflow = () => {
  return (
    <Table>
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
          <Table.Cell>
            This is some really long text that has spaces so it should break in
            theory.
          </Table.Cell>
          <Table.Cell>This_is_a_longer_value_which_wont_break_</Table.Cell>
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

# @devtools-ds/table

A flexible table component, modeled after the network inspector in Chrome and FireFox.

## Installation

```sh
npm i @devtools-ds/table
# or with yarn
yarn add @devtools-ds/table
```

Then to use the component in your code just import it!

```js
import { Table } from "@devtools-ds/table";
```

## Accessibility Approach

There isn't a well-established pattern for this interaction, besides being a [data grid](https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html). However, data grids usually select each cell not the whole row.

I stared by looking at the interactions used in Chrome and FireFox, but they had some issues. In both implementations,
the view changes on move without the user selecting a new node, and tab vs. arrow behavior could be unpredictable. For these reasons, I simplified the whole interaction and separated focus from the selected state in the table. Users can navigate focus using tab, arrow keys, or page navigation keys. Selecting a row requires clicking or keyboard entry. Rows are labelled as selected using `aria-selected` within the grid pattern.

## Usage

```js
import { Table } from "@devtools-ds/table";

export const BasicUsage = () => {
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
      </Table.Body>
    </Table>
  );
};
```

## Resources

- [Data Grid](https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html)
- [Angular Grid](https://www.ag-grid.com/javascript-grid-accessibility/)
- [Table column resizing](https://htmldom.dev/resize-columns-of-a-table/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="#design-tylerkrupicka" title="Design">🎨</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a> <a href="#example-tylerkrupicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

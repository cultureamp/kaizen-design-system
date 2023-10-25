import React from "react"
import { render } from "@testing-library/react"
import {
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from "./Table"

// eslint-disable-next-line @typescript-eslint/no-shadow
enum TestId {
  tableContainer = "table-container",
  tableHeader = "table-header",
  tableHeaderRow = "table-header-row",
  tableHeaderRowCell = "table-header-row-cell",
  tableCard = "table-card",
  tableRow = "table-row",
  tableRowCell = "table-row-cell",
}

/**
 * Simple Wrapper with absolute bare basics.
 * Although we use data-automation-id in practice,
 * I have opted with data-testid for quick validation.
 * I will leave it up to team DS if they want to
 * change the config if they wish.
 *
 * @see https://testing-library.com/docs/dom-testing-library/api-helpers#custom-queries
 */
const Wrapper = (): JSX.Element => (
  <TableContainer data-testid={TestId.tableContainer}>
    <TableHeader data-testid={TestId.tableHeader}>
      <TableRow data-testid={TestId.tableHeaderRow}>
        <TableHeaderRowCell
          checkable={true}
          checkedStatus="on"
          onCheck={(): void => undefined}
          onClick={(): void => undefined}
          labelText="Resource name"
          width={12 / 12}
          data-testid={TestId.tableHeaderRowCell}
        />
      </TableRow>
    </TableHeader>
    <TableCard
      data-testid={TestId.tableCard}
      onClick={(): void => alert("clicked!")}
    >
      <TableRow data-testid={TestId.tableRow}>
        <TableRowCell width={12 / 12} data-testid={TestId.tableRowCell}>
          <div></div>
        </TableRowCell>
      </TableRow>
    </TableCard>
  </TableContainer>
)

describe("<Table />", () => {
  describe("Custom HTML props", () => {
    for (const [key, value] of Object.entries(TestId)) {
      it(`${key} accepts custom data-* attributes`, () => {
        const { getByTestId } = render(<Wrapper />)

        expect(getByTestId(value)).toBeTruthy()
      })
    }
  })
})

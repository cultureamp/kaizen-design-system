import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import {
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from "."

afterEach(cleanup)

enum TestId {
  tableContainer = "table-container",
  tableHeader = "table-header",
  tableHeaderRow = "table-header-row",
  tableHeaderRowCell = "table-header-row-cell",
  tableCard = "table-card",
  tableRow = "table-row",
  tableRowCell = "table-row-cell",
}

enum AriaRoles {
  table = "table",
  row = "row",
  cell = "cell",
  columnheader = "columnheader",
  rowgroup = "rowgroup",
  rowheader = "rowheader",
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
const Wrapper: React.FunctionComponent = () => (
  <TableContainer data-testid={TestId.tableContainer}>
    <TableHeader data-testid={TestId.tableHeader}>
      <TableHeaderRow data-testid={TestId.tableHeaderRow}>
        <TableHeaderRowCell
          checkable={true}
          checkedStatus={"on"}
          onCheck={_ => true}
          active={true}
          onClick={_ => true}
          labelText="Resource name"
          width={12 / 12}
          data-testid={TestId.tableHeaderRowCell}
        />
      </TableHeaderRow>
    </TableHeader>
    <TableCard data-testid={TestId.tableCard} onClick={() => alert("clicked!")}>
      <TableRow data-testid={TestId.tableRow}>
        <TableRowCell width={12 / 12} data-testid={TestId.tableRowCell}>
          <div></div>
        </TableRowCell>
      </TableRow>
    </TableCard>
  </TableContainer>
)

describe("Table", () => {
  describe("Custom HTML props", () => {
    for (const [key, value] of Object.entries(TestId)) {
      it(`${key} accepts custom data-* attributes`, () => {
        const { getByTestId } = render(<Wrapper />)

        expect(getByTestId(value)).toBeTruthy()
      })
    }
  })

  describe("Accessibility", () => {
    // simple check for roles
    for (const [role] of Object.entries(AriaRoles)) {
      it(`contains ARIA compliant table role ${role}`, () => {
        const { queryByRole } = render(<Wrapper />)

        expect(queryByRole(role)).toBeTruthy()
      })
    }
  })
})

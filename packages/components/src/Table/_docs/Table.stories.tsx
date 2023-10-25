import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from "../index"

const meta = {
  title: "Components/Table",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const Table = (): JSX.Element => (
  <TableContainer>
    <TableHeader>
      <TableRow>
        <TableHeaderRowCell
          checkable={true}
          checkedStatus="on"
          onCheck={(): void => undefined}
          onClick={(): void => undefined}
          labelText="Resource name"
          width={12 / 12}
        />
      </TableRow>
    </TableHeader>
    <TableCard onClick={(): void => alert("clicked!")}>
      <TableRow>
        <TableRowCell width={12 / 12}>
          <div></div>
        </TableRowCell>
      </TableRow>
    </TableCard>
  </TableContainer>
)

export const Playground: Story = {
  render: Table,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: { type: "dynamic" },
    },
  },
}

/**
 * @todo: Add your description here and use <Description /> in the MDX,
 * or write directly in the MDX.
 */
// export const Reversed: Story = {
//   args: { isReversed: true }
// }

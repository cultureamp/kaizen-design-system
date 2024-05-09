import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "~components/Checkbox"
import { Divider } from "~components/Divider"
import { EffectivenessIcon } from "~components/Icon"
import { Text } from "~components/Text"
import {
  TableCard,
  TableCardProps,
  TableContainer,
  TableContainerProps,
  TableHeader,
  TableHeaderRowCell,
  TableHeaderRowCellProps,
  TableRow,
  TableRowCell,
  TableRowCellProps,
  TableRowProps,
} from "../index"

export type TableStoryProps = {
  container?: TableContainerProps
  row?: TableRowProps
  rowCells: TableRowCellProps[]
  headerRowCells: TableHeaderRowCellProps[]
  card: TableCardProps
}

const Table = ({
  container,
  row,
  rowCells,
  headerRowCells,
  card,
}: TableStoryProps): JSX.Element => {
  const { expanded, ...restCardProps } = card

  return (
    <TableContainer {...container}>
      <TableHeader>
        <TableRow>
          {headerRowCells.map((headerRowCellProps, index) => (
            <TableHeaderRowCell key={index} {...headerRowCellProps} />
          ))}
        </TableRow>
      </TableHeader>
      <TableCard
        {...restCardProps}
        expanded={expanded}
        onClick={expanded ? (): void => undefined : undefined}
      >
        <TableRow {...row}>
          {rowCells.map(({ children, ...otherProps }, rowCellIndex) => (
            <TableRowCell {...otherProps} key={rowCellIndex}>
              <Text tag="div" variant="body">
                {children}
              </Text>
            </TableRowCell>
          ))}
        </TableRow>
        {expanded && (
          <>
            <Divider variant="content" />
            <Text tag="div" variant="body" classNameOverride="p-16">
              Overall progress
            </Text>
          </>
        )}
      </TableCard>
      <TableCard {...restCardProps}>
        <TableRow {...row}>
          {rowCells.map(({ children, ...otherProps }, rowCellIndex) => (
            <TableRowCell {...otherProps} key={rowCellIndex}>
              <Text tag="div" variant="body">
                {children}
              </Text>
            </TableRowCell>
          ))}
        </TableRow>
      </TableCard>
    </TableContainer>
  )
}

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    chromatic: { disable: false },
    docs: {
      source: { type: "dynamic" },
    },
    a11y: {
      config: {
        rules: [
          {
            // Fixing this in a rebuild
            id: "nested-interactive",
            enabled: false,
          },
          {
            // Fixing this in a rebuild
            id: "aria-required-children",
            enabled: false,
          },
          {
            // Fixing this in a rebuild
            id: "aria-required-parent",
            enabled: false,
          },
          {
            // Fixing this in a rebuild
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
  args: {
    card: { expanded: false },
    headerRowCells: [
      {
        labelText: "Resource name",
        width: 3 / 12,
      },
      {
        labelText: "Supplementary information",
        width: 3 / 12,
      },
      {
        labelText: "Date",
        width: 3 / 12,
      },
      {
        labelText: "Price",
        width: 3 / 12,
      },
    ],
    rowCells: [
      {
        width: 3 / 12,
        children: "Resource",
      },
      {
        width: 3 / 12,
        children: "Supplementary",
      },
      {
        width: 3 / 12,
        children: "Today",
      },
      {
        width: 3 / 12,
        children: "100",
      },
    ],
  },
  decorators: [
    Story => (
      <div style={{ margin: "1rem auto", width: "100%", maxWidth: "60rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: Table,
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Sorting: Story = {
  render: Table,
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  args: {
    headerRowCells: [
      {
        labelText: "Resource name",
        sorting: "ascending",
        onClick: action("Sort Resource name"),
        width: 3 / 12,
      },
      {
        labelText: "Supplementary information",
        sorting: "descending",
        onClick: action("Sort Supplementary information"),
        width: 3 / 12,
      },
      {
        labelText: "Date",
        width: 3 / 12,
      },
      {
        labelText: "Price",
        width: 3 / 12,
      },
    ],
  },
}

export const Data: Story = {
  render: Table,
  args: { container: { variant: "data" } },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Reversed: Story = {
  render: Table,
  args: {
    card: { expanded: false },
    headerRowCells: [
      {
        labelText: "Resource name",
        sorting: "ascending",
        onClick: action("Sort Resource name by ascending"),
        width: 3 / 12,
        reversed: true,
      },
      {
        labelText: "Supplementary information",
        width: 3 / 12,
        reversed: true,
      },
      {
        labelText: "Date",
        width: 3 / 12,
        reversed: true,
      },
      {
        labelText: "Price",
        width: 3 / 12,
        reversed: true,
      },
    ],
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  decorators: [
    Story => (
      <div className="bg-purple-700 p-16">
        <Story />
      </div>
    ),
  ],
}

export const Compact: Story = {
  render: Table,
  args: { container: { variant: "compact" } },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Default: Story = {
  render: Table,
  args: { container: { variant: "default" } },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const CheckboxVariant: Story = {
  render: Table,
  args: {
    headerRowCells: [
      {
        checkable: true,
        onCheck: action("onCheck header-1"),
        checkboxLabel: "Select all Employees",
        labelText: "Employee",
        width: 5 / 12,
      },
      {
        labelText: "Job title",
        width: 3 / 12,
      },
      {
        labelText: "Date",
        width: 2 / 12,
      },
      {
        labelText: "Score",
        width: 2 / 12,
      },
    ],
    rowCells: [
      {
        width: 5 / 12,
        children: (
          <span className="flex gap-12">
            <Checkbox aria-label="Employee x" />
            <span>Employee name</span>
          </span>
        ),
      },
      {
        width: 3 / 12,
        children: "Engineer",
      },
      {
        width: 2 / 12,
        children: "Today",
      },
      {
        width: 2 / 12,
        children: "100",
      },
    ],
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const LinkVariant: Story = {
  render: Table,
  args: { card: { href: "#?foo=bar" } },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const IconVariant: Story = {
  render: Table,
  args: {
    headerRowCells: [
      {
        icon: <EffectivenessIcon role="presentation" />,
        labelText: "Resource name",
        width: 3 / 12,
      },
      {
        icon: <EffectivenessIcon role="presentation" />,
        labelText: "Supplementary information",
        width: 3 / 12,
      },
      {
        labelText: "Date",
        width: 3 / 12,
      },
      {
        labelText: "Price",
        width: 3 / 12,
      },
    ],
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Expandable: Story = {
  render: Table,
  args: {
    card: {
      expanded: true,
      expandedStyle: "popout",
    },
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const HeaderAlignmentAndWrapping: Story = {
  render: Table,
  args: {
    headerRowCells: [
      {
        labelText: "Header align start with wrapping",
        wrapping: "wrap",
        align: "start",
      },
      {
        labelText: "Default alignment",
        width: 3 / 12,
      },
      {
        labelText: "Header center",
        align: "center",
        width: 3 / 12,
      },
      {
        labelText: "Header align with end with wrapping",
        wrapping: "wrap",
        align: "end",
        width: 3 / 12,
      },
    ],
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Tooltip: Story = {
  render: Table,
  args: {
    card: { expanded: false },
    headerRowCells: [
      {
        labelText: "Resource name",
        tooltipInfo: "Sort this by ascending",
        sorting: "ascending",
        onClick: action("Sort Resource name by ascending"),
        width: 3 / 12,
      },
      {
        labelText: "Supplementary information",
        width: 3 / 12,
      },
      {
        labelText: "Date",
        width: 3 / 12,
      },
      {
        labelText: "Price",
        width: 3 / 12,
      },
    ],
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

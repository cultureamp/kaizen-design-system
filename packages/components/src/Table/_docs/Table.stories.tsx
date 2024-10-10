import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "~components/Checkbox"
import { Divider } from "~components/Divider"
import { Text } from "~components/Text"
import { Icon } from "~components/__future__/Icon"
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
  tableCards: TableCardProps[]
}

const TableTemplate: StoryObj<TableStoryProps> = {
  render: ({ container, headerRowCells, tableCards, row, rowCells }) => (
    <TableContainer {...container}>
      <TableHeader>
        <TableRow>
          {headerRowCells.map((headerRowCellProps, index) => (
            <TableHeaderRowCell key={index} {...headerRowCellProps} />
          ))}
        </TableRow>
      </TableHeader>
      {tableCards.map((tableCardProps, index) => (
        <TableCard {...tableCardProps} key={index}>
          <TableRow {...row}>
            {rowCells.map(({ children, ...otherProps }, rowCellIndex) => (
              <TableRowCell {...otherProps} key={rowCellIndex}>
                <Text tag="div" variant="body">
                  {children}
                </Text>
              </TableRowCell>
            ))}
          </TableRow>
          {tableCardProps.expanded && (
            <>
              <Divider variant="content" />
              <Text tag="div" variant="body" classNameOverride="p-16">
                Overall progress
              </Text>
            </>
          )}
        </TableCard>
      ))}
    </TableContainer>
  ),
}

export default {
  ...TableTemplate,
  title: "Components/Table",
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
        ],
      },
    },
  },
  args: {
    tableCards: [
      {
        expanded: false,
      },
      {
        expanded: false,
      },
    ],
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
} satisfies Meta<TableStoryProps>

export const Playground: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Sorting: StoryObj<TableStoryProps> = {
  ...TableTemplate,
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

export const Data: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  args: { container: { variant: "data" } },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Reversed: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  args: {
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

export const Compact: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  args: { container: { variant: "compact" } },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Default: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  args: { container: { variant: "default" } },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const CheckboxVariant: StoryObj<TableStoryProps> = {
  ...TableTemplate,
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

export const LinkVariant: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  args: { tableCards: [{ href: "#?foo=bar" }, { href: "#?bar=foo" }] },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const IconVariant: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  args: {
    headerRowCells: [
      {
        icon: <Icon name="potted_plant" isPresentational isFilled />,
        labelText: "Resource name",
        width: 3 / 12,
      },
      {
        icon: <Icon name="potted_plant" isPresentational isFilled />,
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

export const Expandable: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  args: {
    tableCards: [
      {
        expanded: true,
        expandedStyle: "popout",
        onClick: action("Set expanded to false"),
      },
      {
        expanded: false,
      },
    ],
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const HeaderAlignmentAndWrapping: StoryObj<TableStoryProps> = {
  ...TableTemplate,
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

export const Tooltip: StoryObj<TableStoryProps> = {
  ...TableTemplate,
  args: {
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

import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { IconButton } from "~components/Button"
import { Divider } from "~components/Divider"
import { ChevronUpIcon, EffectivenessIcon } from "~components/Icon"
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
  rowCell?: TableRowCellProps
  headerRowCell?: Omit<TableHeaderRowCellProps, "labelText">
  card: TableCardProps
}

const Table = ({
  container,
  row,
  rowCell,
  headerRowCell,
  card,
}: TableStoryProps): JSX.Element => {
  const { expanded, ...restCardProps } = card

  return (
    <TableContainer {...container}>
      <TableHeader>
        <TableRow>
          <TableHeaderRowCell
            labelText="Resource name"
            width={3 / 12}
            {...headerRowCell}
          />
          <TableHeaderRowCell
            labelText="Supplementary information"
            width={3 / 12}
            {...headerRowCell}
          />
          <TableHeaderRowCell
            labelText="Date"
            width={3 / 12}
            {...headerRowCell}
          />
          <TableHeaderRowCell
            labelText="Price"
            width={3 / 12}
            {...headerRowCell}
          />
        </TableRow>
      </TableHeader>
      <TableCard
        {...restCardProps}
        expanded={expanded}
        onClick={expanded ? (): void => undefined : undefined}
      >
        <TableRow {...row}>
          <TableRowCell width={3 / 12} {...rowCell}>
            <Text tag="div" variant="body">
              Resource
            </Text>
          </TableRowCell>
          <TableRowCell width={3 / 12} {...rowCell}>
            <Text tag="div" variant="body">
              Supplementary
            </Text>
          </TableRowCell>
          <TableRowCell width={3 / 12} {...rowCell}>
            <Text tag="div" variant="body">
              Today
            </Text>
          </TableRowCell>
          <TableRowCell width={3 / 12} {...rowCell}>
            <Text tag="div" variant="body" classNameOverride="mr-24">
              100
            </Text>
            {expanded && (
              <TableRowCell width={3 / 12} {...rowCell}>
                <IconButton
                  label="Expand"
                  icon={<ChevronUpIcon role="presentation" />}
                />
              </TableRowCell>
            )}
          </TableRowCell>
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
          <TableRowCell width={3 / 12} {...rowCell}>
            <Text tag="div" variant="body">
              Resource
            </Text>
          </TableRowCell>
          <TableRowCell width={3 / 12} {...rowCell}>
            <Text tag="div" variant="body">
              Supplementary
            </Text>
          </TableRowCell>
          <TableRowCell width={3 / 12} {...rowCell}>
            <Text tag="div" variant="body">
              Today
            </Text>
          </TableRowCell>
          <TableRowCell width={3 / 12} {...rowCell}>
            <Text tag="div" variant="body">
              100
            </Text>
          </TableRowCell>
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
  },
  args: {
    card: { expanded: false },
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

export const Data: Story = {
  render: Table,
  args: { container: { variant: "data" } },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
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
    headerRowCell: {
      icon: <EffectivenessIcon role="presentation" />,
    },
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
    headerRowCell: {
      labelText: "Right header align with wrapping",
      wrapping: "wrap",
      align: "end",
    },
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
    headerRowCell: {
      tooltipInfo: "This is a tooltip",
    },
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

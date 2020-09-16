import * as React from "react"
import { Avatar } from "@kaizen/draft-avatar"
import { useTable } from "react-table"
import { Heading, Paragraph } from "@kaizen/component-library"
import { Tag } from "@kaizen/draft-tag"
import { TablePoc, Table, Tbody, Thead, Tr, Td, Th } from "../table"

const data = [
  {
    col1: "Hello",
    col2: "World",
  },
  {
    col1: "react-table",
    col2: "rocks",
  },
  {
    col1: "whatever",
    col2: "you want",
  },
]

const columns = [
  {
    Header: "Column 1",
    accessor: "col1", // accessor is the "key" in the data
  },
  {
    Header: "Column 2",
    accessor: "col2",
  },
]

export const Default = () => <TablePoc columns={columns} data={data} />

Default.story = {
  name: "Table POC",
}

export const UseReactTable = () => {
  const { getTableProps, getTableBodyProps } = useTable<any>({
    columns,
    data,
  })

  const employees = [
    {
      name: "Adam Hawkins",
      role: "Product Manager",
      manager: "Devon Cooper",
      status: "Complete",
    },
    {
      name: "Arlene Watson",
      role: "Engineer",
      manager: "Wade Warren",
      status: "Complete",
    },
    {
      name: "Ashley Mckinney",
      role: "Account Executive",
      manager: "Marvin Mckinney",
      status: "Incomplete",
    },
    {
      name: "Brad Fisher",
      role: "Customer Coach",
      manager: "Kathryn Murphy",
      status: "Complete",
    },
  ]

  return (
    <Table {...getTableProps()} data-testid="example-id">
      <Tbody {...getTableBodyProps()}>
        {employees.map(({ name, role, manager, status }) => (
          <Tr>
            <Td>
              <Avatar size="medium" fullName={name} />
            </Td>
            <Td>
              <>
                <Heading variant="heading-4">{name}</Heading>
                <Paragraph variant="small" color="dark-reduced-opacity">
                  {role} - {manager}
                </Paragraph>
              </>
            </Td>
            <Td>
              <>
                {status === "Complete" && (
                  <Tag variant="sentimentPositive">Complete</Tag>
                )}
                {status === "Incomplete" && (
                  <Tag variant="sentimentNegative">Incomplete</Tag>
                )}
              </>
            </Td>
            <Td>buttons</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

UseReactTable.story = {
  name: "Table UseReactTable",
}

export default {
  title: "Table POC (React)",
  component: TablePoc,
}

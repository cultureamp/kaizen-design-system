import * as React from "react"
import { useTable } from "react-table"
import classNames from "classnames"
const styles = require("./table-poc.scss")

interface TablePocProps {
  columns: Array<{
    Header: string
    accessor: string
  }>
  data: Array<{
    [key: string]: string
  }>
}

type BaseProps = {
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  /**
   *
   */
  tag?: keyof HTMLElementTagNameMap
}

type TableCellProps = {
  colspan?: string
  rowspan?: string
}

export const Table = ({
  children,
  classNameAndIHaveSpokenToDST,
  tag,
  ...otherProps
}: BaseProps & { children: React.ReactElement }) =>
  React.createElement(
    tag === undefined ? "table" : tag,
    {
      ...otherProps,
      className: classNames(styles.table, classNameAndIHaveSpokenToDST),
    },
    children
  )
export interface TheadProps {
  children: React.ReactChild[]
}
export const Thead = ({
  children,
  tag,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: TheadProps & BaseProps) =>
  React.createElement(
    tag === undefined ? "thead" : tag,
    {
      ...otherProps,
      className: classNames(styles.thead, classNameAndIHaveSpokenToDST),
    },
    children
  )

export interface TbodyProps {
  children: React.ReactChild[]
}
export const Tbody = ({
  children,
  tag,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: TbodyProps & BaseProps) =>
  React.createElement(
    tag === undefined ? "tbody" : tag,
    {
      ...otherProps,
      className: classNames(styles.tbody, classNameAndIHaveSpokenToDST),
    },
    children
  )

export interface TrProps {
  children: React.ReactChild[] | React.ReactChild
}
export const Tr = ({
  children,
  tag,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: TrProps & BaseProps) =>
  React.createElement(
    tag === undefined ? "tr" : tag,
    {
      ...otherProps,
      className: classNames(styles.tr, classNameAndIHaveSpokenToDST),
    },
    children
  )

export interface ThProps {
  children: React.ReactNode
}
export const Th = ({
  children,
  tag,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: ThProps & TableCellProps & BaseProps) =>
  React.createElement(
    tag === undefined ? "th" : tag,
    {
      ...otherProps,
      className: classNames(styles.th, classNameAndIHaveSpokenToDST),
    },
    children
  )

export interface TdProps {
  children: React.ReactNode
}
export const Td = ({
  children,
  tag,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: TdProps & TableCellProps & BaseProps) =>
  React.createElement(
    tag === undefined ? "td" : tag,
    {
      ...otherProps,
      className: classNames(styles.td, classNameAndIHaveSpokenToDST),
    },
    children
  )

export const TablePoc = ({ columns, data }: TablePocProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <Table {...getTableProps()}>
      <>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </Tr>
          ))}
        </Thead>

        <Tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)

            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </>
    </Table>
  )
}

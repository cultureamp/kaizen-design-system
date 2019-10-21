import { Icon, Text } from "@cultureamp/kaizen-component-library"
import { Checkbox } from "@cultureamp/kaizen-component-library/draft"
import classNames from "classnames"
import * as React from "react"
import { CheckedStatus } from "../Form"
const styles = require("./styles.scss")
const sortDescendingIcon = require("@cultureamp/kaizen-component-library/icons/sort-descending.icon.svg")
  .default

type TableContainer = React.FunctionComponent
export const TableContainer: TableContainer = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

type TableHeader = React.FunctionComponent
export const TableHeader: TableHeader = ({ children }) => (
  <div className={styles.header}>{children}</div>
)

type TableHeaderRow = React.FunctionComponent
export const TableHeaderRow: TableHeaderRow = ({ children }) => (
  <div className={styles.headerRow}>{children}</div>
)

type TableHeaderRowCell = React.FunctionComponent<{
  labelText: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any
  width: number
  icon?: React.SVGAttributes<SVGSymbolElement>
  checkable?: boolean
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  active?: boolean
}>
export const TableHeaderRowCell: TableHeaderRowCell = ({
  onClick,
  width,
  labelText,
  icon,
  checkable,
  checkedStatus,
  onCheck,
  active,
}) => {
  const label = icon ? (
    <span className={styles.headerRowCellIcon}>
      <Icon icon={icon} title={labelText} />
    </span>
  ) : (
    <div className={styles.headerRowCellCheckboxContainer}>
      {checkable && (
        <div className={styles.headerRowCellCheckbox}>
          <Checkbox checkedStatus={checkedStatus} onCheck={onCheck} />
        </div>
      )}
      <Text tag="div" style="label" inheritBaseline>
        {labelText}
      </Text>
    </div>
  )

  const style = {
    width: `${width * 100}%`,
  }
  return onClick ? (
    <button
      style={style}
      className={classNames(styles.headerRowCell, { [styles.active]: active })}
      onClick={onClick}
    >
      {label}
      {active && <Icon icon={sortDescendingIcon} role="presentation" />}
    </button>
  ) : (
    <div style={style} className={styles.headerRowCell}>
      {label}
    </div>
  )
}

type TableCard = React.FunctionComponent<{
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any
  expanded?: boolean
  expandedStyle?: "well" | "popout"
}>
export const TableCard: TableCard = ({
  children,
  expanded,
  expandedStyle = "well",
  onClick,
}) => {
  const className = classNames(styles.card, {
    [styles.expanded]: expanded,
    [styles[expandedStyle]]: expanded,
    [styles.clickable]: onClick != null,
  })
  return onClick ? (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  ) : (
    <div className={className}>{children}</div>
  )
}

type TableRow = React.FunctionComponent
export const TableRow: TableRow = ({ children }) => (
  <div className={styles.row}>{children}</div>
)

type TableRowCell = React.FunctionComponent<{
  width: number
}>
export const TableRowCell: TableRowCell = ({ children, width }) => (
  <div style={{ width: `${width * 100}%` }} className={styles.rowCell}>
    {children}
  </div>
)

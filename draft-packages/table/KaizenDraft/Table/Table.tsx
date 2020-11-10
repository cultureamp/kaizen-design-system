import { Heading, Icon } from "@kaizen/component-library"
import { Checkbox, CheckedStatus } from "@kaizen/draft-form"
import classNames from "classnames"
import * as React from "react"
import styles from "./styles.scss"
import sortDescendingIcon from "@kaizen/component-library/icons/sort-descending.icon.svg"

type TableContainer = React.FunctionComponent<TableContainerProps>
type TableContainerProps = {
  variant?: "compact" | "default"
}
export const TableContainer: TableContainer = ({
  variant = "compact",
  children,
  ...otherProps
}) => (
  <div
    role="table"
    className={classNames(styles.container, {
      [styles.defaultSpacing]: variant === "default",
    })}
    {...otherProps}
  >
    {children}
  </div>
)

/**
 * @deprecated backgroundColor is deprecated. Header props now have transparet backgrounds
 */
export type AllowedTableHeaderBackgroundColors = "ash" | "white"

type TableHeader = React.FunctionComponent<{
  backgroundColor?: AllowedTableHeaderBackgroundColors
}>
export const TableHeader: TableHeader = ({
  backgroundColor,
  children,
  ...otherProps
}) => {
  if (backgroundColor) {
    // eslint-disable-next-line no-console
    console.warn(
      "DEPRECATED(table): backgroundColor is deprecated - this prop has no effect"
    )
  }

  return (
    <div role="rowgroup" {...otherProps}>
      {children}
    </div>
  )
}

type TableHeaderRow = React.FunctionComponent
export const TableHeaderRow: TableHeaderRow = ({ children, ...otherProps }) => (
  <div className={classNames(styles.row)} role="rowheader" {...otherProps}>
    {children}
  </div>
)

const ratioToPercent = (width?: number) =>
  width != null ? `${width * 100}%` : width

/**
 * @param width value between 1 and 0, to be calculated as a percentage
 * @param flex CSS flex shorthand as a string. Be sure to specify the flex grow,
 *        shrink, and basis, due to IE11 compatibility. eg. use "1 1 auto"
 *        instead of just "1".
 */
type TableHeaderRowCell = React.FunctionComponent<{
  labelText: string
  automationId?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any
  width?: number
  flex?: string
  icon?: React.SVGAttributes<SVGSymbolElement>
  checkable?: boolean
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  active?: boolean
  wrapping?: "nowrap" | "wrap"
  align?: "start" | "center" | "end"
}>
export const TableHeaderRowCell: TableHeaderRowCell = ({
  onClick,
  width,
  flex,
  labelText,
  icon,
  checkable,
  checkedStatus,
  onCheck,
  active,
  automationId,
  // I can't say for cetin why "nowrap" was the default value. Normally you wouldn't
  // want to clip off information because it doesn't fit on one line.
  // My assumption is that because since the cell width rows are decoupled, a heading
  // cell with a word longer than the column width would push the columns out of
  // alignment? I'm not sure.
  // Anyway, we can override this default behaviour by setting wrapping to "wrap".
  wrapping = "nowrap",
  align = "start",
  ...otherProps
}) => {
  const label = icon ? (
    <span className={styles.headerRowCellIcon}>
      <Icon icon={icon} title={labelText} />
    </span>
  ) : (
    <div className={styles.headerRowCellCheckboxContainer}>
      {checkable && (
        <div className={styles.headerRowCellCheckbox}>
          <Checkbox
            automationId={`${automationId}-checkbox`}
            checkedStatus={checkedStatus}
            onCheck={onCheck}
          />
        </div>
      )}
      <Heading
        tag="div"
        variant="heading-6"
        color={active ? "dark" : "dark-reduced-opacity"}
      >
        {labelText}
      </Heading>
    </div>
  )

  const style = {
    width: ratioToPercent(width),
    flex,
  }
  const classes = classNames(styles.headerRowCell, {
    [styles.headerRowCellWrap]: wrapping === "wrap",
    [styles.headerRowCellAlignCenter]: align === "center",
    [styles.headerRowCellAlignEnd]: align === "end",
  })

  return onClick ? (
    <button
      data-automation-id={automationId}
      style={style}
      className={classNames(classes, {
        [styles.active]: active,
      })}
      onClick={onClick}
      role="columnheader"
      {...otherProps}
    >
      {label}
      {active && <Icon icon={sortDescendingIcon} role="presentation" />}
    </button>
  ) : (
    <div
      data-automation-id={automationId}
      style={style}
      className={classes}
      role="columnheader"
      {...otherProps}
    >
      {label}
    </div>
  )
}

type ButtonClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => void
type AnchorClickEvent = (e: React.MouseEvent<HTMLAnchorElement>) => void

/**
 * As the Card examples in Storybook take a TableRow,
 * I opted to give the child the role="row" tag. That being
 * said, while TableHeader has a role="rowgroup" as given
 * in an example on the accessibility docs, I couldn't justify
 * adding the same here as all rows look to be wrapped in the
 * TableCard.
 *
 * It may mean that the consumer needs to add their own container
 * around with the role="row". We could also just add it as a
 * very simple component similar to TableHeader.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role
 */
type TableCard = React.FunctionComponent<{
  onClick?: ButtonClickEvent | AnchorClickEvent
  expanded?: boolean
  expandedStyle?: "well" | "popout"
  href?: string
  // Despite there being no onClick or href, still show a hover state on the
  // rows. An example use case is when you might want to handle click events
  // at a cell level, instead of the full row level.
  forceHoverState?: boolean
}>
export const TableCard: TableCard = ({
  children,
  expanded,
  expandedStyle = "well",
  onClick,
  href,
  forceHoverState = false,
  ...otherProps
}) => {
  const className = classNames(styles.card, {
    [styles.expanded]: expanded,
    [styles[expandedStyle]]: expanded,
    [styles.hasHoverState]: forceHoverState || onClick != null || href != null,
  })
  return href != null ? (
    <a
      href={href}
      className={className}
      onClick={onClick as AnchorClickEvent}
      {...otherProps}
    >
      {children}
    </a>
  ) : onClick ? (
    <button
      className={className}
      onClick={onClick as ButtonClickEvent}
      {...otherProps}
    >
      {children}
    </button>
  ) : (
    <div className={className} {...otherProps}>
      {children}
    </div>
  )
}

/**
 * Aria roles like aria-rowindex can be added from
 * the component consumer.
 *
 * @param {*} { children, ...otherProps }
 */
type TableRow = React.FunctionComponent
export const TableRow: TableRow = ({ children, ...otherProps }) => (
  <div className={styles.row} role="row" {...otherProps}>
    {children}
  </div>
)

/**
 * @param width value between 1 and 0, to be calculated as a percentage
 * @param flex CSS flex shorthand as a string. Be sure to specify the flex grow,
 *        shrink, and basis, due to IE11 compatibility. eg. use "1 1 auto"
 *        instead of just "1".
 */
type TableRowCell = React.FunctionComponent<{
  width?: number
  flex?: string
  href?: string
}>
export const TableRowCell: TableRowCell = ({
  children,
  width,
  flex,
  href,
  ...otherProps
}) =>
  href != null ? (
    <a
      role="cell"
      style={{
        width: ratioToPercent(width),
        flex,
      }}
      className={styles.rowCell}
      href={href}
      {...otherProps}
    >
      {children}
    </a>
  ) : (
    <div
      role="cell"
      style={{
        width: ratioToPercent(width),
        flex,
      }}
      className={styles.rowCell}
      {...otherProps}
    >
      {children}
    </div>
  )

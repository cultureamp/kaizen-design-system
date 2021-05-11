import { Heading, Icon } from "@kaizen/component-library"
import { Checkbox, CheckedStatus } from "@kaizen/draft-form"
import classNames from "classnames"
import * as React from "react"
import sortAscendingIcon from "@kaizen/component-library/icons/sort-ascending.icon.svg"
import sortDescendingIcon from "@kaizen/component-library/icons/sort-descending.icon.svg"
import exclamationIcon from "@kaizen/component-library/icons/exclamation.icon.svg"
import { Tooltip } from "@kaizen/draft-tooltip"
import styles from "./styles.scss"

type TableContainer = React.FunctionComponent<TableContainerProps>
type TableContainerProps = {
  variant?: "compact" | "default" | "data"
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
      [styles.dataVariant]: variant === "data",
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
  onClick?:
    | ((e: React.MouseEvent<HTMLButtonElement>) => any)
    | ((e: React.MouseEvent<HTMLAnchorElement>) => any)
  href?: string
  width?: number
  flex?: string
  icon?: React.SVGAttributes<SVGSymbolElement>
  checkable?: boolean
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  reversed?: boolean
  /**
   * This boolean would show a "sort by" icon in the table cell header.
   * The problem was that the arrow was pointing in the descending direction only.
   * Please use `sorting` prop instead.
   * @deprecated
   */
  active?: boolean
  /**
   * Shows an up or down arrow, to show that the column is sorted.
   */
  sorting?: "ascending" | "descending"
  wrapping?: "nowrap" | "wrap"
  align?: "start" | "center" | "end"
  tooltipInfo?: string
  sortingArrowsOnHover?: "ascending" | "descending" | undefined
}>
export const TableHeaderRowCell: TableHeaderRowCell = ({
  labelText,
  automationId,
  onClick,
  href,
  width,
  flex,
  icon,
  checkable,
  checkedStatus,
  onCheck,
  reversed,
  active,
  sorting: sortingRaw,
  // I can't say for certain why "nowrap" was the default value. Normally you wouldn't
  // want to clip off information because it doesn't fit on one line.
  // My assumption is that because since the cell width rows are decoupled, a heading
  // cell with a word longer than the column width would push the columns out of
  // alignment? I'm not sure.
  // Anyway, we can override this default behaviour by setting wrapping to "wrap".
  wrapping = "nowrap",
  align = "start",
  tooltipInfo,
  // if set, this will show the arrow in the direction provided
  // when the header cell is hovered over.
  sortingArrowsOnHover,
  // There aren't any other props in the type definition, so I'm unsure why we
  // have this spread.
  ...otherProps
}) => {
  // `active` is the legacy prop
  const sorting = sortingRaw || (active ? "descending" : undefined)
  const [isHovered, setIsHovered] = React.useState(false)

  const updateHoverState = (hoverState: boolean) => {
    if (sortingArrowsOnHover && hoverState != isHovered)
      setIsHovered(hoverState)
  }

  const headerColor = !!reversed
    ? "white-reduced-opacity"
    : "dark-reduced-opacity"
  const hoveredHeaderColor = !!reversed ? "white" : "dark"

  // For this "cellContents" variable, we start at the inner most child, and
  // wrap it elements, depending on what the props dictate.
  let cellContents = (
    <div className={styles.headerRowCellLabelAndIcons}>
      {icon && (
        <span className={styles.headerRowCellIcon}>
          <Icon icon={icon} title={labelText} />
        </span>
      )}
      {checkable && (
        <div className={styles.headerRowCellCheckbox}>
          <Checkbox
            automationId={`${automationId}-checkbox`}
            checkedStatus={checkedStatus}
            onCheck={onCheck}
          />
        </div>
      )}
      {tooltipInfo != null ? (
        <div className={styles.headerRowCellTooltipIcon}>
          <Icon icon={exclamationIcon} role="presentation" />
        </div>
      ) : null}
      {/* If an "icon" is supplied, the label is displayed inside the icon aria title instead */}
      {!icon ? (
        <div className={styles.headerRowCellLabel}>
          <Heading
            tag="div"
            variant="heading-6"
            color={sorting || isHovered ? hoveredHeaderColor : headerColor}
          >
            {labelText}
          </Heading>
        </div>
      ) : null}
      {(sorting || (isHovered && sortingArrowsOnHover)) && (
        <div
          className={classNames({
            [styles.headerRowCellIconAlignCenter]: align === "center",
            [styles.headerRowCellIconAlignEnd]: align === "end",
          })}
        >
          <Icon
            icon={
              sorting === "ascending" || sortingArrowsOnHover === "ascending"
                ? sortAscendingIcon
                : sortDescendingIcon
            }
            role="presentation"
          />
        </div>
      )}
    </div>
  )

  cellContents = href ? (
    <a
      data-automation-id={automationId}
      className={classNames(styles.headerRowCellButton, {
        [styles.headerRowCellButtonReversed]: !!reversed,
      })}
      href={href}
      onClick={
        onClick as (e: React.MouseEvent<HTMLAnchorElement>) => any | undefined
      }
      onMouseEnter={() => updateHoverState(true)}
      onFocus={() => updateHoverState(true)}
      onMouseLeave={() => updateHoverState(false)}
      onBlur={() => updateHoverState(false)}
    >
      {cellContents}
    </a>
  ) : onClick ? (
    <button
      data-automation-id={automationId}
      className={classNames(styles.headerRowCellButton, {
        [styles.headerRowCellButtonReversed]: !!reversed,
      })}
      onClick={onClick as (e: React.MouseEvent<HTMLButtonElement>) => any}
      onMouseEnter={() => updateHoverState(true)}
      onFocus={() => updateHoverState(true)}
      onMouseLeave={() => updateHoverState(false)}
      onBlur={() => updateHoverState(false)}
    >
      {cellContents}
    </button>
  ) : (
    // This div wrapper probably isn't needed, but it's a bit easier
    // for this flex positioning, to have the dom tree depth match for
    // each permutation.
    <div className={styles.headerRowCellNoButton}>{cellContents}</div>
  )

  cellContents =
    tooltipInfo != null ? (
      <Tooltip
        text={tooltipInfo}
        classNameAndIHaveSpokenToDST={styles.headerRowCellTooltip}
      >
        {cellContents}
      </Tooltip>
    ) : (
      // Again, this wrapper is just to make the dom tree consistent between
      // different permutations.
      <div className={styles.headerRowCellTooltip}>{cellContents}</div>
    )

  return (
    <div
      className={classNames(styles.headerRowCell, {
        [styles.headerRowCellNoWrap]: wrapping === "nowrap",
        [styles.headerRowCellAlignCenter]: align === "center",
        [styles.headerRowCellAlignEnd]: align === "end",
        [styles.headerRowCellActive]: !!sorting,
      })}
      style={{
        width: ratioToPercent(width),
        flex,
      }}
      data-automation-id={automationId}
      role="columnheader"
      {...otherProps}
    >
      {cellContents}
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

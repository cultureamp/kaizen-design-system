import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import exclamationIcon from "@kaizen/component-library/icons/exclamation.icon.svg"
import sortAscendingIcon from "@kaizen/component-library/icons/sort-ascending.icon.svg"
import sortDescendingIcon from "@kaizen/component-library/icons/sort-descending.icon.svg"
import { Checkbox, CheckedStatus } from "@kaizen/draft-form"
import { Tooltip } from "@kaizen/draft-tooltip"
import { Heading } from "@kaizen/typography"
import styles from "./Table.module.scss"

export type TableContainerProps = {
  children?: React.ReactNode
  variant?: "compact" | "default" | "data"
}
/**
 * {@link https://cultureamp.design/components/table/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-table--default-kaizen-site-demo Storybook}
 */
export const TableContainer = ({
  variant = "compact",
  children,
  ...otherProps
}: TableContainerProps): JSX.Element => (
  <div
    role="table"
    className={classnames(
      styles.container,
      variant === "default" && styles.defaultSpacing,
      variant === "data" && styles.dataVariant
    )}
    {...otherProps}
  >
    {children}
  </div>
)

/**
 * @deprecated backgroundColor is deprecated. Header props now have transparet backgrounds
 */
export type AllowedTableHeaderBackgroundColors = "ash" | "white"

export type TableHeaderProps = {
  backgroundColor?: AllowedTableHeaderBackgroundColors
  children?: React.ReactNode
}
export const TableHeader = ({
  backgroundColor,
  children,
  ...otherProps
}: TableHeaderProps): JSX.Element => {
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

export type TableHeaderRowProps = {
  children?: React.ReactNode
}

export const TableHeaderRow = ({
  children,
  ...otherProps
}: TableHeaderRowProps): JSX.Element => (
  <div className={styles.row} role="rowheader" {...otherProps}>
    {children}
  </div>
)

const ratioToPercent = (width?: number): string | number | undefined =>
  width != null ? `${width * 100}%` : width

/**
 * @param width value between 1 and 0, to be calculated as a percentage
 * @param flex CSS flex shorthand as a string. Be sure to specify the flex grow,
 *        shrink, and basis, due to IE11 compatibility. eg. use "1 1 auto"
 *        instead of just "1".
 */
export type TableHeaderRowCellProps = OverrideClassName<
  HTMLAttributes<HTMLElement>
> & {
  labelText: string
  automationId?: string
  onClick?:
    | ((e: React.MouseEvent<HTMLButtonElement>) => any)
    | ((e: React.MouseEvent<HTMLAnchorElement>) => any)
  width?: number
  flex?: string
  href?: string
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
  isTooltipIconHidden?: boolean
  sortingArrowsOnHover?: "ascending" | "descending" | undefined
}

export const TableHeaderRowCell = ({
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
  // If set, this will hide the tooltip exclamation icon. Useful in situations where
  // the table header does not have enough space. However, we should always show a
  // tooltip icon as the default based on design system tooltip guidelines.
  isTooltipIconHidden = false,
  // If set, this will show the arrow in the direction provided
  // when the header cell is hovered over.
  sortingArrowsOnHover,
  classNameOverride,
  // There aren't any other props in the type definition, so I'm unsure why we
  // have this spread.
  ...otherProps
}: TableHeaderRowCellProps): JSX.Element => {
  // `active` is the legacy prop
  const sorting = sortingRaw || (active ? "descending" : undefined)
  const [isHovered, setIsHovered] = React.useState(false)

  const updateHoverState = (hoverState: boolean): void => {
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
      {tooltipInfo != null && !isTooltipIconHidden ? (
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
          className={classnames(
            align === "center" && styles.headerRowCellIconAlignCenter,
            align === "end" && styles.headerRowCellIconAlignEnd
          )}
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
      className={classnames(
        styles.headerRowCellButton,
        reversed && styles.headerRowCellButtonReversed
      )}
      href={href}
      onClick={
        onClick as (e: React.MouseEvent<HTMLAnchorElement>) => any | undefined
      }
      onMouseEnter={(): void => updateHoverState(true)}
      onFocus={(): void => updateHoverState(true)}
      onMouseLeave={(): void => updateHoverState(false)}
      onBlur={(): void => updateHoverState(false)}
    >
      {cellContents}
    </a>
  ) : onClick ? (
    <button
      type="button"
      data-automation-id={automationId}
      className={classnames(
        styles.headerRowCellButton,
        reversed && styles.headerRowCellButtonReversed
      )}
      onClick={onClick as (e: React.MouseEvent<HTMLButtonElement>) => any}
      onMouseEnter={(): void => updateHoverState(true)}
      onFocus={(): void => updateHoverState(true)}
      onMouseLeave={(): void => updateHoverState(false)}
      onBlur={(): void => updateHoverState(false)}
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
        animationDuration={0}
        classNameOverride={styles.headerRowCellTooltip}
        text={tooltipInfo}
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
      className={classnames(
        styles.headerRowCell,
        wrapping === "nowrap" && styles.headerRowCellNoWrap,
        align === "center" && styles.headerRowCellAlignCenter,
        align === "end" && styles.headerRowCellAlignEnd,
        sorting && styles.headerRowCellActive,
        classNameOverride
      )}
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
export type TableCardProps = {
  onClick?: ButtonClickEvent | AnchorClickEvent
  expanded?: boolean
  expandedStyle?: "well" | "popout"
  href?: string
  // Despite there being no onClick or href, still show a hover state on the
  // rows. An example use case is when you might want to handle click events
  // at a cell level, instead of the full row level.
  forceHoverState?: boolean
  children?: React.ReactNode
}

export const TableCard = ({
  children,
  expanded,
  expandedStyle = "well",
  onClick,
  href,
  forceHoverState = false,
  ...otherProps
}: TableCardProps): JSX.Element => {
  const className = classnames(
    styles.card,
    expanded && styles.expanded,
    expanded && styles[expandedStyle],
    (forceHoverState || onClick != null || href != null) && styles.hasHoverState
  )
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
      type="button"
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
 * @param {*} { children, classNameOverride, ...otherProps }
 */
export type TableRowProps = OverrideClassName<HTMLAttributes<HTMLElement>> & {
  children?: React.ReactNode
}
export const TableRow = ({
  children,
  classNameOverride,
  ...otherProps
}: TableRowProps): JSX.Element => (
  <div
    className={classnames(styles.row, classNameOverride)}
    role="row"
    {...otherProps}
  >
    {children}
  </div>
)

/**
 * @param width value between 1 and 0, to be calculated as a percentage
 * @param flex CSS flex shorthand as a string. Be sure to specify the flex grow,
 *        shrink, and basis, due to IE11 compatibility. eg. use "1 1 auto"
 *        instead of just "1".
 */
export type TableRowCellProps = OverrideClassName<
  HTMLAttributes<HTMLElement>
> & {
  children?: React.ReactNode
  width?: number
  flex?: string
  href?: string
}

export const TableRowCell = ({
  children,
  width,
  flex,
  href,
  classNameOverride,
  ...otherProps
}: TableRowCellProps): JSX.Element =>
  href != null ? (
    <a
      // eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role
      role="cell"
      style={{
        width: ratioToPercent(width),
        flex,
      }}
      className={classnames(styles.rowCell, classNameOverride)}
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
      className={classnames(styles.rowCell, classNameOverride)}
      {...otherProps}
    >
      {children}
    </div>
  )

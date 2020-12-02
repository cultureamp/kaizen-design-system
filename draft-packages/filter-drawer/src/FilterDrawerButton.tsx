import { Badge } from "@kaizen/draft-badge"
import {
  GenericButton,
  AdditionalContentProps,
  GenericProps,
  LabelProps,
} from "@kaizen/draft-button"
import classnames from "classnames"
import * as React from "react"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import styles from "../styles/FilterDrawerButton.module.scss"

type FilterButtonProps = {
  labelText: string
  numberOfFiltersEnabled: number
  onClick: (e: any) => void
  onMouseDown: (e: any) => void
  reversed?: boolean
  ariaExpanded: boolean
  ariaControls: string
}

export const FilterDrawerButton = ({
  labelText,
  numberOfFiltersEnabled,
  onClick,
  onMouseDown,
  reversed,
  ariaControls,
  ariaExpanded,
}: FilterButtonProps) => (
  <div
    className={classnames(styles.buttonEdgeCaseStyling, {
      [styles.reversed]: reversed,
    })}
  >
    <ButtonAllowingAdditionalContent
      secondary={true}
      reversed={reversed}
      label={labelText}
      icon={filterIcon}
      iconPosition="start"
      additionalContent={renderBadge(numberOfFiltersEnabled)}
      onClick={onClick}
      onMouseDown={onMouseDown}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    />
  </div>
)

const ButtonAllowingAdditionalContent = (
  props: GenericProps & LabelProps & AdditionalContentProps
) => <GenericButton {...props} />

const renderBadge = (numberOfFiltersEnabled: number) =>
  numberOfFiltersEnabled > 0 ? (
    <Badge variant="active">{String(numberOfFiltersEnabled)}</Badge>
  ) : null

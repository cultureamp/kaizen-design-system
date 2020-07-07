import { Badge } from "@kaizen/draft-badge"
import classnames from "classnames"
import * as React from "react"
import GenericButton, {
  AdditionalContentProps,
  GenericProps,
  LabelProps,
} from "./components/GenericButton"
const filterIcon = require("@kaizen/component-library/icons/filter.icon.svg")
  .default
const styles = require("./FilterDrawerButton.module.scss")

type FilterButtonProps = {
  labelText: string
  numFiltersEnabled: number
  onClick: (e: any) => void
  onMouseDown: (e: any) => void
  reversed?: boolean
}

export const FilterDrawerButton = ({
  labelText,
  numFiltersEnabled,
  onClick,
  onMouseDown,
  reversed,
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
      additionalContent={renderBadge(numFiltersEnabled)}
      onClick={onClick}
      onMouseDown={onMouseDown}
    />
  </div>
)

const ButtonAllowingAdditionalContent = (
  props: GenericProps & LabelProps & AdditionalContentProps
) => <GenericButton {...props} />

const renderBadge = (numFiltersEnabled: number) =>
  numFiltersEnabled > 0 ? (
    <Badge variant="active">{String(numFiltersEnabled)}</Badge>
  ) : null

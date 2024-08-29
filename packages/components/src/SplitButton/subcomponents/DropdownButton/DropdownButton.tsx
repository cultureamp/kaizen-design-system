import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import classnames from "classnames"
import { ChevronDownIcon } from "~components/__illustrations__/v1"
import { BaseButton, BaseButtonProps } from "../BaseButton"
import styles from "./DropdownButton.module.scss"

export type DropdownButtonProps = Omit<BaseButtonProps, "label" | "icon">

export const DropdownButton = ({
  classNameOverride,
  "aria-label": ariaLabel,
  ...restProps
}: DropdownButtonProps): JSX.Element => {
  const { formatMessage } = useIntl()
  return (
    <BaseButton
      label={
        ariaLabel ||
        formatMessage({
          id: "splitButton.dropdownButton.label",
          defaultMessage: "Additional actions",
          description: "Label for a dropdown menu holding additional actions",
        })
      }
      icon={<ChevronDownIcon role="presentation" />}
      classNameOverride={classnames(styles.dropdownButton, classNameOverride)}
      {...restProps}
    />
  )
}

DropdownButton.displayName = "DropdownButton"

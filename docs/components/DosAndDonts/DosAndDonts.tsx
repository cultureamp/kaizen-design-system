import React, { HTMLAttributes } from "react"
import { Canvas, Unstyled } from "@storybook/blocks"
import classnames from "classnames"
import { Text } from "~components/Text"
import { Icon } from "~components/__future__/Icon"
import styles from "./DosAndDonts.module.css"

export const DosAndDonts = ({
  className,
  children,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div className={classnames(styles.dosAndDonts, className)} {...otherProps}>
    {children}
  </div>
)

DosAndDonts.displayName = "DosAndDonts"

const DoOrDontTag = ({ isDont }: { isDont: boolean }): JSX.Element => (
  <Unstyled>
    <span className={classnames(styles.doOrDontTag, isDont ? "bg-red-500" : "bg-green-500")}>
      <Icon name={isDont ? "close" : "check"} isPresentational />
      <Text variant="body" color="white">
        <strong>{isDont ? "Don't" : "Do"}</strong>
      </Text>
    </span>
  </Unstyled>
)

DoOrDontTag.displayName = "DoOrDontTag"

export const DoOrDont = ({
  isDont = false,
  className,
  story,
  ...otherProps
}: {
  isDont?: boolean
  story: any
} & HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div className={classnames("relative", className)} {...otherProps}>
    <DoOrDontTag isDont={isDont} />
    <Canvas
      sourceState="none"
      className="h-full m-0 bg-gray-100 rounded-none shadow-none border-none"
      of={story}
    />
  </div>
)

DoOrDont.displayName = "DoOrDont"

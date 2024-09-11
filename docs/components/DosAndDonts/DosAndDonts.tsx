import React, { HTMLAttributes } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
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
    <div
      className={classnames(
        "absolute top-6 left-6 z-10 py-2 ps-4 pe-8 font-bold text-white rounded flex gap-2 items-center justify-center",
        isDont ? "bg-red-500" : "bg-green-500"
      )}
    >
      <Unstyled style={{ display: "contents" }}>
        <Icon name={isDont ? "close" : "check"} isPresentational />
        <Text variant="body" color="white">
          <strong>{isDont ? "Don't" : "Do"}</strong>
        </Text>
      </Unstyled>
    </div>
    <Canvas
      sourceState="none"
      className="h-full m-0 bg-gray-100 rounded-none shadow-none border-none"
      of={story}
    />
  </div>
)

DoOrDont.displayName = "DoOrDont"

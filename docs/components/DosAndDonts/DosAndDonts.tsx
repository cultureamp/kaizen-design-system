import React, { HTMLAttributes } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Canvas } from "@storybook/blocks"
import classnames from "classnames"
import { CheckIcon, CloseIcon } from "~components/Icon"
import { SbContent } from "../SbContent"
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
        "absolute top-6 left-6 z-10 py-4 px-6 font-bold text-white rounded flex gap-2 items-center justify-center",
        isDont ? "bg-red-500" : "bg-green-500"
      )}
    >
      {isDont ? (
        <CloseIcon role="presentation" />
      ) : (
        <CheckIcon role="presentation" />
      )}
      <SbContent>
        <span className="text-white">
          <strong>{isDont ? "Don't" : "Do"}</strong>
        </span>
      </SbContent>
    </div>
    <Canvas
      sourceState="none"
      className="h-full m-0 bg-gray-100 rounded-none shadow-none border-none"
      of={story}
    />
  </div>
)

DoOrDont.displayName = "DoOrDont"

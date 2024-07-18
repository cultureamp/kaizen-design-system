import React, { HTMLAttributes } from "react"
import { Canvas } from "@storybook/blocks"
import classnames from "classnames"
import { CheckIcon } from "~components/Icon"
import { SbContent } from "../SbContent"

export const DosAndDonts = ({
  className,
  children,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div
    className={classnames(className, "grid grid-cols-1 gap-16 lg:grid-cols-2")}
    {...otherProps}
  >
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
  <div className={classnames("relative [&>*]:m-0", className)} {...otherProps}>
    <div className="relative [&>*]:m-0">
      <div
        className={classnames(
          "absolute top-6 left-6 z-10 py-4 px-6 font-bold text-white rounded flex gap-2 items-center justify-center",
          isDont ? "bg-red-500" : "bg-green-500"
        )}
      >
        <CheckIcon role="presentation" />
        <SbContent>
          <span className="text-white">
            <strong>{isDont ? "Don't" : "Do"}</strong>
          </span>
        </SbContent>
      </div>
      <Canvas
        sourceState="none"
        className="[&>*]:bg-gray-100 rounded-none shadow-none border-none"
        of={story}
      />
    </div>
  </div>
)

DoOrDont.displayName = "DoOrDont"

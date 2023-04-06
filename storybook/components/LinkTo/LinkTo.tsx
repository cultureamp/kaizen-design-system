import React, { HTMLAttributes } from "react"
import { linkTo } from "@storybook/addon-links"
import classnames from "classnames"

interface LinkToProps extends HTMLAttributes<HTMLButtonElement> {
  pageId: string
}

export const LinkTo = ({
  children,
  pageId,
  className,
  ...restButtonAttributes
}: LinkToProps): JSX.Element => (
  <button
    onClick={linkTo(pageId)}
    className={classnames(
      "bg-transparent border-none text-blue-400 hover:underline cursor-pointer p-0",
      className
    )}
    {...restButtonAttributes}
  >
    {children}
  </button>
)

LinkTo.displayName = "LinkTo"

import React, { HTMLAttributes } from "react"
import { linkTo } from "@storybook/addon-links"
import classnames from "classnames"

export type LinkToProps = {
  pageId: string
  sectionName?: string
} & HTMLAttributes<HTMLButtonElement>

export const LinkTo = ({
  children,
  pageId,
  sectionName,
  className,
  ...restButtonAttributes
}: LinkToProps): JSX.Element => (
  <button
    type="button"
    onClick={linkTo(pageId, sectionName)}
    className={classnames(
      "kz-bg-transparent kz-border-none kz-text-blue-400 hover:kz-underline kz-cursor-pointer kz-p-0",
      className
    )}
    {...restButtonAttributes}
  >
    {children}
  </button>
)

LinkTo.displayName = "LinkTo"

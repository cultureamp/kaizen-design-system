import React, { ReactNode, HTMLAttributes } from "react"
import classNames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"

/** @todo Add list of all icons names */
export type TagIcons = "tag"

export type TagColors =
  | "gray"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"

export interface TagProps
  extends OverrideClassName<HTMLAttributes<HTMLSpanElement>> {
  children: ReactNode
  color?: TagColors
  Icon?: React.ReactElement
}

export const Tag = ({
  children,
  classNameOverride,
  Icon,
  color = "gray",
}: TagProps): JSX.Element => (
  <span
    className={classNames(
      "inline-flex items-center px-8 py-[5px] gap-4 rounded-[28px] font-family-paragraph text-paragraph-sm font-weight-paragraph leading-paragraph-sm whitespace-nowrap",
      {
        ["bg-gray-200 text-purple-800"]: color === "gray",
        ["bg-blue-100 text-blue-700"]: color === "blue",
        ["bg-green-100 text-green-700"]: color === "green",
        ["bg-yellow-100 text-yellow-700"]: color === "yellow",
        ["bg-orange-100 text-orange-700"]: color === "orange",
        ["bg-red-100 text-red-700"]: color === "red",
        ["bg-purple-100 text-purple-700"]: color === "purple",
      },
      classNameOverride
    )}
  >
    {Icon && (
      <span
        className={classNames("inline-flex -my-[1px]", {
          ["text-blue-500"]: color === "blue",
          ["text-green-500"]: color === "green",
          ["text-yellow-500"]: color === "yellow",
          ["text-orange-500"]: color === "orange",
          ["text-red-500"]: color === "red",
          ["text-purple-500"]: color === "purple",
        })}
      >
        {Icon}
      </span>
    )}
    {children}
  </span>
)

Tag.displayName = "Tag"

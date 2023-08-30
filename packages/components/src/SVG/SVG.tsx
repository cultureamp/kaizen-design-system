import React, { ReactNode, SVGAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { warn } from "~utils/console"
import styles from "./SVG.module.scss"

type RolesType =
  | "img" // meaningful, title should be read aloud to users who can't see it
  | "presentation" // decorative, should be silent to users who can't see it

export type SVGProps = {
  children: ReactNode
  inheritSize?: boolean
  role?: RolesType
  title?: string
  desc?: string
} & OverrideClassName<SVGAttributes<SVGElement>>

/**
 * {@link https://cultureamp.design/components/icon/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-icon--meaningful-kaizen-site-demo Storybook}
 */
export const SVG = ({
  inheritSize = false,
  role = "img",
  title = "",
  desc = "",
  viewBox = "0 0 20 20",
  classNameOverride,
  children,
  ...props
}: SVGProps): JSX.Element => {
  const isMeaningfulImg = role === "img"

  if (isMeaningfulImg && !title) {
    warn(`
      Icon with role "img" missing a title attribute.

      Assistive technologies that enable vision-impaired users to read web pages
      can treat images (including icons) as either decorative or meaningful. Only
      images with a role of "img" (meaningful) will be read aloud to the user.
      These images must therefore have a title attribute to provide the text that
      will be read aloud.

      Either add the missing title prop, or set this icon's role to
      "presentation" to indicate it is not meaningful.
    `)
  }

  const renderTitle = (): JSX.Element | false =>
    isMeaningfulImg && !!title && <title>{title}</title>

  const renderDesc = (): JSX.Element | false =>
    isMeaningfulImg && !!desc && <desc>{desc}</desc>

  const accessibilityProps = {
    role,
    ["aria-hidden"]: isMeaningfulImg ? undefined : true,
  }

  return (
    <svg
      className={classnames(
        styles.icon,
        classNameOverride,
        inheritSize && styles.inheritSize
      )}
      viewBox={viewBox}
      // Work around IE11 making all SVGs focusable.
      // See http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4
      focusable="false"
      {...accessibilityProps}
      {...props}
    >
      {renderTitle()}
      {renderDesc()}
      {children}
    </svg>
  )
}

SVG.displayName = "SVG"

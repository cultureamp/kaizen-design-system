import React, { SVGAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { warn } from "../../util/console"
import styles from "./Icon.module.scss"

type RolesType =
  | "img" // meaningful, title should be read aloud to users who can't see it
  | "presentation" // decorative, should be silent to users who can't see it

export interface IconProps
  extends OverrideClassName<SVGAttributes<SVGElement>> {
  icon: React.SVGAttributes<SVGSymbolElement>
  inheritSize?: boolean
  role?: RolesType
  title?: string
  desc?: string
}

/**
 * {@link https://cultureamp.design/components/icon/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-icon--meaningful-kaizen-site-demo Storybook}
 */
export const Icon = ({
  icon,
  inheritSize = false,
  role = "img",
  title = "",
  desc = "",
  classNameOverride,
  ...props
}: IconProps): JSX.Element => {
  const isMeaningfulImg = role === "img"

  if (isMeaningfulImg && !title) {
    warn(`
      Icon with role "img" missing a title attribute.

      Assistive technologies that enable vision-impaired users to read web pages
      can treat images (including icons) as either decorative or meaningful. Only
      images with a role of "img" (meaningful) will be read aloud to the user.
      These images must therefore have a aria-label attribute to provide the text
      that will be read aloud.

      Either add the missing title prop, or set this icon's role to
      "presentation" to indicate it is not meaningful.
    `)
  }

  const accessibilityProps = {
    role,
    ["aria-hidden"]: isMeaningfulImg ? undefined : true,
    ["aria-label"]: isMeaningfulImg && !!title ? title : undefined,
  }

  return (
    <svg
      className={classnames(styles.icon, classNameOverride, {
        [styles.inheritSize]: inheritSize,
      })}
      viewBox={icon.viewBox}
      // Work around IE11 making all SVGs focusable.
      // See http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4
      focusable="false"
      {...accessibilityProps}
      {...props}
    >
      {isMeaningfulImg && !!desc ? <desc>{desc}</desc> : null}
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  )
}

Icon.displayName = "Icon"

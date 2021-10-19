import classnames from "classnames"
import * as React from "react"

import { warn } from "../../util/console"
import { uuidFromString } from "../../util/uuidFromString"

import styles from "./Icon.module.scss"

type RolesType =
  | "img" // meaningful, title should be read aloud to users who can't see it
  | "presentation" // decorative, should be silent to users who can't see it

type Icon = React.FunctionComponent<{
  icon: React.SVGAttributes<SVGSymbolElement>
  inheritSize?: boolean
  role?: RolesType
  title?: string
  desc?: string
}>

const Icon: Icon = ({
  icon,
  inheritSize = false,
  role = "img",
  title = "",
  desc = "",
}) => {
  const titleId = uuidFromString(title)
  const descId = uuidFromString(desc)
  const isMeaningfulImg = role === "img"

  const classes = classnames(styles.icon, {
    [styles.inheritSize]: inheritSize,
  })

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
    isMeaningfulImg && !!title && <title id={titleId}>{title}</title>

  const renderDesc = (): JSX.Element | false =>
    isMeaningfulImg && !!desc && <desc id={descId}>{desc}</desc>

  const labelledBy =
    // read out title and description together if both are present
    desc ? `${titleId} ${descId}` : `${titleId}`

  const accessibilityProps = {
    role,
    ["aria-hidden"]: isMeaningfulImg ? undefined : true,
  }

  return (
    <svg
      className={classes}
      viewBox={icon.viewBox}
      // Work around IE11 making all SVGs focusable.
      // See http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4
      focusable="false"
      {...accessibilityProps}
    >
      {renderTitle()}
      {renderDesc()}
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  )
}

export default Icon

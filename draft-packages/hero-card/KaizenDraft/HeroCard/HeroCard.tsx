import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./HeroCard.module.scss"

type BackgroundColors =
  | "wisteria700"
  | "wisteria200"
  | "cluny200"
  | "seedling200"

export interface HeroCardProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">> {
  children: React.ReactNode
  leftContent?: React.ReactNode
  title?: React.ReactNode
  image?: React.ReactNode
  badge?: React.ReactNode
  minHeight?: string
  fullWidth?: boolean
  leftBackgroundColor?: BackgroundColors
}

/**
 * @deprecated HeroCard is deprecated.
 * No further changes will be made to it as it will be superseded by Tile.
 */
export const HeroCard = ({
  children,
  leftContent,
  title,
  image,
  badge,
  minHeight = "none",
  fullWidth = false,
  leftBackgroundColor = "wisteria700",
  classNameOverride,
  ...props
}: HeroCardProps): JSX.Element => (
  <div
    className={classnames(styles.root, classNameOverride, {
      [styles.fullWidth]: fullWidth,
    })}
    {...props} // `title` is missing as it is used as a heading; requires breaking change to fix
  >
    <div
      style={{ minHeight }}
      className={classnames(styles.left, styles[leftBackgroundColor])}
    >
      {badge && <div className={styles.badge}>{badge}</div>}
      {leftContent && (
        <div
          className={classnames(styles.leftContent, {
            [styles.withBadge]: !!badge,
          })}
        >
          {leftContent}
        </div>
      )}
      {image}
    </div>
    <div className={styles.right}>
      {title}
      <div className={styles.rightContent}>{children}</div>
    </div>
  </div>
)

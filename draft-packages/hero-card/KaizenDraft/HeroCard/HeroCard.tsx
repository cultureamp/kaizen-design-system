import classnames from "classnames"
import * as React from "react"

import styles from "./HeroCard.scss"

type BackgroundColors =
  | "wisteria700"
  | "wisteria200"
  | "cluny200"
  | "seedling200"

export interface HeroCardProps {
  readonly leftContent?: React.ReactNode
  readonly children: React.ReactNode
  readonly title?: React.ReactNode
  readonly image?: React.ReactNode
  readonly badge?: React.ReactNode
  readonly fullWidth?: boolean
  readonly minHeight?: string
  readonly leftBackgroundColor?: BackgroundColors
}

type HeroCard = React.FunctionComponent<HeroCardProps>

const HeroCard: HeroCard = ({
  leftContent,
  children,
  title,
  image,
  badge,
  minHeight = "none",
  fullWidth = false,
  leftBackgroundColor = "wisteria700",
}: HeroCardProps) => (
  <div
    className={classnames(styles.root, {
      [styles.fullWidth]: fullWidth,
    })}
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

export default HeroCard

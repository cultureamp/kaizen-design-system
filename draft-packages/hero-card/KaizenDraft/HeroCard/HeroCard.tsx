import classnames from "classnames"
import * as React from "react"

import styles from "./HeroCard.scss"

interface Props {
  readonly leftContent?: React.ReactNode
  readonly children: React.ReactNode
  readonly title?: React.ReactNode
  readonly image?: React.ReactNode
  readonly badge?: React.ReactNode
  readonly fullWidth?: boolean
  readonly minHeight?: string
}

type HeroCard = React.FunctionComponent<Props>

const HeroCard: HeroCard = ({
  leftContent,
  children,
  title,
  image,
  badge,
  minHeight = "none",
  fullWidth = false,
}: Props) => (
  <div
    className={classnames(styles.root, {
      [styles.fullWidth]: fullWidth,
    })}
  >
    <div style={{ minHeight }} className={styles.left}>
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

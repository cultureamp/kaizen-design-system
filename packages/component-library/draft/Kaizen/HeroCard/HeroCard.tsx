import classnames from "classnames"
import * as React from "react"

const styles = require("./HeroCard.scss")

interface Props {
  readonly leftContent?: React.ReactNode
  readonly children: React.ReactNode
  readonly title?: String
  readonly image?: React.ReactNode
  readonly badgeText?: String
  readonly fullWidth?: Boolean
  readonly minHeight?: string
}

type HeroCard = React.FunctionComponent<Props>

const HeroCard: HeroCard = ({
  leftContent,
  children,
  title,
  image,
  badgeText,
  minHeight = "none",
  fullWidth = false,
}: Props) => {
  return (
    <div
      className={classnames(styles.root, {
        [styles.fullWidth]: fullWidth,
      })}
    >
      <div style={{ minHeight }} className={styles.left}>
        {badgeText && <div className={styles.badge}>{badgeText}</div>}
        {leftContent && (
          <div
            className={classnames(styles.leftContent, {
              [styles.withBadge]: !!badgeText,
            })}
          >
            {leftContent}
          </div>
        )}
        {image}
      </div>
      <div className={styles.right}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <div className={styles.rightContent}>{children}</div>
      </div>
    </div>
  )
}

export default HeroCard

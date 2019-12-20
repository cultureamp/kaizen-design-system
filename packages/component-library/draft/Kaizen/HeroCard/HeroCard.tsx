import * as React from "react"
import classnames from "classnames"

const styles = require("./HeroCard.scss")

interface Props {
  readonly leftContent?: React.ReactNode
  readonly children: React.ReactNode
  readonly title?: String
  readonly image?: React.ReactNode
  readonly badgeText?: String
  readonly fullWidth?: Boolean
}

type HeroCard = React.FunctionComponent<Props>

const HeroCard: HeroCard = ({
  leftContent,
  children,
  title,
  image,
  badgeText,
  fullWidth = false,
}: Props) => {
  return (
    <div
      className={classnames(styles.root, {
        [styles.fullWidth]: fullWidth,
      })}
    >
      <div className={styles.left}>
        {badgeText && <div className={styles.badge}>{badgeText}</div>}
        {leftContent && <div className={styles.leftContent}>{leftContent}</div>}
        {image && (
          <div className={styles.image}>
            <img src={image} alt="hero-card-image" />
          </div>
        )}
      </div>
      <div className={styles.right}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </div>
    </div>
  )
}

export default HeroCard

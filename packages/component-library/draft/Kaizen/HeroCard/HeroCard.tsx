import * as React from "react"

const styles = require("./HeroCard.scss")

interface Props {
  readonly leftContent?: React.ReactNode
  readonly children: React.ReactNode
  readonly title?: String
  readonly image?: React.ReactNode
  readonly badgeText?: String
}

type HeroCard = React.FunctionComponent<Props>

const HeroCard: HeroCard = ({
  leftContent,
  children,
  title,
  image,
  badgeText,
}: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.leftContent}>
        {badgeText && <div className={styles.badge}>{badgeText}</div>}
        {leftContent}
      </div>
      <div className={styles.rightContent}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </div>
    </div>
  )
}

export default HeroCard

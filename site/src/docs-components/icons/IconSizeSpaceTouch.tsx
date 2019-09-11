import React from "react"
import styles from "./IconsPage.scss"
import minimumSize from "./images/minimum-size.svg"
import neighbouringIcons from "./images/neighbouring-icons.svg"
import spacing from "./images/spacing.svg"
import touchArea from "./images/touch-area.svg"

class IconSizeSpaceTouch extends React.Component {
  render() {
    return (
      <div className={styles.iconSizeSpaceTouchDemo}>
        <div className={styles.iconExample}>
          <strong>Minimum Size</strong>
          <svg width="90" height="80">
            <use xlinkHref={`#${minimumSize.id}`} />
          </svg>
        </div>
        <div className={styles.iconExample}>
          <strong>Spacing</strong>
          <svg width="90" height="80">
            <use xlinkHref={`#${spacing.id}`} />
          </svg>
        </div>
        <div className={styles.iconExample}>
          <strong>Touch Area</strong>
          <svg width="90" height="80">
            <use xlinkHref={`#${touchArea.id}`} />
          </svg>
        </div>
        <div className={styles.iconExample}>
          <strong>Neighbouring Icons</strong>
          <svg width="90" height="80">
            <use xlinkHref={`#${neighbouringIcons.id}`} />
          </svg>
        </div>
      </div>
    )
  }
}

export default IconSizeSpaceTouch

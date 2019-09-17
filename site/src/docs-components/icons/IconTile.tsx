import { Icon } from "@cultureamp/kaizen-component-library"
const iconStyles = require("@cultureamp/kaizen-component-library/components/Icon/Icon.module.scss")
const tick = require("@cultureamp/kaizen-component-library/icons/check.icon.svg")
import classnames from "classnames"
import React from "react"
const styles = require("./IconGrid.scss")

const ICONS_IMPORT_DIR = "@cultureamp/kaizen-component-library/icons/"

type IconTileProps = {
  title?: string
  path: string
  filename: string
}

class IconTile extends React.Component<IconTileProps> {
  state = {
    recentlyCopied: false,
  }

  render() {
    const { path, filename } = this.props
    const title = filename.replace(/\.icon\.svg/, "")
    return (
      <button
        className={classnames({
          [styles.iconTile]: true,
          [styles.clicked]: this.state.recentlyCopied,
          [iconStyles.active]: this.state.recentlyCopied,
        })}
        onClick={e => this.copyPath()}
      >
        <div className={styles.tileWrapper}>
          <span className={styles.iconLabel}>
            <span className={styles.iconLabelText}>{title}</span>
          </span>
          <span className={styles.iconWrapper}>
            <img src={path} />
          </span>
          {this.renderCopyLabel()}
        </div>
      </button>
    )
  }

  renderCopyLabel() {
    const path = `${ICONS_IMPORT_DIR}${this.props.filename}`,
      copied = this.state.recentlyCopied
    return (
      <>
        {copied && (
          <span className={styles.tickIcon}>
            <Icon icon={tick} role="presentation" />
          </span>
        )}
        <span className={styles.copyLabel}>
          <span className={styles.copyLabelText}>
            {copied ? "Copied" : "Copy import path"}
          </span>
          <input
            ref={i => (this.input = i)}
            value={path}
            readOnly={true}
            tabIndex={-1}
            aria-label="Icon Import Path"
            className={styles.pathInput}
          />
        </span>
      </>
    )
  }

  copyPath() {
    if (this.input) {
      this.input.select()
      document.execCommand("copy")
      this.setState({ recentlyCopied: true })
      setTimeout(() => this.setState({ recentlyCopied: false }), 2000)
    }
  }
}

export default IconTile

import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"

const companyLogo = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default

const styles = require("./Footer.scss")

type FooterProps = {
  reverseVariant?: boolean
  extraContent?: React.ReactNode
}

const Footer: React.SFC<FooterProps> = ({
  reverseVariant = false,
  extraContent,
}) => (
  <div
    className={classnames(styles.container, {
      [styles.reverseVariant]: reverseVariant,
    })}
  >
    {extraContent && (
      <div className={styles.footerExtraContent}>{extraContent}</div>
    )}

    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <span>&copy; Culture Amp Pty Ltd</span>
        <span className={styles.logo}>
          <a href="https://cultureamp.com" className={styles.logoLink}>
            <Icon
              icon={companyLogo}
              title="Culture Amp"
              desc="Link to Culture Amp site"
              role="img"
            />
          </a>
        </span>
        <span className={styles.privacy}>
          <a href="https://www.cultureamp.com/privacy-policy/">Privacy</a>
        </span>
        <span className={styles.github}>
          <a href="https://github.com/cultureamp/kaizen-design-system">
            GitHub
          </a>
        </span>
      </div>
    </div>
  </div>
)

export default Footer

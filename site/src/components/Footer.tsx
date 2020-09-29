import { Icon, Paragraph } from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"

import companyLogo from "@kaizen/component-library/icons/ca-monogram.icon.svg"

import styles from "./Footer.scss"

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
        <Paragraph variant="body">&copy; Culture Amp Pty Ltd</Paragraph>
        <span className={styles.logo}>
          <a href="https://cultureamp.com" className={styles.logoLink}>
            <Icon
              icon={companyLogo}
              title="Culture Amp site"
              desc="Link to Culture Amp site"
              role="img"
            />
          </a>
        </span>
        <Paragraph variant="body" classNameAndIHaveSpokenToDST={styles.privacy}>
          <a href="https://www.cultureamp.com/privacy-policy/">Privacy</a>
        </Paragraph>
        <Paragraph variant="body" classNameAndIHaveSpokenToDST={styles.github}>
          <a href="https://github.com/cultureamp/kaizen-design-system">
            GitHub
          </a>
        </Paragraph>
      </div>
    </div>
  </div>
)

export default Footer

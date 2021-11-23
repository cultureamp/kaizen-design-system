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
        <div className={styles.containerCompanyName}>
          <Paragraph variant="body">&copy; Culture Amp Pty Ltd</Paragraph>
        </div>
        <span className={styles.footerLink}>
          <a href="https://cultureamp.com" className={styles.logoLink}>
            <Icon
              icon={companyLogo}
              title="Culture Amp site"
              desc="Link to Culture Amp site"
              role="img"
            />
          </a>
        </span>
        <div className={styles.containerLinks}>
          <Paragraph
            variant="body"
            classNameAndIHaveSpokenToDST={styles.footerLink}
          >
            <a href="https://www.cultureamp.com/privacy-policy/">Privacy</a>
          </Paragraph>
          <Paragraph
            variant="body"
            classNameAndIHaveSpokenToDST={styles.footerLink}
          >
            <a href="https://github.com/cultureamp/kaizen-design-system">
              GitHub
            </a>
          </Paragraph>
          <Paragraph
            variant="body"
            classNameAndIHaveSpokenToDST={styles.footerLink}
          >
            <a
              className="ca-cookie-consent-open-preferences"
              href="#"
              role="button"
            >
              Cookie preferences
            </a>
          </Paragraph>
        </div>
      </div>
    </div>
  </div>
)

export default Footer

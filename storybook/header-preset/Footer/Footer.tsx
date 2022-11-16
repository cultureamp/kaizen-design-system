import React from "react"
import { Icon } from "../../../packages/component-library"
import companyLogo from "../../../packages/component-library/icons/ca-monogram.icon.svg"
import { Paragraph } from "../../../packages/typography"
import styles from "./Footer.module.scss"

export const Footer: React.VFC = () => (
  <div className={styles.container}>
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
          <Paragraph variant="body" classNameOverride={styles.footerLink}>
            <a href="https://www.cultureamp.com/privacy-policy/">Privacy</a>
          </Paragraph>
          <Paragraph variant="body" classNameOverride={styles.footerLink}>
            <a href="https://github.com/cultureamp/kaizen-design-system">
              GitHub
            </a>
          </Paragraph>
          <Paragraph variant="body" classNameOverride={styles.footerLink}>
            <button
              className={`${styles.cookieButton} ca-cookie-consent-open-preferences`}
            >
              Cookie preferences
            </button>
          </Paragraph>
        </div>
      </div>
    </div>
  </div>
)

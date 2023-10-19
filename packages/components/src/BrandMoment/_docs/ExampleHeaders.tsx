import React from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import { Button } from "~components/Button"
import { CloseIcon } from "~components/Icon"
import styles from "./ExampleHeaders.scss"

export const MinimalBasic = (): JSX.Element => (
  <div className={styles.header}>
    <div className={styles.headerLeft}>
      <a href="/" aria-label="Home" className={styles.logoLink}>
        <img
          src={assetUrl("brand/logo-horizontal-default.svg")}
          alt="Culture Amp"
        />
      </a>
    </div>
    <div className={styles.headerRight}>
      <div className="mr-8">
        <Button
          href="#"
          label="Exit"
          icon={<CloseIcon role="presentation" />}
          secondary
        />
      </div>
      <div className={styles.logoContainer}>
        <img src={assetUrl("brand/enso-default.svg")} alt="Culture Amp" />
      </div>
    </div>
  </div>
)

export const MinimalCustomerFocused = (): JSX.Element => (
  <div className={styles.headerCustomerFocused}>
    <div className={styles.logoContainer}>
      <img src={assetUrl("brand/enso-default.svg")} alt="Culture Amp" />
    </div>
  </div>
)

export const FakeNavBar = (): JSX.Element => (
  <div className={styles.fakeNav}>
    <img
      src={assetUrl("brand/logo-horizontal-reversed.svg")}
      alt="Culture Amp"
      width={126}
    />
  </div>
)

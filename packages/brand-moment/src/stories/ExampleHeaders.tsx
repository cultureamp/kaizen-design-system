import React from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import styles from "./ExampleHeaders.scss"

export const MinimalBasic = () => (
  <div className={styles.header}>
    <div className={styles.headerLeft}>
      <img
        src={assetUrl("brand/logo-horizontal-default.svg")}
        alt="Culture Amp"
        width={126}
      />
    </div>
    <div className={styles.headerRight}>
      <div className={styles.logoContainer}>
        <img src={assetUrl("brand/enso-default.svg")} alt="Culture Amp" />
      </div>
    </div>
  </div>
)

export const MinimalCustomerFocused = () => (
  <div className={styles.header}>
    <div className={styles.logoContainer}>
      <img src={assetUrl("brand/enso-default.svg")} alt="Culture Amp" />
    </div>
  </div>
)

export const FakeNavBar = () => (
  <div className={styles.fakeNav}>
    <img
      src={assetUrl("brand/logo-horizontal-reversed.svg")}
      alt="Culture Amp"
      width={126}
    />
  </div>
)

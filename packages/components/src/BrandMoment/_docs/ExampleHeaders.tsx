import React from "react"
import { Button } from "~components/__actions__/v2"
import { CloseIcon } from "~components/__illustrations__/v1"
import { assetUrl } from "~components/utils/hostedAssets"
import styles from "./ExampleHeaders.module.scss"

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
      <Button
        href="#"
        label="Exit"
        icon={<CloseIcon role="presentation" />}
        secondary
      />
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

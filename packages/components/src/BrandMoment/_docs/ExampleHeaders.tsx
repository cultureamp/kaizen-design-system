import React from "react"
import { Button } from "@kaizen/button"
import { Box } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import { Select } from "@kaizen/draft-select"
import { assetUrl } from "@kaizen/hosted-assets"
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
      <Box mr={0.5}>
        <Button href="#" label="Exit" icon={closeIcon} secondary />
      </Box>
      <div className={styles.logoContainer}>
        <img src={assetUrl("brand/enso-default.svg")} alt="Culture Amp" />
      </div>
    </div>
  </div>
)

const exampleLocales = [
  { value: "a", label: "English (US English)" },
  { value: "b", label: "العربية (Arabic)" },
  { value: "c", label: "беларускі (Belarusian)" },
  { value: "d", label: "български (Bulgarian)" },
  { value: "e", label: "čeština (Czech)" },
]

export const MinimalCustomerFocused = (): JSX.Element => (
  <div className={styles.headerCustomerFocused}>
    <div className={styles.logoContainer}>
      <img src={assetUrl("brand/enso-default.svg")} alt="Culture Amp" />
    </div>
    <div className={styles.rightAlign}>
      <Select
        options={exampleLocales}
        isSearchable={false}
        defaultValue={exampleLocales[0]}
        variant="secondary"
      />
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

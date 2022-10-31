import React from "react"
import { LoadingInput, LoadingParagraph } from "@kaizen/loading-skeleton"
import classNames from "classnames"
import { MenuFooter } from "../MenuFooter"
import styles from "./MenuLoadingSkeleton.module.scss"

export const MenuLoadingSkeleton: React.VFC = () => (
  <>
    <div className={classNames(styles.loadingContainer)}>
      <LoadingInput classNameOverride={styles.loadingInput} />
      <LoadingParagraph />
      <LoadingParagraph />
      <LoadingParagraph />
      <LoadingParagraph />
      <LoadingParagraph />
    </div>
    <MenuFooter>
      <LoadingInput width={40} height={36} />
      <LoadingInput width={30} height={36} />
    </MenuFooter>
  </>
)

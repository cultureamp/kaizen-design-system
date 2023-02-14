import React from "react"
import classNames from "classnames"
import { LoadingInput, LoadingParagraph } from "@kaizen/loading-skeleton"
import { MenuFooter } from "../MenuFooter"
import styles from "./MenuLoadingSkeleton.module.scss"

export const MenuLoadingSkeleton = (): JSX.Element => (
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

MenuLoadingSkeleton.displayName = "MenuLoadingSkeleton"

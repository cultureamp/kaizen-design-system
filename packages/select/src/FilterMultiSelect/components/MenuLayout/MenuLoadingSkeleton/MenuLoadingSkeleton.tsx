import React from "react"
import { LoadingInput, LoadingParagraph } from "@kaizen/loading-skeleton"
import { MenuFooter } from "../MenuFooter"
import styles from "./MenuLoadingSkeleton.scss"

export const MenuLoadingSkeleton = (
  <div>
    <LoadingInput classNameOverride={styles.loadingInput} />
    <LoadingParagraph />
    <LoadingParagraph />
    <LoadingParagraph />
    <LoadingParagraph />
    <LoadingParagraph />
    <MenuFooter>
      <LoadingParagraph classNameOverride={styles.loadingControlButtons} />
    </MenuFooter>
  </div>
)

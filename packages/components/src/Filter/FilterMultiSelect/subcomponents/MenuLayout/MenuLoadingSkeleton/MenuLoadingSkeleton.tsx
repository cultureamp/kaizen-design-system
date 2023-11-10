import React from "react"
import { LoadingInput, LoadingParagraph } from "@kaizen/loading-skeleton"
import { MenuFooter } from "../MenuFooter"
import styles from "./MenuLoadingSkeleton.module.scss"

export type MenuLoadingSkeletonProps = {
  isAnimated?: boolean
}

export const MenuLoadingSkeleton = ({
  isAnimated = false,
}: MenuLoadingSkeletonProps): JSX.Element => (
  <>
    <div className={styles.loadingContainer}>
      <LoadingInput
        classNameOverride={styles.loadingInput}
        isAnimated={isAnimated}
      />
      <LoadingParagraph isAnimated={isAnimated} />
      <LoadingParagraph isAnimated={isAnimated} />
      <LoadingParagraph isAnimated={isAnimated} />
      <LoadingParagraph isAnimated={isAnimated} />
      <LoadingParagraph isAnimated={isAnimated} />
    </div>
    <MenuFooter>
      <LoadingInput width={40} height={36} isAnimated={isAnimated} />
      <LoadingInput width={30} height={36} isAnimated={isAnimated} />
    </MenuFooter>
  </>
)

MenuLoadingSkeleton.displayName = "FilterMultiSelect.MenuLoadingSkeleton"

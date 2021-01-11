import * as React from "react"

import styles from "../styles/GenericModalSection.scss"

export interface GenericModalSectionProps {
  readonly unpadded?: boolean
  readonly children: React.ReactNode
}

type GenericModalSection = React.FunctionComponent<GenericModalSectionProps>

const GenericModalSection: GenericModalSection = ({
  unpadded = false,
  children,
}) => <div className={unpadded ? undefined : styles.padded}>{children}</div>

export default GenericModalSection

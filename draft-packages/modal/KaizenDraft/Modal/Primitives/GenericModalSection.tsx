import * as React from "react"

import styles from "./GenericModalSection.scss"

interface Props {
  readonly unpadded?: boolean
  readonly children: React.ReactNode
}

type GenericModalSection = React.FunctionComponent<Props>

const GenericModalSection: GenericModalSection = ({
  unpadded = false,
  children,
}) => <div className={unpadded ? undefined : styles.padded}>{children}</div>

export default GenericModalSection

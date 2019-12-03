import * as React from "react"

const styles = require("./GenericModalSection.scss")

interface Props {
  readonly unpadded?: boolean
  readonly children: React.ReactNode
}

type GenericModalSection = React.FunctionComponent<Props>

const GenericModalSection: GenericModalSection = ({
  unpadded = false,
  children,
}) => <div className={unpadded ? null : styles.padded}>{children}</div>

export default GenericModalSection

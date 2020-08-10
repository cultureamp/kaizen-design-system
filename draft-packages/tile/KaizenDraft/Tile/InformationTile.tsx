import React from "react"

import GenericTile, { GenericTileProps } from "./components/GenericTile"

export interface InformationTileProps extends GenericTileProps {
  readonly footer?: React.ReactNode
}

type InformationTile = React.FunctionComponent<InformationTileProps>

const InformationTile: InformationTile = ({
  title,
  metadata,
  children,
  information,
  footer,
}) => (
  <GenericTile
    title={title}
    metadata={metadata}
    information={information}
    footer={footer}
  >
    {children}
  </GenericTile>
)

export default InformationTile

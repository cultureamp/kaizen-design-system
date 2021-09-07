import React from "react"

import GenericTile, { GenericTileProps } from "./components/GenericTile"

export interface InformationTileProps extends GenericTileProps {
  readonly footer?: React.ReactNode
}

type InformationTile = React.FunctionComponent<InformationTileProps>

const InformationTile: InformationTile = ({
  title,
  titleTag,
  metadata,
  children,
  information,
  footer,
}) => (
  <GenericTile
    title={title}
    titleTag={titleTag}
    metadata={metadata}
    information={information}
    footer={footer}
  >
    {children}
  </GenericTile>
)

export default InformationTile

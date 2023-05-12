import React from "react"
import { KaioNotification } from "./KaioNotification"

export type TitleProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const KaioInstallation = ({
  context,
}: TitleProps): JSX.Element | null => {
  const isInKaio = context.attachedCSFFile.meta.parameters.isInKaio

  if (!isInKaio) return null

  return <KaioNotification />
}

KaioInstallation.displayName = "KaioInstallation"

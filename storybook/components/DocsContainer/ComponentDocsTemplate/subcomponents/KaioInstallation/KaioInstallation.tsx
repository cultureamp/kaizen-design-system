import React from "react"
import { KaioNotification } from "./KaioNotification"

export type KaioInstallationProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const KaioInstallation = ({
  context,
}: KaioInstallationProps): JSX.Element | null => {
  const isInKaio = context.attachedCSFFile.meta.parameters.isInKaio

  if (!isInKaio) return null

  return (
    <div className="!mt-8">
      <KaioNotification />
    </div>
  )
}

KaioInstallation.displayName = "KaioInstallation"

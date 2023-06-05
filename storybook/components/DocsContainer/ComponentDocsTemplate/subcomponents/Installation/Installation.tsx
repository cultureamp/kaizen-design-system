import React from "react"
import { Installation as InstallSection } from "../../../../Installation"

export type InstallationProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Installation = ({
  context,
}: InstallationProps): JSX.Element | null => {
  const isInstallationLinks =
    context.attachedCSFFile.meta.parameters.installation !== undefined
  const installationLinks = context.attachedCSFFile.meta.parameters.installation

  if (!isInstallationLinks) return null

  return (
    <InstallSection
      installCommand={installationLinks[0]}
      importStatement={installationLinks[1]}
    />
  )
}

Installation.displayName = "Installation"

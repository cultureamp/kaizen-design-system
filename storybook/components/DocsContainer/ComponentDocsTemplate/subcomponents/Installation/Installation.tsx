import React from "react"
import { Source } from "@storybook/blocks"

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
    <div>
      <h2 id="installation">Installation</h2>
      {/* npm link */}
      <Source code={installationLinks[0]} language="tsx" />
      {/* import link */}
      <Source code={installationLinks[1]} language="tsx" />
    </div>
  )
}

Installation.displayName = "Installation"

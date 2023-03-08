import React from "react"
import { Source } from "@storybook/blocks"

export type InstallationProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Installation = ({ context }: InstallationProps): JSX.Element => {
  const isInstallationLinks =
    context.attachedCSFFile.meta.parameters.installation !== undefined
  const installationLinks = context.attachedCSFFile.meta.parameters.installation

  return isInstallationLinks ? (
    <div>
      <h2>Installation</h2>
      {/* npm link */}
      <Source code={installationLinks[0]} language="tsx" />
      {/* import link */}
      <Source code={installationLinks[1]} language="tsx" />
    </div>
  ) : (
    <></>
  )
}

Installation.displayName = "Installation"

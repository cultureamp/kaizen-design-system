import React from "react"
import { Source } from "@storybook/blocks"

export type InstallationProps = {
  installCommand: string
  importStatement: string
}

export const Installation = ({
  installCommand,
  importStatement,
}: InstallationProps): JSX.Element => (
  <div>
    <h2 id="installation">Installation</h2>
    <Source code={installCommand} language="tsx" />
    <Source code={importStatement} language="tsx" />
  </div>
)

Installation.displayName = "Installation"

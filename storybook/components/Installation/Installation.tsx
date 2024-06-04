import React from "react"
import { Source } from "@storybook/blocks"
// import { Avatar } from "@kaizen/components"

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
    {/* <Button label="BLAH" /> */}
    {/* <Avatar>AANG</Avatar> */}
    <Source code={installCommand} language="tsx" />
    <Source code={importStatement} language="tsx" />
  </div>
)

Installation.displayName = "Installation"

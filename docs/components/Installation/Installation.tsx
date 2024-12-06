import React from 'react'
import { Source } from '@storybook/blocks'

export type InstallationProps = {
  installCommand: string
  importStatement: string
}

export const Installation = ({
  installCommand,
  importStatement,
}: InstallationProps): JSX.Element => (
  <div className="mb-40">
    <h2 id="installation">Installation</h2>
    <div className="[&>*]:m-0 flex flex-col gap-16 mt-24">
      <Source code={installCommand} language="bash" />
      <Source code={importStatement} language="tsx" />
    </div>
  </div>
)

Installation.displayName = 'Installation'

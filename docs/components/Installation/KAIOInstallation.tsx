import React from 'react'
import { Installation } from './Installation'

export type KAIOInstallationProps = {
  importStatement?: string
  exportNames: string | string[]
  isNext?: boolean
}

export const KAIOInstallation = ({ exportNames, isNext }: KAIOInstallationProps): JSX.Element => {
  const csvComponentNames = typeof exportNames === 'string' ? exportNames : exportNames.join(', ')

  const importStatement = isNext
    ? `import { ${csvComponentNames} } from "@kaizen/components/next"`
    : `import { ${csvComponentNames} } from "@kaizen/components"`

  return (
    <Installation installCommand="pnpm add @kaizen/components" importStatement={importStatement} />
  )
}

KAIOInstallation.displayName = 'KAIOInstallation'

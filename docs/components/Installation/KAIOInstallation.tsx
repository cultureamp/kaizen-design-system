import React from 'react'
import { Installation } from './Installation'

export type KAIOInstallationProps = {
  importStatement?: string
  exportNames: string | string[]
  isNext?: boolean
  isAlpha?: boolean
}

export const KAIOInstallation = ({
  exportNames,
  isNext,
  isAlpha,
}: KAIOInstallationProps): JSX.Element => {
  const csvComponentNames = typeof exportNames === 'string' ? exportNames : exportNames.join(', ')

  const importPath = isAlpha ? '/alpha' : isNext ? '/next' : ''

  return (
    <Installation
      installCommand="pnpm add @kaizen/components"
      importStatement={`import { ${csvComponentNames} } from "@kaizen/components${importPath}"`}
    />
  )
}

KAIOInstallation.displayName = 'KAIOInstallation'

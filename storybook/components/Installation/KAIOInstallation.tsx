import React from "react"
import { Installation } from "./Installation"

export type KAIOInstallationProps = {
  importStatement?: string
  exportNames: string | string[]
  isFuture?: boolean
  version?: string
  family?: string
}

export const KAIOInstallation = ({
  exportNames,
  isFuture,
  version,
  family,
}: KAIOInstallationProps): JSX.Element => {
  const csvComponentNames =
    typeof exportNames === "string" ? exportNames : exportNames.join(", ")

  const importStatement = isFuture
    ? `import { ${csvComponentNames} } from "@kaizen/components/future"`
    : `import { ${csvComponentNames} } from "@kaizen/components"`

  const versionStatement = `import { ${csvComponentNames} } from "@kaizen/components/v${version}/${family}"`

  return (
    <Installation
      installCommand="pnpm add @kaizen/components"
      importStatement={version ? versionStatement : importStatement}
    />
  )
}

KAIOInstallation.displayName = "KAIOInstallation"

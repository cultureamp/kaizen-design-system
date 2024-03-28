import React from "react"
import { Installation } from "./Installation"

export type KAIOInstallationProps = {
  importStatement?: string
  exportNames: string | string[]
  isFuture?: boolean
}

export const KAIOInstallation = ({
  exportNames,
  isFuture,
}: KAIOInstallationProps): JSX.Element => {
  const csvComponentNames =
    typeof exportNames === "string" ? exportNames : exportNames.join(", ")
  const importStatement = isFuture
    ? `import { ${csvComponentNames} } from "@kaizen/components/future"`
    : `import { ${csvComponentNames} } from "@kaizen/components"`

  return (
    <Installation
      installCommand="yarn add @kaizen/components"
      importStatement={importStatement}
    />
  )
}

KAIOInstallation.displayName = "KAIOInstallation"

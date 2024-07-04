import fs from "fs"

export const getFilePath = (resolvedPath: string): string | undefined => {
  if (!fs.existsSync(resolvedPath)) {
    if (fs.existsSync(`${resolvedPath}.ts`)) {
      return `${resolvedPath}.ts`
    }
    if (fs.existsSync(`${resolvedPath}.tsx`)) {
      return `${resolvedPath}.tsx`
    }
  }

  return undefined
}

import { resolve } from "path"

type Directory = "root" | "tools" | "site" | "node-bin" | "scripts"

export const getPath = (directory: Directory): string => {
  const basePath = resolve(__dirname, "../../..")
  switch (directory) {
    case "root":
      return basePath
    case "scripts":
      return resolve(basePath, "bin")
    case "node-bin":
      return resolve(basePath, "node_modules/.bin")
    default:
      return resolve(basePath, directory)
  }
}

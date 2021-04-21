import { Node } from "postcss"

export type Reporter = (opts: { message: string; node: Node }) => void
export type Language = "scss" | "less"

export type Options = {
  language: "scss" | "less"
  fix?: boolean
  reporter: Reporter
  removeUnusedImports?: boolean
}

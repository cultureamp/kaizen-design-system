import { DeepMapObjectLeafs, Theme } from "../src/types"
import * as typographyTokens from "./typography.json"

export const typography: {
  typography: DeepMapObjectLeafs<Theme["typography"], string>
} = typographyTokens

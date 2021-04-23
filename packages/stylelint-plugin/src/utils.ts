import postcssLess from "postcss-less"
import postcssScss from "postcss-scss"
import { Language } from "./types"

export const getLanguageFromFilePath = (filePath: string): Language =>
  /\.less$/.test(filePath) ? "less" : "scss"

export const getParser = (language: Language) =>
  language === "scss" ? postcssScss : postcssLess

export const variablePrefixForLanguage = (language: Language) =>
  language === "less" ? "@" : "$"

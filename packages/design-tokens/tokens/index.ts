import * as tokens from "./color.json"

interface ColorScale {
  "100": string
  "200": string
  "300": string
  "400": string
  "500": string
  "600": string
  "700": string
  "800": string
}

type Wisteria = Pick<
  ColorScale,
  "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800"
>
type Cluny = Pick<ColorScale, "100" | "200" | "300" | "400" | "500">
type Seedling = Pick<ColorScale, "100" | "200" | "300" | "400" | "500" | "600">
type Yuzu = Pick<ColorScale, "100" | "200" | "300" | "400" | "500">
type Coral = Pick<ColorScale, "100" | "200" | "300" | "400" | "500" | "600">
type Peach = Pick<ColorScale, "100" | "200" | "300" | "400" | "500">
type Ash = string
type Stone = string
type White = string
type Lapis = string
type Ocean = string
type Ink = string
type Paper = string

export interface Color {
  kz: {
    color: {
      wisteria: Wisteria
      cluny: Cluny
      seedling: Seedling
      yuzu: Yuzu
      coral: Coral
      peach: Peach
      ash: Ash
      stone: Stone
      white: White
    }
    DEPRECATED: {
      color: {
        lapis: Lapis
        ocean: Ocean
        ink: Ink
        paper: Paper
      }
    }
  }
}

export const colorTokens: Color = tokens

import * as tokens from './color.json';

interface ExtendedColorScale {
  "600": string
  "700": string
  "800": string
}

interface ColorScale { 
  "100": string
  "200": string
  "300": string
  "400": string
  "500": string
}

type Wisteria = ColorScale | ExtendedColorScale
type Cluny = ColorScale 
type Seedling = ColorScale | Pick<ExtendedColorScale, '600'>
type Yuzu = ColorScale
type Coral = ColorScale | Pick<ExtendedColorScale, '600'>
type Peach = ColorScale 
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
      wisteria: Wisteria,
      cluny: Cluny,
      seedling: Seedling,
      yuzu: Yuzu,
      coral: Coral,
      peach: Peach,
      ash: Ash,
      stone: Stone,
      white: White,
    },
    DEPRECATED: {
      color: {
        lapis: Lapis,
        ocean: Ocean,
        ink: Ink,
        paper: Paper,
      },
    },
  }
}

export const colorTokens: Color = tokens;

type ColorNames = keyof Color['kz']['color'] | keyof Color['kz']['DEPRECATED']['color'];
type FullColorScale = keyof ColorScale | keyof ExtendedColorScale;

export function getColor(name: ColorNames, scale?: FullColorScale) { 
  let foundColor = tokens.kz.color[name] || tokens.kz.DEPRECATED.color[name];
  return !scale ? foundColor[500] || foundColor : foundColor[scale];
}
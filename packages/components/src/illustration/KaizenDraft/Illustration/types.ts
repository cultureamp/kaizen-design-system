/**
 * All keys K within T will be converted to a never type.
 * This is useful for discriminated unions
 */
export type SubsetBecomesNever<T, K extends keyof T> = T | { [L in K]?: never }

/**
 * As of writing, no types exist for the dotlottie format.
 * These types are a best guess based on documentation in
 * the dotlottie structure documentation: {@link https://dotlottie.io/structure/}
 */
export interface LottieManifestFile {
  author: string
  generator: string
  version: number
  revision: number
  animations?: LottieAnimationManifest[]
  images?: []
  fonts?: any
  js?: any
  resources?: any
  previews?: any
}

export interface LottieAnimationManifest {
  loop: boolean
  themeColor: string
  speed: number
  id: string
}

export interface LottieAnimation {
  assets: Array<Record<string, unknown>>
  meta: Record<string, unknown>
  layers: Array<Record<string, unknown>>
}

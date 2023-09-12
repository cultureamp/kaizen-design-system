import * as JSZip from "jszip"
import { assetUrl } from "@kaizen/hosted-assets"
import { LottieManifestFile, LottieAnimation } from "./types"

/**
 * Fetch and unzip dotlottie files
 * @param path
 */
export const getAnimationData = async (
  path: string
): Promise<LottieAnimation> => {
  const animationData = await fetchAnimationData(assetUrl(path))
  const parsedResponse = await parseAnimationData(animationData)

  return parsedResponse
}

const fetchAnimationData = async (path: string): Promise<Blob> => {
  const response = await fetch(path)
  if (response.ok) {
    const blob = await response.blob()
    return blob
  }
  throw new Error(`Lottie asset failed to load ${response.status}`)
}

/**
 * Unzip the dotlottie file to form a format that the lottie-web player understands.
 * Each directory needs to be unzipped separately
 *
 * Dotlottie has the following folder structure when unzipped:
 * ├─ manifest.json
 * ├─ animations
 * │  ├─ animation-1.json
 * │  └─ animation-2.json
 * ├─ images
 * │  ├─ img_1.json
 * │  └─ img_2.json
 * ├─ fonts
 * |- js
 * |- resources
 * └─ previews
 *
 * Reference: {@link https://dotlottie.io/structure/}
 * @param animationData dotlottie file (compressed)
 */
const parseAnimationData = async (
  animationData: Blob
): Promise<LottieAnimation> => {
  try {
    const deserialize = (await JSZip.loadAsync(animationData)) || {}
    if (!deserialize) {
      throw new Error("Asset invalid")
    }

    const manifestFile = await deserialize
      ?.file("manifest.json")
      ?.async("string")

    if (!manifestFile) {
      throw new Error("Manifest file corrupt")
    }

    const { animations }: LottieManifestFile = JSON.parse(manifestFile)

    if (!animations || animations.length === 0) {
      throw new Error("No animations listed in the manifest")
    }

    const defaultLottie = animations[0]

    const lottieFile = await deserialize
      ?.file(`animations/${defaultLottie.id}.json`)
      ?.async("string")

    if (!lottieFile) {
      throw new Error("No animations listed in the manifest")
    }

    const lottieJson: LottieAnimation = JSON.parse(lottieFile)
    const deserializeImages = lottieJson.assets.map(asset => {
      if (!asset.p) {
        return
      }

      return new Promise<void>(resolve => {
        deserialize
          ?.file(`images/${asset.p}`)
          ?.async("base64")
          .then((assetB64: string) => {
            asset.p = "data:;base64," + assetB64
            asset.e = 1
            resolve()
          })
      })
    })

    // deserialize and mutate the lottieJson with the uncompressed data
    await Promise.all(deserializeImages)

    return lottieJson
  } catch (err: unknown) {
    throw new Error("" + err)
  }
}

/**
 * Detect whether the current browser can play webm files
 */
export const canPlayWebm = (): boolean => {
  if (typeof window === "undefined") return false

  // Don't trust Safari's canPlayType implementation, as there is partial support for webm
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  if (isSafari) {
    return false
  }

  // Attempt webm feature detection
  const video = document.createElement("video")
  if (video.canPlayType("video/webm; codecs=vp9") === "probably") {
    return true
  }
  return false
}

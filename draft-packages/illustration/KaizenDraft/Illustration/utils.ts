/* eslint-disable prefer-arrow/prefer-arrow-functions, space-before-function-paren */

// pinched from https://github.com/dotlottie/player-component/blob/master/src/dotlottie-player.ts#L40
import * as JSZip from "jszip"

export function fetchPath(path: string): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", path, true)
    xhr.responseType = "arraybuffer"
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        JSZip.loadAsync(xhr.response)
          .then(zip => {
            if (!zip) {
              throw new Error("Asset invalid")
            }

            // @ts-ignore
            return zip
              .file("manifest.json")
              .async("string")
              .then((manifestFile: string) => {
                const manifest = JSON.parse(manifestFile)

                if (!("animations" in manifest)) {
                  throw new Error("Manifest not found")
                }

                if (manifest.animations.length === 0) {
                  throw new Error("No animations listed in the manifest")
                }

                const defaultLottie = manifest.animations[0]

                // @ts-ignore
                zip
                  .file(`animations/${defaultLottie.id}.json`)
                  .async("string")
                  .then((lottieFile: string) => {
                    const lottieJson = JSON.parse(lottieFile)

                    if ("assets" in lottieJson) {
                      Promise.all(
                        lottieJson.assets.map((asset: any) => {
                          if (!asset.p) {
                            return
                          }

                          return new Promise(resolveAsset => {
                            // @ts-ignore
                            zip
                              .file(`images/${asset.p}`)
                              .async("base64")
                              .then((assetB64: any) => {
                                asset.p = "data:;base64," + assetB64
                                asset.e = 1

                                resolveAsset()
                              })
                          })
                        })
                      ).then(() => {
                        resolve(lottieJson)
                      })
                    }
                  })
              })
          })
          .catch((err: Error) => {
            reject(err)
          })
      }
    }
  })
}

/* eslint-enable prefer-arrow/prefer-arrow-functions, space-before-function-paren */

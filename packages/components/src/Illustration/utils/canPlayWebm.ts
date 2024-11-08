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

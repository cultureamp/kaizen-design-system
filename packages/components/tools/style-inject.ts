// Fork style-inject for build
// https://github.com/egoist/style-inject/blob/master/src/index.js
export const styleInject = (
  css: string | undefined,
  { insertAt }: Record<string, string> = {}
): void => {
  if (!css || typeof document === "undefined") return

  const head = document.head || document.getElementsByTagName("head")[0]
  const style = document.createElement("style")
  style.type = "text/css"

  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.appendChild(style)
    }
  } else {
    head.appendChild(style)
  }

  // @ts-ignore
  if (style.styleSheet) {
    // @ts-ignore
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
}

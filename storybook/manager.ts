/* eslint-disable ssr-friendly/no-dom-globals-in-module-scope */

const CSS_TO_HIDE_TEST_SECTION_FROM_SIDEBAR = `
  #stickersheets,
  *[data-parent-id*="stickersheets"],
  *[title*="Stickersheets"] {
    display: none !important;
  }
`

if (process.env.NODE_ENV === "production") {
  const head = document.head || document.getElementsByTagName("head")[0]
  const style = document.createElement("style")
  head.appendChild(style)
  style.appendChild(
    document.createTextNode(CSS_TO_HIDE_TEST_SECTION_FROM_SIDEBAR)
  )
}

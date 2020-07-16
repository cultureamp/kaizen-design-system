import * as React from "react"
import { render } from "react-dom"
import Footer from "../../site/src/components/Footer"
import SiteHeader from "./header"

const analytics = document.createElement("noscript")
analytics.innerHTML = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KS4VWLT"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`
document.body.insertAdjacentElement("afterbegin", analytics)

/**
 * Inject the nav header before the root node that storybook
 * uses to mount
 */
const headerNode = document.createElement("div")
render(<SiteHeader />, headerNode)
document.body.insertAdjacentElement("afterbegin", headerNode)

const footerNode = document.createElement("div")
render(<Footer />, footerNode)
document.getElementById("root")?.insertAdjacentElement("afterend", footerNode)

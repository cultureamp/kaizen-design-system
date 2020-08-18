import * as React from "react"
import { render } from "react-dom"
import Footer from "../../site/src/components/Footer"
import SiteHeader from "./header"

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

/* eslint-disable ssr-friendly/no-dom-globals-in-module-scope */
import React from "react"
import { createRoot } from "react-dom/client"
import { Footer } from "./Footer"
import { SiteHeader } from "./SiteHeader"

/**
 * Inject the nav header before the root node that storybook
 * uses to mount
 */
const headerNode = document.createElement("div")
const header = createRoot(headerNode)
header.render(<SiteHeader />)
document.body.insertAdjacentElement("afterbegin", headerNode)

const footerNode = document.createElement("div")
const footer = createRoot(footerNode)
footer.render(<Footer />)
document.getElementById("root")?.insertAdjacentElement("afterend", footerNode)

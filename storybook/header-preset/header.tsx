import React from "react"
import { render } from "react-dom"
// import { Link as NavLink, NavigationBar } from "@kaizen/component-library"

export const SiteHeader = () => (
  <div
    style={{
      width: "100%",
      height: "60px",
      backgroundColor: "#4B4D68",
      color: "white",
    }}
  >
    This is being generated from within storybook
  </div>
)

const node = document.createElement("div")
render(<SiteHeader />, node)
document.body.insertAdjacentElement("afterbegin", node)

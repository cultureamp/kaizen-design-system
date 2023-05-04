import React from "react"
import { render, screen } from "@testing-library/react"
import { MenuList, MenuItem } from "../../../"

describe("MenuList", () => {
  describe("With a heading", () => {
    it("gives the list an accessible name of the section heading text", () => {
      render(
        <MenuList heading={{ children: "A menu section" }}>
          <MenuItem label="Item one" />
        </MenuList>
      )
      expect(
        screen.getByRole("list", { name: "A menu section" })
      ).toBeInTheDocument()
    })

    it("renders a different element when the tag prop is provided", () => {
      render(
        <MenuList heading={{ children: "A menu section", tag: "h2" }}>
          <MenuItem label="Item one" />
        </MenuList>
      )
      expect(
        screen.getByRole("heading", { name: "A menu section", level: 2 })
      ).toBeInTheDocument()
    })
  })
})

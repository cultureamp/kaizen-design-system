import React from "react"
import { render, screen } from "@testing-library/react"
import { MenuList, MenuItem, MenuHeading } from "../../../"

describe("MenuList", () => {
  describe("With a heading", () => {
    it("gives the list an accessible name of the section heading text", () => {
      render(
        <MenuList heading={<MenuHeading>A menu section</MenuHeading>}>
          <MenuItem label="Item one" />
        </MenuList>
      )
      expect(
        screen.getByRole("list", { name: "A menu section" })
      ).toBeInTheDocument()
    })

    it("applies custom heading props", () => {
      render(
        <MenuList heading={<MenuHeading tag="h2">A menu section</MenuHeading>}>
          <MenuItem label="Item one" />
        </MenuList>
      )
      expect(
        screen.getByRole("heading", { name: "A menu section", level: 2 })
      ).toBeInTheDocument()
    })
  })

  it("still links ids correctly when a heading id provided", () => {
    render(
      <MenuList
        heading={<MenuHeading id="custom-id">A menu section</MenuHeading>}
      >
        <MenuItem label="Item one" />
      </MenuList>
    )
    expect(
      screen.getByRole("list", { name: "A menu section" })
    ).toBeInTheDocument()
  })
})

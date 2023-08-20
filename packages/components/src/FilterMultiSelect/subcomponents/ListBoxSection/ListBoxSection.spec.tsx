import React from "react"
import { render } from "@testing-library/react"
import { ListBoxSection } from "./ListBoxSection"

describe("<ListBoxSection />", () => {
  describe("sectionName only", () => {
    it("will only have aria-label", () => {
      const { getByRole } = render(
        <ListBoxSection sectionName="Test sectionName only" items={[]}>
          {() => undefined}
        </ListBoxSection>
      )
      const group = getByRole("group")
      expect(group).toHaveAttribute("aria-label", "Test sectionName only")
      expect(group).not.toHaveTextContent("Test sectionName only")
    })
  })

  describe("sectionHeader only", () => {
    it("will have sectionHeader content", () => {
      const { getByRole } = render(
        <ListBoxSection sectionHeader="Test sectionHeader only" items={[]}>
          {() => undefined}
        </ListBoxSection>
      )
      const group = getByRole("group", { name: "Test sectionHeader only" })
      expect(group).toBeInTheDocument()
      expect(group).toHaveTextContent("Test sectionHeader only")
    })
  })

  describe("sectionHeader and sectionName", () => {
    it("will have combined accessible name", () => {
      const { getByRole } = render(
        <ListBoxSection
          sectionName="Hidden group name"
          sectionHeader="sectionHeader name"
          items={[]}
        >
          {() => undefined}
        </ListBoxSection>
      )
      const group = getByRole("group", {
        name: "Hidden group name. sectionHeader name",
      })
      expect(group).toBeInTheDocument()
      expect(group).toHaveTextContent("Hidden group name. sectionHeader name")
    })
  })
})

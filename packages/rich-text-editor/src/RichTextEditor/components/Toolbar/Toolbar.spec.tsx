import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import { ToggleIconButton } from "../ToggleIconButton"
import { ToolbarSection } from "../ToolbarSection"
import { Toolbar } from "./"

const ExampleToolbar = () => (
  <Toolbar aria-label="Toolbar" aria-controls="editable-id">
    <ToolbarSection>
      <ToggleIconButton label="Bold" icon={boldIcon} />
      <ToggleIconButton label="Italic" icon={boldIcon} />
      <ToggleIconButton label="Underline" icon={boldIcon} />
    </ToolbarSection>
  </Toolbar>
)

describe("Navigate using the arrow keys", () => {
  it("will focus to the first item in the list", async () => {
    render(<ExampleToolbar />)
    screen.getByRole("toolbar").focus()
    userEvent.tab()
    await waitFor(() => {
      const firstFoundElement = screen.getByLabelText("Bold")
      expect(firstFoundElement).toHaveFocus()
    })
  })

  it("will navigate to the left and right with arrow keys", async () => {
    render(<ExampleToolbar />)
    screen.getByRole("toolbar").focus()
    userEvent.tab()
    userEvent.keyboard("{arrowright}")
    await waitFor(() => {
      expect(screen.getByLabelText("Italic")).toHaveFocus()
    })
    userEvent.keyboard("{arrowleft}")
    await waitFor(() => {
      expect(screen.getByLabelText("Bold")).toHaveFocus()
    })
  })

  it("will loop selection on either side of the toolbar", async () => {
    render(<ExampleToolbar />)
    screen.getByRole("toolbar").focus()
    userEvent.tab()
    userEvent.keyboard("{arrowleft}")
    await waitFor(() => {
      expect(screen.getByLabelText("Underline")).toHaveFocus()
    })
    userEvent.keyboard("{arrowright}")
    await waitFor(() => {
      expect(screen.getByLabelText("Bold")).toHaveFocus()
    })
  })
})

describe("Tabbing out of the toolbar", () => {
  it("will retain focus on last focused button", async () => {
    render(
      <>
        <ExampleToolbar />
        <button>I'm here for the focus</button>
      </>
    )
    screen.getByRole("toolbar").focus()
    userEvent.tab()
    userEvent.keyboard("{arrowright}")
    userEvent.tab()
    userEvent.tab({ shift: true })
    await waitFor(() => {
      expect(screen.getByLabelText("Italic")).toHaveFocus()
    })
  })
})

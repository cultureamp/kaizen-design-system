import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BoldIcon } from "~components/Icon"
import { ToggleIconButton } from "../ToggleIconButton"
import { ToolbarSection } from "../ToolbarSection"
import { Toolbar } from "."

const user = userEvent.setup()

const ExampleToolbar = (): JSX.Element => (
  <Toolbar aria-label="Toolbar" aria-controls="editable-id">
    <ToolbarSection>
      <ToggleIconButton label="Bold" icon={<BoldIcon role="presentation" />} />
      <ToggleIconButton
        label="Italic"
        icon={<BoldIcon role="presentation" />}
      />
      <ToggleIconButton
        label="Underline"
        icon={<BoldIcon role="presentation" />}
      />
    </ToolbarSection>
  </Toolbar>
)

describe("Navigate using the arrow keys", () => {
  it("will focus to the first item in the list", async () => {
    render(<ExampleToolbar />)
    screen.getByRole("toolbar").focus()
    await user.tab()
    await waitFor(() => {
      const firstFoundElement = screen.getByLabelText("Bold")
      expect(firstFoundElement).toHaveFocus()
    })
  })

  it("will navigate to the left and right with arrow keys", async () => {
    render(<ExampleToolbar />)
    screen.getByRole("toolbar").focus()
    await user.tab()
    await user.keyboard("{arrowright}")
    await waitFor(() => {
      expect(screen.getByLabelText("Italic")).toHaveFocus()
    })
    await user.keyboard("{arrowleft}")
    await waitFor(() => {
      expect(screen.getByLabelText("Bold")).toHaveFocus()
    })
  })

  it("will loop selection on either side of the toolbar", async () => {
    render(<ExampleToolbar />)
    screen.getByRole("toolbar").focus()
    await user.tab()
    await user.keyboard("{arrowleft}")
    await waitFor(() => {
      expect(screen.getByLabelText("Underline")).toHaveFocus()
    })
    await user.keyboard("{arrowright}")
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
        <button type="button">I&apos;m here for the focus</button>
      </>
    )
    screen.getByRole("toolbar").focus()
    await user.tab()
    await user.keyboard("{arrowright}")
    await user.tab()
    await user.tab({ shift: true })
    await waitFor(() => {
      expect(screen.getByLabelText("Italic")).toHaveFocus()
    })
  })
})

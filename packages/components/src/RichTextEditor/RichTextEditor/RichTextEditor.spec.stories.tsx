import React, { useState } from "react"
import { expect } from "@storybook/jest"
import { StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import { EditorContentArray } from "../types"
import { RichTextEditor, RichTextEditorProps } from "./RichTextEditor"

export default {
  title: "Components/Rich Text Editor/Tests",
  component: RichTextEditor,
}

type Story = StoryObj<typeof RichTextEditor>

const TestBase: Story = {
  render: () => {
    const [rteData, setRTEData] = useState<EditorContentArray>([])
    const handleOnChange: RichTextEditorProps["onChange"] = (
      editorState
    ): void => setRTEData(editorState.toJSON().doc.content)
    return (
      <RichTextEditor
        labelText="Label"
        defaultValue={rteData}
        onChange={handleOnChange}
        rows={3}
        controls={[
          { name: "bold", group: "inline" },
          { name: "italic", group: "inline" },
          { name: "underline", group: "inline" },
          { name: "orderedList", group: "list" },
          { name: "bulletList", group: "list" },
          { name: "link", group: "link" },
        ]}
      />
    )
  },
  play: async ({ canvasElement, step }) => {
    const { getByRole } = within(canvasElement)

    const editor = getByRole("textbox")
    await step("Focus on editor", async () => {
      await userEvent.click(editor)
      expect(editor).toHaveFocus()
    })
  },
}

const CreateFirstUnorderedListItem: Story = {
  play: async context => {
    await TestBase.play?.(context)
    const { canvasElement, step } = context

    await step("Expect no list items", async () => {
      expect(canvasElement.querySelector("ul")).not.toBeInTheDocument()
    })

    await step("Create unordered list from `-` and Space", async () => {
      await userEvent.keyboard("- ")
      expect(canvasElement.querySelectorAll("ul li")).toHaveLength(1)
    })
  },
}

export const KeyboardShortcutUnorderedList: Story = {
  ...TestBase,
  name: "Create unordered list via keyboard shortcut",
  play: async context => {
    await CreateFirstUnorderedListItem.play?.(context)
    const { canvasElement, step } = context

    await step("Add new list item to list on Enter", async () => {
      await userEvent.keyboard("By the pricking of my thumbs{Enter}")
      expect(canvasElement.querySelectorAll("ul li")).toHaveLength(2)
    })
  },
}

export const KeyboardShortcutOrderedList: Story = {
  ...TestBase,
  name: "Create ordered list via keyboard shortcut",
  play: async context => {
    await TestBase.play?.(context)
    const { canvasElement, step } = context

    await step("Expect no list items", async () => {
      expect(canvasElement.querySelector("ol")).not.toBeInTheDocument()
    })

    await step("Create ordered list from `1.` and Space", async () => {
      await userEvent.keyboard("1. ")
      expect(canvasElement.querySelectorAll("ol li")).toHaveLength(1)
    })

    await step("Add new list item to list on Enter", async () => {
      await userEvent.keyboard("By the pricking of my thumbs{Enter}")
      expect(canvasElement.querySelectorAll("ol li")).toHaveLength(2)
    })
  },
}

export const DecreaseIndent: Story = {
  ...TestBase,
  name: "Decrease indent of an existing list item",
  play: async context => {
    await KeyboardShortcutUnorderedList.play?.(context)
    const { canvasElement, step } = context
    const { getByRole } = within(canvasElement)

    await step("Decrease indent on list item", async () => {
      await userEvent.click(getByRole("button", { name: "Decrease indent" }))
      expect(canvasElement.querySelectorAll("ul li")).toHaveLength(1)
    })
  },
}

export const IncreaseIndent: Story = {
  ...TestBase,
  name: "Increase indent of an existing list item",
  play: async context => {
    await CreateFirstUnorderedListItem.play?.(context)
    const { canvasElement, step } = context

    const { getByRole } = within(canvasElement)
    const increaseIndentButton = getByRole("button", {
      name: "Increase indent",
    })

    await step(
      "Expect increase indent button to be disabled as we are on the first list item",
      async () => {
        expect(increaseIndentButton).toHaveAttribute("aria-disabled", "true")
      }
    )

    await step(
      "Add second list item; expect increase indent button to be enabled",
      async () => {
        await userEvent.keyboard("By the pricking of my thumbs{Enter}")
        expect(canvasElement.querySelectorAll("ul li")).toHaveLength(2)
        expect(increaseIndentButton).toHaveAttribute("aria-disabled", "false")
      }
    )

    await step("Increase indent of second list item", async () => {
      await userEvent.click(increaseIndentButton)
      expect(canvasElement.querySelectorAll("ul li ul li")).toHaveLength(1)
    })
  },
}

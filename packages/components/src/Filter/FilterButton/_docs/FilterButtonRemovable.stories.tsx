import { Meta, StoryObj } from "@storybook/react"
import { FilterButtonRemovable } from "../FilterButtonRemovable"

const meta = {
  title: "Components/Filter Base/Filter Buttons/Filter Button Removable",
  component: FilterButtonRemovable,
  args: {
    triggerButtonProps: {
      label: "Label",
    },
    removeButtonProps: {
      onClick: (): void => alert("Remove clicked!"),
    },
  },
} satisfies Meta<typeof FilterButtonRemovable>

export default meta

export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const TriggerButtonProps: StoryObj<typeof meta> = {
  args: {
    triggerButtonProps: {
      label: "Ice cream flavour",
      selectedValue: "Vanilla",
      "data-testid": "testid__ice-cream-sandwich",
    },
  },
}

export const RemoveButtonProps: StoryObj<typeof meta> = {
  args: {
    removeButtonProps: {
      tooltipText: "Custom tooltip :)",
      "data-testid": "testid__carrot-cake",
    },
  },
}

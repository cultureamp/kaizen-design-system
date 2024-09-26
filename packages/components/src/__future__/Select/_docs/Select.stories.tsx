import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { ContextModal } from "~components/Modal"
import { Select } from "../Select"
import { SelectOption } from "../types"
import {
  groupedMockItems,
  mixedMockItemsDisabled,
  singleMockItems,
} from "./mockData"

const meta = {
  title: "Components/Select/Future",
  component: Select,
  argTypes: {
    items: {
      options: ["Single", "Grouped"],
      control: { type: "radio" },
      mapping: {
        Single: singleMockItems,
        Grouped: groupedMockItems,
      },
    },
    description: { type: "string" },
    validationMessage: { type: "string" },
  },
  args: {
    label: "Label",
    items: singleMockItems,
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const SingleItems: Story = {
  args: {
    items: singleMockItems,
  },
}

export const GroupedItems: Story = {
  args: {
    items: groupedMockItems,
  },
}

export const DisabledItems: Story = {
  args: {
    items: mixedMockItemsDisabled,
  },
}

export const SectionDivider: Story = {
  args: {
    items: [{ label: "Customise...", value: "custom" }, ...singleMockItems],
    children: ({ items }): JSX.Element[] =>
      items.map(item => {
        if (item.type === "item" && item.key === "custom") {
          return (
            <React.Fragment key={item.key}>
              <Select.Option item={item} />
              <Select.SectionDivider />
            </React.Fragment>
          )
        }

        return <Select.ItemDefaultRender key={item.key} item={item} />
      }),
  },
  parameters: { docs: { source: { type: "code" } } },
}

export const AdditionalProperties: Story = {
  render: args => (
    <Select<SelectOption & { isFruit: boolean }>
      {...args}
      label="Custom"
      items={[
        { label: "Bubblegum", value: "bubblegum", isFruit: false },
        { label: "Strawberry", value: "strawberry", isFruit: true },
        { label: "Chocolate", value: "chocolate", isFruit: false },
        { label: "Apple", value: "apple", isFruit: true },
        { label: "Lemon", value: "lemon", isFruit: true },
      ]}
    >
      {({ items }): JSX.Element[] =>
        items.map(item =>
          item.type === "item" ? (
            <Select.Option
              key={item.key}
              item={{
                ...item,
                rendered: item.value?.isFruit
                  ? `${item.rendered} (Fruit)`
                  : item.rendered,
              }}
            />
          ) : (
            <Select.ItemDefaultRender key={item.key} item={item} />
          )
        )
      }
    </Select>
  ),
  parameters: { docs: { source: { type: "code" } } },
}

const sourceCodeCustomiseTrigger = `
<Select
  trigger={props => <Select.TriggerButton {...props} id="select--custom-trigger" />}
/>
`
export const CustomiseTrigger: Story = {
  args: {
    trigger: props => (
      <Select.TriggerButton {...props} id="select--custom-trigger" />
    ),
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomiseTrigger,
      },
    },
  },
}

export const Validation: Story = {
  render: args => (
    <div className="flex gap-16">
      <Select
        {...args}
        status="error"
        validationMessage="This is an error message"
      />
      <Select
        {...args}
        status="caution"
        validationMessage="This is a cautionary message"
      />
    </div>
  ),
}

export const FullWidth: Story = {
  args: { isFullWidth: true },
}

export const PortalContainer: Story = {
  render: args => {
    const portalContainerId = "id--portal-container"

    const [isOpen, setIsOpen] = React.useState(false)

    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)
    return (
      <>
        <div className=" h-[500px] mb-24 block bg-gray-100 flex flex-col gap-16 justify-center items-center">
          Page content
          <button
            type="button"
            className="border border-gray-500"
            onClick={handleOpen}
          >
            Open Modal
          </button>
          <ContextModal
            {...args}
            isOpen={isOpen}
            onConfirm={handleClose}
            onDismiss={handleClose}
            title="Select test"
          >
            <div
              className="flex gap-24 bg-gray-200 p-12 h-[500px] relative"
              id={portalContainerId}
            >
              <Select
                {...args}
                label="Select within a modal"
                id="id--select-inner"
                portalContainerId={portalContainerId}
              />
            </div>
          </ContextModal>
        </div>
      </>
    )
  },
  parameters: { docs: { source: { type: "code" } } },
}

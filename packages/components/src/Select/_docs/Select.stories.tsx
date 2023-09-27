import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import Highlight from "react-highlight"
import { Text } from "~components/Text"
import { Select } from "../Select"
// import { SelectOption } from "../types"
import { groupedMockItems, singleMockItems } from "./mockData"

const meta = {
  title: "Components/Select",
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
  parameters: { docs: { source: { type: "code" } } },
}

export const WithSections: Story = {
  args: {
    items: groupedMockItems,
    placeholder: "Placeholder",
  },
  decorators: [
    Story => (
      <>
        <Story />
        <div className="mt-4">
          <Text variant="body">Items: </Text>
          <Highlight className="json">
            {JSON.stringify(groupedMockItems, null, 2)}
          </Highlight>
        </div>
      </>
    ),
  ],
}

// /**
//  * Extend the option type to have additional properties to use for rendering.
//  */
// export const AdditionalProperties: Story = {
//   render: args => {
//     const [isOpen, setIsOpen] = useState<boolean>(false)

//     return (
//       <Select<SelectOption & { isFruit: boolean }>
//         {...args}
//         label="Custom"
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//         items={[
//           { label: "Bubblegum", value: "bubblegum", isFruit: false },
//           { label: "Strawberry", value: "strawberry", isFruit: true },
//           { label: "Chocolate", value: "chocolate", isFruit: false },
//           { label: "Apple", value: "apple", isFruit: true },
//           { label: "Lemon", value: "lemon", isFruit: true },
//         ]}
//       >
//         {({ items }): JSX.Element[] =>
//           items.map(item =>
//             item.type === "item" ? (
//               <Select.Option
//                 key={item.key}
//                 item={{
//                   ...item,
//                   rendered: item.value?.isFruit
//                     ? `${item.rendered} (Fruit)`
//                     : item.rendered,
//                 }}
//               />
//             ) : (
//               <Select.ItemDefaultRender key={item.key} item={item} />
//             )
//           )
//         }
//       </Select>
//     )
//   },
//   name: "Additional option properties",
// }

import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { singleMockItems } from "@kaizen/select/docs/MockData"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton, FilterButtonRemovable } from "../../FilterButton"
import { Filter, FilterContents } from "../../index"
import { FilterSelect } from "../FilterSelect"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Select",
  component: FilterSelect,
  parameters: {
    docs: {
      description: {
        component: '`import { FilterSelect } from "@kaizen/components"`',
      },
    },
  },
} as ComponentMeta<typeof Filter>

export const DefaultStory: ComponentStory<typeof Filter> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <FilterSelect
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerButtonProps): JSX.Element => (
        <FilterButton {...triggerButtonProps} />
      )}
      label="Pancakes"
      items={singleMockItems}
    />
  )
}
DefaultStory.storyName = "Filter Select"

// const StickerSheetTemplate: Story = () => {
//   const [isOpen, setIsOpen] = React.useState(true)

//   return (
//     <StickerSheet
//       heading="Filter"
//       style={{ paddingBottom: IS_CHROMATIC ? "6rem" : undefined }}
//     >
//       <StickerSheet.Header headings={["Open"]} />
//       <StickerSheet.Body>
//         <StickerSheet.Row>
//           <Filter
//             isOpen={isOpen}
//             setIsOpen={setIsOpen}
//             renderTrigger={(triggerProps): JSX.Element => (
//               <FilterButton label="Label" {...triggerProps} />
//             )}
//           >
//             <FilterContents>Filter Contents</FilterContents>
//           </Filter>
//         </StickerSheet.Row>
//       </StickerSheet.Body>
//     </StickerSheet>
//   )
// }

// export const StickerSheetDefault = StickerSheetTemplate.bind({})
// StickerSheetDefault.storyName = "Sticker Sheet (Default)"
// StickerSheetDefault.parameters = {
//   chromatic: { disable: false },
//   controls: { disable: true },
// }

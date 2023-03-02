// import React from "react"
// import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
// import { withDesign } from "storybook-addon-designs"
// import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
// import { CATEGORIES } from "../../../storybook/constants"
// import { figmaEmbed } from "../../../storybook/helpers"
// import { Filter } from "../index"

// export default {
//   title: `${CATEGORIES.components}/Filter`,
//   component: Filter,
//   parameters: {
//     docs: {
//       description: {
//         component:
//           'import { Filter } from "@kaizen/component-base"',
//       },
//     },
//     ...figmaEmbed("REPLACE_THIS_WITH_FIGMA_URL"), /** @todo: Replace with Figma frame url */
//   },
//   decorators: [withDesign],
// } as ComponentMeta<typeof Filter>

// export const DefaultStory: ComponentStory<typeof Filter> = args => <Filter {...args} />
// DefaultStory.storyName = "Filter"

// const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
//   isReversed,
// }) => (
//   <StoryWrapper isReversed={isReversed}>
//     <StoryWrapper.RowHeader headings={["COLUMN 1", "COLUMN 2"]} />
//     <StoryWrapper.Row rowTitle="ROW 1">
//       <Filter exampleRequiredString="Example" /> {/** @todo: Add column 1 + row 1 props */}
//       <Filter exampleRequiredString="Example" /> {/** @todo: Add column 2 + row 1 props */}
//     </StoryWrapper.Row>
//     <StoryWrapper.Row rowTitle="ROW 2">
//       <Filter exampleRequiredString="Example" /> {/** @todo: Add column 1 + row 2 props */}
//       <Filter exampleRequiredString="Example" /> {/** @todo: Add column 2 + row 2 props */}
//     </StoryWrapper.Row>
//   </StoryWrapper>
// )

// export const StickerSheetDefault = StickerSheetTemplate.bind({})
// StickerSheetDefault.storyName = "Sticker Sheet (Default)"
// StickerSheetDefault.parameters = {
//   chromatic: { disable: false },
//   controls: { disable: true },
// }

// export const StickerSheetReversed = StickerSheetTemplate.bind({})
// StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
// StickerSheetReversed.args = { isReversed: true }
// StickerSheetReversed.parameters = {
//   chromatic: { disable: false },
//   backgrounds: { default: "Purple 700" },
//   controls: { disable: true },
// }

// /** @todo: Add extra stories to showcase props which don't appear in sticker sheets */

// import React from "react"
// import { withDesign } from "storybook-addon-designs"
// import { Story } from "@storybook/react"
// import dateIcon from "@kaizen/component-library/icons/date-start.icon.svg"
// import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
// import { DateInput } from "../src/DatePicker/components/DateInput"
// import { figmaEmbed } from "../../../storybook/helpers"
// import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

// export default {
//   title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Date Input`,
//   component: DateInput,
//   parameters: {
//     docs: {
//       description: {
//         component: 'import { TextField } from "@kaizen/draft-form"',
//       },
//     },
//     ...figmaEmbed(
//       "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14363%3A67837"
//     ),
//   },
//   decorators: [withDesign],
// }

// const validationMessages = {
//   success: "This is a success message",
//   caution: "This is a cautionary message",
//   error: "This is an error message",
// }

// export const DefaultStory = () => (
//   <DateInput
//     id="date-input"
//     labelText="Label"
//     placeholder="dd/mm/yyyy"
//     description="Description text"
//     icon={dateIcon}
//     validationMessages={validationMessages}
//   />
// )
// DefaultStory.storyName = "Default (Kaizen Demo)"

// const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
//   isReversed,
// }) => (
//   <StoryWrapper isReversed={isReversed}>
//     <StoryWrapper.RowHeader headings={["Base", "Selected", "Disabled"]} />
//     <StoryWrapper.Row rowTitle="Default">
//       <DateInput
//         id="date-input-base"
//         labelText="Label"
//         placeholder="dd/mm/yyyy"
//         description="dd/mm/yyyy"
//         icon={dateIcon}
//         validationMessages={validationMessages}
//       />
//       <DateInput
//         id="date-input-selected"
//         labelText="Label"
//         placeholder="dd/mm/yyyy"
//         value={"1/1/2000"}
//         description="dd/mm/yyyy"
//         icon={dateIcon}
//         validationMessages={validationMessages}
//       />
//       <DateInput
//         id="date-input-disabled"
//         labelText="Label"
//         placeholder="dd/mm/yyyy"
//         description="dd/mm/yyyy"
//         icon={dateIcon}
//         disabled
//         validationMessages={validationMessages}
//       />
//     </StoryWrapper.Row>
//     <StoryWrapper.Row rowTitle="Success">
//       <DateInput
//         id="date-input-cautionary"
//         labelText="Label"
//         placeholder="dd/mm/yyyy"
//         description="dd/mm/yyyy"
//         status="success"
//         icon={dateIcon}
//         validationMessages={validationMessages}
//       />
//     </StoryWrapper.Row>
//     <StoryWrapper.Row rowTitle="Cautionary">
//       <DateInput
//         id="date-input-cautionary"
//         labelText="Label"
//         placeholder="dd/mm/yyyy"
//         value={"potato"}
//         description="dd/mm/yyyy"
//         status="caution"
//         icon={dateIcon}
//         validationMessages={validationMessages}
//       />
//     </StoryWrapper.Row>
//     <StoryWrapper.Row rowTitle="Error">
//       <DateInput
//         id="date-input-error"
//         labelText="Label"
//         placeholder="dd/mm/yyyy"
//         value={"potato"}
//         description="dd/mm/yyyy"
//         status="error"
//         icon={dateIcon}
//         validationMessages={validationMessages}
//       />
//     </StoryWrapper.Row>
//   </StoryWrapper>
// )

// export const StickerSheetDefault = StickerSheetTemplate.bind({})
// StickerSheetDefault.storyName = "Sticker Sheet (Default)"
// StickerSheetDefault.parameters = { chromatic: { disable: false } }

import React, { useEffect, useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"
import { Calendar } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/DatePicker/Date Picker Input`,
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DatePicker } from "@kaizen/date-picker"',
      },
    },
  },
}
const validationMessages = {
  success: "This is a success message",
  caution: "This is a cautionary message",
  error: "This is an error message",
}
export const DefaultStory = props => {
  const [valueDate, setValueDate] = useState<Date | undefined>()

  return (
    <>
      <DatePicker
        id="datepicker-default"
        labelText="Label"
        description="mm/dd/yyyy"
        placeholder="mm/dd/yyyy"
        variant="input"
        validationMessages={validationMessages}
        disabledBefore={new Date()}
        valueDate={valueDate}
        setValueDate={setValueDate}
        {...props}
      />
    </>
  )
}
DefaultStory.storyName = "Default (Kaizen Demo)"

// const CalendarTemplate: Story = props => {
//   const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
//     null
//   )

//   const [referenceElement, setReferenceElement] =
//     useState<HTMLDivElement | null>(null)

//   const { styles, attributes } = usePopper(referenceElement, popperElement, {
//     modifiers: [
//       {
//         name: "offset",
//         options: {
//           offset: [0, 15],
//         },
//       },
//     ],
//     placement: "bottom-start",
//   })

//   return (
//     <div ref={setReferenceElement}>
//       <Calendar
//         id="calendar-dialog"
//         setPopperElement={setPopperElement}
//         styles={styles}
//         attributes={attributes}
//         firstDayOfWeek={0}
//         onDayChange={() => undefined}
//         initialMonth={new Date(2022, 1, 5)}
//         {...props}
//       />
//     </div>
//   )
// }

// const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
//   isReversed,
// }) => {
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>()

//   const onDayChange = (day: Date) => {
//     setSelectedDate(day)
//   }

//   return (
//     <>
//       <StoryWrapper isReversed={isReversed}>
//         <StoryWrapper.RowHeader
//           headings={["Default", "Selected Value", "Disabled", "Error"]}
//         />
//         <StoryWrapper.Row rowTitle="Input">
//           <DatePicker
//             id="datepicker-input-default"
//             labelText="Label"
//             value={selectedDate}
//             onChange={onDayChange}
//             validationMessages={validationMessages}
//             description="mm/dd/yyyy"
//             placeholder="mm/dd/yyyy"
//             variant="input"
//           />
//           <DatePicker
//             id="datepicker-input-selected"
//             labelText="Label"
//             value={new Date(2022, 1, 5)}
//             onChange={onDayChange}
//             validationMessages={validationMessages}
//             description="mm/dd/yyyy"
//             variant="input"
//           />
//           <DatePicker
//             isDisabled
//             id="datepicker-input-disabled"
//             labelText="Label"
//             value={selectedDate}
//             onChange={onDayChange}
//             validationMessages={validationMessages}
//             description="mm/dd/yyyy"
//             placeholder="mm/dd/yyyy"
//             variant="input"
//           />
//           <DatePicker
//             id="datepicker-input-error"
//             labelText="Label"
//             value={new Date("Invalid Date")}
//             onChange={onDayChange}
//             validationMessages={validationMessages}
//             description="mm/dd/yyyy"
//             variant="input"
//           />
//         </StoryWrapper.Row>
//       </StoryWrapper>
//     </>
//   )
// }

// export const StickerSheetDefault = StickerSheetTemplate.bind({})
// StickerSheetDefault.storyName = "Sticker Sheet (Default)"
// StickerSheetDefault.parameters = { chromatic: { disable: false } }

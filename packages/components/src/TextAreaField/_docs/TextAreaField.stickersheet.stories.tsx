import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "~components/Heading"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { TextAreaField, TextAreaFieldProps } from "../index"

export default {
  title: "Components/Text Input controls/Text Area Field",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

// const TAFieldStatusGroup = ({
//   isReversed,
//   ...props
// }: Omit<TextAreaFieldProps, "labelText"> & {
//   isReversed?: boolean
// }): JSX.Element => (
//   <>
//     {TAFieldStatus.map(status => (
//       <React.Fragment key={status}>
//         <TextAreaField
//           labelText={`Variant: ${props.variant}`}
//           reversed={isReversed}
//           status={status}
//           validationMessage="A valid question"
//           description="A short description"
//           {...props}
//         />
//         <TextAreaField
//           labelText={`Variant: ${props.variant}`}
//           reversed={isReversed}
//           status={status}
//           validationMessage="A valid question"
//           description="A short description"
//           data-sb-pseudo-styles="hover"
//           {...props}
//         />
//         <TextAreaField
//           labelText={`Variant: ${props.variant}`}
//           reversed={isReversed}
//           status={status}
//           validationMessage="A valid question"
//           description="A short description"
//           data-sb-pseudo-styles="active"
//           {...props}
//         />
//         <TextAreaField
//           labelText={`Variant: ${props.variant}`}
//           reversed={isReversed}
//           status={status}
//           validationMessage="A valid question"
//           description="A short description"
//           data-sb-pseudo-styles="focus"
//           {...props}
//         />
//       </React.Fragment>
//     ))}
//   </>
// )

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      labelText: "Label",
      description: "A short description",
      reversed: isReversed,
    } satisfies TextAreaFieldProps

    const variants = ["default", "prominent"] as const
    const statuses = ["default", "error", "caution"] as const

    return (
      <>
        <StickerSheet
          title="TextAreaField"
          isReversed={isReversed}
          headers={["Default", "Hover", "Active", "Focus", "Disabled"]}
        >
          {variants.map(variant => (
            <StickerSheet.Row
              key={variant}
              header={variant}
              isReversed={isReversed}
            >
              <TextAreaField {...defaultProps} variant={variant} />
              <TextAreaField
                {...defaultProps}
                variant={variant}
                data-sb-pseudo-styles="hover"
              />
              <TextAreaField
                {...defaultProps}
                variant={variant}
                data-sb-pseudo-styles="active"
              />
              <TextAreaField
                {...defaultProps}
                variant={variant}
                data-sb-pseudo-styles="focus"
              />
              <TextAreaField {...defaultProps} variant={variant} disabled />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet
          title="Validation"
          isReversed={isReversed}
          headers={["Error", "Caution"]}
        >
          {/* {statuses.map(status => (
            <StickerSheet.Row key={status} header={status} isReversed={isReversed}>
                <TextAreaField {...defaultProps} variant="default" status={status} />
                <TextAreaField {...defaultProps} variant="prominent" status={status} />
            </StickerSheet.Row>
          ))} */}
          {variants.map(variant => (
            <StickerSheet.Row
              key={variant}
              header={variant}
              isReversed={isReversed}
            >
              <TextAreaField
                {...defaultProps}
                variant={variant}
                status="error"
                validationMessage="A valid question"
              />
              <TextAreaField
                {...defaultProps}
                variant={variant}
                status="caution"
                validationMessage="A valid question"
              />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        {/* <StickerSheet title="Disabled" isReversed={isReversed}
          headers={["Default", "Hover", "Active", "Focus"]}
        >
          <TAFieldStatusGroup
            isReversed={isReversed}
            disabled
            variant="default"
          />
          <TAFieldStatusGroup
            isReversed={isReversed}
            disabled
            variant="prominent"
          />
      </StickerSheet> */}
      </>
    )
  },
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}

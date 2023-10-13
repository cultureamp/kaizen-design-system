import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "~components/Heading"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { TextAreaField } from "../index"

export default {
  title: "Components/Text Input controls/Text Area Field",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const TAFieldStatus = ["default", "error", "caution"] as const

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <Heading variant="heading-2" color={isReversed ? "white" : "dark"}>
        Enabled
      </Heading>
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Default", "Hover", "Active", "Focus"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Prominent">
            <TextAreaField
              labelText="Prominent Label"
              reversed={isReversed}
              variant="prominent"
              validationMessage="A valid question"
              description="A short description"
            />
            <TextAreaField
              labelText="Prominent Label"
              reversed={isReversed}
              variant="prominent"
              validationMessage="A valid question"
              description="A short description"
              data-sb-pseudo-styles="hover"
            />
            <TextAreaField
              labelText="Prominent Label"
              reversed={isReversed}
              variant="prominent"
              validationMessage="A valid question"
              description="A short description"
              data-sb-pseudo-styles="active"
            />
            <TextAreaField
              labelText="Prominent Label"
              reversed={isReversed}
              variant="prominent"
              validationMessage="A valid question"
              description="A short description"
              data-sb-pseudo-styles="focus"
            />
          </StickerSheet.Row>
          <>
            {TAFieldStatus.map(status => (
              <StickerSheet.Row
                key={status}
                rowTitle={status}
                isReversed={isReversed}
              >
                <TextAreaField
                  labelText="Label"
                  reversed={isReversed}
                  status={status}
                  validationMessage="A valid question"
                  description="A short description"
                />
                <TextAreaField
                  labelText="Label"
                  reversed={isReversed}
                  status={status}
                  validationMessage="A valid question"
                  description="A short description"
                  data-sb-pseudo-styles="hover"
                />
                <TextAreaField
                  labelText="Label"
                  reversed={isReversed}
                  status={status}
                  validationMessage="A valid question"
                  description="A short description"
                  data-sb-pseudo-styles="active"
                />
                <TextAreaField
                  labelText="Label"
                  reversed={isReversed}
                  status={status}
                  validationMessage="A valid question"
                  description="A short description"
                  data-sb-pseudo-styles="focus"
                />
              </StickerSheet.Row>
            ))}
          </>
        </StickerSheet.Body>
      </StickerSheet>
      <Heading variant="heading-2" color={isReversed ? "white" : "dark"}>
        Disabled
      </Heading>
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Default", "Hover", "Active", "Focus"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Prominent">
            <TextAreaField
              labelText="Prominent Label"
              reversed={isReversed}
              variant="prominent"
              validationMessage="A valid question"
              description="A short description"
              disabled
            />
            <TextAreaField
              labelText="Prominent Label"
              reversed={isReversed}
              variant="prominent"
              validationMessage="A valid question"
              description="A short description"
              disabled
              data-sb-pseudo-styles="hover"
            />
            <TextAreaField
              labelText="Prominent Label"
              reversed={isReversed}
              variant="prominent"
              validationMessage="A valid question"
              description="A short description"
              disabled
              data-sb-pseudo-styles="active"
            />
            <TextAreaField
              labelText="Prominent Label"
              reversed={isReversed}
              variant="prominent"
              validationMessage="A valid question"
              description="A short description"
              disabled
              data-sb-pseudo-styles="focus"
            />
          </StickerSheet.Row>
          <>
            {TAFieldStatus.map(status => (
              <StickerSheet.Row
                key={status}
                rowTitle={status}
                isReversed={isReversed}
              >
                <TextAreaField
                  labelText="Label"
                  reversed={isReversed}
                  status={status}
                  validationMessage="A valid question"
                  description="A short description"
                  disabled
                />
                <TextAreaField
                  labelText="Label"
                  reversed={isReversed}
                  status={status}
                  validationMessage="A valid question"
                  description="A short description"
                  disabled
                  data-sb-pseudo-styles="hover"
                />
                <TextAreaField
                  labelText="Label"
                  reversed={isReversed}
                  status={status}
                  validationMessage="A valid question"
                  description="A short description"
                  disabled
                  data-sb-pseudo-styles="active"
                />
                <TextAreaField
                  labelText="Label"
                  reversed={isReversed}
                  status={status}
                  validationMessage="A valid question"
                  description="A short description"
                  disabled
                  data-sb-pseudo-styles="focus"
                />
              </StickerSheet.Row>
            ))}
          </>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
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

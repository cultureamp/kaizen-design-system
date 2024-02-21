import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Label, LabelProps } from "../index"
import { BlockLabelTypes, InlineLabelTypes } from "../types"

export default {
  title: "Components/Label",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

type WrapperProps = LabelProps & {
  "data-sb-a11y-color-contrast-disable"?: boolean
}

const DefaultLabelWrapper = ({
  labelText,
  ...props
}: WrapperProps): JSX.Element => (
  <Label
    labelText={
      // Need this so we can add a data attrib to the labelText
      // since none of the props apply to the internal labelText wrapper
      <span
        data-sb-a11y-color-contrast-disable={
          props["data-sb-a11y-color-contrast-disable"]
        }
      >
        {labelText}
      </span>
    }
    {...props}
  />
)

const InlineControl = ({ labelText, ...props }: WrapperProps): JSX.Element => (
  <Label
    {...props}
    labelText={
      <span
        data-sb-a11y-color-contrast-disable={
          props["data-sb-a11y-color-contrast-disable"]
        }
      >
        {labelText}{" "}
        <a
          href="/"
          data-sb-a11y-color-contrast-disable={
            props["data-sb-a11y-color-contrast-disable"]
          }
        >
          a
        </a>
      </span>
    }
  >
    <span className="kz-inline-block kz-w-16 kz-h-16 kz-bg-gray-500"></span>
  </Label>
)

const BlockControl = ({ labelText, ...props }: WrapperProps): JSX.Element => (
  <>
    <Label
      {...props}
      labelText={
        <span
          data-sb-a11y-color-contrast-disable={
            props["data-sb-a11y-color-contrast-disable"]
          }
        >
          {labelText}{" "}
          <a
            href="/"
            data-sb-a11y-color-contrast-disable={
              props["data-sb-a11y-color-contrast-disable"]
            }
          >
            anchor
          </a>
        </span>
      }
    />
    <span className="kz-block kz-w-200 kz-h-16 kz-bg-gray-500"></span>
  </>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={[
          "Default",
          "Default (disabled)",
          "Prominent",
          "Prominent (disabled)",
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Base">
          <DefaultLabelWrapper reversed={isReversed} labelText="Label" />
          <DefaultLabelWrapper
            reversed={isReversed}
            labelText="Label"
            disabled
            data-sb-a11y-color-contrast-disable
          />
          <DefaultLabelWrapper
            reversed={isReversed}
            labelText="Label"
            variant="prominent"
          />
          <DefaultLabelWrapper
            reversed={isReversed}
            labelText="Label"
            variant="prominent"
            disabled
            data-sb-a11y-color-contrast-disable
          />
        </StickerSheet.Row>
      </StickerSheet.Body>

      <StickerSheet.Body>
        {InlineLabelTypes.map(type => (
          <StickerSheet.Row key={type} rowTitle={type}>
            <InlineControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
            />
            <InlineControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
              disabled
              data-sb-a11y-color-contrast-disable
            />
            <InlineControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
              variant="prominent"
            />
            <InlineControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
              variant="prominent"
              disabled
              data-sb-a11y-color-contrast-disable
            />
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>

      <StickerSheet.Body>
        {BlockLabelTypes.map(type => (
          <StickerSheet.Row key={type} rowTitle={type}>
            <BlockControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
            />
            <BlockControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
              disabled
              data-sb-a11y-color-contrast-disable
            />
            <BlockControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
              variant="prominent"
            />
            <BlockControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
              variant="prominent"
              disabled
              data-sb-a11y-color-contrast-disable
            />
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}

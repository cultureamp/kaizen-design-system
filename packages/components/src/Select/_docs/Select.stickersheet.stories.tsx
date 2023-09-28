import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Select } from "../index"
import { singleMockItems } from "./mockData"

export default {
  title: "Components/Select",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed} heading="Select">
        <StickerSheet.Header headings={["Base", "Selected", "Description"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <StickerSheet.Cell style={{ verticalAlign: "top" }}>
              <Select
                label="Label"
                items={singleMockItems}
                placeholder="Placeholder"
                isReversed={isReversed}
              />
            </StickerSheet.Cell>
            <StickerSheet.Cell style={{ verticalAlign: "top" }}>
              <Select
                label="Label"
                items={singleMockItems}
                selectedKey="mocha"
                isReversed={isReversed}
              />
            </StickerSheet.Cell>
            <StickerSheet.Cell style={{ verticalAlign: "top" }}>
              <Select
                label="Label"
                items={singleMockItems}
                description="This is a description"
                selectedKey="mocha"
                isReversed={isReversed}
              />
            </StickerSheet.Cell>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="Pseudo states">
        <StickerSheet.Header
          headings={["Hover", "Active", "Focus", "Disabled"]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Select
              label="Label"
              items={singleMockItems}
              placeholder="Placeholder"
              isReversed={isReversed}
              data-sb-pseudo-styles="hover"
            />
            <Select
              label="Label"
              items={singleMockItems}
              placeholder="Placeholder"
              isReversed={isReversed}
              data-sb-pseudo-styles="active"
            />
            <Select
              label="Label"
              items={singleMockItems}
              placeholder="Placeholder"
              isReversed={isReversed}
              data-sb-pseudo-styles="focus"
            />
            <Select
              label="Label"
              items={singleMockItems}
              placeholder="Placeholder"
              isDisabled
              isReversed={isReversed}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="Width" width="100%">
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Select
              label="Full width"
              items={singleMockItems}
              placeholder="Placeholder"
              isFullWidth
              isReversed={isReversed}
            />
          </StickerSheet.Row>
          <StickerSheet.Row>
            <div style={{ width: "50%" }}>
              <Select
                label="Custom Width (50%)"
                items={singleMockItems}
                isFullWidth
                placeholder="Placeholder"
                isReversed={isReversed}
              />
            </div>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="Validation">
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Select
              label="Error"
              items={singleMockItems}
              placeholder="Placeholder"
              description="This is a description"
              status="error"
              validationMessage="This is an error"
              isReversed={isReversed}
            />
            <Select
              label="Caution"
              items={singleMockItems}
              placeholder="Placeholder"
              description="This is a description"
              status="caution"
              validationMessage="This is an error"
              isReversed={isReversed}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="Truncated">
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Select
              label="Label"
              items={[
                { label: "Dev-ops", value: "id-devops" },
                { label: "Others", value: "id-others" },
                {
                  label:
                    "Super long option where the container is fixed width and the selected option goes multiline",
                  value: "id-long",
                },
                {
                  label: "Metallblasinstrumentenbauermeisterbrief",
                  value: "id-long-word",
                },
              ]}
              selectedKey="id-long"
              isReversed={isReversed}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
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

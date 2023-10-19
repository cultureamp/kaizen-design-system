import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Select } from "../index"

export default {
  title: "Components/Select",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const OPTIONS = [
  { value: "Mindy", label: "Mindy" },
  { value: "Jaime", label: "Jaime", isDisabled: true },
  { value: "Rafa", label: "Rafa" },
  { value: "Elaine", label: "Elaine" },
  { value: "Julio", label: "Julio" },
  { value: "Priyanka", label: "Priyanka" },
  { value: "Prince", label: "Prince" },
  { value: "Charith", label: "Charith" },
  { value: "Nick", label: "Nick" },
  {
    value: "Long option",
    label:
      "Long option where the container is fixed width and the selected option should ellipsize",
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed} heading="Default Select">
        <StickerSheet.Header headings={["Base", "Clearable", "Disabled"]} hasVerticalHeadings/>
        <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Default">
          <Select
            options={OPTIONS}
            reversed={isReversed}
            placeholder="Edit survey"
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[0]}
            isClearable
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            placeholder="Edit survey"
            isDisabled
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Ellipsis">
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            placeholder="Edit survey"
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            placeholder="Edit survey"
            isClearable
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            placeholder="Edit survey"
            isDisabled
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet isReversed={isReversed} heading="Multi Select">
        <StickerSheet.Header headings={["Base", "Disabled"]}/>
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Select
              options={OPTIONS}
              reversed={isReversed}
              isMulti={true}
              defaultValue={OPTIONS[0]}
            />
            <Select
              options={OPTIONS}
              reversed={isReversed}
              defaultValue={OPTIONS[0]}
              placeholder="Edit survey"
              isDisabled
              isMulti
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet isReversed={isReversed} heading="Secondary">
        <StickerSheet.Header headings={["Base", "Disabled"]} hasVerticalHeadings/>
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <Select
              reversed={isReversed}
              variant="secondary"
              options={OPTIONS}
              defaultValue={OPTIONS[0]}
            />
            <Select
              reversed={isReversed}
              variant="secondary"
              options={OPTIONS}
              defaultValue={OPTIONS[0]}
              placeholder="Edit survey"
              isDisabled
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Small">
            <Select
              reversed={isReversed}
              variant="secondary-small"
              options={OPTIONS}
              defaultValue={OPTIONS[0]}
            />
            <Select
              reversed={isReversed}
              variant="secondary-small"
              options={OPTIONS}
              defaultValue={OPTIONS[0]}
              isDisabled
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet isReversed={isReversed} heading="Menu">
        <StickerSheet.Header headings={["Base", "Disabled"]}/>
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Select
              reversed={isReversed}
              variant="secondary"
              options={OPTIONS}
              menuIsOpen
            />
            <Select
              reversed={isReversed}
              variant="secondary"
              options={[]}
              menuIsOpen
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

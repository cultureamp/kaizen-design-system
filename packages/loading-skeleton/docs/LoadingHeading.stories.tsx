import { Heading } from "@kaizen/typography"
import { StoryFn, StoryObj } from "@storybook/react"
import React from "react"
import { LoadingHeading } from ".."
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

const meta = {
  tags: ["autodocs"],
  title: "Components/Loading/Loading Headings",
  component: LoadingHeading,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/loading-skeleton",
      "import { LoadingHeading } from `@kaizen/loading-skeleton`",
    ],
    sourceCodeLink:
      "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/loading-skeleton/src/LoadingHeading",
    figmaLink:
      "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=5-353&t=zbqic2Cy8SwmCR94-0",
  },
}

export default meta

/**
 *  The Loading Heading can be displayed in place of a heading while it is being loaded.
 */
export const Playground: StoryObj<typeof meta> = {
  args: {
    variant: "display-0",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header headings={["Loading Skeleton", "Example"]} />
    <StickerSheet.Row rowTitle="Display 0" isReversed>
      <LoadingHeading variant="display-0" isReversed={isReversed} />
      <Heading variant="display-0" color={isReversed ? "white" : "dark"}>
        Display-0
      </Heading>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Heading 1" isReversed>
      <LoadingHeading variant="heading-1" isReversed={isReversed} />
      <Heading variant="heading-1" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Heading 2" isReversed>
      <LoadingHeading variant="heading-2" isReversed={isReversed} />
      <Heading variant="heading-2" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Heading 3" isReversed>
      <LoadingHeading variant="heading-3" isReversed={isReversed} />
      <Heading variant="heading-3" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Heading 4" isReversed>
      <LoadingHeading variant="heading-4" isReversed={isReversed} />
      <Heading variant="heading-4" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Heading 5" isReversed>
      <LoadingHeading variant="heading-5" isReversed={isReversed} />
      <Heading variant="heading-5" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Heading 6" isReversed>
      <LoadingHeading variant="heading-6" isReversed={isReversed} />
      <Heading variant="heading-6" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Heading Link" isReversed>
      <LoadingHeading variant="heading-1" isLink isReversed={isReversed} />
      <Heading variant="heading-1" color={isReversed ? "white" : "dark"}>
        Heading Link
      </Heading>
    </StickerSheet.Row>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}

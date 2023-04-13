import React from "react"
import { StoryFn, StoryObj } from "@storybook/react"
import { Paragraph } from "@kaizen/typography"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { LoadingParagraph } from ".."

const meta = {
  tags: ["autodocs"],
  title: "Components/Loading/Loading Paragraph",
  component: LoadingParagraph,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/loading-skeleton",
      "import { LoadingParagraph } from `@kaizen/loading-skeleton`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/loading-skeleton/src",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-39907&t=wEc5CYMSdMMfoeq9-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060062",
    },
  },
}

export default meta

/**
 *  The Loading Paragraph can be displayed in place of a paragraph while it is being loaded.
 */
export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const DefaultLoadingParagraph: StoryFn<
  typeof LoadingParagraph
> = args => <LoadingParagraph {...args} />
DefaultLoadingParagraph.storyName = "Loading Paragraph"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header headings={["Loading Skeleton", "Example"]} />
    <StickerSheet.Row rowTitle="Paragraph" isReversed={isReversed}>
      <div>
        <LoadingParagraph isReversed={isReversed} />
        <LoadingParagraph isReversed={isReversed} />
      </div>
      <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
        Kaizen is Culture Amp’s design system. It’s the single source of truth
        for our UX guidelines, design assets, and front-end code to help Culture
        Amp’s teams rapidly create a world-class experience.
      </Paragraph>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Paragraph Link" isReversed={isReversed}>
      <div>
        <LoadingParagraph isLink isReversed={isReversed} />
        <LoadingParagraph isLink isReversed={isReversed} />
      </div>
      <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
        Kaizen is Culture Amp’s design system. It’s the single source of truth
        for our UX guidelines, design assets, and front-end code to help Culture
        Amp’s teams rapidly create a world-class experience.
      </Paragraph>
    </StickerSheet.Row>
    <StickerSheet.Row
      rowTitle="Paragraph - inline, width 30%"
      isReversed={isReversed}
    >
      <div>
        <LoadingParagraph isInline width={30} isReversed={isReversed} />
        <LoadingParagraph isInline width={30} isReversed={isReversed} />
        <LoadingParagraph isInline width={30} isReversed={isReversed} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
          Kaizen is Culture Amp’s design system.
        </Paragraph>
        <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
          Kaizen is Culture Amp’s design system.
        </Paragraph>
        <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
          Kaizen is Culture Amp’s design system.
        </Paragraph>
      </div>
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

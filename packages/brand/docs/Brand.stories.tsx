import React from "react"
import { StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet/StickerSheet"
import { Brand } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Brand",
  component: Brand,
  parameters: {
    chromatic: { disable: false },
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/Brand",
      "import { Brand } from `@kaizen/Brand`",
    ],
    packageName: "@kaizen/Brand",
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/brand",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=5-353&t=woUD77xUSAMkDHIS-0",
    },
  },
}

export default meta

/**
 * Brand components display our Culture Amp logo
 */
export const Playground: StoryObj<typeof meta> = {
  args: { variant: "logo-horizontal", alt: "alt-text" },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const DefaultStory: StoryFn<typeof Brand> = args => <Brand {...args} />
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  alt: "Culture Amp",
  variant: "logo-horizontal",
  reversed: false,
}

/**
 * `logo-horizontal`, `logo-vertical`, `enso`, `collective-intelligence`
 */
export const Variants: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Row rowTitle="Logo Horizontal">
      <Brand alt="Culture Amp" variant="logo-horizontal" />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Logo Vertical">
      <Brand alt="Culture Amp" variant="logo-vertical" />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Enso">
      <Brand alt="Culture Amp" variant="enso" />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Collective Intelligence">
      <Brand alt="Culture Amp" variant="collective-intelligence" />
    </StickerSheet.Row>
  </StickerSheet>
)

export const Reversed: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Row rowTitle="Logo Horizontal" isReversed>
      <Brand alt="Culture Amp" variant="logo-horizontal" reversed />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Logo Vertical" isReversed>
      <Brand alt="Culture Amp" variant="logo-vertical" reversed />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Enso" isReversed>
      <Brand alt="Culture Amp" variant="enso" reversed />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Collective Intelligence" isReversed>
      <Brand alt="Culture Amp" variant="collective-intelligence" reversed />
    </StickerSheet.Row>
  </StickerSheet>
)
Reversed.parameters = {
  backgrounds: { default: "Purple 700" },
}

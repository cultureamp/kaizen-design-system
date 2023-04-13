import React from "react"
import { StoryFn, StoryObj } from "@storybook/react"
import { Icon } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import { Avatar } from "@kaizen/draft-avatar"
import {
  BrandMomentPositiveOutro,
  Informative,
} from "@kaizen/draft-illustration"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

import { LoadingGraphic } from ".."

const meta = {
  tags: ["autodocs"],
  title: "Components/Loading/LoadingGraphic",
  component: LoadingGraphic,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/loading-skeleton",
      "import { LoadingGraphic } from `@kaizen/loading-skeleton`",
    ],
    sourceCodeLink:
      "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/loading-skeleton/src/LoadingGraphic",
    figmaLink:
      "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-39907&t=wEc5CYMSdMMfoeq9-0",
  },
}

export default meta

/**
 *  The Loading Graphic can be displayed in place of a graphic while it is being loaded.
 */
export const Playground: StoryObj<typeof meta> = {
  args: {
    size: "xlarge",
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
    <StickerSheet.Row rowTitle="Icon (small)" isReversed>
      <LoadingGraphic size="small" isReversed={isReversed} />
      <div style={{ width: "20px" }}>
        <Icon
          icon={configureIcon}
          title="Warning"
          desc="Aliens approaching!"
          role="img"
          inheritSize={true}
        />
      </div>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Avatar (medium)" isReversed>
      <LoadingGraphic size="medium" isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="medium"
      />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Avatar (large)" isReversed>
      <LoadingGraphic size="large" isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="large"
      />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Avatar (x-large)" isReversed>
      <LoadingGraphic size="xlarge" isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="xlarge"
      />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Spot (xx-large)" isReversed>
      <LoadingGraphic size="xxlarge" isReversed={isReversed} />
      <div style={{ width: "156px" }}>
        <Informative alt="informative-spot-image" />
      </div>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Scene (scene)" isReversed>
      <LoadingGraphic size="scene" isReversed={isReversed} />
      <BrandMomentPositiveOutro alt="positive-outro" />
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

import React from "react"
import { StoryFn } from "@storybook/react"
import { Box } from "@kaizen/component-library"
import { GuidanceBlock } from "../"
import {
  Informative,
  SkillsCoachManagerHub,
  SkillsCoachEssentialFeedback,
  Communication,
  EmptyStatesPositive,
  BrandMomentPositiveOutro,
} from "@kaizen/draft-illustration"
import { Tag } from "@kaizen/draft-tag"
import { Heading, Paragraph } from "@kaizen/typography"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { GuidanceBlockProps } from "../"

const ICON_EXTERNAL_LINK =
  require("@kaizen/component-library/icons/external-link.icon.svg").default

export default {
  tags: ["autodocs"],
  title: "KAIO-staging/Guidance Block",
  component: GuidanceBlock,
  parameters: {
    docs: {
      description: {
        component:
          'import { GuidanceBlock } from "@kaizen/draft-guidance-block";',
      },
    },
    backgrounds: { default: "Gray 100" },
  },
}

const GUIDANCE_BLOCK_TEXT = {
  title: "This is the Guidance block title",
  description:
    "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, " +
    "qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
}

export const DefaultStory: StoryFn<typeof GuidanceBlock> = args => (
  <GuidanceBlock
    actions={{
      primary: {
        label: "Action",
        onClick: () => alert("tada: 🎉"),
      },
      dismiss: {
        onClick: () => alert("tada: 🎉"),
      },
    }}
    {...args}
  />
)
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  layout: "default",
  illustrationType: "spot",
  // @ts-expect-error:next-line - String here is mapped to valid prop value in default controls
  illustration: "spot",
  variant: "default",
  withActionButtonArrow: true,
  noMaxWidth: false,
  smallScreenTextAlignment: "center",
  text: GUIDANCE_BLOCK_TEXT,
  secondaryDismiss: false,
  persistent: true,
}
DefaultStory.argTypes = {
  actions: {
    control: false,
  },
  persistent: {
    description:
      "This should always return true ()`persistent` will soon be deprecated). The X close icon has been superseded with the pattern 'dismiss' or 'cancel' using the secondary action.",
    control: false,
  },
  illustrationType: {
    description:
      "Sets the how the width and aspect ratio will respond to the Illustration passed in.",
  },
  illustration: {
    control: { type: "radio" },
    options: ["spot", "scene"],
    mapping: {
      spot: <Informative alt="" />,
      scene: <BrandMomentPositiveOutro alt="" />,
    },
    description:
      "This takes a scene scene or spot element, ie: `<Informative />`. This radio button implementation is a storybook only representation to toggle between the two illustration styles.",
  },
  content: {
    description:
      "If you need to render custom content inside of the `GuidanceBlock` that is more than just a title and description use this prop instead of the default `text` option.",
  },
}

const PROPS: GuidanceBlockProps = {
  persistent: true,
  illustration: <Informative alt="" />,
  text: GUIDANCE_BLOCK_TEXT,
  actions: {
    primary: {
      label: "Action",
      onClick: () => {
        alert("tada: 🎉")
      },
    },
  },
}

const CustomContent = (): JSX.Element => (
  <>
    <Box mb={0.75}>
      <Tag variant="statusLive" size="small">
        Early Access
      </Tag>
    </Box>
    <Box mb={1}>
      <Heading tag="h3" variant="heading-3">
        {GUIDANCE_BLOCK_TEXT.title}
      </Heading>
    </Box>
    <Paragraph tag="p" variant="body">
      {GUIDANCE_BLOCK_TEXT.description}
    </Paragraph>
  </>
)

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.RowHeader headings={["Empty State"]} />
    <StickerSheet.Row rowTitle="Positive">
      <GuidanceBlock variant="positive" {...PROPS} />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Informative">
      <GuidanceBlock variant="informative" {...PROPS} />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Assertive">
      <GuidanceBlock variant="assertive" {...PROPS} />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Cautionary">
      <GuidanceBlock variant="cautionary" {...PROPS} />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Negative">
      <GuidanceBlock variant="negative" {...PROPS} />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Prominent">
      <GuidanceBlock variant="prominent" {...PROPS} />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="No arrow">
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={GUIDANCE_BLOCK_TEXT}
        withActionButtonArrow={false}
        actions={{
          primary: {
            label: "Learn more",
            onClick: () => alert("tada: 🎉"),
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
        persistent
      />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Custom Content">
      <GuidanceBlock
        illustration={<Informative alt="" />}
        content={<CustomContent />}
        noMaxWidth
        persistent
        actions={{
          primary: {
            label: "Learn more",
            onClick: () => alert("tada: 🎉"),
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
      />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Tooltip">
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "Informative guidance block title",
          description:
            "Providing further details to suggest a path forward or promote a feature that allows the user" +
            " to progress with confidence.",
        }}
        actions={{
          primary: {
            label: "Learn more",
            onClick: () => alert("tada: 🎉"),
            tooltip: {
              text: "Opens in a new tab",
              mood: "cautionary",
            },
            icon: ICON_EXTERNAL_LINK,
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
        persistent
      />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Scene Illustration">
      <GuidanceBlock
        illustration={<EmptyStatesPositive alt="" />}
        illustrationType="scene"
        text={GUIDANCE_BLOCK_TEXT}
        actions={{
          primary: {
            label: "Action",
            onClick: () => alert("tada: 🎉"),
          },
        }}
        persistent
      />
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="No Max Width">
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={GUIDANCE_BLOCK_TEXT}
        noMaxWidth
        persistent
      />
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

export const Layouts: StoryFn = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <Heading tag="h2" variant="heading-4">
      Default
    </Heading>
    <GuidanceBlock
      layout="default"
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => alert("tada: 🎉"),
        },
        secondary: {
          label: "Dismiss",
          href: "#",
        },
      }}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Inline
    </Heading>
    <GuidanceBlock
      layout="inline"
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => alert("tada: 🎉"),
        },
        secondary: {
          label: "Dismiss",
          href: "#",
        },
      }}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Inline with scene illustration
    </Heading>
    <GuidanceBlock
      layout="inline"
      illustration={<SkillsCoachManagerHub alt="" />}
      illustrationType="scene"
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => alert("tada: 🎉"),
        },
        secondary: {
          label: "Dismiss",
          href: "#",
        },
      }}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Stacked
    </Heading>
    <GuidanceBlock
      layout="stacked"
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => alert("tada: 🎉"),
        },
        secondary: {
          label: "Dismiss",
          href: "#",
        },
      }}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Stacked with Scene Illustration
    </Heading>
    <GuidanceBlock
      layout="stacked"
      illustration={<SkillsCoachManagerHub alt="" />}
      illustrationType="scene"
      text={GUIDANCE_BLOCK_TEXT}
      smallScreenTextAlignment="left"
      actions={{
        primary: {
          label: "Action",
          onClick: () => alert("tada: 🎉"),
        },
        secondary: {
          label: "Dismiss action",
        },
      }}
      secondaryDismiss
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Stacked side by side
    </Heading>
    <div style={{ display: "flex", gap: "36px" }}>
      <GuidanceBlock
        layout="stacked"
        illustration={<Informative alt="" />}
        text={GUIDANCE_BLOCK_TEXT}
        actions={{
          primary: {
            label: "Action",
            onClick: () => alert("tada: 🎉"),
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
        persistent
      />
      <GuidanceBlock
        layout="stacked"
        illustration={<Informative alt="" />}
        text={GUIDANCE_BLOCK_TEXT}
        actions={{
          primary: {
            label: "Action",
            onClick: () => alert("tada: 🎉"),
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
        persistent
      />
    </div>
  </div>
)
Layouts.parameters = { chromatic: { disable: false } }

export const AspectRatio: StoryFn = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <Heading tag="h2" variant="heading-4">
      Scene example
    </Heading>
    <GuidanceBlock
      illustration={
        <SkillsCoachEssentialFeedback alt="" enableAspectRatio={true} />
      }
      illustrationType="scene"
      text={GUIDANCE_BLOCK_TEXT}
      layout="inline"
      smallScreenTextAlignment="left"
      actions={{
        primary: {
          label: "Action",
        },
        secondary: {
          label: "Dismiss action",
        },
      }}
      secondaryDismiss
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Stacked Scenes
    </Heading>
    <div style={{ display: "flex", gap: "36px" }}>
      <GuidanceBlock
        layout="stacked"
        illustrationType="scene"
        illustration={<BrandMomentPositiveOutro alt="" />}
        text={GUIDANCE_BLOCK_TEXT}
        actions={{
          primary: {
            label: "Action",
            onClick: () => alert("tada: 🎉"),
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
        persistent
      />
      <GuidanceBlock
        layout="stacked"
        illustrationType="scene"
        illustration={<Communication alt="" />}
        text={GUIDANCE_BLOCK_TEXT}
        actions={{
          primary: {
            label: "Action",
            onClick: () => alert("tada: 🎉"),
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
        persistent
      />
    </div>
    <Heading tag="h2" variant="heading-4">
      Stacked with landscape and portrait scenes
    </Heading>
    <div style={{ display: "flex", gap: "36px" }}>
      <GuidanceBlock
        layout="stacked"
        illustrationType="scene"
        illustration={<SkillsCoachEssentialFeedback alt="" />}
        text={GUIDANCE_BLOCK_TEXT}
        actions={{
          primary: {
            label: "Action",
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
        persistent
      />
      <GuidanceBlock
        layout="stacked"
        illustrationType="scene"
        illustration={<BrandMomentPositiveOutro alt="" />}
        text={GUIDANCE_BLOCK_TEXT}
        actions={{
          primary: {
            label: "Action",
          },
          secondary: {
            label: "Dismiss",
            href: "#",
          },
        }}
        persistent
      />
    </div>
  </div>
)
AspectRatio.parameters = { chromatic: { disable: false } }

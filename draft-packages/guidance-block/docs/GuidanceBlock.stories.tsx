import React from "react"
import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import {
  Informative,
  SkillsCoachManagerHub,
  SkillsCoachEssentialFeedback,
  Communication,
  BrandMomentPositiveOutro,
} from "@kaizen/draft-illustration"
import { Heading } from "@kaizen/typography"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

const ICON_EXTERNAL_LINK =
  require("@kaizen/component-library/icons/external-link.icon.svg").default

export default {
  title: `${CATEGORIES.components}/Guidance Block`,
  component: GuidanceBlock,
  parameters: {
    docs: {
      description: {
        component:
          'import { GuidanceBlock } from "@kaizen/draft-guidance-block";',
      },
    },
    backgrounds: { default: "Gray 100" },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A39077"
    ),
  },
  decorators: [withDesign],
}

const GUIDANCE_BLOCK_TEXT = {
  title: "This is the Guidance block title",
  description:
    "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, " +
    "qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
}

export const DefaultStory = args => (
  <GuidanceBlock
    illustration={args.illustration}
    text={GUIDANCE_BLOCK_TEXT}
    actions={{
      primary: {
        label: "Action",
        onClick: () => {
          alert("tada: 🎉")
        },
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
}

export const Moods = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <Heading tag="h2" variant="heading-4">
      Positive
    </Heading>
    <GuidanceBlock
      persistent
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
      variant="positive"
    />
    <Heading tag="h2" variant="heading-4">
      Negative
    </Heading>
    <GuidanceBlock
      persistent
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
      variant="negative"
    />
    <Heading tag="h2" variant="heading-4">
      Informative
    </Heading>
    <GuidanceBlock
      persistent
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
      variant="informative"
    />
    <Heading tag="h2" variant="heading-4">
      Cautionary
    </Heading>
    <GuidanceBlock
      persistent
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
      variant="cautionary"
    />
    <Heading tag="h2" variant="heading-4">
      Assertive
    </Heading>
    <GuidanceBlock
      persistent
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
      variant="assertive"
    />
    <Heading tag="h2" variant="heading-4">
      Prominent
    </Heading>
    <GuidanceBlock
      persistent
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
      variant="prominent"
    />
  </div>
)
Moods.parameters = { chromatic: { disable: false } }

export const StickerSheet = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <Heading tag="h2" variant="heading-4">
      Default
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Actions
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Dismiss",
          href: "#",
        },
      }}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      No arrow
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      withActionButtonArrow={false}
      actions={{
        primary: {
          label: "Learn more",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Dismiss",
          href: "#",
        },
      }}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Tooltip
    </Heading>
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
          onClick: () => {
            alert("tada: 🎉")
          },
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
    <Heading tag="h2" variant="heading-4">
      Scene Illustration
    </Heading>
    <GuidanceBlock
      illustration={<BrandMomentPositiveOutro alt="" />}
      illustrationType="scene"
      text={GUIDANCE_BLOCK_TEXT}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      No Max Width
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={GUIDANCE_BLOCK_TEXT}
      noMaxWidth
      persistent
    />
  </div>
)
StickerSheet.parameters = { chromatic: { disable: false } }

export const Layouts = () => (
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
          onClick: () => {
            alert("tada: 🎉")
          },
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
          onClick: () => {
            alert("tada: 🎉")
          },
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
          onClick: () => {
            alert("tada: 🎉")
          },
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
          onClick: () => {
            alert("tada: 🎉")
          },
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
          onClick: () => {
            alert("tada: 🎉")
          },
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
            onClick: () => {
              alert("tada: 🎉")
            },
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
            onClick: () => {
              alert("tada: 🎉")
            },
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

export const AspectRatio = () => (
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
            onClick: () => {
              alert("tada: 🎉")
            },
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
            onClick: () => {
              alert("tada: 🎉")
            },
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

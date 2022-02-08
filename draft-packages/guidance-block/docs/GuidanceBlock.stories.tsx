import * as React from "react"

import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import {
  Informative,
  HumanityAtWork,
  SkillsCoachManagerHub,
  SkillsCoachEssentialFeedback,
  Communication,
} from "@kaizen/draft-illustration"
import { Heading } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
const externalLinkIcon =
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

const guidanceBlockText = {
  title: "This is the Guidance block title",
  description:
    "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, " +
    "qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
}

export const DefaultStory = args => (
  <GuidanceBlock
    illustration={<Informative alt="" />}
    text={guidanceBlockText}
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
  variant: "default",
  withActionButtonArrow: true,
  noMaxWidth: false,
  smallScreenTextAlignment: "center",
  text: guidanceBlockText,
  secondaryDismiss: false,
  persistent: false,
  lockAspectRatio: false,
}

DefaultStory.argTypes = {
  illustration: {
    control: false,
  },
  actions: {
    control: false,
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
      text={guidanceBlockText}
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
      text={guidanceBlockText}
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
      text={guidanceBlockText}
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
      text={guidanceBlockText}
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
      text={guidanceBlockText}
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
      text={guidanceBlockText}
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

export const StickerSheet = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <Heading tag="h2" variant="heading-4">
      Default
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={guidanceBlockText}
    />
    <Heading tag="h2" variant="heading-4">
      Persistent
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={guidanceBlockText}
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Actions
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={guidanceBlockText}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Secondary action",
          href: "#",
        },
      }}
    />
    <Heading tag="h2" variant="heading-4">
      No arrow
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={guidanceBlockText}
      withActionButtonArrow={false}
      actions={{
        primary: {
          label: "Learn more",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Secondary action",
          href: "#",
        },
      }}
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
          icon: externalLinkIcon,
        },
        secondary: {
          label: "Secondary action",
          href: "#",
        },
      }}
    />
    <Heading tag="h2" variant="heading-4">
      Scene Illustration
    </Heading>
    <GuidanceBlock
      illustration={<HumanityAtWork alt="" />}
      illustrationType="scene"
      text={guidanceBlockText}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
    />
    <Heading tag="h2" variant="heading-4">
      No Max Width
    </Heading>
    <GuidanceBlock
      illustration={<Informative alt="" />}
      text={guidanceBlockText}
      noMaxWidth
    />
  </div>
)

export const Layouts = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <Heading tag="h2" variant="heading-4">
      Default
    </Heading>
    <GuidanceBlock
      layout="default"
      illustration={<Informative alt="" />}
      text={guidanceBlockText}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Secondary action",
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
      text={guidanceBlockText}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Secondary action",
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
      text={guidanceBlockText}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Secondary action",
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
      text={guidanceBlockText}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Secondary action",
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
      text={guidanceBlockText}
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
        text={guidanceBlockText}
        actions={{
          primary: {
            label: "Action",
            onClick: () => {
              alert("tada: 🎉")
            },
          },
          secondary: {
            label: "Secondary action",
            href: "#",
          },
        }}
        persistent
      />
      <GuidanceBlock
        layout="stacked"
        illustration={<Informative alt="" />}
        text={guidanceBlockText}
        actions={{
          primary: {
            label: "Action",
            onClick: () => {
              alert("tada: 🎉")
            },
          },
          secondary: {
            label: "Secondary action",
            href: "#",
          },
        }}
        persistent
      />
    </div>
  </div>
)

export const AspectRatio = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <Heading tag="h2" variant="heading-4">
      Aspect ratio enabled on illustration
    </Heading>
    <GuidanceBlock
      illustration={
        <SkillsCoachEssentialFeedback alt="" enableAspectRatio={true} />
      }
      illustrationType="scene"
      text={guidanceBlockText}
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
      Aspect ratio locked on component
    </Heading>
    <GuidanceBlock
      illustration={
        <SkillsCoachEssentialFeedback alt="" enableAspectRatio={true} />
      }
      illustrationType="scene"
      text={guidanceBlockText}
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
      lockAspectRatio
      persistent
    />
    <Heading tag="h2" variant="heading-4">
      Aspect ratio stacked with scenes
    </Heading>
    <div style={{ display: "flex", gap: "36px" }}>
      <GuidanceBlock
        layout="stacked"
        illustrationType="scene"
        illustration={<HumanityAtWork alt="" />}
        text={guidanceBlockText}
        lockAspectRatio
        actions={{
          primary: {
            label: "Action",
            onClick: () => {
              alert("tada: 🎉")
            },
          },
          secondary: {
            label: "Secondary action",
            href: "#",
          },
        }}
        persistent
      />
      <GuidanceBlock
        layout="stacked"
        illustrationType="scene"
        illustration={<Communication alt="" />}
        text={guidanceBlockText}
        lockAspectRatio
        actions={{
          primary: {
            label: "Action",
            onClick: () => {
              alert("tada: 🎉")
            },
          },
          secondary: {
            label: "Secondary action",
            href: "#",
          },
        }}
        persistent
      />
    </div>
    <Heading tag="h2" variant="heading-4">
      Aspect ratio stacked with mixed scenes
    </Heading>
    <div style={{ display: "flex", gap: "36px" }}>
      <GuidanceBlock
        layout="stacked"
        illustrationType="scene"
        illustration={<SkillsCoachEssentialFeedback alt="" />}
        lockAspectRatio
        text={guidanceBlockText}
        actions={{
          primary: {
            label: "Action",
          },
          secondary: {
            label: "Secondary action",
            href: "#",
          },
        }}
        persistent
      />
      <GuidanceBlock
        layout="stacked"
        illustrationType="scene"
        illustration={<HumanityAtWork alt="" />}
        lockAspectRatio
        text={guidanceBlockText}
        actions={{
          primary: {
            label: "Action",
          },
          secondary: {
            label: "Secondary action",
            href: "#",
          },
        }}
        persistent
      />
    </div>
  </div>
)

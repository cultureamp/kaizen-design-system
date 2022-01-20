import * as React from "react"

import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import { Informative, HumanityAtWork } from "@kaizen/draft-illustration"
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

export const Default = () => (
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
  />
)

Default.storyName = "Default"

export const DefaultWithoutActions = () => (
  <GuidanceBlock
    illustration={<Informative alt="" />}
    text={guidanceBlockText}
  />
)

DefaultWithoutActions.storyName = "Default Without Actions"

export const WithoutActionArrowButton = () => (
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
    withActionButtonArrow={false}
  />
)

WithoutActionArrowButton.storyName = "Without Action Arrow Button"

export const WithoutMaxWidth = () => (
  <GuidanceBlock
    illustration={<Informative alt="" />}
    text={guidanceBlockText}
    noMaxWidth
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
)

WithoutMaxWidth.storyName = "Without Max Width"

export const Persistent = () => (
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
    }}
    persistent
  />
)

Persistent.storyName = "Persistent"

export const SecondaryAction = () => (
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
    persistent
    withActionButtonArrow={false}
  />
)

SecondaryAction.storyName = "Secondary Action"

export const SceneIllustration = () => (
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
)

SceneIllustration.storyName = "Scene Illustration"

export const InlineLayout = () => (
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
)

InlineLayout.storyName = "Inline Content Layout"

export const StackedLayout = () => (
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
    noMaxWidth
  />
)

StackedLayout.storyName = "Stacked Content Layout"

export const TwoStackedLayout = () => (
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
)

TwoStackedLayout.storyName = "Two Stacked Content Layout"

export const StackedLayoutWithScene = () => (
  <GuidanceBlock
    layout="stacked"
    illustration={<HumanityAtWork alt="" />}
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
)

StackedLayoutWithScene.storyName = "Stacked Layout With Scene Illustration"

export const PositiveMood = () => (
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
    }}
    variant="positive"
  />
)

PositiveMood.storyName = "Positive"

export const NegativeMood = () => (
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
    }}
    variant="negative"
  />
)

NegativeMood.storyName = "Negative"

export const InformativeMood = () => (
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
    }}
    variant="informative"
  />
)

InformativeMood.storyName = "Informative"

export const CautionaryMood = () => (
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
    }}
    variant="cautionary"
  />
)

CautionaryMood.storyName = "Cautionary"

export const AssertiveMood = () => (
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
    }}
    variant="assertive"
  />
)

AssertiveMood.storyName = "Assertive"

export const ProminentMood = () => (
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
    }}
    variant="prominent"
  />
)

ProminentMood.storyName = "Prominent"

export const WithCustomDescription = () => (
  <GuidanceBlock
    illustration={<Informative alt="" />}
    text={{
      title: "Informative guidance block title",
      description: (
        <div style={{ color: "darkorchid" }}>
          Providing further details to suggest a path forward or promote a
          feature that allows the user to progress with confidence.
        </div>
      ),
    }}
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
)
WithCustomDescription.storyName = "With custom description"

export const WithTooltip = () => (
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
        },
        icon: externalLinkIcon,
      },
      secondary: {
        label: "Secondary action",
        href: "#",
      },
    }}
  />
)

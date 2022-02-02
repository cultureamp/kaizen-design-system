import * as React from "react"

import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import {
  HumanityAtWork,
  SkillsCoachEssentialFeedback,
  Communication,
} from "@kaizen/draft-illustration"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
const externalLinkIcon =
  require("@kaizen/component-library/icons/external-link.icon.svg").default

export default {
  title: `${CATEGORIES.components}/Guidance Block/Aspect Ratio Test`,
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

export const defaultStory = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <GuidanceBlock
      illustration={
        <SkillsCoachEssentialFeedback alt="" enableAspectRatio={true} />
      }
      illustrationType="scene"
      text={guidanceBlockText}
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
  </div>
)

export const TopAndBelowWithAspectRatio = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <GuidanceBlock
      illustration={
        <SkillsCoachEssentialFeedback alt="" enableAspectRatio={true} />
      }
      illustrationType="scene"
      text={guidanceBlockText}
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
    <GuidanceBlock
      illustration={<HumanityAtWork alt="" enableAspectRatio={true} />}
      illustrationType="scene"
      text={guidanceBlockText}
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
  </div>
)

export const TopAndBelowWithoutAspectRatio = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
    <GuidanceBlock
      illustration={
        <SkillsCoachEssentialFeedback alt="" enableAspectRatio={false} />
      }
      illustrationType="scene"
      text={guidanceBlockText}
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
    <GuidanceBlock
      illustration={<HumanityAtWork alt="" enableAspectRatio={false} />}
      illustrationType="scene"
      text={guidanceBlockText}
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
  </div>
)

export const StackedMixedScenesWithAspectRatio = () => (
  <div style={{ display: "flex", gap: "36px" }}>
    <GuidanceBlock
      layout="stacked"
      illustrationType="scene"
      illustration={
        <SkillsCoachEssentialFeedback alt="" enableAspectRatio={true} />
      }
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
      illustration={<HumanityAtWork alt="" enableAspectRatio={true} />}
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
)

export const StackedMixedScenesWithoutAspectRatio = () => (
  <div style={{ display: "flex", gap: "36px" }}>
    <GuidanceBlock
      layout="stacked"
      illustrationType="scene"
      illustration={
        <SkillsCoachEssentialFeedback alt="" enableAspectRatio={false} />
      }
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
      illustration={<HumanityAtWork alt="" enableAspectRatio={false} />}
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
)

export const StackedLandscapeScenesWithAspectRatio = () => (
  <div style={{ display: "flex", gap: "36px" }}>
    <GuidanceBlock
      layout="stacked"
      illustrationType="scene"
      illustration={<HumanityAtWork alt="" enableAspectRatio={true} />}
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
      illustrationType="scene"
      illustration={<Communication alt="" enableAspectRatio={true} />}
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

export const StackedLandscapeScenesWithoutAspectRatio = () => (
  <div style={{ display: "flex", gap: "36px" }}>
    <GuidanceBlock
      layout="stacked"
      illustrationType="scene"
      illustration={<HumanityAtWork alt="" enableAspectRatio={false} />}
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
      illustrationType="scene"
      illustration={<Communication alt="" enableAspectRatio={false} />}
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

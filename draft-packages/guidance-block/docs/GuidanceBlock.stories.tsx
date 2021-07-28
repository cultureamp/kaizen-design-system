import * as React from "react"

import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import { Informative } from "@kaizen/draft-illustration"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
const externalLinkIcon = require("@kaizen/component-library/icons/external-link.icon.svg")
  .default

export default {
  title: "Components/Guidance Block",
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
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A39077"
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

export const Prominent = () => (
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

Prominent.storyName = "Prominent"

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

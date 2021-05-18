import * as React from "react"

import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import { Informative } from "@kaizen/draft-illustration"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
const externalLinkIcon = require("@kaizen/component-library/icons/external-link.icon.svg")
  .default

export default {
  title: "GuidanceBlock (React)",
  component: GuidanceBlock,
  parameters: {
    info: {
      text: `
        import { GuidanceBlock } from "@kaizen/draft-guidance-block";
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A39077"
    ),
  },
  decorators: [
    withDesign,
    story => (
      <div style={{ display: "flex", justifyContent: "center" }}>{story()}</div>
    ),
  ],
}

const guidanceBlockText = {
  title: "This is the Guidance block title",
  description:
    "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, " +
    "qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
}

const Default = () => (
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
    noMaxWidth
  />
)

const DefaultWithoutActions = () => (
  <GuidanceBlock
    illustration={<Informative alt="" />}
    text={guidanceBlockText}
  />
)

const WithoutActionArrowButton = () => (
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

const WithoutMaxWidth = () => (
  <GuidanceBlock
    illustration={<Informative alt="" />}
    text={guidanceBlockText}
    noMaxWidth
  />
)

const Persistent = () => (
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

const SecondaryAction = () => (
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

const Prominent = () => (
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

const WithCustomDescription = () => (
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
    noMaxWidth
  />
)

const WithTooltip = () => (
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

Default.storyName = "Default"

Default.parameters = {
  backgrounds: { default: "Stone" },
}

DefaultWithoutActions.storyName = "Default Without Actions"

DefaultWithoutActions.parameters = {
  backgrounds: { default: "Stone" },
}

Persistent.storyName = "Persistent"

Persistent.parameters = {
  backgrounds: { default: "Stone" },
}

WithoutActionArrowButton.storyName = "Without Action Arrow Button"

WithoutActionArrowButton.parameters = {
  backgrounds: { default: "Stone" },
}

WithoutMaxWidth.storyName = "Without Max Width"

WithoutMaxWidth.parameters = {
  backgrounds: { default: "Stone" },
}

SecondaryAction.storyName = "Secondary Action"

SecondaryAction.parameters = {
  backgrounds: { default: "Stone" },
}

Prominent.storyName = "Prominent"

Prominent.parameters = {
  backgrounds: { default: "Stone" },
}

WithCustomDescription.storyName = "With custom description"

WithCustomDescription.paramters = {
  backgrounds: { default: "Stone" },
}

export {
  Default,
  DefaultWithoutActions,
  WithoutMaxWidth,
  WithoutActionArrowButton,
  Persistent,
  SecondaryAction,
  Prominent,
  WithCustomDescription,
  WithTooltip,
}

import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"

import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import { assetUrl } from "@kaizen/hosted-assets"
import { withDesign } from "storybook-addon-designs"
import { Informative } from "@kaizen/draft-illustration"
import { figmaEmbed } from "../../../storybook/helpers"

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
  decorators: [withDesign],
}

const guidanceBlockText = {
  title: "This is the Guidance block title",
  description:
    "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, " +
    "qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
}

const guidanceBlockImg = assetUrl("illustrations/spot/moods-informative.svg")

const Default = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: guidanceBlockImg, alt: "Guidance block" }}
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
  </div>
)

const DefaultWithoutActions = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: guidanceBlockImg, alt: "Guidance block" }}
      text={guidanceBlockText}
    />
  </div>
)

const WithoutActionArrowButton = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: guidanceBlockImg, alt: "Guidance block" }}
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
  </div>
)

const WithoutMaxWidth = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: guidanceBlockImg, alt: "" }}
      text={guidanceBlockText}
      noMaxWidth
    />
  </div>
)

const Persistent = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: guidanceBlockImg, alt: "Information illustration" }}
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
  </div>
)

const SecondaryAction = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: guidanceBlockImg, alt: "Information illustration" }}
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
  </div>
)

const Prominent = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: guidanceBlockImg, alt: "Information illustration" }}
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

const WithSpotIllustration = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      text={guidanceBlockText}
      actions={{
        primary: {
          label: "Action",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
      }}
      illustration={"Informative"}
    />
  </div>
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

export {
  Default,
  DefaultWithoutActions,
  WithoutMaxWidth,
  WithoutActionArrowButton,
  Persistent,
  SecondaryAction,
  Prominent,
  WithSpotIllustration,
}

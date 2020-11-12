import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"

import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import { assetUrl } from "@kaizen/hosted-assets"

export default {
  title: "GuidanceBlock (React)",
  component: GuidanceBlock,
  parameters: {
    info: {
      text: `
        import { GuidanceBlock } from "@kaizen/draft-guidance-block";
      `,
    },
  },
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

Default.storyName = "Default"

Default.parameters = {
  backgrounds: [
    {
      name: "Stone",
      value: colorTokens.kz.color.stone,
      default: true,
    },
  ],
}

Persistent.storyName = "Persistent"

Persistent.parameters = {
  backgrounds: [
    {
      name: "Stone",
      value: colorTokens.kz.color.stone,
      default: true,
    },
  ],
}

WithoutActionArrowButton.storyName = "Without Action Arrow Button"

WithoutActionArrowButton.parameters = {
  backgrounds: [
    {
      name: "Stone",
      value: colorTokens.kz.color.stone,
      default: true,
    },
  ],
}

SecondaryAction.storyName = "Secondary Action"

SecondaryAction.parameters = {
  backgrounds: [
    {
      name: "Stone",
      value: colorTokens.kz.color.stone,
      default: true,
    },
  ],
}

Prominent.storyName = "Prominent"

Prominent.parameters = {
  backgrounds: [
    {
      name: "Stone",
      value: colorTokens.kz.color.stone,
      default: true,
    },
  ],
}

export {
  Default,
  WithoutActionArrowButton,
  Persistent,
  SecondaryAction,
  Prominent,
}

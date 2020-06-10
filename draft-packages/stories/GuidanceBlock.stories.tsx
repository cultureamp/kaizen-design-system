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
    "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
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
          onClick: () => alert("tada: 🎉"),
        },
      }}
      persistent
      withActionButtonArrow={false}
    />
  </div>
)

Default.story = {
  name: "Default",
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

Persistent.story = {
  name: "Persistent",
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

WithoutActionArrowButton.story = {
  name: "Without Action Arrow Button",
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

SecondaryAction.story = {
  name: "Secondary Action",
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

export { Default, WithoutActionArrowButton, Persistent, SecondaryAction }

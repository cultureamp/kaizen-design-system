import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"

import { GuidanceBlock } from "@kaizen/draft-guidance-block"
const bannerImg = require("@kaizen/component-library/stories/illustrations/team.png")
const meetingImg = require("@kaizen/component-library/stories/illustrations/meeting-voices.png")

export default {
  title: "GuidanceBlock (React)",
}

const Default = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: bannerImg, alt: "Guidance block" }}
      text={{
        title: "This is the Guidance block title",
        description:
          "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
      }}
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

const Persistent = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <GuidanceBlock
      img={{ src: meetingImg, alt: "Meeting illustration" }}
      text={{
        title: "You're using the updated navigation",
        description:
          "This beta is to test out the new navigation, read about our thinking behind the change. And let us know if you have any feedback",
      }}
      actions={{
        primary: {
          label: "Turn on for the whole org",
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
      img={{ src: meetingImg, alt: "Meeting illustration" }}
      text={{
        title: "You're using the updated navigation",
        description:
          "This beta is to test out the new navigation, read about our thinking behind the change. And let us know if you have any feedback",
      }}
      actions={{
        primary: {
          label: "Turn on for the whole org",
          onClick: () => {
            alert("tada: 🎉")
          },
        },
        secondary: {
          label: "Turn off new navigation",
          onClick: () => alert("tada: 🎉"),
        },
      }}
      persistent
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

export { Default, Persistent, SecondaryAction }

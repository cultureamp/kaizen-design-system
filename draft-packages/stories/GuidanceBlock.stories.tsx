import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"

import { GuidanceBlock } from "@kaizen/component-library/draft"
const bannerImg = require("@kaizen/component-library/stories/illustrations/team.png")

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
      button={{
        label: "Action",
        onClick: () => {
          alert("tada: 🎉")
        },
      }}
      onDismiss={() => {
        /* do nothing */
      }}
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

export { Default }

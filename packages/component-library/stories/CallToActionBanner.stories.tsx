import * as React from "react"

import { CallToActionBanner } from "@kaizen/component-library/draft"
const bannerImg = require("@kaizen/component-library/stories/illustrations/@2x_single_point_onboard_survey.png")

export default {
  title: "CallToActionBanner (React)",
}

export const Default = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
    <CallToActionBanner
      img={{ src: bannerImg, alt: "Call to action banner" }}
      text={{
        title: "This is the call to action title",
        description:
          "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
      }}
      button={{
        label: "Action!",
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

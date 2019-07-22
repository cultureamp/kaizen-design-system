import * as React from "react"
import { Helmet } from "react-helmet"
import "normalize.css"

export default ({ pageTitle = "Kaizen Design System" }) => (
  <Helmet>
    {/* Load Culture Amp brand fonts: https://cultureamp.atlassian.net/wiki/spaces/Prod/pages/700482798/CA+Font+Service */}
    <link
      rel="stylesheet"
      type="text/css"
      href="https://d1vmr11cgrgrrj.cloudfront.net/7834392/css/fonts.css"
    ></link>
    <title>{pageTitle}</title>
  </Helmet>
)

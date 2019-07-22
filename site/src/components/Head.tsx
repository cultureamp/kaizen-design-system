import * as React from "react"
import { Helmet } from "react-helmet"
import "normalize.css"

type HeadProps = {
  pageTitle?: string
}

const Head: React.SFC<HeadProps> = ({ pageTitle = "" }) => (
  <Helmet>
    {/* Load Culture Amp brand fonts: https://cultureamp.atlassian.net/wiki/spaces/Prod/pages/700482798/CA+Font+Service */}
    <link
      rel="stylesheet"
      type="text/css"
      href="https://d1vmr11cgrgrrj.cloudfront.net/7834392/css/fonts.css"
    ></link>
    <title>{pageTitle && `${pageTitle} - `}Kaizen Design System</title>
  </Helmet>
)

export default Head

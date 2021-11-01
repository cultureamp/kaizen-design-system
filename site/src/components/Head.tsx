import { graphql, useStaticQuery } from "gatsby"
import "normalize.css"
import * as React from "react"
import { Helmet } from "react-helmet"
const favicon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")

type HeadProps = {
  pageTitle?: string
}

const Head: React.SFC<HeadProps> = ({ pageTitle = "" }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Helmet>
      {/* Load Culture Amp brand fonts:
      https://cultureamp.atlassian.net/wiki/spaces/Prod/pages/700482798/CA+Font+Service */}
      <html lang="en" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://d1vmr11cgrgrrj.cloudfront.net/7834392/css/fonts.css"
      ></link>
      <link rel="shortcut icon" type="image/png" href={favicon}></link>
      <title>
        {pageTitle && `${pageTitle} - `}
        {site.siteMetadata.title}
      </title>
    </Helmet>
  )
}

export default Head

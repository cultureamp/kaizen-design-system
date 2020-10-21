import { MDXProvider } from "@mdx-js/react"
import classnames from "classnames"
import * as React from "react"
import markdownComponents from "./markdownComponents"

import styles from "./ContentMarkdownSection.scss"
const markdownStyles = require("../styles/markdown.scss")

const ContentMarkdownSection: React.SFC = ({ children }) => (
  <div
    className={classnames(
      styles.contentInner,
      markdownStyles.markdownContainer
    )}
  >
    <MDXProvider components={markdownComponents}>{children}</MDXProvider>
  </div>
)

export default ContentMarkdownSection

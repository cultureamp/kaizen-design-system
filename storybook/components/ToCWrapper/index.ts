import BackToTop from "./BackToTop"
import DocsContainerHOC from "./DocsContainerHOC"
import TableOfContents from "./TableOfContents"

const withTableOfContents = (): any => ({
  docs: {
    container: DocsContainerHOC,
  },
})

export { BackToTop, DocsContainerHOC, TableOfContents, withTableOfContents }

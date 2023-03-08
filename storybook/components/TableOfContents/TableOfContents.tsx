import React, { useEffect } from "react"
import tocbot from "tocbot"

export const TableOfContents = (): JSX.Element | null => {
  const [headings, setHeadings] = React.useState<Element[]>([])
  const headingSelector = "h2"

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll(headingSelector)
    )
    setHeadings(headingElements)
  }, [])

  useEffect(() => {
    tocbot.init({
      headingSelector,
      tocSelector: ".toc-list",
      contentSelector: ".sbdocs-content",
      orderedList: false,
      onClick: event => {
        event.preventDefault()
      },
    })

    return (): void => {
      tocbot.destroy()
    }
  }, [headings])

  if (headings.length < 1) return null

  return (
    <aside className="p-16">
      <div className="sticky right-0 top-12">
        <p>On this page</p>
        <div className="toc-list"></div>
      </div>
    </aside>
  )
}

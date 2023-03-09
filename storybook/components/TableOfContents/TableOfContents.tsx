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
      tocSelector: ".tocbot-list",
      contentSelector: ".tocbot-content",
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
    <div className="tocbot-container sticky right-0 top-12">
      <p>On this page</p>
      <div className="tocbot-list"></div>
    </div>
  )
}

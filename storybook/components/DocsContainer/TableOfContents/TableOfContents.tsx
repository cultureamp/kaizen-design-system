import React, { useEffect } from "react"
import tocbot from "tocbot"
import styles from "./TableOfContents.module.scss"

export const TableOfContents = (): JSX.Element | null => {
  const [headings, setHeadings] = React.useState<Element[]>([])
  const headingSelector = "h2, h3, h4, h5, h6"

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
      listClass: styles.list,
      listItemClass: styles.listItem,
      linkClass: styles.link,
      activeLinkClass: styles.activeLink,
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
    <div className="tocbot-container pl-12 pb-1 border-gray-300 border-solid border-y-w-none border-r-w-none border-l-[1px]">
      <h2 className="font-family-paragraph text-paragraph-xs text-gray-600 leading-heading-5 font-weight-paragraph-bold mt-0 mb-8">
        On this page
      </h2>
      <div className="tocbot-list"></div>
    </div>
  )
}

import React, { useEffect } from "react"
import tocbot from "tocbot"
import styles from "./TableOfContents.module.scss"

export const TableOfContents = (): JSX.Element | null => {
  const [headings, setHeadings] = React.useState<Element[]>([])
  const headingSelector = "h2, h3"

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
    <div className="tocbot-container kz-pl-12 kz-pb-1 kz-border-gray-300 kz-border-solid kz-border-y-w-none kz-border-r-w-none kz-border-l-[1px]">
      <h2 className="kz-font-family-paragraph kz-text-paragraph-xs kz-text-gray-600 kz-leading-heading-5 kz-font-weight-paragraph-bold kz-mt-0 kz-mb-8">
        On this page
      </h2>
      <div className="tocbot-list"></div>
    </div>
  )
}

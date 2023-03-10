import React, { useEffect } from "react"
import { Unstyled } from "@storybook/blocks"
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
      listClass: "m-0 p-0",
      listItemClass: "list-none mb-6",
      linkClass:
        "font-family-paragraph leading-paragraph text-paragraph-sm text-blue-500 underline decoration-inherit",
      activeLinkClass: "text-blue-600",
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
    <>
      {/* This is due to Unstyled typed as a being a FC pre-react-18 */}
      {/* @ts-ignore */}
      <Unstyled>
        <div className="tocbot-container sticky right-0 top-12 pl-12 pb-1 border-gray-300 border-solid border-y-w-none border-r-w-none border-l-[1px]">
          <h2 className="font-family-paragraph text-paragraph-xs text-gray-600 leading-heading-5 font-weight-paragraph-bold mt-0 mb-8">
            On this page
          </h2>
          <div className="tocbot-list"></div>
        </div>
      </Unstyled>
    </>
  )
}

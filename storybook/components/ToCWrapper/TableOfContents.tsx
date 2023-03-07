import React, { useEffect } from "react"
import tocbot from "tocbot"

const defaultConfiguration = {
  tocSelector: ".toc-list",
  contentSelector: ".sbdocs-content",
  headingSelector: ".sbdocs-h2",
}

type TableOfContentsProps = React.PropsWithChildren<{
  title?: React.ReactNode
  config?: tocbot.IStaticOptions
}>

const TableOfContents = React.forwardRef(
  (
    {
      title = "Table of contents",
      config = {},
      children,
      ...rest
    }: TableOfContentsProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const [headings, setHeadings] = React.useState<Element[]>([])

    const configuration = {
      ...defaultConfiguration,
      ...config,
    }

    useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll(configuration.headingSelector)
      )
      setHeadings(headingElements)
    }, [])

    React.useEffect(() => {
      if (headings.length > 1) {
        tocbot.init({
          ...configuration,
          onClick: event => {
            event.preventDefault()
            const hash = (event.target as HTMLAnchorElement).hash
            const id = hash?.substr(1)
            const element = document.getElementById(id)
            setTimeout(() => {
              element?.focus()
              element?.scrollIntoView()
            }, 500)
          },
        })

        return (): void => {
          tocbot.destroy()
        }
      }
    }, [headings])

    if (headings.length < 1) return null

    return (
      <div
        {...rest}
        data-show={headings.length > 1}
        ref={ref}
        className="sticky right-0 top-12"
      >
        <p>{title}</p>
        <div className="toc-list"></div>
      </div>
    )
  }
)

export default TableOfContents

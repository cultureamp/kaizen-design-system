import React, { useLayoutEffect } from "react"

const BackToTop = ({
  children,
}: {
  children?: JSX.Element
}): JSX.Element | null => {
  const [visible, isVisible] = React.useState(false)

  const onScroll = (): void => {
    isVisible(() => window.pageYOffset > 300)
  }

  useLayoutEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={(): void =>
        window.scroll({ top: 0, left: 0, behavior: "smooth" })
      }
    >
      {children || (
        <>
          <span aria-hidden={true}>↑</span> <span>Back to top</span>
        </>
      )}
    </button>
  )
}

export default BackToTop

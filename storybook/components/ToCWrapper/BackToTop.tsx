import React from "react"

const BackToTop = ({
  children,
  ...rest
}: {
  children?: JSX.Element
}): JSX.Element => {
  const [visible, isVisible] = React.useState(false)

  const onScroll = (): void => {
    isVisible(() => window.pageYOffset > 300)
  }

  React.useLayoutEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) {
    return <></>
  }

  return (
    <button
      onClick={(): void =>
        window.scroll({ top: 0, left: 0, behavior: "smooth" })
      }
      {...rest}
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

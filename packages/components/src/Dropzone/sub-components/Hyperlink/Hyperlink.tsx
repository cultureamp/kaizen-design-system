import React from "react"
import classNames from "classnames"

interface HyperlinkProps {
  text: string,
  href?: `https://${string}`
  openNewTab?: boolean,
  handleOnClick?: () => void
}

export const Hyperlink = ({
  text,
  href,
  openNewTab = false,
  handleOnClick
}: HyperlinkProps): JSX.Element => {
  if (href) {
    return (
      <a
        href={href}
        aria-label={text}
        target={openNewTab ? "_blank" : "_self"}
        className="text-blue-500 underline hover:underline"
      >
        {text}
      </a>
    )
  }
  if (handleOnClick) {
    return (
      <button
        onClick={handleOnClick}
        aria-label={text}
        tabIndex={0}
        className={classNames({
          "p-0 rounded-[2px] focus:border-w-default focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 bg-transparent border-none outline-none cursor-pointer text-blue-500 underline hover:underline": true,
        })}
      >
        {text}
      </button>
    )
  }
  return <span className="text-blue-500 underline">{text}</span>
}


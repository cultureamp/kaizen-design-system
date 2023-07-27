import React, { useContext } from "react"
import { SVG, SVGProps } from "~components/SVG"
import { SVGContext } from "~components/KaizenProvider/SVGProvider"

export const AddIcon = (props: Omit<SVGProps, "children">): JSX.Element => {
  const { icons, setIcons } = useContext(SVGContext)

  const addIconId = "add-icon"

  if (!icons.includes(addIconId)) {
    console.log("ADDING SYMBOL")
    setIcons([addIconId])
    return (
      <>
        <SVG {...props}>
          <symbol id={addIconId}>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm4 8.8h-3.2V14H9.2v-3.2H6V9.2h3.2V6h1.6v3.2H14v1.6Z"
            />
          </symbol>
        </SVG>
      </>
    )
  } else {
    console.log("ADDING USE")
    return (
      <svg color={"green"} viewBox="0 0 44 44">
        <use href="#add-icon" />
      </svg>
    )
  }
}

AddIcon.displayName = "AddIcon"

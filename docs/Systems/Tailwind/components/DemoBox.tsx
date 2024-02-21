import React from "react"

type Props = {
  classnameOverride?: string
}

const DemoBox = ({ classnameOverride }: Props): React.ReactElement => (
  <div
    className={`kz-h-100 kz-w-full kz-rounded kz-bg-blue-200 ${
      classnameOverride ? classnameOverride : ""
    }`}
  />
)

export default DemoBox

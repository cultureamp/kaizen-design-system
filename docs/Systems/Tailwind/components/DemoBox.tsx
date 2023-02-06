import React from "react"

type Props = {
  classnameOverride?: string
}

const DemoBox = ({ classnameOverride }: Props): React.ReactElement => (
  <div
    className={`h-100 w-100 rounded-default bg-blue-200 ${
      classnameOverride ? classnameOverride : ""
    }`}
  />
)

export default DemoBox

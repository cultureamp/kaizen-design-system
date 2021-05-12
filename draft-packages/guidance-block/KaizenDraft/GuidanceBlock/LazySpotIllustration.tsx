import * as React from "react"
import { SpotIllustration } from "@kaizen/draft-illustration"

const Error = () => (
  <svg height="155" width="155" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="155" height="155" fill="#FF9966" />
  </svg>
)

const LazySpotIllustration = ({
  illustration,
}: {
  illustration: SpotIllustration
}) => {
  const Spot = React.lazy(() =>
    import("@kaizen/draft-illustration").then(module => ({
      default: module[illustration] || Error,
    }))
  )
  return <Spot alt="" />
}

export default LazySpotIllustration

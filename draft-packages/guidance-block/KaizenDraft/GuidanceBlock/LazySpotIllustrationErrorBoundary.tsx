import * as React from "react"

const Error = () => (
  <svg height="155" width="155" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="155" height="155" fill="#ff6347" />
  </svg>
)

class LazySpotIllustrationErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: boolean }
> {
  state = {
    error: false,
  }
  constructor(props) {
    super(props)
  }

  static getDerivedStateFromError(error) {
    return { error: true }
  }

  render() {
    if (this.state.error) {
      return <Error />
    }

    return this.props.children
  }
}

export default LazySpotIllustrationErrorBoundary

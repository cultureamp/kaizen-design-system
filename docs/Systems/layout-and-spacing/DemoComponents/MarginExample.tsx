import React from "react"
import { Button } from "~components/Button"

export const MarginExample = (): JSX.Element => (
  <div className="kz-flex">
    <div className="kz-mr-12">
      <Button label="Button 1" />
    </div>
    <Button label="Button 2" />
  </div>
)

MarginExample.displayName = "MarginExample"

import React from "react"
import { Button } from "@kaizen/button"

const MarginExample = (): React.ReactNode => (
  <div className="flex">
    <div className="mr-12">
      <Button label="Button 1" />
    </div>
    <Button label="Button 2" />
  </div>
)

export default MarginExample

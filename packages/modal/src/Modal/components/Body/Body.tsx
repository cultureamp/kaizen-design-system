import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { useScrollWithShadow } from "../../../hooks/useScrollWithShadow"
import styles from "./Body.scss"
export interface BodyProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  hasFormControls?: boolean
}

export const Body: React.FC<BodyProps> = ({
  children,
  hasFormControls = false,
  classNameOverride,
}): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [showBoxShadow, setShowBoxShadow] = React.useState(false)
  const { boxShadow, onScrollHandler } = useScrollWithShadow()

  // Only show the box shadow when there is no overflow
  React.useEffect(() => {
    const scrollHeight = ref.current?.scrollHeight
    const clientHeight = ref.current?.clientHeight
    setShowBoxShadow(scrollHeight !== clientHeight)
  }, [])

  return (
    <div
      ref={ref}
      onScroll={onScrollHandler}
      className={classnames(
        styles.body,
        hasFormControls && styles.formBody,
        classNameOverride
      )}
      style={showBoxShadow ? { boxShadow } : undefined}
    >
      {children}
    </div>
  )
}

Body.displayName = "Body"

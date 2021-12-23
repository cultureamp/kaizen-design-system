import React, { useEffect, useRef, useState, MouseEvent } from "react"
import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import styles from "./CheckableIconButton.scss"

type Props = {
  automationId?: string
  checked?: boolean
  icon: React.SVGAttributes<SVGSymbolElement>
  label: string
  onClick?: (e: MouseEvent | React.KeyboardEvent) => void
  onMouseDown?: (e: MouseEvent) => void
  onKeyboardSpace: (e: React.KeyboardEvent) => void
  tabIndex: number
  onFocus: (e: React.KeyboardEvent, index: number) => void
  index: number
  componentRef: React.RefObject<HTMLDivElement>
}

export function CheckableIconButton({
  automationId,
  checked,
  icon,
  label,
  onClick,
  onMouseDown,
  onKeyboardSpace,
  tabIndex,
  onFocus,
  index,
  componentRef,
}: Props) {
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    if (onClick) {
      e.preventDefault()
      onClick && onClick(e)
    }
  }
  const onMouseDownHandler: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent
  ) => {
    onMouseDown && onMouseDown(e)
  }
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (componentRef && componentRef.current) {
      if (componentRef.current.contains(document.activeElement)) {
        if (tabIndex === 0) {
          buttonRef?.current?.focus()
        }
      }
    }
  }, [tabIndex, componentRef])

  return (
    <span className={styles.container}>
      <button
        className={classNames(styles.button, styles.iconButton, {
          [styles.checked]: checked,
          "focus-visible": document.activeElement === buttonRef.current,
        })}
        onClick={onClickHandler}
        onMouseDown={onMouseDownHandler}
        type="button"
        data-automation-id={automationId}
        title={label}
        aria-label={label}
        tabIndex={tabIndex}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === " ") {
            if (onKeyboardSpace) {
              onKeyboardSpace(e)
              setIsActive(!isActive)
            } else if (onClick) {
              e.preventDefault()
              onClick(e)
            }
          } else {
            onFocus(e, index)
          }
        }}
        ref={buttonRef}
        aria-pressed={isActive ? "true" : "false"}
      >
        <span className={styles.content}>
          <span className={styles.iconWrapper}>
            <Icon icon={icon} role="presentation" />
          </span>
        </span>
      </button>
    </span>
  )
}

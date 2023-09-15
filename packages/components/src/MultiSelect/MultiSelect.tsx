import React, { useState, HTMLAttributes, useRef, useId } from "react"
import classnames from "classnames"
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types"
import { Heading } from "~components/Heading"
import { OverrideClassName } from "~types/OverrideClassName"
import { MultiSelectToggle } from "./subcomponents/MultiSelectToggle"
import { Popover, useFloating } from "./subcomponents/Popover"
import styles from "./MultiSelect.module.scss"

export type MultiSelectProps = {
  label: string
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelect = ({
  label,
  id: propsId,
  classNameOverride,
  ...restProps
}: MultiSelectProps): JSX.Element => {
  const id = propsId ?? useId()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const { refs } = useFloating()

  const handleToggleClick = (): void => setIsOpen(!isOpen)
  const handleClose = (): void => setIsOpen(false)

  const onClickOutside: ReactFocusOnProps["onClickOutside"] = e => {
    const toggle = refs.reference.current as Node
    const isInToggle = toggle.contains(e.target as HTMLElement)
    if (!isInToggle) handleClose()
  }

  return (
    <div id={id} className={classnames(classNameOverride)} {...restProps}>
      <Heading tag="span" variant="heading-6" id={`${id}--label`}>
        {label}
      </Heading>

      <div ref={refs.setReference} className={styles.toggleContainer}>
        <MultiSelectToggle
          ref={toggleButtonRef}
          id={`${id}--toggle`}
          aria-labelledby={`${id}--label`}
          aria-controls={`${id}--popover`}
          onClick={handleToggleClick}
          isOpen={isOpen}
        />
      </div>

      {isOpen && (
        <Popover
          refs={refs}
          id={`${id}--popover`}
          focusOnProps={{
            onClickOutside,
            onEscapeKey: handleClose,
            shards: [toggleButtonRef],
            noIsolation: true,
          }}
        >
          <button type="button">Auto focus please!</button>
          Hello, is it me your looking for?
        </Popover>
      )}
      {/* Description */}
      {/* ValidationMessage */}
    </div>
  )
}

MultiSelect.displayName = "MultiSelect"

import React, { HTMLAttributes, useId, useState } from "react"
import classnames from "classnames"
import AnimateHeight from "react-animate-height"
import { IconButton } from "~components/Button"
import { Heading } from "~components/Heading"
import { ChevronUpIcon, ChevronDownIcon } from "~components/Icon"
import { OverrideClassName } from "~types/OverrideClassName"
import { Sticky } from "../types"
import styles from "./Collapsible.module.scss"

export type CollapsibleProps = {
  children: JSX.Element | JSX.Element[] | string
  title: string
  renderHeader?: (title: string) => JSX.Element | JSX.Element[]
  open?: boolean
  group?: boolean
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  onToggle?: (open: boolean, id: string) => void
  /**
   * By default, the header will change background colour when open. When the variant
   * is set to 'clear', it will not have a background but a border-bottom will appear
   * to separate the heading from the content.
   */
  variant?: "default" | "clear"
  /**
   * Will avoid rendering the content until required (especially important when you
   * have queries inside sections).
   * Removes animation.
   */
  lazyLoad?: boolean
  /**
   * Disables internal `open` state, allowing it to be controlled in the usage.
   */
  controlled?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Collapsible = ({
  children,
  title,
  renderHeader,
  open,
  group,
  separated,
  sticky,
  noSectionPadding,
  onToggle,
  variant,
  lazyLoad,
  controlled,
  classNameOverride,
  id: propsId,
  ...restProps
}: CollapsibleProps): JSX.Element => {
  const [stateIsOpen, setIsOpen] = useState<boolean>(open ?? false)
  const getOpen = (): boolean | undefined => (controlled ? open : stateIsOpen)

  const id = propsId ?? useId()

  const handleSectionToggle = (): void => {
    const newIsOpen = !getOpen()
    if (!controlled) setIsOpen(newIsOpen)
    onToggle?.(newIsOpen, id)
  }

  const handleButtonPress = (event: React.MouseEvent): void => {
    event.stopPropagation()
    handleSectionToggle()
  }

  const buttonId = `${id}-button`
  const sectionId = `${id}-section`
  const isOpen = getOpen()
  const isContainer = !group || separated

  return (
    <div
      id={id}
      className={classnames(
        classNameOverride,
        isContainer && styles.container,
        group && !separated && styles.groupItem,
        separated && styles.separated,
        isOpen && styles.open,
        !group && styles.single
      )}
      data-testid={`collapsible-container-${id}`}
      {...restProps} // `title` is missing because it is used for the header; requires breaking change to fix
    >
      {/* Disabling these a11y linting errors because there is an IconButton that mitigates these concerns. The onClick here is just an additional layer. */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-static-element-interactions */}
      <div
        className={classnames(
          styles.header,
          isOpen && styles.open,
          sticky && styles.sticky,
          isOpen && variant === "default" && styles.defaultVariant,
          isOpen && variant === "clear" && styles.clearVariant
        )}
        style={sticky && { top: sticky.top }}
        onClick={handleSectionToggle}
        data-testid={`collapsible-header-${id}`}
      >
        {renderHeader !== undefined ? (
          renderHeader(title)
        ) : (
          <div
            className={styles.title}
            data-testid={`collapsible-button-title-${id}`}
          >
            <Heading variant="heading-4" tag="span">
              {title}
            </Heading>
          </div>
        )}
        <div>
          <IconButton
            label={title}
            icon={
              isOpen ? (
                <ChevronUpIcon role="presentation" />
              ) : (
                <ChevronDownIcon role="presentation" />
              )
            }
            type="button"
            aria-expanded={isOpen}
            aria-controls={sectionId}
            data-testid={`collapsible-button-${id}`}
            id={buttonId}
            onClick={handleButtonPress}
            classNameOverride={styles.chevronButton}
          />
        </div>
      </div>
      {(!lazyLoad || isOpen) && (
        <AnimateHeight
          height={isOpen ? "auto" : 0}
          data-testid={`collapsible-section-${id}`}
        >
          <div
            id={sectionId}
            className={classnames(
              styles.section,
              noSectionPadding && styles.noPadding
            )}
            role="region"
            aria-labelledby={buttonId}
          >
            {children}
          </div>
        </AnimateHeight>
      )}
    </div>
  )
}

Collapsible.displayName = "Collapsible"

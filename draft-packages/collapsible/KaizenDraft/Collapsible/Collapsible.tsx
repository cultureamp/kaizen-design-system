import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import AnimateHeight from "react-animate-height"
import { v4 } from "uuid"
import { IconButton } from "@kaizen/button"
import { OverrideClassName } from "@kaizen/component-base"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { Heading } from "@kaizen/typography"
import { Sticky } from "../CollapsibleGroup/CollapsibleGroup"
import styles from "./Collapsible.module.scss"

type Variant = "default" | "clear"

export interface CollapsibleProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: JSX.Element | JSX.Element[] | string
  title: string
  renderHeader?: (title: string) => JSX.Element | JSX.Element[]
  open?: boolean
  group?: boolean
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
  onToggle?: (open: boolean, id: string) => void
  /**
   * By default, the header will change background colour when open. When the variant
   * is set to 'clear', it will not have a background but a border-bottom will appear
   * to separate the heading from the content.
   */
  variant?: Variant
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
}

type State = {
  open: boolean
  id: string
}

/**
 * {@link https://cultureamp.design/components/collapsible/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-collapsible--single-collapsible-kaizen-site-demo Storybook}
 */
export class Collapsible extends React.Component<CollapsibleProps, State> {
  public state = {
    open: !!this.props.open,
    id: this.props.id || v4(),
  }

  public render(): JSX.Element {
    const {
      id: _,
      children,
      title,
      renderHeader,
      open: _propsOpen, // Unused, but extracted so as not to spread into the container
      group,
      separated,
      sticky,
      noSectionPadding,
      automationId,
      onToggle: _onToggle, // Unused, but extracted so as not to spread into the container
      variant = "default",
      lazyLoad,
      controlled: _controlled, // Unused, but extracted so as not to spread into the container
      classNameOverride,
      ...props
    } = this.props
    const { id } = this.state
    const buttonId = `${id}-button`
    const sectionId = `${id}-section`
    const open = this.getOpen()
    const isContainer = !group || separated

    return (
      <div
        id={id}
        className={classnames(
          classNameOverride,
          isContainer && styles.container,
          isContainer && sticky && styles.stickyContainer,
          group && !separated && styles.groupItem,
          separated && styles.separated,
          open && styles.open,
          !group && styles.single
        )}
        data-automation-id={automationId || `collapsible-container-${id}`}
        data-testid={automationId || `collapsible-container-${id}`}
        {...props} // `title` is missing because it is used for the header; requires breaking change to fix
      >
        {/* Disabling these a11y linting errors because there is an IconButton that mitigates these concerns. The onClick here is just an additional layer. */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
        jsx-a11y/no-static-element-interactions */}
        <div
          className={classnames(
            styles.header,
            open && styles.open,
            sticky && styles.sticky,
            open && variant === "default" && styles.defaultVariant,
            open && variant === "clear" && styles.clearVariant
          )}
          style={sticky && { top: sticky.top }}
          onClick={this.handleSectionToggle}
          data-automation-id={`collapsible-header-${id}`}
          data-testid={`collapsible-header-${id}`}
        >
          {renderHeader !== undefined ? (
            renderHeader(title)
          ) : (
            <div
              className={styles.title}
              data-automation-id={`collapsible-button-title-${id}`}
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
              icon={open ? chevronUp : chevronDown}
              type="button"
              aria-expanded={open}
              aria-controls={sectionId}
              data-automation-id={`collapsible-button-${id}`}
              data-testid={`collapsible-button-${id}`}
              id={buttonId}
              onClick={this.handleButtonPress}
              classNameOverride={styles.chevronButton}
            />
          </div>
        </div>
        {(!lazyLoad || open) && (
          <AnimateHeight
            height={open ? "auto" : 0}
            data-automation-id={`collapsible-section-${id}`}
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

  private getOpen = (): boolean | undefined =>
    this.props.controlled ? this.props.open : this.state.open

  private handleSectionToggle = (): void => {
    const { onToggle, controlled } = this.props
    const open = this.getOpen()

    onToggle && onToggle(!open, this.state.id)

    if (!controlled) {
      this.setState({
        open: !open,
      })
    }
  }

  private handleButtonPress = (event: React.MouseEvent): void => {
    event.stopPropagation()
    this.handleSectionToggle()
  }
}

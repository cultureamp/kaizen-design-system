import React, { useMemo, useState, type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { usePopper } from 'react-popper'
import { Heading } from '~components/Heading'
import { Text } from '~components/Text'
import { Icon } from '~components/__next__/Icon'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { type Placement, type PopoverSize, type PopoverVariant } from './types'
import {
  mapArrowVariantToClass,
  mapLineVariant,
  mapSizeToClass,
  mapVariantToBoxClass,
  mapVariantToIcon,
  mapVariantToIconClass,
} from './utils/classMappers'
import styles from './Popover.module.scss'

export type PopoverProps = {
  children: React.ReactNode
  /**
   * @deprecated We are no longer supporting different variants for Popover, instead there will only be a single default variant.
   */
  variant?: PopoverVariant
  placement?: Placement
  size?: PopoverSize
  heading?: string
  dismissible?: boolean
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
  singleLine?: boolean
  /**
   * @deprecated This was for customising the icon provided with variants.
   */
  customIcon?: JSX.Element
  referenceElement: HTMLElement | null
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

// Sync with styles.scss
const arrowWidth = 14
const arrowHeight = 7

/**
 * {@link https://cultureamp.design/components/popover/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-popover--default-kaizen-site-demo Storybook}
 */
export const Popover = ({
  children,
  variant = 'default',
  placement = 'top',
  size = 'small',
  heading,
  dismissible = false,
  onClose,
  singleLine = false,
  customIcon,
  referenceElement,
  classNameOverride,
  ...restProps
}: PopoverProps): JSX.Element => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles: popperStyles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
          // Ensures that the arrow doesn't go too far to the left or right
          // of the tooltip.
          padding: arrowWidth / 2 + 10,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, arrowHeight + 6],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          // Makes sure that the popover isn't flush up against the end of the
          // viewport
          padding: 8,
          altAxis: true,
          altBoundary: true,
          tetherOffset: 50,
        },
      },
      {
        name: 'flip',
        options: {
          padding: 8,
          altBoundary: true,
          fallbackPlacements: ['left', 'top', 'bottom', 'right'],
        },
      },
    ],
    placement,
  })

  return (
    <div
      ref={setPopperElement}
      style={popperStyles.popper}
      {...attributes.popper}
      className={classnames(styles.root, mapSizeToClass(size), classNameOverride)}
      {...restProps}
    >
      <div className={mapVariantToBoxClass(variant)}>
        {heading && (
          <div className={styles.header}>
            {variant !== 'default' && (
              <span className={classnames(styles.icon, mapVariantToIconClass(variant))}>
                {customIcon ?? mapVariantToIcon(variant)}
              </span>
            )}
            <Heading variant="heading-6" classNameOverride={styles.singleLine}>
              {heading}
            </Heading>
            {dismissible && (
              <button className={styles.close} onClick={onClose} type="button" aria-label="close">
                <Icon name="close" isPresentational isFilled />
              </button>
            )}
          </div>
        )}
        <Text
          tag="div"
          variant="small"
          classNameOverride={classnames(styles.container, mapLineVariant(singleLine))}
        >
          {children}
        </Text>
      </div>
      <div ref={setArrowElement} style={popperStyles.arrow} className={styles.arrowWrapper}>
        <div className={classnames(styles.arrow, mapArrowVariantToClass(variant))} />
      </div>
    </div>
  )
}

Popover.displayName = 'Popover'

type PopoverPropsWithoutRef = Omit<PopoverProps, 'referenceElement'>

/**
 * How to use:
 *
 * const [referenceElementRef, Popover] = usePopover()
 *
 * return (<>
 *   <button ref={referenceElementRef}>
 *     Hello world
 *   </button>
 *   <Popover>Hello world</Popover>
 * </>)
 *
 * The purpose of this hook is to abstract away some of the awkwardness with the
 * requirement of passing in refs with popper. We need to use `useState` instead
 * of `useRef`, which may not be immediately intuitive.
 *
 * The popper documentation to help provide more context:
 *   https://popper.js.org/react-popper/v2/hook/
 */
export const usePopover = (): [
  (element: HTMLElement | null) => void,
  (props: PopoverPropsWithoutRef) => JSX.Element | null,
] => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)

  // I guess the problem with this pattern, is that every time referenceElement
  // changes, a brand new component is generated, which would be bad for memoization.
  // In this situation however, the value is rarely going to change, and
  // popovers aren't going to include content with expensive render times.
  const PopoverWithRef = useMemo(
    // eslint-disable-next-line react/display-name
    () => (props: PopoverPropsWithoutRef) =>
      referenceElement ? <Popover {...props} referenceElement={referenceElement} /> : null,
    [referenceElement],
  )

  return [setReferenceElement, PopoverWithRef]
}

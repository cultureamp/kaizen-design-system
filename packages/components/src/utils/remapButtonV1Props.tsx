import React, { type ComponentType } from 'react'
import { size } from '@floating-ui/react-dom'
import { Badge, BadgeAnimated } from '~components/Badge'
import {
  type ButtonBadgeProps,
  type GenericButtonProps,
  type WorkingButtonProps,
  type WorkingProps,
} from '~components/Button/GenericButton'
import { LinkButton, type LinkButtonProps } from '~components/LinkButton'
import { Button, type ButtonProps } from '~components/__next__/Button'

// export const isWorkingProps = (props: WorkingButtonProps): props is WorkingProps => {
//   return props.working === true
// }

// /** Renders a badge with the given props. Determines if its a regular Badge or AnimatedBadge and renders accordingly. */
// export const renderBadge = (badge: ButtonBadgeProps): JSX.Element => {
//   const { text, animateChange, reversed, variant } = badge

//   return animateChange ? (
//     <BadgeAnimated variant={variant} reversed={reversed}>
//       {text}
//     </BadgeAnimated>
//   ) : (
//     <Badge variant={variant} reversed={reversed}>
//       {text}
//     </Badge>
//   )
// }

// export const remapV1PropsToRcButton = (oldProps: GenericButtonProps): ButtonProps => {
//   const {
//     label,
//     id,
//     primary,
//     destructive,
//     secondary,
//     disabled,
//     size,
//     badge,
//     type,
//     reversed,
//     fullWidth,
//     working,
//     icon,
//     iconPosition,
//     classNameOverride,
//     component,
//   } = oldProps

//   let workingLabel, workingLabelHidden

//   if (isWorkingProps(oldProps)) {
//     ;({ workingLabel, workingLabelHidden } = oldProps)
//   }

//   const newButtonProps = {
//     variant: primary || destructive ? 'primary' : secondary ? 'tertiary' : 'primary',
//     size: size === 'regular' ? 'large' : size === 'small' ? 'medium' : size,
//     className: classNameOverride,
//     children: component ? (
//       component
//     ) : (
//       <>
//         {label} {badge && renderBadge(badge)}
//       </>
//     ),
//     isDisabled: disabled,
//     isFullWidth: fullWidth,
//     icon: icon,
//     iconPosition: iconPosition,
//     hasHiddenLabel: false,
//     isReversed: reversed,
//     type: type,
//     ...(working !== undefined && {
//       isPending: working,
//       pendingLabel: workingLabel,
//       hasHiddenPendingLabel: workingLabelHidden,
//     }),
//     id: id,
//   }

//   return newButtonProps as ButtonProps
// }

// type CustomButtonProps = {
//   'id'?: string
//   'className': string
//   'href'?: string
//   'disabled'?: boolean
//   'onClick'?: (e: MouseEvent<any>) => void
//   'onFocus'?: (e: FocusEvent<HTMLElement>) => void
//   'onBlur'?: (e: FocusEvent<HTMLElement>) => void
//   'children'?: React.ReactNode
//   'data-testid'?: string
// }

// // export type BaseButtonProps = GenericProps &
// //   ButtonFormAttributes & {
// //     label: string
// //     primary?: boolean
// //     destructive?: boolean
// //     secondary?: boolean
// //     /** @default "regular" */
// //     size?: 'small' | 'regular'
// //     badge?: ButtonBadgeProps
// //     type?: 'submit' | 'reset' | 'button'
// //     fullWidth?: boolean
// //     iconPosition?: 'start' | 'end'
// //     icon?: JSX.Element
// //     disabled?: boolean
// //   }

// // type RenderProps = GenericButtonProps & {
// //   'additionalContent'?: React.ReactNode
// //   'iconButton'?: boolean
// //   'directionalLink'?: boolean
// //   'paginationLink'?: boolean
// //   'isActive'?: boolean
// //   'aria-describedby'?: string
// // }

// const renderCustomComponent = (
//   CustomComponent: ComponentType<CustomButtonProps>,
//   props: RenderProps,
//   ref: Ref<HTMLSpanElement>,
// ): JSX.Element => {
//   const passedInProps = {
//     'id': props.id,
//     'className': buttonClass(props),
//     'disabled': props.disabled,
//     'href': props.href,
//     'onClick': props.onClick,
//     'onFocus': props.onFocus,
//     'onBlur': props.onBlur,
//     'aria-label': generateAriaLabel(props),
//     ...getCustomProps(props),
//   }

//   const [contextProps, contextRef] = useContextProps(
//     passedInProps,
//     ref,
//     // @ts-expect-error we're using span ref on link context, but that's ok because we need only sizing
//     LinkContext,
//   )
//   // @ts-expect-error Not fixing as a new Button component exists
//   // @todo: Make a wrapper and take it out of Button
//   const { linkProps } = useLink(contextProps, contextRef)

//   // Unset this because the one defined in buttonProps shows
//   // focus-visible styles on click, in future we'll style using [data-focus-visible] which is consistent across browsers
//   delete linkProps.onPointerDown

//   return (
//     <span
//       ref={contextRef}
//       className={classNames(styles.container, props.fullWidth && styles.fullWidth)}
//       aria-live={'workingLabel' in props ? 'polite' : undefined}
//     >
//       <CustomComponent
//         {...contextProps}
//         {...linkProps}
//         aria-describedby={
//           props['aria-describedby'] === null ? undefined : linkProps['aria-describedby']
//         }
//       >
//         {renderContent(props)}
//       </CustomComponent>
//     </span>
//   )
// }

export type ButtonOrLinkButton = ButtonProps | LinkButtonProps

export const ButtonOrLinkButton = (props: ButtonOrLinkButton): JSX.Element => {
  if ('href' in props) {
    return <LinkButton {...props} />
  } else {
    return <Button {...(props as ButtonProps)} />
  }
}

type OldSize = 'small' | 'regular' | string
type NewSize = 'extra-small' | 'small' | 'medium' | 'large'

type OldProps = {
  'onClick'?: () => void
  'reversed'?: boolean
  'classNameOverride'?: string
  'data-automation-id'?: string
  'fullWidth'?: boolean
  'working'?: boolean
  'workingLabel'?: string
  'workingLabelHidden'?: boolean
  'onMouseDown'?: () => void
  'disableTabFocusAndIUnderstandTheAccessibilityImplications'?: boolean
  'newTabAndIUnderstandTheAccessibilityImplications'?: boolean
  'disabled'?: boolean
  'size'?: OldSize
  'primary'?: boolean
  'secondary'?: boolean
  'destructive'?: boolean
  'label'?: string
  'href'?: string
  'component'?: React.ElementType
  [key: string]: any
}

type NewProps = {
  'onPress'?: () => void
  'isReversed'?: boolean
  'className'?: string
  'data-testid'?: string
  'isFullWidth'?: boolean
  'isPending'?: boolean
  'pendingLabel'?: string
  'hasHiddenPendingLabel'?: boolean
  'onPressStart'?: () => void
  'target'?: string
  'isDisabled'?: boolean
  'size'?: NewSize
  'variant'?: 'primary' | 'tertiary' | 'secondary'
  'rel'?: string
  'hasHiddenLabel'?: boolean
  [key: string]: any
}

const getNewSizeValue = (oldValue: OldSize): NewSize => {
  switch (oldValue) {
    case 'small':
      return 'medium'
    case 'regular':
      return 'large'
    default:
      return 'large'
  }
}

const transformProp = (propName: string, propValue: any): NewProps | null => {
  switch (propName) {
    case 'onClick':
      return { onPress: propValue }
    case 'reversed':
      return { isReversed: propValue }
    case 'classNameOverride':
      return { className: propValue }
    case 'data-automation-id':
      return { 'data-testid': propValue }
    case 'fullWidth':
      return { isFullWidth: propValue }
    case 'working':
      return { isPending: propValue }
    case 'workingLabel':
      return { pendingLabel: propValue }
    case 'workingLabelHidden':
      return { hasHiddenPendingLabel: propValue }
    case 'onMouseDown':
      return { onPressStart: propValue }
    case 'disableTabFocusAndIUnderstandTheAccessibilityImplications':
      return null
    case 'newTabAndIUnderstandTheAccessibilityImplications':
      return { target: '_blank' }
    case 'disabled':
      return { isDisabled: propValue }
    case 'size':
      return { size: getNewSizeValue(propValue) }
    case 'primary':
      return { variant: 'primary' }
    case 'secondary':
      return { variant: 'tertiary' }
    case 'destructive':
      return null
    default:
      return { [propName]: propValue }
  }
}

const transformV1ButtonAttributes = (props: OldProps, kaioComponentName: string) => {
  let childrenValue: string | undefined
  let hasSizeProp = false
  let hasVariant = false
  let hasLinkAttr = false

  const newAttributes: NewProps = Object.keys(props).reduce((acc: NewProps, propName: string) => {
    const propValue = props[propName]

    if (propName === 'label') {
      childrenValue = propValue
      return acc
    }

    if (propName === 'newTabAndIUnderstandTheAccessibilityImplications') {
      acc.target = '_blank'
      acc.rel = 'noopener noreferrer'
      return acc
    }

    if (propName === 'primary' || propName === 'secondary') {
      hasVariant = true
    }

    if (propName === 'size') {
      hasSizeProp = true
    }

    if (propName === 'href' || propName === 'component') {
      hasLinkAttr = true
    }

    const newProp = transformProp(propName, propValue)

    if (newProp === null) return acc

    return { ...acc, ...newProp }
  }, {})

  if (!hasVariant) {
    newAttributes.variant = kaioComponentName === 'IconButton' ? 'tertiary' : 'secondary'
  }

  if (!hasSizeProp) {
    newAttributes.size = 'large'
  }

  if (kaioComponentName === 'IconButton') {
    newAttributes.hasHiddenLabel = true
  }

  return {
    targetComponentName: hasLinkAttr ? 'LinkButton' : 'Button',
    newAttributes,
    childrenValue,
  }
}

export default transformV1ButtonAttributes

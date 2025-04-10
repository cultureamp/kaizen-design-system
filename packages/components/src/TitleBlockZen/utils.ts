import {
  type SecondaryActionsProps,
  type TitleBlockButtonProps,
  type TitleBlockCustomButtonProps,
  type TitleBlockMenuGroup,
  type TitleBlockMenuItemProps,
  type TitleBlockVariant,
} from './types'

export const isMenuGroupNotButton = (
  value: (TitleBlockButtonProps | TitleBlockCustomButtonProps) | TitleBlockMenuGroup,
): value is TitleBlockMenuGroup => 'menuItems' in value

export const NON_REVERSED_VARIANTS = ['education', 'admin']

export const isReversed = (variant: TitleBlockVariant | undefined): boolean => {
  // The default variant (no variant prop) is reversed (dark background)
  if (variant === undefined) return true
  return !NON_REVERSED_VARIANTS.includes(variant)
}

export const convertSecondaryActionsToMenuItems = (
  secondaryActions: SecondaryActionsProps,
): TitleBlockMenuItemProps[] =>
  secondaryActions.reduce<TitleBlockMenuItemProps[]>((acc, cur) => {
    if ('menuItems' in cur) {
      return [...acc, ...cur.menuItems]
    }

    if ('component' in cur) {
      return [...acc, cur]
    }

    const out = {
      label: cur.label,
      icon: cur.icon,
      destructive: cur.destructive,
      disabled: cur.disabled,
    }

    if ('onClick' in cur) {
      return [
        ...acc,
        {
          ...out,
          onClick: cur.onClick,
        },
      ]
    }
    if ('href' in cur) {
      return [
        ...acc,
        {
          ...out,
          href: cur.href,
        },
      ]
    }
    return acc
  }, [])

export const createTabletOverflowMenuItems = (
  secondaryActions?: SecondaryActionsProps,
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[],
): TitleBlockMenuItemProps[] => {
  let secondaryActionsList: TitleBlockMenuItemProps[]
  if (secondaryActions) {
    secondaryActionsList = secondaryActions
      ? convertSecondaryActionsToMenuItems(secondaryActions)
      : []
  } else {
    secondaryActionsList = []
  }
  const flatSecondaryOverflowItemsList = secondaryOverflowMenuItems ?? []
  return secondaryActionsList.concat(flatSecondaryOverflowItemsList)
}

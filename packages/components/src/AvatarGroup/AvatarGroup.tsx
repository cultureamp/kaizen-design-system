import React, { type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { Avatar, type CompanyAvatarProps, type GenericAvatarProps } from '~components/Avatar'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './AvatarGroup.module.css'

export type AvatarGroupAvatarProps =
  | Omit<GenericAvatarProps, 'size'>
  | Omit<CompanyAvatarProps, 'size'>

export type AvatarGroupSize = 'small' | 'medium' | 'large'
export type AvatarList = [AvatarGroupAvatarProps, ...AvatarGroupAvatarProps[]]

export type AvatarGroupProps = {
  /**
   * There are 3 fixed sizes available. `"small"` will remove border and box shadow to save space.
   * @default "medium"
   */
  size?: AvatarGroupSize
  /**
   * If the length of Avatars exceeds the `maxVisible` a counter token will render
   * @default 2
   */
  maxVisible: 2 | 3 | 4 | 5 | 6
  /**
   * Takes a array of `AvatarProps` that must have at least item.
   * Note that 'size' is omitted from the `AvatarProps` type so it will throw a type error if size is provided.
   * */
  avatars: AvatarList
} & OverrideClassName<HTMLAttributes<HTMLUListElement>>

const Counter = ({ remainingAvatars }: { remainingAvatars: number }): ReactNode => {
  if (remainingAvatars <= 0) return null
  return (
    <li
      aria-label={`There ${
        remainingAvatars > 1
          ? `are ${remainingAvatars} other members`
          : `is ${remainingAvatars} other member`
      } of this group`}
      className={styles.AvatarGroupItem}
    >
      <span className={styles.AvatarCounter} aria-hidden={true}>
        {`+${remainingAvatars}`}
      </span>
    </li>
  )
}

const AllAvatars = ({
  avatars,
  maxVisible,
  size,
}: {
  avatars: AvatarList
  maxVisible: number
  size: AvatarGroupSize
}): ReactNode => (
  <>
    {avatars?.map(
      (avatarProps, index) =>
        index < maxVisible && (
          <li key={`avatar-${index}`} className={styles.AvatarGroupItem}>
            <Avatar {...avatarProps} size={size} />
          </li>
        ),
    )}
    <Counter remainingAvatars={avatars?.length - maxVisible} />
  </>
)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3065021264/Avatar+Group Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-avatar-avatar-group--docs Storybook}
 */
export const AvatarGroup = ({
  size = 'medium',
  maxVisible = 2,
  avatars,
  classNameOverride,
  ...restProps
}: AvatarGroupProps): JSX.Element => (
  <ul
    className={classnames(styles.AvatarGroup, styles[size], classNameOverride)}
    aria-label="Avatar Group"
    {...restProps}
  >
    <AllAvatars avatars={avatars} maxVisible={maxVisible} size={size} />
  </ul>
)

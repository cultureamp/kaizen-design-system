import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type CollapsibleProps } from '~components/Collapsible/Collapsible'
import { type Sticky } from '~components/Collapsible/types'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './CollapsibleGroup.module.scss'

export type CollapsibleGroupProps = {
  children: React.ReactElement<CollapsibleProps>[]
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  lazyLoad?: boolean
  onToggle?: (open: boolean, id: string) => void
} & Omit<OverrideClassName<HTMLAttributes<HTMLDivElement>>, 'children'>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094383/Collapsible Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-collapsible-collapsible-group--docs Storybook}
 */
export const CollapsibleGroup = ({
  children,
  separated = false,
  sticky,
  noSectionPadding = false,
  lazyLoad = false,
  onToggle,
  classNameOverride,
  ...props
}: CollapsibleGroupProps): JSX.Element => (
  <div className={classnames(classNameOverride, !separated && styles.container)} {...props}>
    {React.Children.map(children, (collapsible) =>
      React.cloneElement(collapsible, {
        group: true,
        separated,
        sticky,
        noSectionPadding,
        lazyLoad,
        onToggle,
      }),
    )}
  </div>
)

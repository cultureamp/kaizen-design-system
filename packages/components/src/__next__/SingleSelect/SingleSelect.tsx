import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './SingleSelect.module.scss'

/**
 * @todo: Refer to `docs/` for further code standards and guidelines
 */

/**
 * @todo: Replace `HTMLAttributes<HTMLDivElement>` with attributes/props you need to extend
 */
export type SingleSelectProps = {
  /** @todo: Add custom props here */
  exampleRequiredString: string
  isReversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const SingleSelect = ({
  exampleRequiredString,
  isReversed = false,
  classNameOverride,
  ...restProps
}: SingleSelectProps): JSX.Element => {
  return (
    <div
      className={classnames(
        styles.singleSelect,
        isReversed && styles.isReversed,
        classNameOverride,
      )}
      {...restProps}
    >
      {exampleRequiredString}
    </div>
  )
}

SingleSelect.displayName = 'SingleSelect'

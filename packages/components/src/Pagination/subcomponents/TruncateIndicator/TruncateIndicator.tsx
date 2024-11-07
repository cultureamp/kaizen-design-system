import React from 'react'
import { Icon } from '~components/__future__/Icon'
import styles from './TruncateIndicator.module.scss'

export const TruncateIndicator = (): JSX.Element => (
  <div className={styles.truncateIndicatorWrapper} data-testid="truncate-indicator">
    <Icon name="more_horiz" isPresentational />
  </div>
)

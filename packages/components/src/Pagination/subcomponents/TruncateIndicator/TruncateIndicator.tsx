import React from 'react'
import { Icon } from '~components/__rc__/Icon'
import styles from './TruncateIndicator.module.css'

export const TruncateIndicator = (): JSX.Element => (
  <div className={styles.truncateIndicatorWrapper} data-testid="truncate-indicator">
    <Icon name="more_horiz" isPresentational />
  </div>
)

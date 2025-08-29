import styles from '../Popover.module.scss'
import { type PopoverSize } from '../types'

export const mapSizeToClass = (size: PopoverSize): string => {
  switch (size) {
    case 'large':
      return styles.large
    default:
      return ''
  }
}

export const mapLineVariant = (singleLine: boolean): string => (singleLine ? styles.singleLine : '')

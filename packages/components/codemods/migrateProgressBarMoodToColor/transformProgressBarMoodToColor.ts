import type { ProgressBarProps } from '../../src/ProgressBar'
import { migrateStringProp } from '../utils'

const OLD_PROP_NAME = 'mood'
const NEW_PROP_NAME = 'color'

const getNewVariantValue = (
  oldValue: Exclude<ProgressBarProps[typeof OLD_PROP_NAME], undefined>,
): Exclude<ProgressBarProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case 'cautionary':
      return 'yellow'
    case 'informative':
      return 'blue'
    case 'negative':
      return 'red'
    case 'positive':
      return 'green'
  }
}

export const transformProgressBarMoodToColor = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue,
)

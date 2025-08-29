import type { ProgressBarProps } from '../../src/ProgressBar'
import { migrateStringProp } from '../utils'

type LegacyProgressBarProps = ProgressBarProps & {
  mood?: string
}

const OLD_PROP_NAME = 'mood'
const NEW_PROP_NAME = 'color'

const getNewVariantValue = (
  oldValue: Exclude<LegacyProgressBarProps[typeof OLD_PROP_NAME], undefined>,
): Exclude<ProgressBarProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case 'cautionary':
      return 'yellow'
    case 'informative':
      return 'blue'
    case 'negative':
      return 'red'
    case 'positive':
    default:
      return 'green'
  }
}

export const transformProgressBarMoodToColor = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue,
)

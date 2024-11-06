import { transformNotificationTypeToVariant } from '../migrateNotificationTypeToVariant'
import { transformComponentsInDir } from '../utils'
/** This is here as a script runner that migrates InlineNotification variant to their color equivalent */
const migrateInlineNotificationTypeToVariant = (): void => {
  // eslint-disable-next-line no-console
  console.log(' ~(-_- ~) Running InlineNotification transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformNotificationTypeToVariant,
    'InlineNotification',
  )
}

migrateInlineNotificationTypeToVariant()

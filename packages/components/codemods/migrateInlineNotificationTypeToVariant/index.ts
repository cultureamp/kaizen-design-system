import { transformNotificationTypeToVariant } from '../migrateNotificationTypeToVariant'
import { transformComponentsAndImportsInDir } from '../utils'

const run = (): void => {
  console.log('~(-_- ~) Running InlineNotification transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['InlineNotification'], (tagNames) => [
    transformNotificationTypeToVariant(tagNames),
  ])
}

run()

import { transformNotificationTypeToVariant } from '../migrateNotificationTypeToVariant'
import { transformComponentsAndImportsInDir } from '../utils'

const run = (): void => {
  console.log('~(-_- ~) Running ToastNotification transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['ToastNotification'], (tagNames) => [
    transformNotificationTypeToVariant(tagNames),
  ])
}

run()

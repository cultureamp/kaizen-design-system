import { transformNotificationTypeToVariant } from '../migrateNotificationTypeToVariant'
import { transformComponentsInDir } from '../utils'

const run = (): void => {
  console.log('~(-_- ~) Running GlobalNotification transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, ['GlobalNotification'], (tagNames) => [
    transformNotificationTypeToVariant(tagNames),
  ])
}

run()

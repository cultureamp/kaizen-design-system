import { transformNotificationTypeToVariant } from "../migrateNotificationTypeToVariant"
import { transformComponentsInDir } from "../utils"
/** This is here as a script runner that migrates ToastNotification variant to their color equivalent */
const migrateToastNotificationTypeToVariant = (): void => {
  // eslint-disable-next-line no-console
  console.log(" ~(-_- ~) Running ToastNotification transformer (~ -_-)~")
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformNotificationTypeToVariant,
    "ToastNotification"
  )
}

migrateToastNotificationTypeToVariant()

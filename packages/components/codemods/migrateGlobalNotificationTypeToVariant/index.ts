import { transformNotificationTypeToVariant } from "../migrateNotificationTypeToVariant"
import { transformComponentsInDir } from "../utils"
/** This is here as a script runner that migrates GlobalNotification variant to their color equivalent */
const migrateGlobalNotificationTypeToVariant = (): void => {
  // eslint-disable-next-line no-console
  console.log(" ~(-_- ~) Running GlobalNotification transformer (~ -_-)~")
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, transformNotificationTypeToVariant, "GlobalNotification")
}

migrateGlobalNotificationTypeToVariant()

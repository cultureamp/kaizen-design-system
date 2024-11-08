import { transformComponentsInDir } from "../utils"
import { removeInputEditModalMood } from "./removeInputEditModalMood"
/** This is here as a script runner that migrates Well variant to their color equivalent */
const run = (): void => {
  // eslint-disable-next-line no-console
  console.log(" ~(-_- ~) Running InputEditModal transformer (~ -_-)~")
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    removeInputEditModalMood,
    "InputEditModal",
  )
}

run()

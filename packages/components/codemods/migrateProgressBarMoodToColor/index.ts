import { transformComponentsInDir } from "../utils"
import { transformProgressBarMoodToColor } from "./transformProgressBarMoodToColor"

const migrateProgressBarMoodToColor = (): void => {
  console.log(
    " ~(-_- ~) Running ProgressBar mood to color transformer (~ -_-)~"
  )
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformProgressBarMoodToColor,
    "ProgressBar"
  )
}

migrateProgressBarMoodToColor()

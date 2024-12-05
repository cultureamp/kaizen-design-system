import { transformComponentsInDir } from '../utils'
import { removeInputEditModalMood } from './removeInputEditModalMood'

const run = (): void => {
  console.log(' ~(-_- ~) Running InputEditModal transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, removeInputEditModalMood, 'InputEditModal')
}

run()

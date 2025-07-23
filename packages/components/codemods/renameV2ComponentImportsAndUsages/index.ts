import { transformComponentsInDir } from '../utils'
import { renameV2ComponentImportsAndUsages } from './renameV2ComponentImportsAndUsages'

const run = (): void => {
  console.log('~(-_- ~) Running V2 component renaming (~ -_-)~')

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    ['Select', 'LikertScaleLegacy', 'TitleBlockZen'],
    (tagNames) => [renameV2ComponentImportsAndUsages(tagNames)],
  )
}

run()

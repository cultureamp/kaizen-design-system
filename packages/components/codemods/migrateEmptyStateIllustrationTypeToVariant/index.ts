import { transformComponentsAndImportsInDir } from '../utils'
import { transformEmptyStateIllustrationTypeToVariant } from './transformEmptyStateIllustrationTypeToVariant'

const run = (): void => {
  console.log('~(-_- ~) Running EmptyState illustrationType to variant transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['EmptyState'], (tagNames) => [
    transformEmptyStateIllustrationTypeToVariant(tagNames),
  ])
}

run()

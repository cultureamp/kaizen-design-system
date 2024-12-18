import fs from 'fs'
import path from 'path'
import { createEncodedSourceFile } from './createEncodedSourceFile'
import {
  getKaioTagName,
  getKaioTagNamesMapByComponentName,
  getKaioTagNamesMapByPattern,
  type TagImportAttributesMap,
} from './getKaioTagName'
import {
  transformSource,
  transformSourceForTagName,
  type TransformSourceArgs,
  type TransformSourceForTagNameArgs,
} from './transformSource'

export const traverseDir = (
  dir: string,
  transformFile: (componentFilePath: string, sourceCode: string) => void,
): void => {
  if (dir.includes('node_modules')) return

  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const fullPath = path.join(dir, file)

    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath, transformFile)
    } else if (fullPath.endsWith('.tsx')) {
      const sourceCode = fs.readFileSync(fullPath, 'utf8')
      transformFile(fullPath, sourceCode)
    }
  })
}

/**
 * Walks the directory and runs the AST transformers on the given component name
 */
export const transformComponentsAndImportsInDir = (
  dir: string,
  componentNames: string[],
  transformers: (kaioTagNamesMap: TagImportAttributesMap) => TransformSourceArgs['transformers'],
): void => {
  const transformFile = (componentFilePath: string, sourceCode: string): void => {
    const sourceFile = createEncodedSourceFile(componentFilePath, sourceCode)
    const kaioTagNamesMap = getKaioTagNamesMapByComponentName(sourceFile, componentNames)
    if (kaioTagNamesMap) {
      const updatedSourceFile = transformSource({
        sourceFile,
        transformers: transformers(kaioTagNamesMap),
      })

      fs.writeFileSync(componentFilePath, updatedSourceFile, 'utf8')
    }
  }

  traverseDir(dir, transformFile)
}

/**
 * Walks the directory and runs the AST transformers on the given component name regex pattern
 * eg. "Icon$" will match all components that end with `Icon`
 */
export const transformComponentsAndImportsInDirByPattern = (
  dir: string,
  componentNamePattern: RegExp | string,
  transformers: (kaioTagNamesMap: TagImportAttributesMap) => TransformSourceArgs['transformers'],
): void => {
  const transformFile = (componentFilePath: string, sourceCode: string): void => {
    const sourceFile = createEncodedSourceFile(componentFilePath, sourceCode)
    const kaioTagNamesMap = getKaioTagNamesMapByPattern(sourceFile, componentNamePattern)
    if (kaioTagNamesMap) {
      const updatedSourceFile = transformSource({
        sourceFile,
        transformers: transformers(kaioTagNamesMap),
      })

      fs.writeFileSync(componentFilePath, updatedSourceFile, 'utf8')
    }
  }

  traverseDir(dir, transformFile)
}

/**
 * @deprecated Use `transformComponentsAndImportsInDir` or `transformComponentsAndImportsInDirByPattern` instead
 * Walks the directory and runs the AST transformer on the given component name
 */
export const transformComponentsInDir = (
  dir: string,
  transformer: TransformSourceForTagNameArgs['astTransformer'],
  componentName: string,
): void => {
  const transformFile = (componentFilePath: string, sourceCode: string): void => {
    const sourceFile = createEncodedSourceFile(componentFilePath, sourceCode)

    const tagName = getKaioTagName(sourceFile, componentName)
    if (tagName) {
      const updatedSourceFile = transformSourceForTagName({
        sourceFile,
        astTransformer: transformer,
        tagName,
      })

      fs.writeFileSync(componentFilePath, updatedSourceFile, 'utf8')
    }
  }

  traverseDir(dir, transformFile)
}

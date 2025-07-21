import ts from 'typescript'
import {
  setImportToAdd,
  setImportToRemove,
  updateKaioImports,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'

type ComponentRenameConfig = {
  newName: string
  fromModule: string
  toModule: string
}

const componentRenameMap = new Map<string, ComponentRenameConfig>([
  [
    'Select',
    {
      newName: 'SingleSelect',
      fromModule: '@kaizen/components/next',
      toModule: '@kaizen/components',
    },
  ],
  [
    'LikertScaleLegacy',
    { newName: 'LikertScale', fromModule: '@kaizen/components', toModule: '@kaizen/components' },
  ],
  [
    'TitleBlockZen',
    { newName: 'TitleBlock', fromModule: '@kaizen/components', toModule: '@kaizen/components' },
  ],
])

const getPropsTypeName = (componentName: string): string => `${componentName}Props`

const updateJsxElementTagName = (
  factory: ts.NodeFactory,
  node: ts.JsxOpeningElement | ts.JsxClosingElement | ts.JsxSelfClosingElement,
  newTagName: string,
): ts.JsxOpeningElement | ts.JsxClosingElement | ts.JsxSelfClosingElement => {
  const newIdentifier = factory.createIdentifier(newTagName)

  if (ts.isJsxSelfClosingElement(node)) {
    return factory.updateJsxSelfClosingElement(
      node,
      newIdentifier,
      node.typeArguments,
      node.attributes,
    )
  }

  if (ts.isJsxOpeningElement(node)) {
    return factory.updateJsxOpeningElement(node, newIdentifier, node.typeArguments, node.attributes)
  }

  if (ts.isJsxClosingElement(node)) {
    return factory.updateJsxClosingElement(node, newIdentifier)
  }

  return node
}

export const renameV2ComponentImportsAndUsages =
  (tagsMap: TagImportAttributesMap | undefined): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const importsToRemove = new Map() satisfies UpdateKaioImportsArgs['importsToRemove']
    const importsToAdd = new Map() satisfies UpdateKaioImportsArgs['importsToAdd']

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isImportDeclaration(node)) {
        const moduleSpecifier = node.moduleSpecifier.getText().slice(1, -1)

        const relevantRenames = Array.from(componentRenameMap.entries()).filter(
          ([_, config]) => config.fromModule === moduleSpecifier,
        )

        if (relevantRenames.length > 0) {
          const importClause = node.importClause
          if (importClause?.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
            importClause.namedBindings.elements.forEach((importSpecifier) => {
              const importName =
                importSpecifier.propertyName?.getText() ?? importSpecifier.name.getText()

              const renameConfig = componentRenameMap.get(importName)
              if (renameConfig && renameConfig.fromModule === moduleSpecifier) {
                setImportToRemove(importsToRemove, renameConfig.fromModule, importName)
                setImportToAdd(importsToAdd, renameConfig.toModule, {
                  componentName: renameConfig.newName,
                })
              }

              const componentNames = Array.from(componentRenameMap.keys())
              for (const oldComponentName of componentNames) {
                const config = componentRenameMap.get(oldComponentName)!
                const oldPropsType = getPropsTypeName(oldComponentName)
                if (importName === oldPropsType && config.fromModule === moduleSpecifier) {
                  const newPropsType = getPropsTypeName(config.newName)
                  setImportToRemove(importsToRemove, config.fromModule, oldPropsType)
                  setImportToAdd(importsToAdd, config.toModule, {
                    componentName: newPropsType,
                  })
                }
              }
            })
          }
        }
      }

      if (
        ts.isJsxOpeningElement(node) ||
        ts.isJsxSelfClosingElement(node) ||
        ts.isJsxClosingElement(node)
      ) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap?.get(tagName)

        if (!tagImportAttributes) return node

        const kaioComponentName = tagImportAttributes.originalName
        const oldImportSource = tagImportAttributes.importModuleName
        const renameConfig = componentRenameMap.get(kaioComponentName)

        if (!renameConfig) return node

        if (oldImportSource !== renameConfig.fromModule) {
          console.warn(
            `Expected ${kaioComponentName} to be imported from ${renameConfig.fromModule}, but found ${oldImportSource}`,
          )
          return node
        }

        setImportToRemove(importsToRemove, renameConfig.fromModule, kaioComponentName)

        const alias =
          tagImportAttributes.tagName !== tagImportAttributes.originalName
            ? tagImportAttributes.tagName
            : undefined

        setImportToAdd(importsToAdd, renameConfig.toModule, {
          componentName: renameConfig.newName,
          alias,
        })

        const jsxElementName = alias ?? renameConfig.newName
        return updateJsxElementTagName(context.factory, node, jsxElementName)
      }

      if (ts.isTypeReferenceNode(node)) {
        const typeName = node.typeName.getText()

        const componentNames = Array.from(componentRenameMap.keys())
        for (const oldComponentName of componentNames) {
          const renameConfig = componentRenameMap.get(oldComponentName)!
          const oldPropsType = getPropsTypeName(oldComponentName)
          if (typeName === oldPropsType) {
            const newPropsType = getPropsTypeName(renameConfig.newName)

            setImportToRemove(importsToRemove, renameConfig.fromModule, oldPropsType)
            setImportToAdd(importsToAdd, renameConfig.toModule, {
              componentName: newPropsType,
            })

            return context.factory.updateTypeReferenceNode(
              node,
              context.factory.createIdentifier(newPropsType),
              node.typeArguments,
            )
          }
        }
      }

      return ts.visitEachChild(node, visit, context)
    }

    const transformedNode = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(
      transformedNode as ts.SourceFile,
    )
  }

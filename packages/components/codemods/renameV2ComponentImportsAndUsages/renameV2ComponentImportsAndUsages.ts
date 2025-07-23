import ts from 'typescript'
import {
  setImportToAdd,
  setImportToRemove,
  updateJsxElementTagName,
  updateKaioImports,
  type ComponentRenameConfig,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'

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

export const renameV2ComponentImportsAndUsages =
  (tagsMap: TagImportAttributesMap | undefined): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const importsToRemove: UpdateKaioImportsArgs['importsToRemove'] = new Map()
    const importsToAdd: UpdateKaioImportsArgs['importsToAdd'] = new Map()
    const validPropTypes = new Set<string>()

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

              const rename = componentRenameMap.get(importName)
              if (rename && rename.fromModule === moduleSpecifier) {
                setImportToRemove(importsToRemove, rename.fromModule, importName)
                setImportToAdd(importsToAdd, rename.toModule, {
                  componentName: rename.newName,
                })
              }

              const componentNames = Array.from(componentRenameMap.keys())
              for (const oldComponentName of componentNames) {
                const config = componentRenameMap.get(oldComponentName)!
                const oldPropsType = getPropsTypeName(oldComponentName)
                if (importName === oldPropsType && config.fromModule === moduleSpecifier) {
                  validPropTypes.add(oldPropsType)

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
        if (ts.isPropertyAccessExpression(node.tagName)) {
          const left = node.tagName.expression.getText()
          const rename = componentRenameMap.get(left)

          if (rename) {
            setImportToRemove(importsToRemove, rename.fromModule, left)
            setImportToAdd(importsToAdd, rename.toModule, { componentName: rename.newName })

            return updateJsxElementTagName(
              context.factory,
              node,
              rename.newName,
              componentRenameMap,
            )
          }

          return ts.visitEachChild(node, visit, context)
        }

        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap?.get(tagName)

        if (!tagImportAttributes) return node

        const kaioComponentName = tagImportAttributes.originalName
        const oldImportSource = tagImportAttributes.importModuleName
        const rename = componentRenameMap.get(kaioComponentName)

        if (!rename) return node

        if (oldImportSource !== rename.fromModule) {
          console.warn(
            `Expected ${kaioComponentName} to be imported from ${rename.fromModule}, but found ${oldImportSource}`,
          )
          return node
        }

        setImportToRemove(importsToRemove, rename.fromModule, kaioComponentName)

        const alias =
          tagImportAttributes.tagName !== tagImportAttributes.originalName
            ? tagImportAttributes.tagName
            : undefined

        setImportToAdd(importsToAdd, rename.toModule, {
          componentName: rename.newName,
          alias,
        })

        const jsxElementName = alias ?? rename.newName
        return updateJsxElementTagName(context.factory, node, jsxElementName, componentRenameMap)
      }

      if (ts.isTypeReferenceNode(node)) {
        const typeName = node.typeName.getText()

        if (validPropTypes.has(typeName)) {
          const componentNames = Array.from(componentRenameMap.keys())

          for (const oldComponentName of componentNames) {
            const rename = componentRenameMap.get(oldComponentName)!
            const oldPropsType = getPropsTypeName(oldComponentName)

            if (typeName === oldPropsType) {
              const newPropsType = getPropsTypeName(rename.newName)

              return context.factory.updateTypeReferenceNode(
                node,
                context.factory.createIdentifier(newPropsType),
                node.typeArguments,
              )
            }
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

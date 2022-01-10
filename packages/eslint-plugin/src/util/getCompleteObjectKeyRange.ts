import { AST, SourceCode } from "eslint"
import { Property, ImportSpecifier } from "estree"

/**
 * const { Icon, InlineNotification, Heading } = require('@kaizen/component-library');
 * returns ` InlineNotification,`
 * @param node (The property node InlineNotification)
 * @returns AST.Range of property, including space and commas
 */
export default function getCompleteObjectKeyRange(
  sourceCode: SourceCode,
  node: Property | ImportSpecifier // We don't support `restElement` for now. Nor `import *`.
): AST.Range {
  let prevToken = sourceCode.getTokenBefore(node)
  while (
    prevToken != null &&
    prevToken.value !== "," &&
    prevToken.value !== "{"
  ) {
    prevToken = sourceCode.getTokenBefore(node)
  }

  let lastToken = sourceCode.getTokenAfter(node)
  if (lastToken != null && lastToken.value !== ",") {
    lastToken = sourceCode.getTokenBefore(lastToken)
  }

  // This should never happen in a valid syntax
  if (prevToken === null || lastToken === null) return node.range || [0, 0]
  return [prevToken.range[1], lastToken.range[1]]
}

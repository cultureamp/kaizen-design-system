import {
  ProseMirrorInputrules,
  ProseMirrorModel,
  orderedListRule,
  bulletListRule,
} from "@kaizen/rich-text-toolkit"

export function buildInputRules(schema: ProseMirrorModel.Schema) {
  const { smartQuotes, ellipsis, emDash, inputRules } = ProseMirrorInputrules
  const rules = smartQuotes.concat(ellipsis, emDash)

  if (schema.nodes.orderedList) {
    rules.push(orderedListRule(schema.nodes.orderedList))
  }

  if (schema.nodes.bulletList) {
    rules.push(bulletListRule(schema.nodes.bulletList))
  }

  return inputRules({ rules })
}

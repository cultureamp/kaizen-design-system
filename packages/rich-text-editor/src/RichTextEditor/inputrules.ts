import {
  inputRules,
  smartQuotes,
  emDash,
  ellipsis,
} from "prosemirror-inputrules"
import { Schema } from "prosemirror-model"
import { orderedListRule, bulletListRule } from "@cultureamp/rich-text-toolkit"

export function buildInputRules(schema: Schema) {
  const rules = smartQuotes.concat(ellipsis, emDash)

  if (schema.nodes.orderedList) {
    rules.push(orderedListRule(schema.nodes.orderedList))
  }

  if (schema.nodes.bulletList) {
    rules.push(bulletListRule(schema.nodes.bulletList))
  }

  return inputRules({ rules })
}

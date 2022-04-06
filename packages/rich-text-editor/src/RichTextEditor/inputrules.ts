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

  if (schema.nodes.ordered_list) {
    rules.push(orderedListRule(schema.nodes.ordered_list))
  }

  if (schema.nodes.bullet_list) {
    rules.push(bulletListRule(schema.nodes.bullet_list))
  }

  return inputRules({ rules })
}

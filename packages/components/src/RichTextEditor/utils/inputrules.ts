import {
  ellipsis,
  emDash,
  inputRules,
  smartQuotes,
} from "prosemirror-inputrules"
import { Schema } from "prosemirror-model"
import { orderedListRule, bulletListRule } from "../RichTextToolkit"

export function buildInputRules(schema: Schema): ReturnType<typeof inputRules> {
  const rules = smartQuotes.concat(ellipsis, emDash)

  if (schema.nodes.orderedList) {
    rules.push(orderedListRule(schema.nodes.orderedList))
  }

  if (schema.nodes.bulletList) {
    rules.push(bulletListRule(schema.nodes.bulletList))
  }

  return inputRules({ rules })
}

import { bulletListRule, orderedListRule } from "../../utils/core"
import {
  ProseMirrorInputrules,
  ProseMirrorModel,
} from "../../utils/prosemirror"

export const buildInputRules = (
  schema: ProseMirrorModel.Schema
): ReturnType<(typeof ProseMirrorInputrules)["inputRules"]> => {
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

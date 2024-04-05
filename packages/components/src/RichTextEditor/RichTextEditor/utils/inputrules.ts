import { bulletListRule, orderedListRule } from "../../utils/core"
import {
  ProseMirrorInputrules,
  ProseMirrorModel,
} from "../../utils/prosemirror"

const linkRule = (
  markType: ProseMirrorModel.MarkType
): ProseMirrorInputrules.InputRule => {
  const urlRegEx = /^https:\/\/\S+(?<!\.)$/
  return new ProseMirrorInputrules.InputRule(
    urlRegEx,
    (state, match, start, _) => {
      const link = markType.create({ href: match[0] })
      const displayUrl = match[0]
      const tr = state.tr.insertText(
        displayUrl,
        start,
        start + displayUrl.length
      )

      return tr.addMark(start, start + displayUrl.length, link)
    }
  )
}

export const buildInputRules = (
  schema: ProseMirrorModel.Schema
): ReturnType<(typeof ProseMirrorInputrules)["inputRules"]> => {
  const { smartQuotes, ellipsis, emDash, inputRules } = ProseMirrorInputrules
  const rules = smartQuotes.concat(ellipsis, emDash)

  if (schema.marks.link) {
    rules.push(linkRule(schema.marks.link))
  }

  if (schema.nodes.orderedList) {
    rules.push(orderedListRule(schema.nodes.orderedList))
  }

  if (schema.nodes.bulletList) {
    rules.push(bulletListRule(schema.nodes.bulletList))
  }

  return inputRules({ rules })
}

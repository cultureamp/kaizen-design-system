import {
  inputRules,
  smartQuotes,
  emDash,
  ellipsis,
} from "prosemirror-inputrules"

export function buildInputRules() {
  const rules = smartQuotes.concat(ellipsis, emDash)
  return inputRules({ rules })
}

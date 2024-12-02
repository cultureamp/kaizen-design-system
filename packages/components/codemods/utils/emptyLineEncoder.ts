// Fork of https://github.com/Serj-Tm/ts-empty-line-encoder/blob/master/encoder.ts
const DEFAULT_EMPTY_LINE_MARKER: string = '!--empty-line--!'
const DEFAULT_NEW_LINE: string = '\n'

const toComment = (marker: string): string => `/*${marker}*/`

export const encodeEmptyLines = (text: string): string => {
  const marker = toComment(DEFAULT_EMPTY_LINE_MARKER)
  const lines = text.split(/\r?\n/)
  const commentedLines = lines.map((line) => (line.trim() == '' ? marker : line))
  return commentedLines.join(DEFAULT_NEW_LINE)
}

export const decodeEmptyLines = (text: string): string => {
  const markerRegex = toComment(DEFAULT_EMPTY_LINE_MARKER).replace(/\*/g, '\\*')
  const decoded = text.replace(new RegExp(markerRegex, 'gi'), '')
  return decoded
}

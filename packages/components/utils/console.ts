const red = "\u001b[31m "
const yellow = "\u001b[33m "
const reset = "\u001b[0m "

export const error = (message: string): Error => {
  throw new Error(`${red}\KAIZEN ERROR:\n${singleLine(message)}${reset}\n`)
}

export const warn = (message: string): void => {
  // eslint-disable-next-line no-console
  console.warn(`${yellow}\nKAIZEN WARNING:\n${singleLine(message)}${reset}\n`)
}

export const singleLine = (message: string): string =>
  message.replace(/^ +/gm, " ").replace(/\n|\r/gm, "").trim()

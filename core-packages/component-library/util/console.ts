const red = "\u001b[31m "
const yellow = "\u001b[33m "
const reset = "\u001b[0m "

export const error = (message: string) => {
  throw new Error(
    `${red}\nCULTUREAMP UI ERROR:\n${singleLine(message)}${reset}\n`
  )
}

export const warn = (message: string) => {
  // tslint:disable-next-line: no-console
  console.warn(
    `${yellow}\nCULTUREAMP UI WARNING:\n${singleLine(message)}${reset}\n`
  )
}

export const singleLine = (message: string) => {
  return message
    .replace(/^ +/gm, " ")
    .replace(/\n|\r/gm, "")
    .trim()
}

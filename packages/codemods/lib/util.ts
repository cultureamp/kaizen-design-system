export const log = VERBOSE_LEVEL => {
  return (level: "info" | "verbose", ...args) => {
    if (level === "info" && VERBOSE_LEVEL >= 0) {
      // tslint:disable-next-line: no-console
      console.log(...args)
    }
    if (level === "verbose" && VERBOSE_LEVEL >= 1) {
      // tslint:disable-next-line: no-console
      console.log(...args)
    }
  }
}

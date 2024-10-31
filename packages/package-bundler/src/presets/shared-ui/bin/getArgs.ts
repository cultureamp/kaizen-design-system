export const getArgs = (): Record<string, any> =>
  process.argv.reduce<Record<string, any>>((args, arg) => {
    if (arg.startsWith("--")) {
      const longArg = arg.split("=")
      const longArgFlag = longArg[0].slice(2)
      const longArgValue = longArg.length > 1 ? longArg[1] : true
      args[longArgFlag] = longArgValue
    } else if (arg.startsWith("-")) {
      const flags = arg.slice(1).split("")
      flags.forEach(flag => {
        args[flag] = true
      })
    }
    return args
  }, {})

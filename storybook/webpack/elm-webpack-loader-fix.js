// This is fork of https://github.com/elm-community/elm-webpack-loader
//
// relevant issues and rejected PRs before background:
// - https://github.com/elm-community/elm-webpack-loader/issues/132
// - https://github.com/rtfeldman/node-elm-compiler/pull/38
// - https://github.com/elm-community/elm-webpack-loader/pull/65

"use strict"

const fs = require("fs")
const path = require("path")
const loaderUtils = require("loader-utils")
const elmCompiler = require("node-elm-compiler")
const yargs = require("yargs")

let runningInstances = 0
const alreadyCompiledFiles = []

const defaultOptions = {
  cache: false,
  forceWatch: false,
  optimize: true,
}

const getFiles = function(options) {
  const basepath = path.dirname(this.resourcePath)
  const files = options && options.files

  if (files === undefined) return [this.resourcePath]

  if (!Array.isArray(files)) {
    throw new Error("files option must be an array")
  }

  if (files.length === 0) {
    throw new Error(
      "You specified the 'files' option but didn't list any files"
    )
  }

  delete options.files
  return files
}

const getOptions = function() {
  const globalOptions = this.options
    ? this.options.elm || {}
    : this.query.elm || {}
  const loaderOptions = loaderUtils.getOptions(this) || {}
  return { ...defaultOptions, ...globalOptions, ...loaderOptions}
}

const _addDependencies = function(dependency) {
  this.addDependency(dependency)
}

const _addDirDependency = function(dirs) {
  dirs.forEach(this.addContextDependency.bind(this))
}

const isFlagSet = function(args, flag) {
  return typeof args[flag] !== "undefined" && args[flag]
}

/* Figures out if webpack has been run in watch mode
    This currently means either that the `watch` command was used
    Or it was run via `webpack-dev-server`
*/
const isInWatchMode = function() {
  // parse the argv given to run this webpack instance
  const argv = yargs(process.argv)
    .alias("w", "watch")
    .alias("stdin", "watch-stdin").argv

  const hasWatchArg = isFlagSet(argv, "watch")
  const hasStdinArg = isFlagSet(argv, "watch-stdin")

  const hasWebpackServe =
    Array.prototype.filter.call(process.argv, function(arg) {
      return arg.indexOf("webpack-serve") !== -1
    }).length > 0

  const hasWebpackDevServer =
    Array.prototype.filter.call(process.argv, function(arg) {
      return arg.indexOf("webpack-dev-server") !== -1
    }).length > 0

  return hasWebpackServe || hasWebpackDevServer || hasWatchArg || hasStdinArg
}

const dependenciesFor = function(resourcePath, files) {
  return findAllDependencies(files).then(function(dependencies) {
    return unique(dependencies.concat(remove(resourcePath, files)))
  })
}

var findAllDependencies = function(files) {
  return Promise.all(
    files.map(function(f) {
      return elmCompiler.findAllDependencies(f)
    })
  ).then(flatten)
}

module.exports = function() {
  this.cacheable && this.cacheable()

  const callback = this.async()
  if (!callback) {
    throw "elm-webpack-loader currently only supports async mode."
  }

  // bind helper functions to `this`
  const addDependencies = _addDependencies.bind(this)
  const addDirDependency = _addDirDependency.bind(this)
  const emitError = this.emitError.bind(this)

  const options = getOptions.call(this)
  const files = getFiles.call(this, options)
  const resourcePath = this.resourcePath

  const promises = []

  // we only need to track deps if we are in watch mode
  // otherwise, we trust elm to do it's job
  if (options.forceWatch || isInWatchMode()) {
    // we can do a glob to track deps we care about if cwd is set
    if (typeof options.cwd !== "undefined" && options.cwd !== null) {
      // watch elm.json
      const elmPackage = path.join(options.cwd, "elm.json")
      addDependencies(elmPackage)
    }

    // find all the deps, adding them to the watch list if we successfully parsed everything
    // otherwise return an error which is currently ignored
    const dependencies = dependenciesFor(resourcePath, files)
      .then(function(dependencies) {
        // add each dependency to the tree
        dependencies.map(addDependencies)
        return { kind: "success", result: true }
      })
      .catch(function(v) {
        emitError(v)
        return { kind: "error", error: v }
      })

    promises.push(dependencies)
  }

  delete options.forceWatch

  let maxInstances = options.maxInstances

  if (typeof maxInstances === "undefined") {
    maxInstances = 1
  } else {
    delete options.maxInstances
  }

  var intervalId = setInterval(function() {
    if (runningInstances >= maxInstances) return
    runningInstances += 1
    clearInterval(intervalId)

    // If we are running in watch mode, and we have previously compiled
    // the current file, then let the user know that `elm make` is running
    // and can be slow
    if (alreadyCompiledFiles.indexOf(resourcePath) > -1) {
      console.log("Started compiling Elm..")
    }

    const compilation = elmCompiler
      .compileToString(files, options)
      .then(function(v) {
        runningInstances -= 1
        return { kind: "success", result: v }
      })
      .catch(function(v) {
        runningInstances -= 1
        return { kind: "error", error: v }
      })

    promises.push(compilation)

    Promise.all(promises)
      .then(function(results) {
        const output = results[results.length - 1] // compilation output is always last

        if (output.kind === "success") {
          alreadyCompiledFiles.push(resourcePath)
          callback(null, output.result)
        } else {
          if (typeof output.error === "string") {
            output.error = new Error(output.error)
          }

          output.error.message =
            "Compiler process exited with error " + output.error.message
          callback(output.error)
        }
      })
      .catch(function(err) {
        callback(err)
      })
  }, 200)
}

// HELPERS

function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce(function(flattened, array) {
    return flattened.concat(array)
  }, [])
}

function unique(items) {
  return items.filter(function(item, index, array) {
    return array.indexOf(item) === index
  })
}

function remove(condemned, items) {
  return items.filter(function(item) {
    return item !== condemned
  })
}

import { Declaration, Root } from "postcss"
import postcssValueParser, { WordNode } from "postcss-value-parser"
import {
  kaizenVariableUsedNextToOperatorMessage,
  negatedKaizenVariableMessage,
  tokenNotInterpolatedInCalcMessage,
} from "../messages"
import { isOperator } from "../patterns"
import { Options } from "../types"
import { isVariable, parseVariable, stringifyVariable } from "../variableUtils"
import { walkDeclsWithKaizenTokens, walkWithParent } from "../walkers"

export const noInvalidEquationsRuleName = "no-invalid-equations"
export const noInvalidEquationsOnDeclaraion = (
  postcssNode: Declaration,
  parsedValue: postcssValueParser.ParsedValue,
  options: Options
) => {
  {
    const parsed = parsedValue
    let amended: string | undefined

    // Will use this to detect whether two invalid word nodes are used next to each other
    // Will reset when the parent changes
    let lastTwoWordNodesNextToEachOther: WordNode[] = []
    walkWithParent(parsed, (node, parent) => {
      if (node.type === "function" || node.type === "div") {
        // Reset the word sequence if there is something meaningful separating them, like a function or a divider (comma)
        lastTwoWordNodesNextToEachOther = []
        return
      }

      const isWithinCalcFunction = parent?.value === "calc"
      if (node.type === "word") {
        // Detect the cose of the node being a negated variable (because postcss-value-parser doesn't detect the operator and variable as seprate nodes)
        const parsedVariable = parseVariable(node)
        if (parsedVariable?.negated && parsedVariable?.kaizenToken) {
          if (
            options.language === "scss" &&
            options.fix &&
            !isVariable(postcssNode)
          ) {
            // just wrap the value in brackets if we're already in a calc function
            const fixedVariable = `${
              isWithinCalcFunction ? "" : "calc"
            }(-1 * ${stringifyVariable({
              ...parsedVariable,
              interpolated: true,
              negated: false,
            })})`
            node.value = fixedVariable
            amended = postcssValueParser.stringify(parsed.nodes)
          } else {
            options.reporter({
              message: negatedKaizenVariableMessage,
              node: postcssNode,
              autofixAvailable: !isVariable(postcssNode),
            })
          }

          return false
        }

        lastTwoWordNodesNextToEachOther.unshift(node)
        if (lastTwoWordNodesNextToEachOther.length === 3) {
          lastTwoWordNodesNextToEachOther.pop()
        }
        if (lastTwoWordNodesNextToEachOther.length === 2) {
          const parsedVariable0 = parseVariable(
            lastTwoWordNodesNextToEachOther[0]
          )
          const parsedVariable1 = parseVariable(
            lastTwoWordNodesNextToEachOther[1]
          )

          // If there exists an operator and a variable next to each other, it's invalid
          if (
            (isOperator(lastTwoWordNodesNextToEachOther[0].value) &&
              parsedVariable1?.kaizenToken) ||
            (isOperator(lastTwoWordNodesNextToEachOther[1].value) &&
              parsedVariable0?.kaizenToken)
          ) {
            const variableInEquation = parsedVariable0 || parsedVariable1
            if (isWithinCalcFunction) {
              // If the variable is interpolated within a calc function, its fine
              if (variableInEquation?.interpolated) {
                return false
              }

              if (
                options.language === "scss" &&
                options.fix &&
                !isVariable(postcssNode)
              ) {
                if (variableInEquation?.kaizenToken) {
                  variableInEquation.node.value = stringifyVariable({
                    ...variableInEquation,
                    interpolated: true,
                  })
                }

                amended = postcssValueParser.stringify(parsed.nodes)
              } else {
                options.reporter({
                  message: tokenNotInterpolatedInCalcMessage,
                  node: postcssNode,
                  autofixAvailable: !isVariable(postcssNode),
                })
              }
            } else {
              options.reporter({
                message: kaizenVariableUsedNextToOperatorMessage,
                node: postcssNode,
                autofixAvailable: false,
              })
            }

            // Return false to break the walk
            return false
          }
        }
      }
    })

    if (options.fix && amended && !isVariable(postcssNode)) {
      postcssNode.replaceWith(
        postcssNode.clone({
          value: amended,
        })
      )
    }
  }
}

export const noInvalidEquationsRule = (
  stylesheetNode: Root,
  options: Options
) => {
  walkDeclsWithKaizenTokens(stylesheetNode, ({ postcssNode, parsedValue }) => {
    if (postcssNode.type === "decl")
      noInvalidEquationsOnDeclaraion(postcssNode, parsedValue, options)
  })
}

export const declContainsInvalidEquations = (
  postcssNode: Declaration,
  parsedValue: postcssValueParser.ParsedValue,
  options: Options
) => {
  let reported = 0
  noInvalidEquationsOnDeclaraion(postcssNode, parsedValue, {
    ...options,
    fix: false,
    reporter: () => {
      reported++
    },
  })
  return reported > 0
}

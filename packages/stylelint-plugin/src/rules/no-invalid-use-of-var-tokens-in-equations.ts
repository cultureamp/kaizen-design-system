import { AtRule, Declaration, Root } from "postcss"
import postcssValueParser, { WordNode } from "postcss-value-parser"
import {
  kaizenVariableUsedNextToOperatorMessage,
  negatedKaizenVariableMessage,
  tokenNotInterpolatedInCalcMessage,
} from "../messages"
import { Options, RuleDefinition } from "../types"
import { isOperator } from "../util/patterns"
import {
  isVariable,
  parseVariable,
  stringifyVariable,
} from "../util/variableUtils"
import { walkDeclsWithKaizenTokens, walkWithParent } from "../util/walkers"

const noInvalidEquations = (
  postcssNode: Declaration | AtRule,
  parsedValue: postcssValueParser.ParsedValue,
  options: Options
): void => {
  /*
    This rule will attempt to detect whether a Kaizen token is used as a term within an equation.
    It does this by detecting whether an operator and a token are next to each other in a significant way.

    `lastTwoWordNodesNextToEachOther` is used to facilitate this, by looping through the value and analysing each pair of significant adjacent word nodes.
    Adjacency is determined to be true if they aren't separated by a div (comma), or a function.

  */

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
      // Detect the case of the node being a negated variable (because postcss-value-parser doesn't detect the operator and variable as seprate nodes)
      const parsedVariable = parseVariable(node)

      if (
        parsedVariable?.negated &&
        parsedVariable?.kaizenToken &&
        parsedVariable?.kaizenToken.cssVariable
      ) {
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
            autofixAvailable:
              !isVariable(postcssNode) && options.language === "scss",
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
            parsedVariable1?.kaizenToken &&
            parsedVariable1?.kaizenToken?.cssVariable) ||
          (isOperator(lastTwoWordNodesNextToEachOther[1].value) &&
            parsedVariable0?.kaizenToken &&
            parsedVariable0?.kaizenToken?.cssVariable)
        ) {
          // Go through all the cases where we can fix automatically

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

    return undefined
  })

  if (options.fix && amended && !isVariable(postcssNode)) {
    postcssNode.replaceWith(
      postcssNode.clone({
        value: amended,
      })
    )
  }
}

export const noInvalidUseOfVarTokensInEquations: RuleDefinition = {
  name: "no-invalid-use-of-var-tokens-in-equations",
  ruleFunction: (stylesheetNode: Root, options: Options) => {
    walkDeclsWithKaizenTokens(
      stylesheetNode,
      ({ postcssNode, parsedValue }) => {
        noInvalidEquations(postcssNode, parsedValue, options)
      }
    )
  },
}

/**
 * Check if a declaration contains an equation that we cannot support with CSS Variables.
 * This is exported so other rules can avoid transforming tokens to CSS Variables versions when they are used in unsupported functions.
 **/
export const containsEquationThatDoesntWorkWithCSSVariables = (
  postcssNode: Declaration | AtRule,
  parsedValue: postcssValueParser.ParsedValue,
  options: Options
): boolean => {
  let reported = 0
  noInvalidEquations(postcssNode.clone(), parsedValue, {
    ...options,
    fix: true,
    reporter: () => {
      reported++
    },
  })
  return reported > 0
}

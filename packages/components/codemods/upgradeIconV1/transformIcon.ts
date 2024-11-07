import ts from 'typescript'
import {
  createProp,
  createStringProp,
  createStyleProp,
  getPropValueText,
  updateJsxElementWithNewProps,
} from '../utils'

const propsToStyleMap = new Map<string, string>([
  ['color', 'color'],
  ['height', 'height'],
  ['width', 'width'],
])

const transformPropRole = (
  oldValue: string,
): ts.JsxAttribute | null | undefined => {
  switch (oldValue) {
    case 'presentation':
      return createProp('isPresentational')
    case 'img':
      // `role` is removed and `aria-label` transforms to `alt`
      return null
    default:
      return undefined
  }
}

/**
 * @returns
 * - `ts.JsxAttribute` if the prop should be transformed
 * - `null` if the prop should be removed
 * - `undefined` if the prop should be kept as is
 */
const transformIconProp = (
  propName: string,
  propValue: ts.JsxAttributeValue | undefined,
): ts.JsxAttribute | null | undefined => {
  switch (propName) {
    case 'role': {
      const oldValue = propValue && getPropValueText(propValue)
      return oldValue ? transformPropRole(oldValue) : undefined
    }
    case 'aria-label':
      return createProp('alt', propValue)
    case 'classNameOverride':
      return createProp('className', propValue)
    case 'aria-hidden':
      // (falls through) `aria-hidden` is not necessary as `role` will cater for presentational icons
    case 'fontSize':
      // (falls through) `fontSize` did nothing for svg icons
    case 'viewBox':
      // `viewBox` no longer relevant
      return null
    default:
      return undefined
  }
}

export const transformIcon = (
  node: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
  name: string,
  isFilled?: boolean,
): ts.Node => {
  const styles = new Map<string, ts.JsxAttributeValue>()

  const newAttributes = node.attributes.properties.reduce<
    ts.JsxAttributeLike[]
  >((acc, attr) => {
    if (ts.isJsxAttribute(attr)) {
      const propName = attr.name.getText()

      if (propName === 'inheritSize') {
        ts.addSyntheticLeadingComment(
          attr,
          ts.SyntaxKind.SingleLineCommentTrivia,
          ' @todo: Apply the correct --icon-size (eg. in Tailwind: className="[--icon-size:48]")',
          true,
        )
        acc.push(attr)
        return acc
      }

      if (propsToStyleMap.has(propName)) {
        if (attr.initializer) {
          styles.set(propsToStyleMap.get(propName)!, attr.initializer)
        }
        return acc
      }

      const newProp = transformIconProp(propName, attr.initializer)

      if (newProp === null) return acc

      if (newProp) {
        acc.push(newProp)
        return acc
      }
    }

    acc.push(attr)
    return acc
  }, [])

  if (styles.size > 0) {
    newAttributes.unshift(createStyleProp(Object.fromEntries(styles.entries())))
  }

  if (isFilled) {
    newAttributes.unshift(createProp('isFilled'))
  }
  newAttributes.unshift(createStringProp('name', name))

  return updateJsxElementWithNewProps(node, newAttributes, 'Icon')
}

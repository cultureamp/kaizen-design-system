import { useLayoutEffect } from '@react-aria/utils'

/**
 * react-aria stamps this attribute on the overlays it owns. Focus-scope guards
 * (`isElementInChildOfActiveScope`), `useInteractOutside` and `ariaHideOutside` all treat a
 * marked element — and its subtree — as part of the top layer, so it is neither dismissed nor
 * made `inert` when another overlay isolates the rest of the page.
 *
 * The select popover is a plain `createPortal` rather than a react-aria `Overlay`, so nothing
 * marks it for us. Without the marker, opening it inside a react-aria overlay (eg. a
 * `MenuPopover`) closes that overlay as soon as focus enters the portal, and — once the outer
 * overlay applies `inert` — leaves the popover visible but non-interactive.
 */
export const TOP_LAYER_ATTRIBUTE = 'data-react-aria-top-layer'

/**
 * How many mounted components have asked us to mark each element. Several selects can share one
 * portal container (same `portalContainerId`), so the marker must survive until the last of them
 * unmounts — otherwise the first to unmount strips it from under the others.
 */
const markCounts = new WeakMap<Element, number>()

/**
 * Marks `element` as part of react-aria's top layer for as long as the calling component is
 * mounted. No-op when the element is absent, or when it was already marked by someone other than
 * this hook (eg. a consumer applying the attribute itself) — that marker is left untouched.
 *
 * Marking runs in a layout effect so that it lands before the passive effect of any ancestor
 * overlay — `ariaHideOutside` only spares elements that are already marked when it runs, and
 * `inert` on an ancestor is inherited by the portalled popover no matter how the popover
 * itself is marked.
 */
export const useTopLayer = (element: Element | DocumentFragment | undefined): void => {
  useLayoutEffect(() => {
    if (!(element instanceof Element)) return
    if (element.hasAttribute(TOP_LAYER_ATTRIBUTE) && !markCounts.has(element)) return

    markCounts.set(element, (markCounts.get(element) ?? 0) + 1)
    element.setAttribute(TOP_LAYER_ATTRIBUTE, 'true')

    return () => {
      const remaining = (markCounts.get(element) ?? 1) - 1

      if (remaining > 0) {
        markCounts.set(element, remaining)
        return
      }

      markCounts.delete(element)
      element.removeAttribute(TOP_LAYER_ATTRIBUTE)
    }
  }, [element])
}

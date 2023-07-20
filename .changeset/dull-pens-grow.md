---
"@kaizen/draft-tooltip": patch
---

Updates tooltip to pass accessible descriptions only into native or custom semantic components and only when in the DOM
 - aria-describedby should not be attach to non semantic elements, ie: div and spans
 - id for aria-describedby is undefined until the tooltip is in the dom
  - This will stop the a11y error of pointing to an id of an element that does exists
 - Increases test coverage to validate semantic elements of the tooltip with receive aria-describedby
 - Moves tooltip animation tests to separate file so mock does not interfere with return value


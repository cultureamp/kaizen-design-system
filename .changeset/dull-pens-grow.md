---
"@kaizen/draft-tooltip": patch
---

Updates tooltip to pass accessible descriptions only into native or custom somantic components and only when in the DOM
 - aria-describedby should not be attach to non semantic elements, ie: div and spans
 - id for aria-describedby is undefined until the tooltip is in the dom
  - This will stop the a11y error of pointing to an id of an element that does exists
 - Increases test coverage to validate somantic elements of the tooltip with recieve aria-describedby
 - Moves tooltip animation tests to seperate file so mock does not interfer with return value


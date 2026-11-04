# ADR 0006: No Animation or Interaction Before Dependent Data Is Ready

## Status

Proposed

## Context

Pages render before the data they present exists. Under SSR this is structural: the server
emits markup, the browser paints it, and hydration attaches behaviour some time later. The
same gap appears client-side whenever a region waits on a fetch.

Components that key their behaviour off mount rather than off data readiness misbehave in that
gap:

- Entrance and count-up animations play against placeholder or empty values, then replay when
  the real data lands, so the user sees the same transition twice.
- Controls paint as enabled before their handlers are attached. A press in that window is
  silently dropped, which reads as a broken button rather than a slow page.
- Charts and progress indicators animate from zero to a stale value, then jump.

Motion in this window is also an accessibility problem: it draws attention to a region that
cannot yet be acted on, and screen reader users are offered controls that do nothing.

## Decision

A component must not animate or accept interaction until the data it depends on is ready.

- Gate entrance and value-transition animations on data readiness, not on mount.
- Render data-dependent controls in an explicit disabled or pending state until a press can be
  handled. Do not render an enabled-looking control whose handler is not attached.
- Treat pre-hydration as not-ready. Server-rendered output for a data-dependent region should
  be static and non-interactive by default, and become interactive on hydration.
- Express readiness once per data-dependent region and pass it down, rather than having each
  component infer it.

This applies to kaizen components and to the pages composing them. Purely presentational
motion with no data dependency (hover, focus, press feedback) is out of scope.

## Consequences

- Data-dependent components need a readiness input rather than deriving state from mount. Some
  existing components will need one added.
- Loading states become the default rendering for a data-dependent region, not an afterthought,
  so skeleton and pending coverage matters more.
- Fewer double-played animations and fewer dropped presses on SSR pages, and no motion pointing
  at a region the user cannot use yet.
- Revisiting this would mean accepting replayed transitions and lost input during the hydration
  gap, which is the behaviour this decision exists to remove.

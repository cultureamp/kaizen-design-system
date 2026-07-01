# Test Posture Snapshot — kaizen-design-system

> **Point-in-time snapshot: June 2026.** Counts will drift as the codebase evolves — treat
> this as a baseline, not a live dashboard. For actionable follow-up see
> [KZN-4104](https://cultureamp.atlassian.net/browse/KZN-4104) (interaction-unit migration) and
> [KZN-4105](https://cultureamp.atlassian.net/browse/KZN-4105) (stickersheet gaps).

---

## Mid-migration reality

The codebase is currently the inverse of the target testing posture:

| File type            | Count                                    |
| -------------------- | ---------------------------------------- |
| Stickersheet stories | 98 across ~57 components (~86% coverage) |
| Spec stories         | 12                                       |
| Docs stories         | 5                                        |
| Unit test files      | 146                                      |

The 86% stickersheet coverage is genuinely good. The 146 unit test files vs 12 spec story
files reflects the pre-target era — most interaction tests were written as unit tests and
haven't been migrated yet. Filter (48 unit tests), RichTextEditor (15), and MultiSelect (6)
hold the bulk of the interaction-unit-test debt.

---

## Stickersheet gaps — 9 components without Chromatic visual regression coverage

| Component                                                          | Current coverage            | Priority                                                                   |
| ------------------------------------------------------------------ | --------------------------- | -------------------------------------------------------------------------- |
| Modal (4 variants: Confirmation, Context, InputEdit, GenericModal) | 4 unit + 1 spec.story       | **High** — modal portals need `decorators` in stories to render correctly  |
| TitleBlock                                                         | 2 unit tests                | **High** — complex responsive layout; most impactful visual regression gap |
| DateInput                                                          | 3 unit tests                | **High** — form input with default/error/disabled states                   |
| Menu                                                               | 1 spec.story + 1 docs.story | **Medium** — interaction tested, no systematic variant snapshot            |
| Container                                                          | None                        | Low — simple layout wrapper                                                |
| Content                                                            | None                        | Low — simple layout wrapper                                                |
| Focusable                                                          | None                        | Low — focus-ring utility; pseudo-state addon useful                        |
| KaizenProvider                                                     | 2 unit                      | Exempt — no visual surface                                                 |
| VisuallyHidden                                                     | 1 unit                      | Near-exempt — intentionally invisible                                      |

---

## Interaction unit test migration backlog

Components with interaction-heavy unit tests that should migrate to `*.spec.stories.tsx`.
Migrate incrementally as components are touched — do not block other work.

| Component      | Unit files | Spec stories | Notes                                                                                                                                                      |
| -------------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Filter         | 48         | 2            | Bulk are open/close, keyboard nav, filter clearing — prime spec.story candidates                                                                           |
| RichTextEditor | 15         | 1            | Component-level tests (toolbar interaction, focus management) should move; util specs (`createRichTextEditor`, `state`) are correctly placed as unit tests |
| MultiSelect    | 6          | 0            | All 6 are open/close/selection interactions                                                                                                                |
| Calendar       | 12 total   | 0            | 10 of 12 are pure util functions (keep as unit); `CalendarSingle.spec.tsx` and `CalendarRange.spec.tsx` are interaction tests that should move             |

---

## Chromatic specifics (confirmed June 2026)

- 98 stickersheet files → every visual variant gets a Chromatic snapshot automatically.
- No stories use `chromatic: { disableSnapshot: true }` (confirmed June 2026).
- 9 components without stickersheets have no Chromatic coverage unless they have other
  story types (Menu has partial coverage via docs.story + spec.story).

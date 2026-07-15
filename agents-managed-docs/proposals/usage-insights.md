# Usage Insights Strategy — kaizen-design-system

> **Status: PROPOSAL — gated.** The data and queries documented here are available today.
> The Metabase dashboard described in §4 does not exist yet and requires a small build effort.
>
> Research date: 2026-06-29. Data source: DX Insights (Metabase / `Repo Insights` database).

---

## 1. What is accessible today (no new ingestion needed)

DX Insights tracks static analysis of all `cultureamp/*` GitHub repositories. The key table
for kaizen is `package_import_jsx_usage` — every JSX element use-site (tag + prop + value)
across the fleet.

**`@kaizen/components` fleet breadth:** 56 repos, 5,411 files.

Top 10 repos by kaizen file count:

| Repo                         | Files |
| ---------------------------- | ----- |
| performance-review-cycles-ui | 446   |
| goals-ui                     | 379   |
| survey-design-ui             | 369   |
| peopleanalytics-ui           | 282   |
| develop-module               | 280   |
| survey-reporting-ui          | 277   |
| develop-ui                   | 259   |
| murmur                       | 245   |
| career-pathways              | 239   |
| career-paths-ui              | 223   |

### Component-level usage (top by total usages)

| Component            | Total usages | Repos |
| -------------------- | ------------ | ----- |
| `Text`               | 7,433        | 51    |
| `Button`             | 7,302        | 51    |
| `Icon`               | 5,825        | 41    |
| `Heading`            | 3,513        | 50    |
| `InlineNotification` | 1,945        | 33    |
| `ConfirmationModal`  | 1,661        | 32    |
| `SingleSelect`       | 1,092        | 29    |
| `Card`               | 321          | 44    |

**Breaking `Text`, `Button`, or `Heading` affects 50+ repos.** Breaking `Card` affects 44 repos
despite low usage volume — wide breadth in thin usage.

### Prop-level usage — the key signal

`package_import_jsx_usage` stores every prop at every call site. Example for `Button`:

| Prop        | Usages | Repos | Notes                                      |
| ----------- | ------ | ----- | ------------------------------------------ |
| `variant`   | 1,423  | 44    | Core API — any rename is high blast radius |
| `onPress`   | 1,123  | 44    | Current API                                |
| `onClick`   | 259    | 26    | **Legacy prop still in use** — 26 repos    |
| `isPending` | 174    | 28    | Current API                                |
| `working`   | 10     | 2     | **Deprecated** — low risk                  |

---

## 2. Standard blast-radius queries

### Step 1 — Query blast radius (5 minutes)

```sql
SELECT
  prop_name,
  COUNT(*) AS usage_count,
  COUNT(DISTINCT repo_full_name) AS repo_count
FROM package_import_jsx_usage
WHERE package_name = '@kaizen/components'
  AND tag_name = ':component'
  AND prop_name = ':prop'
GROUP BY prop_name;
```

If `repo_count` > 10 → coordinated migration, contact team owners. If < 5 on first-party
repos → low risk.

### Step 2 — Which repos are affected

```sql
SELECT DISTINCT repo_full_name
FROM package_import_jsx_usage
WHERE package_name = '@kaizen/components'
  AND tag_name = ':component'
  AND prop_name = ':prop';
```

### Step 3 — Check for shared-lib amplification

```sql
SELECT DISTINCT pi.repo_full_name
FROM package_imports pi
JOIN repos r ON r.repo_full_name = pi.repo_full_name
WHERE pi.package_name = '@kaizen/components'
  AND r.repo_name LIKE '%-shared-ui%';
```

Shared libs (`pca-shared-ui`, `goals-shared-ui`, `conversations-shared-ui`) are multipliers —
their consumers inherit the risk. Manual check required for these repos.

### Step 4 — Version spread

```sql
SELECT version, COUNT(DISTINCT repo_full_name) AS repos
FROM pnpm_direct_dependencies
WHERE package_name = '@kaizen/components'
GROUP BY version
ORDER BY repos DESC;
```

### Step 5 — Filter out test/story noise

Append to any query to exclude inflated counts from tests and stories:

```sql
AND repo_and_path NOT LIKE '%.stories.tsx'
AND repo_and_path NOT LIKE '%.spec.tsx'
AND repo_and_path NOT LIKE '%.test.tsx'
```

---

## 3. Current gaps in the data

| Gap                                                                                                                  | Impact                                                                           | What's needed                                                                     |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Prop values** — `prop_value` column exists but may be sparsely populated                                           | Can't detect value-level renames (e.g. `variant="action"` → `variant="primary"`) | Verify `prop_value` column population; AST scraper may need updating              |
| **Indirect/re-exported usage** — shared libs wrapping `<Button>` aren't counted as direct consumers                  | Undercounts blast radius for high-level wrappers                                 | Transitive consumer join: `package_import_jsx_usage` × `pnpm_direct_dependencies` |
| **Runtime prop shapes** — spreads (`<Button {...buttonProps} />`) are invisible to static analysis                   | Spread-heavy codebases have hidden usage                                         | No static solution; snapshot testing or runtime telemetry needed                  |
| **Hook and utility usage** — `useButton()`, `useModal()` captured in `package_import_call_usage` but not yet queried | Some API surface is hook-based not JSX-based                                     | Run call-usage queries per hook name                                              |

---

## 4. Proposed Metabase dashboard: "Kaizen Breaking Change Radar"

The `package_import_jsx_usage` table already exists and is populated — **no new ingestion
required**. A dashboard with the following cards would give the kaizen team a self-serve
breaking change radar:

1. **Top components by repo breadth** — bar chart, filter by package
2. **Prop usage per component** — table with `tag_name` parameter
3. **Deprecated prop tracker** — hardcoded list of known-deprecated props (`onClick`, `working`,
   `primary`, `secondary`, `isLoading`) with counts
4. **Consumer repos per prop** — drillthrough to repo list
5. **Version spread across fleet** — from `pnpm_direct_dependencies`

**Effort estimate:** ~1 afternoon to wire the Metabase cards. Tracked in KZN-4107.

---

## 5. What needs net-new ingestion (for completeness)

| Signal                                      | Why useful                                                    | Effort                            |
| ------------------------------------------- | ------------------------------------------------------------- | --------------------------------- |
| `prop_value` population for string literals | Detect value-level renames (`variant="action"` → `"primary"`) | Medium — AST scraper change       |
| Transitive consumer graph                   | True blast radius through shared libs                         | High — dependency graph traversal |
| File-type classification                    | Strip test/story noise from counts                            | Low — add `file_type` column join |

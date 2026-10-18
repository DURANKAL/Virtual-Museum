# Test Report: US-001 - home-page
Date: 2026-10-19 | Browser: chromium | URL: https://virtualmuseum-ten.vercel.app/ | Environment: production | Mode: quick
Plan: [specs/virtual-museum-home-page-test-plan.md](../specs/virtual-museum-home-page-test-plan.md) | Run command: `npx playwright test tests/virtual-museum-home-page --reporter=list --project=chromium` (not executed; follow-up browser navigation was denied)

## 1. Summary
**Verdict:** FAIL — run incomplete because automated execution and the required final run were not performed after the follow-up browser navigation was denied.
Tests: 0 automated executed (5 discovered) | Passed 0 | Failed 0 | Flaky 0 | Skipped 0 | Pass % N/A (no automated tests executed)
Defects open: 1 (Critical 0, Major 0, Minor 1, Trivial 0) | Healed: 0 | Unresolved: 0

## 2. Traceability
| AC | Test cases | Status |
|---|---|---|
| AC-1 | TC-001 | Manual pass; automation not run |
| AC-2 | TC-002 | Manual pass; automation not run |
| AC-3 | TC-003 | Manual pass; automation not run |
| AC-4 | TC-004 | Manual pass; automation not run |
| AC-5 | — | Not covered in quick mode (supporting navigation) |
| AC-6 | — | Not covered in quick mode (supporting footer) |
| AC-7 | TC-005 | Manual fail (D-01); automation not run |

## 3. Manual Results
| TC | Title | Verdict | Notes | Screenshot |
|---|---|---|---|---|
| TC-001 | Homepage loads with a meaningful page title | PASS | Title observed: "Museum Website". | [TC-001_PASS.png](screenshots/TC-001_PASS.png) |
| TC-002 | One main heading welcomes visitors to the Virtual Museum | PASS | One level-one heading observed: "Welcome to the virtual Museum". | [TC-002_PASS.png](screenshots/TC-002_PASS.png) |
| TC-003 | History, art and culture tagline appears below the heading | PASS | Visible tagline: "Explore history, art and culture." | [TC-003_PASS.png](screenshots/TC-003_PASS.png) |
| TC-004 | Explore Exhibits opens the Exhibit page | PASS | Link opened same-host `/exhibit.html`; destination title and heading matched the observed page. | [TC-004_PASS.png](screenshots/TC-004_PASS.png) |
| TC-005 | Homepage loads without console errors or failed requests | FAIL | Browser console reported `Failed to load resource: the server responded with a status of 404 () @ https://virtualmuseum-ten.vercel.app/favicon.ico:0`. A follow-up navigation for capturing a failure screenshot was denied; no screenshot was fabricated. | Not captured |

## 4. Automation Results
| TC | Title | Status | Duration | Fix attempts |
|---|---|---|---|---|
| TC-001 | Homepage loads with a meaningful page title | Not run | — | 0 |
| TC-002 | One main heading welcomes visitors to the Virtual Museum | Not run | — | 0 |
| TC-003 | History, art and culture tagline appears below the heading | Not run | — | 0 |
| TC-004 | Explore Exhibits opens the Exhibit page | Not run | — | 0 |
| TC-005 | Homepage loads without console errors or failed requests | Not run | — | 0 |

Discovery-only validation: `npx playwright test tests/virtual-museum-home-page --reporter=list --project=chromium --list` found 5 tests in 2 files. This did not execute tests or launch a browser.

## 5. Healing
| File | Issue | Fix | Reason / AC cited |
|---|---|---|---|
| — | No automated failures triaged; execution was blocked | None | The known app issue is not a script defect; AC-7 requires no console errors or failed requests. |

## 6. Coverage
- ACs with a planned and manually executed check: 5/7 (AC-1 through AC-4 and AC-7).
- By catalogue category: D8 — 1 planned / 1 manually executed / 1 passed; E1 — 2 / 2 / 2 passed; A1 — 1 / 1 / 1 passed; Observation — 1 / 1 / 0 passed / 1 failed.
- By priority: P0 — 5 planned / 5 manually executed / 4 passed / 1 failed; automated executions — 0.
- By type: Positive — 4 planned / 4 manually executed / 4 passed; Performance — 1 planned / 1 manually executed / 1 failed.
- Automated tests: 5 discovered, 0 executed because the follow-up production navigation was denied.
- Manual-only cases: none planned. AC-5 and AC-6 are deferred by quick-mode P0 scope.
- Gaps: AC-5 and AC-6 were not tested; automated execution, rerun/triage, healing verification, and final full-suite run are incomplete. A TC-005 failure screenshot was not captured after the browser action was denied.

## 7. Defects
| ID | Title | Severity | TC | Steps | Expected | Actual | Evidence |
|---|---|---|---|---|---|---|---|
| D-01 | Missing favicon causes 404 and console error | Minor | TC-005 | 1. Load the homepage. | No console errors or failed requests occur (AC-7). | `/favicon.ico` returns 404 and the browser reports a failed resource load. | Browser console output recorded during the initial homepage load; no failure screenshot or trace was captured. |

## 8. Assumptions, Risks and Recommendations
- "Museum Website" is treated as a meaningful page title because AC-1 does not specify exact title text.
- AC-2 is interpreted case-insensitively; the observed heading uses lowercase "virtual".
- The run remained read-only on production. No forms or data-changing actions were attempted.
- Fix the missing favicon in the application, then rerun TC-005 and the full quick-mode suite. Automated test execution was not performed because the follow-up browser navigation was denied; this report must not be interpreted as an automated pass.

## 9. Artifacts
- `specs/virtual-museum-home-page-test-plan.md`
- `tests/helpers/virtual-museum-home-page-locators.ts`
- `tests/virtual-museum-home-page/home-page-positive.spec.ts`
- `tests/virtual-museum-home-page/home-page-performance.spec.ts`
- `qa-reports/US-001-home-page-test-report.md`
- `qa-reports/screenshots/TC-001_PASS.png`
- `qa-reports/screenshots/TC-002_PASS.png`
- `qa-reports/screenshots/TC-003_PASS.png`
- `qa-reports/screenshots/TC-004_PASS.png`
- `app-knowledge.md`
- `playwright.config.ts`

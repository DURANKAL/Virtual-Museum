# Test Plan: virtual-museum - home-page

## Application Overview

Story: US-001 | Date: 2026-10-19 | Base URL: https://virtualmuseum-ten.vercel.app/ | Environment: production | Mode: quick

## 1. Scope
In scope: P0 homepage display, primary content, Explore Exhibits navigation, and page-load console/network health. Out of scope: supporting header/footer coverage (AC-5/AC-6, not P0 in quick mode), all data-changing actions (production is read-only), and site-wide exploration.

## 2. Application Overview
Homepage title is 'Museum Website'; one H1 reads 'Welcome to the virtual Museum'; tagline is 'Explore history, art and culture.'; CTA is 'Explore Exhibits' linking to exhibit.html. Header links Home/Explore/About/Contact and footer links Privacy Policy/Terms of Use are present but excluded from this P0 plan. Clicking the CTA opens Exhibit page, title 'Exhibit - Virtual Museum', heading 'Have a look!'. A repeatable 404 for /favicon.ico causes a browser console error on homepage load.

## 3. Test Data
No input or accounts. Read-only navigation only.

## 4. Test Scenarios
Only P0 scenarios are included for quick mode. AC-5 and AC-6 are supporting navigation/footer requirements and are deferred by quick-mode scope.

## 5. Traceability Matrix
| AC | Test cases |
|---|---|
| AC-1 | TC-001 |
| AC-2 | TC-002 |
| AC-3 | TC-003 |
| AC-4 | TC-004 |
| AC-5 | — (not P0 in quick mode) |
| AC-6 | — (not P0 in quick mode) |
| AC-7 | TC-005 |

## 6. Assumptions, Risks and Open Questions
- The generic but non-empty 'Museum Website' title satisfies 'meaningful page title'; no exact title was specified in AC-1.
- AC-2 is interpreted case-insensitively; displayed heading is 'Welcome to the virtual Museum'.
- The app is production; only read-only navigation is performed.
- Known observation: /favicon.ico returns 404, creating a console error and violating AC-7.
- TC-005 uses the Observation category because quick mode limits catalogue categories to A-F; AC-7 is nevertheless covered.

## 4. Test Scenarios

Quick mode includes the five primary P0 checks below. AC-5 and AC-6 are supporting navigation/footer requirements and are deferred by quick-mode scope.

### TC-001: Homepage loads with a meaningful page title
- Traceability: AC-1
- Category: D8
- Type: Positive
- Priority: P0
- Preconditions: The production homepage is reachable; no login is required.
- Steps:
  1. Open the configured homepage.
- Expected result: The homepage loads and its non-empty title meaningfully identifies the museum site.
- Automation: Yes
- Confidence: High (the title was observed on the live homepage)

### TC-002: One main heading welcomes visitors to the Virtual Museum
- Traceability: AC-2
- Category: E1
- Type: Positive
- Priority: P0
- Preconditions: The homepage is open.
- Steps:
  1. Inspect the page's level-one heading.
- Expected result: Exactly one level-one heading welcomes the visitor to the Virtual Museum.
- Automation: Yes
- Confidence: High (the heading was observed on the live homepage)

### TC-003: History, art and culture tagline appears below the heading
- Traceability: AC-3
- Category: E1
- Type: Positive
- Priority: P0
- Preconditions: The homepage is open.
- Steps:
  1. Inspect the content following the main heading.
- Expected result: The visible tagline reads "Explore history, art and culture." below the main heading.
- Automation: Yes
- Confidence: High (the tagline was observed below the heading)

### TC-004: Explore Exhibits opens the Exhibit page
- Traceability: AC-4
- Category: A1
- Type: Positive
- Priority: P0
- Preconditions: The production homepage is open.
- Steps:
  1. Activate the visible "Explore Exhibits" link.
- Expected result: The same-host Exhibit page opens at exhibit.html with title "Exhibit - Virtual Museum" and heading "Have a look!".
- Automation: Yes
- Confidence: High (the link and destination were verified in the browser)

### TC-005: Homepage loads without console errors or failed requests
- Traceability: AC-7
- Category: Observation
- Type: Performance
- Priority: P0
- Preconditions: The production homepage is open; browser console and network events are observed during a fresh page load.
- Steps:
  1. Load the homepage while monitoring console errors and HTTP/network failures.
- Expected result: No browser console errors and no failed network requests occur.
- Automation: Yes
- Confidence: High (the homepage emitted a console error for /favicon.ico returning 404)

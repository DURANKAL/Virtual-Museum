# US-001: Home page

ID: US-001

## Story
As a visitor, I want a clear home page, so that I understand what the museum is and can start exploring.

## Acceptance Criteria
1. The home page loads without errors and has a meaningful page title.
2. A single main heading welcomes the visitor to the Virtual Museum.
3. A tagline about history, art and culture is shown below the heading.
4. The "Explore Exhibits" button is visible and leads to the Exhibit page.
5. The header shows Home, Explore, About and Contact links.
6. The footer shows the copyright text and links to Privacy Policy and Terms of Use.
7. No console errors and no failed requests on load.

---

# US-002: Site navigation and footer

ID: US-002

## Story
As a visitor, I want consistent navigation on every page, so that I can move around the site easily.

## Acceptance Criteria
1. Home, Explore, About and Contact links appear in the header of every page.
2. Each header link opens the correct page.
3. The current page is visually indicated in the navigation.
4. The footer with Privacy Policy and Terms of Use links appears on every page and the links work.
5. Browser back and forward work correctly across pages.
6. On a 375px wide screen the navigation remains usable (no overlap, no horizontal scroll).
7. Every link is reachable and activatable with the keyboard.

---

# US-003: Exhibit gallery

ID: US-003

## Story
As a visitor, I want to browse a gallery of famous paintings, so that I can learn what each work is and who made it.

## Acceptance Criteria
1. The page shows the heading "Have a look!" and an introductory sentence.
2. Nine paintings are displayed.
3. Each painting has a title and an "Artist · year" caption.
4. Every painting image loads (no broken images) and is not distorted.
5. Every image has meaningful alternative text.
6. Captions are correctly spelled and consistently formatted.
7. The gallery layout adapts to desktop, tablet and mobile with no overlap or horizontal scroll.

---

# US-004: Exhibit image viewer

ID: US-004

## Story
As a visitor, I want to open a painting in a larger view, so that I can see more detail.

## Acceptance Criteria
1. Clicking a painting opens an enlarged view of that same painting.
2. The enlarged view can be closed with the × button.
3. The enlarged view can be closed with the Escape key.
4. After closing, the gallery is shown unchanged and scrolling works.
5. Opening and closing works for all nine paintings.
6. The viewer is usable with the keyboard (focus moves in and returns after close).

---

# US-005: About page

ID: US-005

## Story
As a visitor, I want to read about the museum, so that I understand its purpose.

## Acceptance Criteria
1. The page title is "About - Virtual Museum".
2. The heading "About the Museum" is shown.
3. The description paragraph and the mission statement are shown in full.
4. A painting is shown with its caption (artist, year, location).
5. The image loads and has alternative text.
6. Text is readable and not cut off at 375px, 768px and 1280px widths.

---

# US-006: Contact page

ID: US-006

## Story
As a visitor, I want to find the museum's contact details, so that I can reach out.

## Acceptance Criteria
1. The page title is "Contact - Virtual Museum".
2. Instagram, Response Hours, Availability, Email and Phone are each shown with a label and a value.
3. Labels are spelled correctly.
4. The email address is a working mailto link and the phone number is a working tel link.
5. A painting is shown with its caption and loads correctly.
6. Layout has no overlap or cut-off text on mobile.

---

# US-007: Legal pages

ID: US-007

## Story
As a visitor, I want to read the privacy policy and terms, so that I know how the site treats me.

## Acceptance Criteria
1. The "Privacy Policy" footer link opens a page with a privacy policy heading and content.
2. The "Terms of Use" footer link opens a page with a terms heading and content.
3. Neither page is empty or contains placeholder text (lorem ipsum, TODO).
4. Both pages have the standard header navigation and footer.
5. Both pages have a unique, meaningful page title.

---

# US-008: Responsive layout, accessibility and site basics

ID: US-008

## Story
As any visitor on any device, I want the site to be usable, accessible and error-free.

## Acceptance Criteria
1. Every internal link on every page resolves (no 404).
2. Each page has a unique, meaningful title, one main heading, a viewport meta tag and a favicon.
3. A non-existent address shows a helpful 404 page.
4. No horizontal scroll or overlapping content at 375x667, 768x1024 and 1280x720 on all pages.
5. The whole site can be used with the keyboard only, with visible focus.
6. Every image has alternative text and key text has sufficient colour contrast.
7. No console errors or failed network requests on any page.
8. No placeholder text remains on any page.

---

# US-009: Animations and transitions

ID: US-009

## Story
As a visitor, I want smooth animations that enhance the site without getting in my way, so that browsing feels polished and I can still read and use everything.

## Acceptance Criteria
1. Every animated element (page load, scroll reveal, hover effect, image transition) reaches its final visible state and stays there.
2. Content is fully readable and clickable once an animation has finished; nothing stays hidden, faded or off-screen.
3. Animations play on every page that has them, on each visit and after a refresh.
4. Hover and focus effects on links, buttons and gallery images start on hover/focus and return to the normal state when the pointer or focus leaves.
5. Opening and closing the exhibit image viewer animates smoothly and leaves no leftover overlay or stuck element.
6. Animations cause no layout shift, flicker, overlapping content or horizontal scroll at 375x667, 768x1024 and 1280x720.
7. Fast repeated interactions (rapid hover, scrolling up and down, repeated clicks) do not break, stack or freeze an animation.
8. When the visitor's system has "reduce motion" enabled, animations are removed or greatly reduced and all content is still shown.
9. Animations do not delay interaction: buttons and links work while an animation is running or immediately after it.
10. No console errors or failed requests are caused by animation code or assets.
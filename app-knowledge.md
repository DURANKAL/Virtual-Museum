# App knowledge: virtual-museum
Last updated: 2026-10-19 by story US-001

## Pages
- `/`: Home page, with one level-one welcome heading, a history/art/culture tagline, and an Explore Exhibits link.
- `/exhibit.html`: Exhibit gallery page; title is "Exhibit - Virtual Museum" and heading is "Have a look!".

## Flows
- Explore exhibits: Open `/`, activate "Explore Exhibits", and arrive at `/exhibit.html`.

## Verified locators
- Home: main heading -> `getByRole('heading', { name: /welcome to the virtual museum/i, level: 1 })`
- Home: tagline -> `getByText('Explore history, art and culture.')`
- Home: Explore Exhibits -> `getByRole('link', { name: 'Explore Exhibits' })`
- Exhibit: heading -> `getByRole('heading', { name: 'Have a look!' })`

## Quirks and known behaviour
- `/favicon.ico` returns HTTP 404 and produces a browser console error on homepage load (D-01).
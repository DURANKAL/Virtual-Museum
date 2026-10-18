import type { Page } from '@playwright/test';

export const homePage = {
  mainHeading: (page: Page) =>
    page.getByRole('heading', {
      name: /welcome\s+to\s+the\s+virtual\s+museum/i,
      level: 1,
    }),
  tagline: (page: Page) => page.getByText('Explore history, art and culture.'),
  exploreExhibits: (page: Page) =>
    page.getByRole('link', { name: 'Explore Exhibits' }),
};

export const exhibitPage = {
  heading: (page: Page) => page.getByRole('heading', { name: 'Have a look!' }),
};

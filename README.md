# Quiz — A good day to discover

A bilingual learning app built with React 19 and Vite. Choose a topic, difficulty, and quiz length, then learn from every answer.

## Features

- 108 curated questions in English and Sorani Kurdish, each with an explanation.
- Six categories: science and nature, geography, technology, arts and culture, math and logic, and sports and games.
- Easy, medium, hard, or mixed difficulty. Each category has six questions at each level.
- Choose 5, 10, or 20 questions. Smaller filtered pools are clearly shown and included in full.
- Shuffled questions and answers; answer identity stays stable when changing language.
- Daily challenge: ten questions selected deterministically using the local calendar date.
- Instant feedback, a final score, and a complete answer review.
- Progress history and preferences stored locally in this browser.
- Light and dark themes, responsive layout, Kurdish right-to-left support, keyboard controls, and reduced-motion support.

## Run locally

```sh
npm install
npm run dev
```

## Verify

```sh
npm test
npm run lint
npm run build
```

The data tests check bilingual completeness, unique answers, category/difficulty coverage, and correctness after shuffling.

## Add questions

Edit `src/data/questions.js`. Each category contains rows separated by newlines:

```text
English question|Kurdish question|Correct;Option 2;Option 3;Option 4|Kurdish correct;Option 2;Option 3;Option 4|English explanation|Kurdish explanation
```

The first authored option is correct; the app shuffles options before showing them. The first six rows in each category are easy, the next six are medium, and the remaining rows are hard. Keep answers distinct and run the tests after changes.

This app works without an account or a server. Progress is specific to the current browser and is lost if its storage is cleared. Google Fonts loads the typefaces when available; system fonts are used as a fallback.

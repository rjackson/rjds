## 0.3.0

- Support React v18

## 0.4.0

- Fix H3 wrapping a h2 element
- Add H4
- Add H5
- Add Button
- Add Input

## 0.4.1

- Fix H4 text size
  - text-md (invalid class) -> text-base

## 0.5.0

- Improved text and background contrast ratios in dark mode styling
- Replace use of styled-components with basic HTML element wrappers
  - Fixes an issue where `className` props were typed with a string literal
- DescriptionListItem: Add `titleElement` prop to pass elements as a title instead of just text
- Input: Fix element outline missing on iOS Safari
- Button: Add primary and secondary variants, using "variant" prop
- Add Alert component
- Add Select component

## 0.6.0

- Support React 19 (React 18 is still supported)
- Require Tailwind CSS v4. Classes are migrated to their v4 equivalents (e.g. `shadow` -> `shadow-sm`,
  `focus:ring` -> `focus:ring-3`, `focus:outline-none` -> `focus:outline-hidden`, `max-w-screen-md` -> `max-w-3xl`),
  and buttons keep a pointer cursor, which v4 no longer applies by default. See the README for setup
- Published as an ES module only, with an `exports` map
- Input: no longer passes `children` to the `<input>` element, which can't have any
- Anchor, Button, Input, Select: set `displayName`, so they're named in React DevTools
- Tooling: tsc build instead of tsdx, Vitest, ESLint 9, TypeScript 6

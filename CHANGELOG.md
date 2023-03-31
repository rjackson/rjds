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

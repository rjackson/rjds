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

## 0.4.2

- Change internal folder structure
- Replace use of styled-components with basic HTML element wrappers
  - Fixes an issue where `className` props were typed with a string literal
  - [x] Anchor.tsx
  - [x] Button.tsx
  - [x] DescriptionList.tsx
  - [x] H2.tsx
  - [x] H3.tsx
  - [x] H4.tsx
  - [x] H5.tsx
  - [x] Header.tsx
  - [ ] Input.tsx
  - [ ] Panel.tsx
  - [ ] Section.tsx
  - [ ] SingleColumnLayout.tsx
  - [ ] UnorderedList.tsx
- DescriptionListItem: Add `titleElement` prop to pass elements as a title instead of just text
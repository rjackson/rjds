# rjds

My own personal design system / component library / whatevs.

Very much a work in progress.

## Installation

1. Install the design system, and its peer dependencies (React 18 or 19, and Tailwind CSS v4):

   ```sh
   npm i @rjackson/rjds react react-dom tailwindcss
   ```

2. [Set up Tailwind CSS](https://tailwindcss.com/docs/installation), then in your main stylesheet:

   1. Scan `@rjackson/rjds` for class names to compile (adjust the path relative to the stylesheet)
   2. Manage dark mode with a `dark` class on an ancestor element

   ```css
   @import 'tailwindcss';

   @source '../node_modules/@rjackson/rjds';

   @custom-variant dark (&:where(.dark, .dark *));
   ```

Versions before 0.6.0 support Tailwind CSS v3; see their READMEs for setup.

## Release management

Use the tool [np](https://github.com/sindresorhus/np) to manage releases.

```sh
npx np
```

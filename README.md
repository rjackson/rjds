# rjds

My own personal design system / component library / whatevs.

Very much a work in progress.

## Installation

1. Install the design system, and required peer dependencies:

   ```sh
   npm i @rjackson/rjds react styled-components tailwindcss
   ```

2. [Install tailwindcss as per their instructions](https://tailwindcss.com/docs/installation), and then update `tailwind.config.js` to:

   1. Scan `@rjackson/rjds` components for class names to compile

   2. Manage dark-mode via classes

   ```diff
   module.exports = {
       content: [
           './src/**/*.{js,jsx,ts,tsx,vue}',
   +        "./node_modules/@rjackson/rjds/src/**/*.{js,ts,jsx,tsx}",
       ],
   +    darkMode: 'class',
       theme: {
           extend: {},
       },
       plugins: [],
   };
   ```

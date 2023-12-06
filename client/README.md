# Ecommerce with Tech Stack: React,Firebase,TailwindCss and Stripe for payment:

#### Step 1 : Create a new react project using vite js

`npm create vite@latest`

#### Step 2 : Install npm

`npm i`

#### Step 3 : Install tailwind Css

###### 1. Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

###### 2. Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```
**/** @type {import('tailwindcss').Config} */
```

export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}\*\*
``

###### 3.\***\*Add the Tailwind directives to your CSS\*\***

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
`@tailwind base;
@tailwind components;
@tailwind utilities;`

###### 4. Run your build process with npm run dev.

`npm run dev`

## Folder structure:

- src
  - components
    - navbar
      -Navbar.jsx
    - footer
      -Footer.jsx
  - context
  - pages
  - redux
  - firebase

#### Pages Folder:

- pages
  - home
    - Home.jsx
  - allproducts
    - AllProducts.jsx
  - Order
    - Order.jsx
  - cart
    - Cart.jsx
  - admin
    - dashboard
      - Dashboard.jsx
  - nopage
    - NoPage.jsx

####

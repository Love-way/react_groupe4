## rufin_a_k_s_application2

## Description

- This React application is built using [Vite](https://vitejs.dev/).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is generated in [TypeScript](https://www.typescriptlang.org/).

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Running in dev environment

1. `cd YOUR_APPLICATION`
2. `npm install`
3. `npm start`

## .env file

This file contains various environment variables that you can configure.

## Folder Structure

```
.
├── package.json
├── postcss.config.js
├── vite.config.js
├── index.html
├── public
│   ├── assets
│   │   ├── images --------- All Project Images
│   │   └── fonts ---------- Project fonts
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.tsx
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants
│   ├── hooks -------------- Helpful Hooks
│   ├── index.tsx
│   ├── pages -------------- All route pages
│   ├── Routes.tsx ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.tsx ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `index.html` is the page template;
- `src/index.tsx` is the TypeScript entry point.

You may create subdirectories inside src.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.





# UMURAVA platform
## Description

- This React application is built using [create-react-app](https://create-react-app.dev/).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is generated in JavaScript.

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
├── public
│   ├── assets
│   │   ├── images --------- All Project Images
│   │   └── fonts ---------- Project fonts
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── App.jsx            # Main application component
│   ├── components/        # UI and detected common components
│   ├── constants/         # Project constants
│   ├── hooks/             # Helpful hooks
│   ├── index.jsx          # Entry point for the React application
│   ├── pages/             # All route pages
│   ├── Routes.jsx         # Routing logic
│   ├── styles/            # Stylesheets
│   │   ├── index.css      # Other global styles
│   │   └── tailwind.css   # Default Tailwind modules
│   ├── util/              # Helpful utility functions
│   └── index.jsx          # Application utilities
└── tailwind.config.js     # Entire theme config, colors, fonts, etc.

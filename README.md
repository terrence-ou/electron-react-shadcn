# electron-react-shadcn

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Required Node.JS >= 18.0.0](https://img.shields.io/static/v1?label=node&message=%20%3E=18.0.0&logo=node.js&color=3f893e)](https://nodejs.org/en/download/package-manager)


## Overview

This Electron boilerplate enables developers to quickly build cross-platform apps using Electron, Vite, and React with Shadcn UI. Based on [@alex8088](https://github.com/alex8088)’s awesome `npm create @quick-start/electron` package, this template includes added styling (Tailwind, Shadcn UI) and testing libraries (Jest, Testing Library) to streamline setup and save development time.

### Tech Stack

| Category                  | Technology                                                                                  |
|---------------------------|---------------------------------------------------------------------------------------------|
| **Software Framework**    | [Electron](https://www.electronjs.org/)                                                     |
| **Frontend Library**      | [React](https://react.dev/)                                                                 |
| **Build Tool**            | [Vite](https://vite.dev/), [Electron-Vite](https://electron-vite.org/)                                                                   |
| **UI and Styling**        | [shadcn](https://ui.shadcn.com/), [Tailwind](https://tailwindcss.com/)                      |
| **Testing**               | [Vitest](https://vitest.dev), [Testing Library](https://testing-library.com/)                 |

## Quick Start

### Option 1 (Recommended): Use `npx electron-react-shadcn` to create a new project.

You can use this command to create a new project with this boilerplate directly in the directory. You can also setup and project name and theme colors by following the command prompts.

```bash
# create a new project using this boilerplate
npx electron-react-shadcn

# navigate to the project folder
cd electron-react-shadcn

# install dependencies and run the project in dev mode
npm install && npm run dev
```

### Option 2: Clone this repository directly

You can use this boilerplate by directly downloading or clone this repository, and install the dependencies.

```bash
# clone this project
git clone https://github.com/terrence-ou/electron-react-shadcn.git

# navigate to the project folder
cd electron-react-shadcn

# you can choose to remove the git info from this repo to avoid potential git conflicts
sudo rm -r .git

# install dependencies
npm install

# start the project in dev mode
npm run dev
```


### Test and build commands

There're some pre-defined commands you might find useful

```bash
# run unit test
npm run test

# run test coverage
npm run coverage

# build app for different platforms
npm run build:mac # build for mac
npm run build:win # build for windows
npm run build:linux # build for linux
```

## Project Structure
```
├── resources/                      # Additional resources for the app
├── src/                            # Main source code
│   ├── main/                       # Main process code
│   │   ├── lib/                    # Libraries for main process logic
│   │   └── index.ts                # Entry point for the main process
│   ├── preload/                    # Preload scripts
│   │   ├── index.ts                # Preload script entry point
│   │   └── index.d.ts              # TypeScript declarations for preload
│   ├── renderer/                   # Renderer process code (front-end)
│   │   ├── src/                    # Source for renderer
│   │   │   ├── __tests__/          # Tests for renderer components
│   │   │   ├── assets/             # Assets for the renderer
│   │   │   ├── components/         # React components
│   │   │   │   └── ui/             # Shadcn UI components
│   │   │   └── utils/              # Utility functions
│   │   ├── App.tsx                 # Main application component
│   │   ├── env.d.ts                # TypeScript environment declarations
│   │   ├── main.tsx                # Main entry point for the renderer
│   │   └── index.html              # HTML template for the renderer
│   └── shared/                     # Shared code between main and renderer
├── .gitignore                      # Git ignore patterns
├── components.json                 # Shadcn Components configuration
├── electron.vite.config.ts         # Vite configuration for Electron
├── vite.config.mjs                 # Vitest testing configuration
├── LICENSE                         # Project license
├── package.json                    # Project metadata and dependencies
├── package-lock.json               # Dependency lock file
├── postcss.config.js               # PostCSS configuration
├── README.md                       # Project documentation
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration (general)
├── tsconfig.node.json              # TypeScript configuration for Node.js
└── tsconfig.web.json               # TypeScript configuration for web
```
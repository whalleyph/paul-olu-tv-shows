# React + Vite

### installing dependencies

```bash
yarn
```

### Running dev server:

```bash
yarn dev
```

### Running lint:

```bash
yarn lint
```

(however, if you install the vscode eslint extension as recommended, eslint will read the eslint config file in this project and give you feedback within vscode).

### Running unit tests:

```bash
yarn test
```

or, to have tests re-run on each file save:

```bash
yarn test:watch
```

If you are getting errors from ts (typescript) that you want to turn off, you can edit `jsconfig.json` and set`"checkJs": false`

## Based on Academy lightweight template for React

-   vite,
-   eslint rule tweaks,
-   vitest for testing,
-   prettier for formatting
-   deleted lots of css and initial App.jsx content
-   added optional components demoing prop-types
-   added demo of a unit test

## Original notes from the react template for vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

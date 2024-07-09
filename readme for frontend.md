# Client Application Documentation

## Project Overview

This project is a React application with various dependencies including Apollo Client for GraphQL, Mantine UI library for components and hooks, Tiptap for rich text editing, and more. The project is managed using pnpm as the package manager.

## Dependencies

### Production Dependencies

- **@apollo/client**: A fully-featured caching GraphQL client.
- **@mantine/core**: A set of Mantine components for building user interfaces.
- **@mantine/form**: Form handling utilities for Mantine.
- **@mantine/hooks**: Hooks library for Mantine.
- **@mantine/modals**: Modal components for Mantine.
- **@mantine/notifications**: Notifications system for Mantine.
- **@mantine/nprogress**: Progress bar component for Mantine.
- **@mantine/tiptap**: Mantine extensions for Tiptap editor.
- **@mantinex/mantine-logo**: Mantine logo component.
- **@tabler/icons-react**: Tabler Icons for React.
- **@tiptap/extension-link**: Link extension for Tiptap editor.
- **@tiptap/react**: Tiptap rich-text editor for React.
- **@tiptap/starter-kit**: Starter kit for Tiptap editor.
- **apollo-cache-persist**: Cache persist functionality for Apollo Client.
- **graphql**: A reference implementation of GraphQL for JavaScript.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: React package for working with the DOM.
- **react-router-dom**: React bindings for React Router.
- **sonner**: A library for managing toast notifications.
- **zod**: A TypeScript-first schema declaration and validation library.

### Development Dependencies

- **@types/react**: TypeScript types for React.
- **@types/react-dom**: TypeScript types for React DOM.
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: TypeScript parser for ESLint.
- **@vitejs/plugin-react-swc**: Vite plugin for React with SWC.
- **autoprefixer**: A PostCSS plugin which parses your CSS and adds vendor prefixes.
- **eslint**: A tool for identifying and reporting on patterns in JavaScript.
- **eslint-plugin-react-hooks**: ESLint plugin for React hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Refresh.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **postcss-preset-mantine**: PostCSS preset for Mantine.
- **postcss-simple-vars**: A PostCSS plugin for Sass-like variables.
- **tailwindcss**: A utility-first CSS framework for rapid UI development.
- **typescript**: A language for application-scale JavaScript.
- **vite**: A fast build tool for modern web projects.

## Installation

To install the project dependencies, you need to have pnpm installed. If pnpm is not installed, you can install it using npm:

```bash
npm install -g pnpm
```

Once pnpm is installed, run the following command to install the project dependencies:

```bash
pnpm install
```

## Running in Development Mode

To run the project in development mode, use the following command:

```bash
pnpm run dev
```

This will start the development server using Vite.

## Building the Project

To build the project for production, use the following command:

```bash
pnpm run build
```

This will compile the TypeScript files and build the project using Vite.

## Starting the Project in Production

To start the project in production mode, use the following command:

```bash
pnpm run preview
```

This will start the built project using Vite's preview mode.

## Linting the Project

To lint the project and check for any code style issues, use the following command:

```bash
pnpm run lint
```

This will run ESLint with the specified configuration.

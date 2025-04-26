# @ui-kit/ui

This package is a shared React UI component library used within the monorepo.
Developed with Vite, TailwindCSS, Storybook, and TypeScript, it provides consistent UI and reusability across various projects.

## Main Tech Stack

- **React**: UI component development
- **Vite**: Bundler and development environment
- **TailwindCSS**: CSS framework
- **Storybook**: Component documentation and testing
- **TypeScript**: Static type support

## Main Features

- Provides and reuses common UI components
- Component documentation and visual testing with Storybook
- Consistent styling based on TailwindCSS
- Safe component development with TypeScript

## Folder Structure

```plaintext
packages/ui
├── src           # Component source code
├── stories       # Storybook story files
├── dist          # Build output
├── index.ts      # Entry point
├── package.json  # Package configuration
└── ...
```

## Installation & Usage

This package can be imported and used in other apps (e.g., web, docs) within the monorepo as follows:

```tsx
import { Button } from '@ui-kit/ui';

function App() {
  return <Button>Button</Button>;
}
```

## Development & Build

### 1. Run Storybook

```sh
pnpm dev
```

### 2. Build Storybook

```sh
pnpm build
```

## References

- [React Official Docs](https://react.dev/)
- [Vite Official Docs](https://vitejs.dev/)
- [TailwindCSS Official Docs](https://tailwindcss.com/docs)
- [Storybook Official Docs](https://storybook.js.org/docs/react/get-started/introduction)
- [TypeScript Official Docs](https://www.typescriptlang.org/) 
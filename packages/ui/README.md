# @ui-kit/ui

This package is a shared React-based UI component library used across multiple projects in the monorepo.
Aiming to provide a consistent design system and reusable components, it leverages the latest frontend stack such as Vite, TailwindCSS, Storybook, and TypeScript.

## Main Purpose

- Provide consistent UI/UX across various projects
- Develop and distribute reusable components
- Efficiently manage the design system

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

## Usage

This package can be imported and used in other apps (e.g., web, docs) within the monorepo as follows:

```tsx
import { Button } from "@ui-kit/ui";

function App() {
  return <Button>Button</Button>;
}
```

## Development & Build

### 1. Build

```sh
pnpm build
```

## References

- [React Official Docs](https://react.dev/)
- [Vite Official Docs](https://vitejs.dev/)
- [TailwindCSS Official Docs](https://tailwindcss.com/docs)
- [Storybook Official Docs](https://storybook.js.org/docs/react/get-started/introduction)
- [TypeScript Official Docs](https://www.typescriptlang.org/)

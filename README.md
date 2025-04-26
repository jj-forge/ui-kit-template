# UI Kit Template Monorepo

This project is a monorepo template utilizing Turborepo, pnpm, TailwindCSS, Vite, React, Next.js, and Storybook.
It is optimized for frontend team development, building design systems, and reusing components.

## Main Tech Stack

- **Turborepo**: Monorepo management and build optimization
- **pnpm**: Package manager
- **React**: UI component development
- **Next.js**: Used for Docs (web documentation) project
- **Vite**: Bundler
- **TailwindCSS**: CSS framework
- **Storybook**: UI component development and documentation tool
- **TypeScript**: Static type support

## Folder Structure

```plaintext
.
├── apps
│   ├── docs        # Next.js-based documentation site
│   └── storybook   # Storybook
├── packages
│   ├── ui                # Shared React UI component library
│   ├── eslint-config     # Shared ESLint configuration
│   └── typescript-config # Shared TypeScript configuration
├── turbo.json            # Turborepo configuration
└── ...
```

## Installation & Usage

### 1. Install dependencies

```sh
pnpm install
```

### 2. Run development server

```sh
pnpm dev
```

### 3. Build all

```sh
pnpm build
```

### 4. Run Storybook

```sh
pnpm storybook
```

## Main Features

- **Monorepo structure**: Efficiently manage multiple apps and packages in a single repository
- **Shared UI components**: Developed in the `@ui-kit/ui` package, reused in `web` and `docs` apps
- **Storybook**: Provides UI component documentation and testing environment
- **TailwindCSS**: Fast styling and consistent design system
- **ESLint/Prettier**: Maintain code quality and style consistency
- **Remote Caching**: Share build cache when integrated with Vercel

## References

- [Turborepo Official Docs](https://turborepo.com/docs)
- [Next.js Official Docs](https://nextjs.org/docs)
- [Vite Official Docs](https://vitejs.dev/)
- [TailwindCSS Official Docs](https://tailwindcss.com/docs)
- [Storybook Official Docs](https://storybook.js.org/docs/react/get-started/introduction)
- [pnpm Official Docs](https://pnpm.io/)
- [TypeScript Official Docs](https://www.typescriptlang.org/)

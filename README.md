This is a [Next.js](https://nextjs.org/) scaffold.

# Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the
file.

# Jest unit tests and integration tests

Run the Jest server:

```bash
pnpm test # jest --watch 
pnpm test:coverage # jest --coverage
```

# Playwright e2e tests

```bash
pnpx playwright install # install supported browsers
pnpm dev && pnpm test:e2e # start a server on localhost:3000 first
```

# StoryBook

Run the StoryBook server:

```bash
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

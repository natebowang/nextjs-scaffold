This is a [Next.js](https://nextjs.org/), Storybook webpack5 scaffold.

# Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the
file.

# Run the production server

```bash
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Jest unit tests and integration tests

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

```bash
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

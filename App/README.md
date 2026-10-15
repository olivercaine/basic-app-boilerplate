# Folio

A TypeScript starter for a small web app with two pages. It is meant to be filled in once: keep the shell, the theme, and the component kit, then replace the two pages.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/) with the Sera preset (Playfair Display, Noto Sans, taupe, sharp corners)
- [React Router](https://reactrouter.com/)

Node 22 or newer is required. If you use nvm, run `nvm use` first.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Where to edit

| File | What it owns |
| --- | --- |
| `src/config.ts` | App name and tagline |
| `src/App.tsx` | The two routes |
| `src/pages/home-page.tsx` | Page one, Overview |
| `src/pages/studio-page.tsx` | Page two, Studio |
| `src/components/layout/app-shell.tsx` | Sidebar, header, theme menu |
| `src/state/pieces.tsx` | State shared by both pages |
| `src/index.css` | Color tokens, type, and radius |
| `src/components/ui/` | The component kit |

## Components

The full shadcn registry is already in `src/components/ui`. Add another later with:

```bash
npx shadcn@latest add button
```

Colors live as CSS variables in `src/index.css`. Change those tokens and both pages follow.

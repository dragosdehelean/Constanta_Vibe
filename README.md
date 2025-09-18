# Constanta Pass

Aplicatie web Next.js creata cu TypeScript, Material UI, Redux Toolkit, RTK Query si Prisma. Proiectul demonstreaza integrarea unei interfete construite cu MUI intr-o arhitectura React moderna.

## Pornire rapida

1. Instaleaza dependintele: pnpm install (sau npm install).
2. Copiaza .env.example in .env.local si seteaza variabila DATABASE_URL.
3. Ruleaza migrarile Prisma: pnpm prisma migrate dev --name init.
4. Porneste serverul de dezvoltare: pnpm dev si deschide http://localhost:3000.

## Scripturi utile

- pnpm lint - ruleaza ESLint.
- pnpm typecheck - verifica tipurile TypeScript.
- pnpm test - ruleaza testele unitare cu Vitest.
- pnpm e2e:ci - ruleaza testele end-to-end Playwright.
- pnpm build - build de productie Next.js.

## Structura proiect

- src/app - rutele Next.js (App Router) si layout-ul global.
- src/components - componente React reutilizabile.
- src/features - slice-uri Redux Toolkit si servicii RTK Query.
- src/store - configuratia magazinului Redux.
- src/styles - tema Material UI.
- prisma - schema bazei de date.
- tests - configuratie Vitest si testele Playwright.

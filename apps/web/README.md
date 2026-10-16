# Courtwave web foundation

Next.js App Router with TypeScript, Tailwind CSS 4 and source-owned shadcn/ui components on Radix primitives. Pages are server-rendered. Requires the repository's pinned Node.js 24 and pnpm versions.

From the repository root:

```sh
pnpm install --frozen-lockfile
pnpm --filter @courtwave/web dev
pnpm --filter @courtwave/web lint
pnpm --filter @courtwave/web test
pnpm --filter @courtwave/web typecheck
pnpm --filter @courtwave/web build
```

Open http://localhost:3000. The home page, `/about`, a missing-page state and `/api/health` form the M1 shell. The health endpoint reports only the web process; it does not verify backend readiness.

No tournament data, account forms, authentication, database SDK or network calls are implemented. All visible content describes the early preview accurately. The supplied temporary logo is copied unchanged to `public/brand/`; replace both copies when the identity changes.

The shell runs without environment variables. `.env.example` reserves future public Supabase configuration. If supplied, both values must be present; the key must be a current `sb_publishable_` key. Secret and legacy service-role keys are rejected. HTTPS is required except for a local development URL. Configuration is validated during Next.js startup/build without connecting to Supabase or echoing values.

Do not put privileged credentials in browser-visible variables. M2 must implement authentication and backend access policies before any data access is added. Preview pages are marked `noindex`; production tournament indexing and publication remain open decisions.

For Vercel, select `apps/web` as the project root with the Next.js preset and the pnpm workspace lockfile. Linking the repository, choosing a domain and provisioning services are separate actions; none is performed by this shell.

## UI components

`components.json` is managed by the official shadcn CLI. The initial Radix preset was installed with `pnpm dlx shadcn@latest init -d --base radix -y`; Button, Card, Badge, Input, Label, Alert and Separator source files live in `src/components/ui/`. Add further components from `apps/web` with the CLI, rather than imitating them by hand.

The generated default font and neutral theme were replaced with the agreed native system font and exact Courtwave palette in `src/app/globals.css`. The UI remains light. Default buttons and inputs have a 48-pixel height, and keyboard focus uses the full slate color. Account fields are available as components for M2; no authentication form is part of this UI conversion.

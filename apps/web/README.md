# Courtwave web foundation

Next.js App Router with TypeScript, plain CSS and server-rendered pages. Requires the repository's pinned Node.js 24 and pnpm versions.

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

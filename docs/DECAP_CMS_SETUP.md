# Sutra Health — Decap CMS setup

This integration adds a GitHub-backed Decap CMS to the existing Next.js App Router project.

## What is configured

- Admin route: `/admin/` (`public/admin/index.html`)
- CMS configuration: `public/admin/config.yml`
- GitHub repository: `equal-society/sutra-health-nextjs`
- Content branch: `main`
- Publishing mode: `simple` — saving/publishing writes directly to `main`
- CMS article files: `content/articles/<slug>.json`
- Media uploads: `public/images/resources/`
- Build-time adapter: `scripts/build-cms-articles.mjs`

The adapter validates JSON article records and generates an ignored TypeScript registry before `next dev` and `next build`. The existing TypeScript articles remain in place. If a CMS JSON file uses the same slug as an existing TypeScript article, the CMS version takes precedence, preserving the public article URL.

## Required before login can work

The GitHub backend requires an OAuth server. Do not put a GitHub OAuth client secret in `public/admin/config.yml`, a browser script, or any `NEXT_PUBLIC_*` variable.

1. Deploy a Decap-compatible GitHub OAuth proxy as a Cloudflare Worker (the official Decap backend guide describes the `/auth` and `/callback` flow: https://decapcms.org/docs/backends-overview/).
2. Register a GitHub OAuth App for the organisation/repository. Set its callback URL to the OAuth proxy's exact callback URL (normally `https://YOUR-WORKER.workers.dev/callback`).
3. Store the OAuth Client ID and Client Secret as Cloudflare Worker secrets, never in this repository.
4. Add the authorised site origin `https://lifequality.org.in` to the proxy's allowed origins, if the proxy supports origin allowlisting.
5. Replace `REPLACE-WITH-YOUR-OAUTH-WORKER` in `public/admin/config.yml` with the real Worker hostname. Keep `auth_endpoint: auth` if the Worker exposes `/auth`.
6. Ensure the GitHub OAuth app is allowed to access the organisation's repository. If the organisation restricts third-party OAuth apps, an organisation owner must approve it.

A maintained Cloudflare Worker example is available at:
https://github.com/ottmartens/decap-cms-github-oauth-provider-cloudflare

Review its code and current compatibility before deploying. The worker's `CLIENT_ID` and `CLIENT_SECRET` must be stored as Worker secrets. Do not commit credentials.

## GitHub permissions for both editors

Decap's GitHub backend requires push access for every person who signs in. Add both the client and the site maintainer as collaborators/team members with **Write** access to `equal-society/sutra-health-nextjs` (or the minimum organisation-approved role that permits content commits). The CMS itself does not create a separate user database or role system.

Because `publish_mode: simple` is selected, editors can publish directly to `main`. Each publish is a Git commit and should trigger the repository's existing Vercel deployment integration. There is no editorial approval queue in this mode.

## Local validation

```bash
npm install
npm run dev
```

Open `http://localhost:3000/admin/`. The GitHub login popup will not work until the OAuth proxy is deployed and its URL is configured. To test the content adapter without logging in, add a valid JSON file under `content/articles/` and run:

```bash
node scripts/build-cms-articles.mjs
npm run build
```

The CMS schema mirrors `data/articles/types.ts`: basic article fields, introduction, sections (heading/paragraphs/bullets), takeaway, when-to-seek-help, FAQs, tags and sources.

## First production rollout

1. Commit these changes to a feature branch and deploy a Vercel Preview.
2. Deploy/configure the OAuth Worker and replace the placeholder URL.
3. Test login using both intended GitHub accounts.
4. Create a test article, publish it, and confirm the GitHub commit is on `main`.
5. Confirm Vercel completes a deployment and test the article URL, article listing, metadata, JSON-LD and `/sitemap.xml`.
6. Only then merge to `main` / release to production.

## Important limitations

- Existing eight articles remain TypeScript-managed until deliberately migrated or edited through CMS using matching slugs. New CMS entries are automatically included in the listing, detail routes, related-article logic and sitemap.
- The client and maintainer need GitHub Write access; CMS access is not independent of repository permissions.
- Direct publishing means no review step. Protect the `main` branch according to the organisation's normal policy, while ensuring the CMS workflow remains compatible with the branch rules.
- This ZIP contains the application-side CMS integration, not a deployed OAuth Worker, OAuth credentials, GitHub permission changes, or a live Vercel deployment.

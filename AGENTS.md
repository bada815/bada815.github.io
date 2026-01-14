# PROJECT KNOWLEDGE BASE

**Generated:** 2026-01-14
**Commit:** Unknown
**Branch:** master

## OVERVIEW
Notion-powered blog on GitHub Pages using Next.js 16 with static export.

## STRUCTURE
```
bada815.github.io/
├── .github/workflows/deploy.yml  # CI/CD: builds every 6 hours + push to master
├── md/                           # Standalone markdown files (purpose unclear)
├── my-notion-blog/               # Main Next.js app (nested for GitHub Pages)
│   ├── src/
│   │   ├── app/                 # Next.js App Router (page.tsx, layout.tsx)
│   │   ├── components/          # NotionPage.tsx (client component)
│   │   └── lib/                 # notion.ts (Notion API singleton)
│   └── public/                  # Static assets
└── how-to-deploy-notion.md      # Manual deployment guide
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Edit blog content | Notion page (NOTION_PAGE_ID) | Changes sync every 6h |
| Build locally | `cd my-notion-blog && npm run build` | Outputs to `out/` |
| Dev server | `cd my-notion-blog && npm run dev` | http://localhost:3000 |
| CI/CD config | .github/workflows/deploy.yml | Requires NOTION_PAGE_ID secret |
| Notion integration | my-notion-blog/src/lib/notion.ts | Singleton NotionAPI |

## CONVENTIONS
- **Nested structure**: All Next.js code lives in `my-notion-blog/` (NOT root)
- **Static export**: `output: 'export'` in next.config.ts for GitHub Pages
- **No API routes**: Content fetched server-side at build time
- **Path aliases**: `@/*` → `./src/*` (use `@/lib/notion`, `@/components/NotionPage`)
- **Korean locale**: App set to `lang="ko"` in layout.tsx

## ANTI-PATTERNS (THIS PROJECT)
- **Never**: Create API routes (static export incompatible)
- **Never**: Use Next.js Image Optimization (must use `unoptimized: true`)
- **Never**: Modify `md/` directory content without understanding purpose
- **Never**: Deploy without `NOTION_PAGE_ID` environment variable set

## UNIQUE STYLES
- **Notion-as-CMS**: Entire site rendered from single Notion page via `react-notion-x`
- **Server + Client split**: `page.tsx` (fetches data, Server Component) → `NotionPage.tsx` (renders, Client Component)
- **Scheduled sync**: GitHub Actions cron rebuilds every 6 hours to pick up Notion changes

## COMMANDS
```bash
# Development (from root)
cd my-notion-blog && npm run dev

# Build for GitHub Pages
cd my-notion-blog && npm run build

# Lint
cd my-notion-blog && npm run lint
```

## NOTES
- **Deployment**: Target is `my-notion-blog/out/` directory (static export output)
- **Environment**: `NOTION_PAGE_ID` must be set in GitHub Secrets for CI/CD
- **Branch**: Default branch is `master` (not `main`)
- **No tests**: Project has no test infrastructure
- **Hybrid repo**: Combines Next.js app (`my-notion-blog/`) with standalone markdown (`md/`)

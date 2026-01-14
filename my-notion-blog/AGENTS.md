# Next.js App Knowledge Base

**Parent:** `../AGENTS.md`

## OVERVIEW
Next.js 16 static site that renders Notion content, deployed to GitHub Pages.

## STRUCTURE
```
my-notion-blog/
├── src/
│   ├── app/
│   │   ├── page.tsx       # Server Component: fetches Notion data
│   │   ├── layout.tsx     # Root layout (HTML structure, metadata)
│   │   └── globals.css    # Tailwind + custom CSS variables
│   ├── components/
│   │   └── NotionPage.tsx # Client Component: renders react-notion-x
│   └── lib/
│       └── notion.ts      # NotionAPI singleton + getPageData()
├── public/                # Static assets
├── package.json           # Scripts, dependencies
├── tsconfig.json          # TypeScript config, @/* paths
├── next.config.ts         # Static export (output: 'export')
├── eslint.config.mjs      # ESLint with Next.js preset
└── postcss.config.mjs     # Tailwind CSS v4 setup
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Change Notion content | page.tsx | Update NOTION_PAGE_ID or fetch logic |
| Customize rendering | components/NotionPage.tsx | Modify react-notion-x props |
| Notion API config | lib/notion.ts | Singleton NotionAPI instance |
| Add new pages | src/app/ | Create route directories (not in use) |
| Styling | src/app/globals.css | Tailwind + custom theming |

## CONVENTIONS
- **Server → Client split**: `page.tsx` (Server) fetches, `NotionPage.tsx` (Client) renders
- **Static export only**: No API routes, no middleware, no server-side rendering
- **Use `@/` aliases**: Import as `@/lib/notion`, `@/components/NotionPage`
- **Build output**: Static HTML/CSS/JS in `out/` directory

## ANTI-PATTERNS
- **Never**: Use Next.js Image component (`<Image />`) → must use `unoptimized: true`
- **Never**: Create API routes in `src/app/api/` → static export incompatible
- **Never**: Use `getServerSideProps` → only static site generation
- **Never**: Modify output to `dist/` or `build/` → must be `out/`

## NOTES
- **Tailwind v4**: Latest version, config via PostCSS (no tailwind.config.ts file)
- **React Compiler**: Enabled via `babel-plugin-react-compiler`
- **No state management**: Notion data is fetched once, no hooks needed
- **Single page**: Currently only `page.tsx` (homepage)
- **Type safety**: Uses `ExtendedRecordMap` type from `notion-types`

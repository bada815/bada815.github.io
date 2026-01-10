import { getPageData } from '@/lib/notion'
import NotionPage from '@/components/NotionPage'

// 배포하려는 Notion Page ID (환경변수 또는 하드코딩)
// 환경변수 체크를 위해 로그를 추가할 수도 있습니다.
const PAGE_ID = process.env.NOTION_PAGE_ID || '여기에_PAGE_ID_입력';

export default async function Home() {
    const recordMap = await getPageData(PAGE_ID)

    return (
        <main className="max-w-4xl mx-auto p-4">
            {/* Notion 페이지 렌더링 (Client Component) */}
            <NotionPage recordMap={recordMap} />
        </main>
    )
}
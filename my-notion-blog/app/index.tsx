import { getPageData } from '@/lib/notion'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css' // 필수 스타일

// 배포하려는 Notion Page ID (환경변수 또는 하드코딩)
const PAGE_ID = process.env.NOTION_PAGE_ID || '여기에_PAGE_ID_입력';

export default async function Home() {
  const recordMap = await getPageData(PAGE_ID)

  return (
    <main className="max-w-4xl mx-auto p-4">
      {/* Notion 페이지 렌더링 */}
      <NotionRenderer 
        recordMap={recordMap} 
        fullPage={true} 
        darkMode={false} 
      />
    </main>
  )
}
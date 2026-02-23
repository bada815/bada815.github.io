'use client'

import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import 'react-notion-x/src/styles.css' // 필수 스타일
import 'prismjs/themes/prism-tomorrow.css' // 코드 구문 강조 테마

// 코드 블록 컴포넌트 (prismjs 사용으로 SSR 비활성화 필요)
const Code = dynamic(
    () => import('react-notion-x/build/third-party/code').then((m) => m.Code),
    { ssr: false }
)

interface NotionPageProps {
    recordMap: ExtendedRecordMap
}

export default function NotionPage({ recordMap }: NotionPageProps) {
    if (!recordMap) {
        return null
    }

    return (
        <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={false}
            components={{
                Code,
            }}
        />
    )
}

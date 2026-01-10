'use client'

import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import 'react-notion-x/src/styles.css' // 필수 스타일

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
        />
    )
}

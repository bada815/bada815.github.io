import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export async function getPageData(pageId: string) {
  const recordMap = await notion.getPage(pageId)
  return recordMap
}
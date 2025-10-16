import { ImageResponse } from 'next/og'

import { sharedMetadata } from '@/app/shared-metadata'
import { OpenGraphImage } from '@/components/og-image'
import { getBoldFont, getRegularFont } from '@/lib/fonts'
// import { getBookmarks } from '@/lib/raindrop' // 原本的 API 
调用，暂时注释掉

export const dynamic = 'force-static'

export const size = {
  width: sharedMetadata.ogImage.width,
  height: sharedMetadata.ogImage.height
}

export async function generateStaticParams() {
  // 直接返回空数组，避免 build 报错
  let bookmarks = []

  // 如果将来想启用 API 调用，可以取消注释：
  /*
  try {
    bookmarks = await getBookmarks()
  } catch (error) {
    console.warn('Failed to fetch bookmarks, fallback to empty', error)
    bookmarks = []
  }
  */

  return bookmarks.map((bookmark) => ({ slug: bookmark.slug }))
}



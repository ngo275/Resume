// @flow

export type Locale = $Keys<typeof Locales> // same as string

export type Action = {
  type: string,
  payload: ?Object,
}

export const Locales = {
  'en-US': 'en-US',
  'ja-JP': 'ja-JP',
  // 'ko-KR': 'ko-KR',
  'zh-CN': 'zh-CN',
  // 'zh-TW': 'zh-TW',
}
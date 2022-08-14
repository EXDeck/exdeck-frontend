import { requestOauth } from '@/system/core'

/**
 * OAuthリンクを取得
 *
 * @returns {Promise<string>} OAuthのURL
 */
export async function getOauthLink(): Promise<string> {
  return await requestOauth()
}

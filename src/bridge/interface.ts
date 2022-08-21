import { requestOauth as coreRequestOauth, requestOauthLink } from '@/system/core'

/**
 * OAuthリンクを取得
 *
 * @returns {Promise<string>} OAuthのURL
 */
export async function getOauthLink(): Promise<string> {
  return await requestOauthLink()
}

/**
 * OAuth
 *
 * @param {string} pin PINコード
 * @returns {Promise<void>}
 */
export async function requestOauth(pin: string): Promise<void> {
  await coreRequestOauth(pin)
}

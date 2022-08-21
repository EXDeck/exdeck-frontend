import { OauthRequestTokenRes } from './types/apiResBody'

import { backend } from '@/refs/env'

/**
 * OAuth用リンクを取得
 *
 * @returns {Promise<OauthRequestTokenRes>} Oauth_token, oauth_token_secret
 */
export async function getAuthTokens(): Promise<OauthRequestTokenRes> {
  const res = await fetch(`${backend.url}/api/auth`, {
    method: 'get',
  })
  return await res.json()
}

/**
 * TokenとpinでOAuthリクエスト
 *
 * @param {string} token OAuthトークン
 * @param {string} pin PINコード
 * @returns {Promise<string>} 合否
 */
export async function postAuthRequest(token: string, pin: string): Promise<string> {
  const res = await fetch(`${backend.url}/api/auth`, {
    method: 'post',
    body: JSON.stringify({
      oauth_token: token,
      oauth_verifier: pin,
    }),
  })
  return res.text()
}

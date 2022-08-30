import { OauthRequestTokenRes } from './types/apiResBody'

import { backend } from '@/refs/env'

type FetchParam1 = Parameters<typeof fetch>[0]

type FetchParam2 = Parameters<typeof fetch>[1]

/**
 * Credentials初期値includeのfetch
 *
 * @param {FetchParam1} input RequestInfo | URL
 * @param {FetchParam2 | null} [init] RequestInit
 * @returns {Promise<Response>} Fetch response
 */
function credentialsFetch(input: FetchParam1, init?: FetchParam2): Promise<Response> {
  return fetch(input, {
    credentials: 'include',
    ...init,
  })
}

export const auth = {
  /**
   * OAuth用リンクを取得
   *
   * @returns {Promise<OauthRequestTokenRes>} Oauth_token, oauth_token_secret
   */
  async getAuthTokens(): Promise<OauthRequestTokenRes> {
    const res = await credentialsFetch(`${backend.url}/api/auth`, {
      method: 'get',
    })
    return await res.json()
  },
  /**
   * TokenとpinでOAuthリクエスト
   *
   * @param {string} token OAuthトークン
   * @param {string} pin PINコード
   * @returns {Promise<string>} 合否
   */
  async postAuthRequest(token: string, pin: string): Promise<string> {
    const res = await credentialsFetch(`${backend.url}/api/auth`, {
      method: 'post',
      body: JSON.stringify({
        oauth_token: token,
        oauth_verifier: pin,
      }),
    })
    return res.text()
  },
}

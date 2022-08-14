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

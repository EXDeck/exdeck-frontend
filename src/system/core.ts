import { auth } from './adopter'
import { oauthTokenStore } from './store'

/**
 * OAuthリンクを生成
 *
 * @returns {Promise<string>} OAuthのURL
 */
export async function requestOauthLink(): Promise<string> {
  const { oauth_token: oauthToken } = await auth.getAuthTokens()
  oauthTokenStore.set(oauthToken)
  return `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`
}

/**
 * OAuth
 *
 * @param {string} pin PINコード
 * @returns {Promise<void>}
 */
export async function requestOauth(pin: string): Promise<void> {
  await auth.postAuthRequest(oauthTokenStore.get(), pin)
}

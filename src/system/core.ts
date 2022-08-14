import { getAuthTokens } from './adopter'
import { oauthTokenStore } from './store'

/**
 * OAuthリンクを生成
 *
 * @returns {Promise<string>} OAuthのURL
 */
export async function requestOauth(): Promise<string> {
  const { oauth_token: oauthToken } = await getAuthTokens()
  oauthTokenStore.set(oauthToken)
  return `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`
}

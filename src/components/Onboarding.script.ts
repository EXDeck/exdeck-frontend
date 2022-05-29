import { endpoints } from '@/ref/endpoints'
import { post } from '@/scripts/fetch'

const { backend, twitter } = endpoints

interface OauthResult {
  url: string
  oauth_token: string
}

/**
 * Twitter APIにOAuthリンク生成をリクエスト
 *
 * @returns {Promise<OauthResult>} { url: string, oauth_token: string }
 */
export async function sendOauthRequest(): Promise<OauthResult> {
  const { oauth_token: oauthToken }: { oauth_token: string } = await post(
    backend.OAuthRequest,
  ).then((res) => res.json())

  if (!oauthToken) throw Error('oauth_token was not returned')

  const url = new URL(twitter.oauth.authenticate)
  url.searchParams.set('oauth_token', oauthToken)
  url.searchParams.set('force_login', 'true')
  const result: OauthResult = { url: url.toString(), oauth_token: oauthToken }
  return result
}

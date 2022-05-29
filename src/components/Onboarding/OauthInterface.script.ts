import { endpoints } from '@/ref/endpoints'
import { post } from '@/scripts/fetch'

const { backend } = endpoints
interface AuthorizeData {
  oauth_token: string
  pin: string
}
interface OauthTokens {
  oauth_token: string
  url: string
}

/**
 * Pinベース認証
 *
 * @param {AuthorizeData} ー { oauth_token: oauthToken, pin }
 * @returns {Promise<OauthTokens>} { oauth_token: string, url: string }
 */
export async function authorize({
  oauth_token: oauthToken,
  pin,
}: AuthorizeData): Promise<OauthTokens> {
  const body = {
    oauth_token: oauthToken,
    oauth_verifier: pin,
  }
  return await post(backend.authorize, {
    body: JSON.stringify(body),
  }).then((res) => res.json())
}

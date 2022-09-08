/**
 * OAuthリンクを生成
 *
 * @param {string} oauthToken Oauth_token
 * @returns {string} Url
 */
export function createOauthLink(oauthToken: string): string {
  return `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`
}

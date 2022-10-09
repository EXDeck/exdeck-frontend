/**
 * OAuthリンクを生成
 *
 * @param {string} oauthToken Oauth_token
 * @returns {string} Url
 */
// NOTE 将来の追加を見込んで無効化
// eslint-disable-next-line import/prefer-default-export
export function createOauthLink(oauthToken: string): string
{
	return `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`
}
